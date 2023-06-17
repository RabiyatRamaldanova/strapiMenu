import React, {useContext, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import CategoryItem from '../components/CategoryItem';
import DishCard from '../components/DishCard';
import {AppContext} from '../../App';
import {getCategories, getDishes} from '../api';
import {CategoryItemType, DishItemType} from '../types';

const categoryItem = ({item}: {item: CategoryItemType}) => (
  <CategoryItem name={item.attributes.name} />
);

const dishItem = ({item}: {item: DishItemType}) => (
  <DishCard
    title={item.attributes.name}
    description={item.attributes.description}
    image={item.attributes.imgURL}
    id={item.id}
  />
);

const DishesList = () => {
  const {state, dispatch} = useContext(AppContext);
  const {categoryList, dishesList} = state;
  console.log(categoryList, 'categoryList');

  useEffect(() => {
    getCategories().then(response => {
      dispatch({type: 'ADD_CATEGORIES', payload: response.data});
    });
  }, [dispatch]);

  useEffect(() => {
    getDishes({category: null}).then(response => {
      dispatch({type: 'ADD_DISHES', payload: response.data});
    });
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Hello! 👋</Text>
      <FlatList
        horizontal
        style={{height: 50, marginVertical: 20}}
        data={categoryList}
        renderItem={categoryItem}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={dishesList}
        renderItem={dishItem}
      />
    </View>
  );
};

export default DishesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9FA',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    color: '#485563',
    marginTop: 20,
  },
});

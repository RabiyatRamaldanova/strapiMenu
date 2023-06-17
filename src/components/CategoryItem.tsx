import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {getDishes} from '../api';
import {AppContext} from '../../App';
import {CategoryString} from '../types';

interface Props {
  name: CategoryString;
}

const CategoryItem = ({name}: Props) => {
  const {state, dispatch} = useContext(AppContext);
  const {choosedCategory} = state;

  const handleOnChooseCategory = () => {
    let category: CategoryString | null = null;
    if (choosedCategory === name) {
      category = null;
    } else {
      category = name;
    }
    dispatch({type: 'CHOOSE_CATEGORY', payload: category});
    getDishes({category}).then(response => {
      dispatch({type: 'ADD_DISHES', payload: response.data});
    });
  };
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: choosedCategory === name ? '#3b444b' : 'white'},
      ]}
      onPress={handleOnChooseCategory}>
      <Text
        style={[
          styles.title,
          {color: choosedCategory === name ? 'white' : '#485563'},
        ]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    height: 30,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 15,
    elevation: 1,
    shadowColor: '#485563',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.65,
  },
  title: {
    fontSize: 16,
    color: '#485563',
  },
});

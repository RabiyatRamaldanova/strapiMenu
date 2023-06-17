import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppContext} from '../../App';
import {getDishById} from '../api';
import {useNavigation} from '@react-navigation/native';

interface Props {
  title: string;
  image: string;
  description: string;
  id: string;
}

const DishCard = ({title, image, description, id}: Props) => {
  const {dispatch} = useContext(AppContext);
  const navigation = useNavigation();

  const handleOnPress = () => {
    getDishById(id).then(response => {
      dispatch({type: 'CHOOSED_DISH', payload: response.data});
      navigation.navigate('Dish', {name: title});
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
      <Image style={styles.image} source={{uri: image}} />
      <View style={{paddingHorizontal: 10}}>
        <Text style={styles.titleText}>{title}</Text>
        <Text
          style={styles.descriptionText}
          numberOfLines={2}
          ellipsizeMode="tail">
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DishCard;

const styles = StyleSheet.create({
  container: {
    width: 350,
    backgroundColor: 'white',
    paddingBottom: 10,
    marginVertical: 5,
    elevation: 1,
    shadowColor: '#485563',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.65,
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    paddingVertical: 5,
    width: 200,
  },
  categoryText: {fontSize: 13, color: 'black'},
  categoryContainer: {
    backgroundColor: 'rgba(72, 85, 99, 0.5)',
    height: 20,
    width: 100,
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 5,
  },
  platformCategoryContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 15,
    color: 'black',
    width: 330,
  },
  image: {height: 200, width: 350},
});

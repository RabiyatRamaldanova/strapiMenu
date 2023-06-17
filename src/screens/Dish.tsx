import React, {useContext} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {AppContext} from '../../App';

const Dish = () => {
  const {state} = useContext(AppContext);
  const {choosedDish} = state;
  return (
    <View>
      <Image
        style={styles.image}
        source={{uri: choosedDish.attributes.imgURL}}
      />
      <View style={{paddingHorizontal: 10}}>
        <Text
          style={styles.descriptionText}
          numberOfLines={2}
          ellipsizeMode="tail">
          {choosedDish.attributes.description}
        </Text>
      </View>
    </View>
  );
};

export default Dish;

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
  image: {height: 300, width: '100%'},
});

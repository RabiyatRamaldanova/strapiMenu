import axios from 'axios';
import {CategoryString} from '../types';

const instance = axios.create({baseURL: 'http://192.168.1.100:1337/api/'});

export const getCategories = async () => {
  const result = await instance
    .get('categories')
    .then(function (response) {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log('getCategories -->', error);
    });
  return result;
};

export const getDishes = async ({
  category,
}: {
  category: CategoryString | null;
}) => {
  const params = {};
  if (category) {
    params['filters'] = {
      $and: [
        {
          category: {
            name: {
              $eq: category,
            },
          },
        },
      ],
    };
  }
  console.log('params', params);
  const result = await instance
    .get(`products`, {
      params,
    })
    .then(function (response) {
      console.log('getDishes', response);
      return response.data;
    })
    .catch(function (error) {
      console.log('getDished -->', error);
    });
  return result;
};

export const getDishById = async (id: string) => {
  const result = await instance
    .get(`products/${id}`)
    .then(function (response) {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log('getDisheById -->', error);
    });
  return result;
};

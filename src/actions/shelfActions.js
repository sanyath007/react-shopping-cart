import axios from 'axios';

import { productsAPI } from '../util';

const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export const fetchProducts = (filters, sortBy, callback) => dispatch => {
  console.log(filters);
  
  return axios
    .get(productsAPI)
    .then(res => {
      let { products } = res.data

      if  (!!filters && filters.length > 0) {
        products = products.filter(p => 
          filters.find(f => p.availableSizes.find(size => size === f))
        );

        console.log(products);
      }


      return dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      })
    })
    .catch(err => {
      console.log(err);
    })
}

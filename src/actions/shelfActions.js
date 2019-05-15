import axios from 'axios'

import { productsAPI } from '../util'

const FETCH_PRODUCTS = "FETCH_PRODUCTS"

export const fetchProducts = (filters, sortBy, callback) => dispatch => {
  return axios
    .get(productsAPI)
    .then(res => {
      let { products } = res.data

      return dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      })
    })
    .catch(err => {
      console.log(err)
    })
}

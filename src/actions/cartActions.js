const LOAD_CART = "LOAD_CART"
const ADD_PRODUCT = "ADD_PRODUCT"
const REMOVE_PRODUCT = "REMOVE_PRODUCT"

export const loadCart = products => ({
  type: LOAD_CART,
  payload: products
})

export const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: product
})

export const removeProduct = product => ({
  type: REMOVE_PRODUCT,
  payload: product
})
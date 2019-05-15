const UPDATE_CART = "UPDATE_CART"

export const updateCart = cartProducts => dispatch => {
  let productQuantity = cartProducts.reduce((sum, p) => {
    sum += p.quantity
    return sum
  }, 0)

  let totalPrice = cartProducts.reduce((sum, p) => {
    sum += p.price * p.quantity
    return sum
  }, 0)

  let installments = cartProducts.reduce((greater, p) => {
    greater = p.installments > greater ? p.installments : greater
    return greater
  }, 0)

  let cartTotal = {
    productQuantity,
    installments,
    totalPrice,
    currencyId: 'USD',
    currencyFormat: '$'
  }

  dispatch({
    type: UPDATE_CART,
    payload: cartTotal
  })
}
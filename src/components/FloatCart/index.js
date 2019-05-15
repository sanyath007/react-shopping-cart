import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loadCart, removeProduct } from '../../actions/cartActions'
import { updateCart } from '../../actions/totalActions'
import { formatPrice } from '../../util'

import CartProduct from '../CartProduct'

import './style.scss'

class FloatCart extends Component {
  static propTypes = {
    loadCart: PropTypes.func.isRequired,
    updateCart: PropTypes.func.isRequired,
    cartProducts: PropTypes.array.isRequired,
    newProduct: PropTypes.object,
    removeProduct: PropTypes.func,
    productToRemove: PropTypes.object,
  }

  state = {
    isOpened: false
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.newProduct !== this.props.newProduct) {
      this.addProduct(nextProps.newProduct)
    }

    if (nextProps.productToRemove !== this.props.productToRemove) {
      this.removeProduct(nextProps.productToRemove)
    }
  }

  openCart = () => {
    this.setState({ isOpened: true })
  }

  closeCart = () => {
    this.setState({ isOpened: false })
  }

  addProduct = (product) => {
    const { cartProducts, updateCart } = this.props
    let productAlreadyInCart = false

    cartProducts.forEach(cp => {
      if (cp.id === product.id) {
        cp.quantity += product.quantity
        productAlreadyInCart = true
      }
    })

    if (!productAlreadyInCart) {
      cartProducts.push(product)
    }

    updateCart(cartProducts)
    this.openCart()
  }

  removeProduct = product => {
    const { cartProducts, updateCart } = this.props

    const index = cartProducts.findIndex(p => p.id === product.id)
    if (index >= 0) {
      cartProducts.splice(index, 1)
      updateCart(cartProducts)
    }
  }

  render () {
    const { cartTotal, cartProducts, removeProduct } = this.props

    const products = cartProducts.map(p => {
      return (
        <CartProduct product={p} removeProduct={removeProduct} key={p.id} />
      )
    })

    let classes = ['float-cart']

    if (!!this.state.isOpened) {
      classes.push('float-cart--open')
    }

    return (
      <div className={classes.join(' ')}>
        {/* If cart open, show close (x) button */}
        {this.state.isOpened && (
          <div
            onClick={() => this.closeCart()}
            className="float-cart__close-btn"
          >
            X
          </div>
        )}

        {/* If cart is closed, show bag with quantity of product and open cart action */}
        {!this.state.isOpened && (
          <span
            onClick={() => this.openCart()}
            className="bag bag--float-cart-closed"
          >
            <span className="bag__quantity">{cartTotal.productQuantity}</span>
          </span>
        )}

        <div className="float-cart__content">
          <div className="float-cart__header">
            <span className="bag">
              <span className="bag__quantity">{cartTotal.productQuantity}</span>
            </span>
            <span className="header-title">Cart</span>
          </div>{/* float-cart__header */}

          <div className="float-cart__shelf-container">
            {products}
            {!products.length && (
              <p className="shelf-empty">
                Add some product in the cart <br />
                :)
              </p>
            )}
          </div>{/* float-cart__shelf-container */}

          <div className="float-cart__footer">
            <div className="sub">SUBTOTAL</div>
            <div className="sub-price">
              <p className="sub-price__val">
                {`${cartTotal.currencyFormat} ${formatPrice(
                  cartTotal.totalPrice,
                  cartTotal.currencyId
                )}`}
              </p>

              <small className="sub-price__installment">
                {!!cartTotal.installments && (
                  <span>
                    {`OR UP TO ${cartTotal.installments} x ${
                      cartTotal.crrencyFormat
                    } ${formatPrice(
                      cartTotal.totalPrice / cartTotal.installments,
                      cartTotal.currencyId
                    )}`}
                  </span>
                )}
              </small>
            </div>
            <div className="buy-btn">
              Checkout
            </div>
          </div>{/* float-cart__footer */}

        </div>{/* float-cart__content */}
      </div>
    )    
  }
}

const mapStateToProps = state => ({
  cartProducts: state.cart.products,
  newProduct: state.cart.productToAdd,
  productToRemove: state.cart.productToRemove,
  cartTotal: state.total.data
})

export default connect(
  mapStateToProps,
  { loadCart, updateCart, removeProduct }
)(FloatCart)
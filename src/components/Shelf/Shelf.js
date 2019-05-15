import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {fetchProducts } from '../../actions/shelfActions'

import Spinner from '../Spinner/Spinner'
import ShelfHeader from './ShelfHeader'
import ProductList from './ProductList'

import './style.scss'

class Shelf extends Component {
  static propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    filters: PropTypes.array,
    sort: PropTypes.string
  }

  state = {
    isLoading: false
  }

  componentDidMount() {
    this.handleFetchProducts()
  }

  handleFetchProducts = (
    filters = this.props.filters,
    sort = this.props.sort
  ) => {
    this.setState({ isLoading: true })
    this.props.fetchProducts(filters, sort, () => {
      this.setState({ isLoading: false })
    })
  }

  render () {
    const { products } = this.props
    const { isLoading } = this.props

    return (
      <React.Fragment>
        {isLoading && <Spinner />}
        <div className="shelf-container">
          <ShelfHeader productsLength={products.length} />
          <ProductList products={products} />
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  products: state.shelf.products,
  filters: state.filters.items,
  sort: state.sort.type
})

export default connect(
  mapStateToProps,
  { fetchProducts }
)(Shelf)

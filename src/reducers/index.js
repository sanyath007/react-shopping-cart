import { combineReducers } from 'redux'
// import promoCodeReducer from './promoCodeReducer'
import cartReducer from './cartReducer'
import shelfReducer from './shelfReducer'
import filtersReducer from './filtersReducer'
import sortReducer from './sortReducer'
import totalReducer from './totalReducer'

export default combineReducers({
  // promoCode: promoCodeReducer
  cart: cartReducer,
  shelf: shelfReducer,
  filters: filtersReducer,
  sort: sortReducer,
  total: totalReducer
})

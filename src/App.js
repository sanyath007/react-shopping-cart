import React, { Component } from 'react'
// import { Container } from 'react-bootstrap'
// import axios from 'axios'

// import SubTotal from './components/Subtotal/Subtotal'
// import PickupSavings from './components/PickupSavings/PickupSavings'
// import TaxesFees from './components/TaxesFees/TaxesFees'
// import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal'
// import ItemDetails from './components/ItemDetails/ItemDetails'
// import PromoCodeDiscount from './components/PromoCode/PromoCode'
import Shelf from './components/Shelf/Shelf'
import FloatCart from './components/FloatCart'

// import { connect } from 'react-redux'
// import { handleChange } from './actions/promoCodeActions'
// import './App.css'

class App extends Component {
  // constructor (props) {
  //   super(props)

  //   this.state = {
  //     total: 100,
  //     pickupSavings: -3.85,
  //     taxes: 0,
  //     estimatedTotal: 0,
  //     disabledPromoButton: false
  //   }
  // }

  // componentDidMount () {
  //   this.setState({
  //     taxes: (this.state.total + this.state.pickupSavings) * 0.0875
  //   },
  //   function () {
  //     this.setState({
  //       estimatedTotal: this.state.total + this.state.pickupSavings + this.state.taxes
  //     })
  //   })
  // }

  // giveDiscountHandler = () => {
  //   if (this.props.promoCode === 'DISCOUNT') {
  //     this.setState({
  //       estimatedTotal: this.state.estimatedTotal * 0.9
  //     },
  //     function () {
  //       this.setState({
  //         disabledPromoButton: true
  //       })
  //     })
  //   }
  // }

  render () {
    /** Test get JWT from laravel app */
    // axios.post('http://localhost:8000/api/auth/login', { email: 'sanyath007@gmail.com', password: '123456'})
    //   .then(res => {
        // console.log(res)
        /** Set authorization request header */
        // axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.access_token
        /** Get logged in user information */
      //   axios.get('http://localhost:8000/api/auth/user')
      //     .then(res => console.log(res))
      //     .catch(err => console.log(err))
      // })
      // .catch(err => console.log(err))

    return (
      // <div className="container">
      //  <Container className="purchase-card">
      //   <SubTotal price={this.state.total.toFixed(2)}></SubTotal>
      //   <PickupSavings price={this.state.pickupSavings}></PickupSavings>
      //   <TaxesFees taxes={this.state.taxes.toFixed(2)}></TaxesFees>
      //   <hr/>
      //   <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)}></EstimatedTotal>
      //   <ItemDetails price={this.state.estimatedTotal.toFixed(2)}></ItemDetails>
      //   <hr/>
      //   <PromoCodeDiscount
      //     giveDiscount={() => this.giveDiscountHandler()}
      //     isDisabled={this.state.disabledPromoButton}
      //   />
      //  </Container>
      // </div>
      <React.Fragment>
        <main>
          <Shelf />
        </main>
        <FloatCart />
      </React.Fragment>
    );
  }
}

// const mapStateToProps = state => ({
//   promoCode: state.promoCode.value
// })

// export default connect(mapStateToProps, {handleChange})(App);
export default App;

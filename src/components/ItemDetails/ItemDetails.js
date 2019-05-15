import React, { Component } from 'react'
import { Button, Collapse, Media, Row, Col } from 'react-bootstrap'

export default class ItemDetails extends Component {
  constructor (props) {
    super(props)

    this.state = {
      open: false
    }
  }

  render () {
    return (
      <div>
        <Button
          className="item-details-button"
          variant="link"
          onClick={() => this.setState({open: !this.state.open })}
        >
          {this.state.open === false ? 'See' : 'Hide'} Item Details
          {this.state.open === false ? ' +' : ' -'}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Media>
              <img
                width={100}
                height={100}
                alt="thumbnail"
                src="https://i5.walmartimages.com/asr/90c1aad2-a3b3-4711-a29f-7b42b25aeadf_1.e83f74dfd7486d797bd0882996d1e3a4.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
              />
              <Media.Body>
                <p>Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Gray</p>
                <Row className="show-grid">
                  <Col md={6}>
                    <strong>{`$${this.props.price}`}</strong>
                    <br />
                    <strong className="price-strike">{`$${this.props.price}`}</strong>
                  </Col>
                  <Col md={6}>Qty: 1</Col>
                </Row>
              </Media.Body>
            </Media>
          </div>
        </Collapse>
      </div>
    )
  }
}
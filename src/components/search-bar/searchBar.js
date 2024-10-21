import React from 'react';
import './search-bar.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Row, Col, Button } from 'react-bootstrap';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleformSubmission = this.handleformSubmission.bind(this);
    this.resetValue = this.resetValue.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleformSubmission(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.onSearch(this.state);
  }

  resetValue() {
    this.setState({
      location: ''
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleformSubmission}>
        <Row>
          <Form.Group as={Col} md={10} xs={8}>
            <FloatingLabel controlId='cityInput' label='City/Country name'>
              <Form.Control
                type='text'
                placeholder='location'
                name='location'
                onChange={this.handleInputChange}
                value={this.state.location}
              />
            </FloatingLabel>
          </Form.Group>
          <Col md={2} xs={4} className='d-flex align-items-center justify-content-flex-end'>
          <Button className='searchBtn m-1 d-flex align-items-center justify-content-center' type='submit'>
              <span className='material-symbols-outlined'>search</span>
            </Button>
            <Button
              className='searchBtn m-1 d-flex align-items-center justify-content-center'
              type='reset'
              onClick={this.resetValue}
            >
              <span className='material-symbols-outlined'>clear_all</span>
            </Button>
         
          </Col>
        </Row>
      </Form>
    );
  }
}

export default SearchBar;

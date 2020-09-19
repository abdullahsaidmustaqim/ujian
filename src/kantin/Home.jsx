import React, { Component } from 'react';
import Navbar from './Navbar';
import Order from './Order';
import Header from './Header';
import Kategori from './Kategori';
import Popular from './Popular';
import Modal from './Modal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: '0',
      popular: [],
      base_url: 'https://belajar-react.smkmadinatulquran.sch.id/api/',
      item: null,
      order: {},
    }
  }

  popularOnChange = (e) => {
    return fetch(`${this.state.base_url}populer?category_id=${e}`,
      {
        method: 'POST',
      })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          popular: responseJson.data
        })
      })
      .catch(error => 'error')
  }

  handlerModal = (item) => {
    this.setState({
      item: item,
    })
  }

  onOrderHandler = data => {
    this.setState({
      order: data
    });
    console.log();
  }

  render() {
    return (
      <div className="">
        <Navbar />
        <div className="container-fluid p-0">
          <div className="row mt-5">
            <div className="col-8 mt-5">
              <Header />
              <Kategori popular={this.popularOnChange} />
              <Popular popular={this.state.popular} onShowModal={this.handlerModal} />
            </div>
            <div className="col-4 bg-light sidenav">
              <Order item={this.state.order} />
            </div>
          </div>
        </div>
        <Modal item={this.state.item} onOrderHandler={this.onOrderHandler} />
      </div>
    )
  }
}

export default App;
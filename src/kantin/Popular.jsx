import React, { Component } from 'react';
import Rating from './Rating';

class Popular extends Component {
  constructor(props) {
    super(props);

    this.state = {
      base_url: 'https://belajar-react.smkmadinatulquran.sch.id/api/',
      popular: '',
      item: '',
    };
  }

  getAllPopular() {
    return fetch(`${this.state.base_url}populer/all`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ popular: responseJson.data });
      })
      .catch(error => 'error')
  }

  onClickHandler = e => {
    this.props.onShowModal(e);
  }


  componentDidMount() {
    this.getAllPopular();
  }

  componentDidUpdate(props) {
    if (props.popular !== this.props.popular) {
      this.setState({ popular: this.props.popular });
    }
  }

  render() {
    return (
      <div className="wrapper-popular pr-5 pl-5 pb-5">
        <div className="judul mt-4 mb-1">
          <h3 className="font-weight-bold">Populer</h3>
        </div>
        <div className="row">
          {/* ISI */}
          {this.state.popular ? this.state.popular.map((item, i) =>
            <div key={i} className="col-4 mt-3">
              <a href="" className="klikfood p-0" data-toggle="modal" data-target="#pesanModal" onClick={_ => this.onClickHandler(item)}>
                <div className="isimakan">
                  <img src={item.image} class="foodstyle d-block" style={{ width: '100%' }} alt="..." />
                  <div className="bottom-left">{item.waktu}</div>
                </div>
                <h6 className="ukuranjudul mt-3">{item.name}</h6>
                <span className="ukurantext mt-1"><i class="far fa-star"></i> {item.rating}</span>
                <span className="ukurantext ml-4">Rp {item.harga}</span>
              </a>
            </div>
          ) : ''}
        </div>
      </div>
    )
  }
}

export default Popular;
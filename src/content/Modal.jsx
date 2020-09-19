import React, { Component } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jumlah: '',
      item: null,
    };
  }

  componentDidMount() {
    this.setState({
      item: this.props.item
    })
    console.log(this.props.item);
  }

  componentDidUpdate(props) {
    if (this.props.item !== props.item) {
      console.log(props);
      this.setState({
        item: this.props.item
      })
    }
  }

  onClickHandler = e => {
    const input = document.querySelector('.number');
    let total = parseInt(input.value);


    if (e === '+') {
      if (this.state.item.jumlah === 0) {
        return;
      }
      this.setState({
        item: {
          name: this.state.item.name,
          harga: this.state.item.harga,
          waktu: this.state.item.waktu,
          jumlah: this.state.item.jumlah - 1,
          rating: this.state.item.rating,
          image: this.state.item.image,
          pesan: this.state.item.pesan + 1
        }
      });
      input.value = `100`;
      return;
    }

    if (this.state.item.pesan === 0) {
      return;
    }
    input.value = total - 1;
    this.setState({
      item: {
        name: this.state.item.name,
        harga: this.state.item.harga,
        waktu: this.state.item.waktu,
        jumlah: this.state.item.jumlah + 1,
        rating: this.state.item.rating,
        image: this.state.item.image,
        pesan: this.state.item.pesan - 1
      }
    });

  }

  onOrderHandler = e => {
    this.props.onOrderHandler(this.state.item);
    console.log(this.state.item);
  }

  render() {
    return (
      <div>
        <div class="modal fade" id="pesanModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body">
                <img src={this.state.item ? this.state.item.image : 'https://belajar-react.smkmadinatulquran.sch.id/image/masakan1.jpg'} class="d-block" style={{ width: '100%' }} alt="..." />
                <div className="container p-0">
                  <h6 className="ukuranjudul mt-3">{this.state.item ? this.state.item.name : ''}</h6>
                  <span className="ukurantext mt-1"><i class="far fa-star"></i> {this.state.item ? this.state.item.rating : ''}</span>
                  <span className="ukurantext ml-4">Rp {this.state.item ? this.state.item.harga : ''}</span>
                </div>
              </div>
              <div class="modal-footer">
                <span className="mr-3">Stock {this.state.item ? this.state.item.jumlah : ''}</span>
                <div class="btn-group ml-4" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-warning klikstock text-white" onClick={_ => this.onClickHandler('-')}>-</button>
                  <button type="button" class="number stock" disabled>{this.state.item ? this.state.item.pesan : ''}</button>
                  <button type="button" class="btn btn-warning klikstock text-white" onClick={_ => this.onClickHandler('+')}>+</button>
                </div>
                <button type="button" class="btn btn-warning klikstock text-white" data-dismiss="modal" onClick={this.onOrderHandler}>Pesan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;
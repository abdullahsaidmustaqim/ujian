import React, { Component } from 'react';
import Car from './img/car.png'

class MyOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      total: 0,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.item !== this.props.item) {
      console.log(this.props.item.pesan);
      console.log(this.props.item.harga);

      const total = this.props.item.pesan * this.props.item.harga;

      this.setState({
        list: [...this.state.list, this.props.item],
        total: this.state.total + total
      });
      console.log(this.state.total);
    }
  }

  render() {
    return (
      <div>
        <div className="card orderform">
          <div className="card-header judulorder"><h3 className="p-0">Pesanan Saya</h3></div>
          <div className="card-body">
            {/* KARTU ATM */}
            <div className="container kartuatm mb-3">
              <p className="">Abdullah Said Mustaqim</p>
              <h3 className="mb-4">Rp. 7.530.000,-</h3>
              <p className="card-number mb-0">2342********7856</p>
            </div>
            {/* PESANAN */}

            <table className="font-weight-bold">
              <tbody>
                <div className="container p-0 ukurantable">
                  {this.state.list ? this.state.list.map((item, i) =>
                    <tr key={i}>
                      <th><img src={item.image} className="edgeimage" height="50" alt="" /></th>
                      <td><span className="ml-3 mr-3">{item.pesan}</span></td>
                      <td><span className="mr-3 mt-2">x</span></td>
                      <td><span className="mt-2">{item.name}</span></td>
                      <td><span className="text-muted ml-2 mt-2">Rp. {item.harga * item.pesan}</span></td>
                    </tr>
                  ) : ''
                  }
                  <tr>
                    <th colSpan="5"><div className="container p-2"></div></th>
                  </tr>
                </div>
                <div className="container p-0">
                  <tr>
                    <th><img src={Car} className="edgeimage mt-2 mb-2 ml-2" height="50" alt="" /></th>
                    <td colSpan="3"><span className="ml-4 mr-3">Jl. Merak No. 2, Pekanbaru</span></td>
                    <td><span className="text-muted ml-4 mt-2">Gratis</span></td>
                  </tr>
                  <tr>
                    <th><span className="mb-2 ml-2">Total :</span></th>
                    <td colSpan="4"><h3 className="font-weight-bold text-right">Rp {this.state.total}</h3></td>
                  </tr>
                  <tr>
                    <td colSpan="5">
                      <button className="btn btn-warning bg-notif btn-block mt-3 pt-2 pb-2">
                        <span className="sizepesan">Pesan<i class="fas fa-chevron-right ml-5"></i></span>
                      </button>
                    </td>
                  </tr>
                </div>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    )
  }
}

export default MyOrder;
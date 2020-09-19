import React, { Component } from 'react';

class Kategori extends Component {
  constructor(props) {
    super(props);

    this.state = {
      base_url: 'https://belajar-react.smkmadinatulquran.sch.id/api/',
      categories: '',
    };
  }

  getAllCategories() {
    return fetch(`${this.state.base_url}category/all`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ categories: responseJson.data });
      })
      .catch(error => 'error')
  }


  componentDidMount() {
    this.getAllCategories();
    console.log(this.state.categories);
  }

  onClickHandler = (e) => {
    this.props.popular(e);
  }

  render() {
    return (
      <div className="m-5">
        {/* KATEGORI */}
        <div className="container p-0">
          <div className="row justify-content-between">
            <div className="col-auto mr-auto mt-4 mb-4"><h3 className="font-weight-bold">Kategori</h3></div>
            <div className="col-auto mt-4">
              <button className="btn lengkapbtn btn-sm rounded-pill">Lebih Lengkap</button>
            </div>
          </div>
        </div>
        <div className="kategori pilihan">
          <div className="atas d-flex">
            {this.state.categories ? this.state.categories.map(category =>
              <div className="container p-0" key={category.id} onClick={_ => this.onClickHandler(category.id)}>
                <div className="isi kategorimakan">
                  <img src={category.img} class="kategori-img d-block" style={{ width: '100%' }} alt="..." />
                  <div className="centered">{category.name}</div>
                </div>
              </div>
            ) : <p></p>
            }
          </div>
        </div>
        {/* END KATEGORI */}
      </div>
    )
  }
}

export default Kategori;
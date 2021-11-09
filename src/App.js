import "./App.css";
import { Component } from "react";
import Header from "./components/Header.js";
import Products from "./components/Products.js";
//import { myproducts } from "./data.js";
import { categories } from "./utils.js";
import { CircularProgress } from "@mui/material";

// import { myproducts } from "./data";
// const utils=require('./utils')
//Function
// function App() {
//   return (
//     <div className="App">
//       <Header /> <Products />
//     </div>
//   );
// }

// React class component:
class App extends Component {
  state = {
    category: "",
    myproducts: [],
    loading: false,
    error: false,
    pricerange: [0, 1000],
    minPrice: 0,
    maxPrice: 1000,
  };
  componentDidMount() {
    this.fetchData();
  }
  componentWillUnmount() {}
  filtering = (id) => {
    this.setState({ category: id, loading: false });
  };
  fetchData() {
    try {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
          this.setState({ myproducts: data, loading: false });
          this.setPricesRange(data);
        });
    } catch (e) {
      console.log(e);
    }
  }
  filterby_categories = categories;
  setPricesRange(data) {
    const products = data;
    const productWithMinPrice = products.reduce((prev, curr) =>
      prev.price < curr.price ? prev : curr
    );
    const productWithMaxPrice = products.reduce((prev, curr) =>
      prev.price > curr.price ? prev : curr
    );
    this.setState({
      pricerange: [productWithMinPrice.price, productWithMaxPrice.price],
      minPrice: productWithMinPrice.price,
      maxPrice: productWithMaxPrice.price,
    });
  }
  render() {
    return (
      <div className="App">
        <Header
          filterby_categories={this.filterby_categories}
          filtering={this.filtering}
          range={this.state.pricerange}
          handleChangePrice={(value) => this.setState({ pricerange: value })}
          minPrice={this.state.minPrice}
          maxPrice={this.state.maxPrice}
        />
        {/* <button
          onClick={() => {
            this.fetchData();
            this.setState({ show: !this.state.show, loading: true });
          }}
        >
        </button> */}
        {this.state.loading && <CircularProgress />}
        <Products
          myproducts={this.state.myproducts}
          priceFilter={this.state.pricerange}
          categoryFilter={this.state.category}
        />
      </div>
    );
  }
}

export default App;

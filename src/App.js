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
        .then((data) => this.setState({ myproducts: data, loading: false }));
    } catch (e) {
      console.log(e);
    }
  }
  filterby_categories = categories;

  render() {
    return (
      <div className="App">
        <Header
          filterby_categories={this.filterby_categories}
          filtering={this.filtering}
        />
        {/* <button
          onClick={() => {
            this.fetchData();
            this.setState({ show: !this.state.show, loading: true });
          }}
        >
        </button> */}
        {this.state.loading && <CircularProgress />}
        <Products myproducts={this.state.myproducts} />
      </div>
    );
  }
}

export default App;

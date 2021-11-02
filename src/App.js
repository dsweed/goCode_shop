import "./App.css";
import { Component } from "react";
import Header from "./components/Header.js";
import Products from "./components/Products.js";
import { myproducts } from "./data.js";
import { categories } from "./utils.js";
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
  state = { show: false, category: "" };
  filtering = (id) => {
    this.setState({ category: id });
  };
  // groupBy = (xs, key) =>
  //   xs.reduce((rv, x) => {
  //     rv[x[key]] = true || [];
  //     return rv;
  //   }, {});
  // filterby_categories = Object.keys(this.groupBy([], "category"));
  filterby_categories = categories;

  render() {
    const btnText = this.state.show ? "Hide Products" : "Show Products";

    return (
      <div className="App">
        <Header
          filterby_categories={this.filterby_categories}
          filtering={this.filtering}
        />
        <button onClick={() => this.setState({ show: !this.state.show })}>
          {btnText}
        </button>
        {this.state.show && <Products myproducts={myproducts} />}
      </div>
    );
  }
}

export default App;

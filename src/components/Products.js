import Product from "./Product.js";
import "./products.css";
import { Component } from "react";
//function:
// const Products = () => (
//   <section className="products">
//     <Product />
//     <Product />
//     <Product />
//     <Product />
//     <Product />
//     <Product />
//   </section>
// );
// Class component:
class Products extends Component {
  render() {
    return (
      <section className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </section>
    );
  }
}
export default Products;

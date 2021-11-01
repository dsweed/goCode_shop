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
    const { myproducts } = this.props;
    return (
      <section className="products">
        {myproducts.map((product) => (
          <Product
            index={product.id}
            img={product.image}
            price={product.price}
            title={product.title}
          />
        ))}
      </section>
    );
  }
}
export default Products;

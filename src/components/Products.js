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
    const { myproducts, priceFilter, categoryFilter } = this.props;

    const filteredProducts = myproducts.filter(
      (product) =>
        product.price >= priceFilter[0] &&
        product.price <= priceFilter[1] &&
        (!categoryFilter ||
          (categoryFilter && product.category === categoryFilter))
    );

    return (
      <section className="products">
        {filteredProducts.map((product) => (
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

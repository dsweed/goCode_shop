import { Slider } from "@mui/material";
import { Component } from "react";
import "./header.css";

// React function:
// const Header = () => (
//   <nav className="product-filter">
//     <h1>Jackets</h1>
//     <div className="sort">
//       <div className="collection-sort">
//         <label>Filter by:</label>
//         <select>
//           <option value="/">All Jackets</option>
//           <option value="/">2016</option>
//           <option value="/">jacket</option>
//           <option value="/">Jackets</option>
//           <option value="/">layers</option>
//           <option value="/">Obermeyer</option>
//           <option value="/">Roxy</option>
//           <option value="/">womens</option>
//         </select>
//       </div>

//       <div className="collection-sort">
//         <label>Sort by:</label>
//         <select>
//           <option value="/">Featured</option>
//           <option value="/">Best Selling</option>
//           <option value="/">Alphabetically, A-Z</option>
//           <option value="/">Alphabetically, Z-A</option>
//           <option value="/">Price, low to high</option>
//           <option value="/">Price, high to low</option>
//           <option value="/">Date, new to old</option>
//           <option value="/">Date, old to new</option>
//         </select>
//       </div>
//     </div>
//   </nav>
// );

// Class component:
class Header extends Component {
  handleChange = (event, newValue) => {
    this.props.handleChangePrice(newValue);
  };

  render() {
    const pricerange = this.props.range;
    return (
      <nav className="product-filter">
        <h1>Jackets</h1>
        <div className="sort">
          <div className="collection-sort">
            <label>Filter by:</label>
            <select onChange={(e) => this.props.filtering(e.target.value)}>
              <option key="All" value="">
                All
              </option>
              {this.props.filterby_categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {/* <option value="/">All Jackets</option>
              <option value="/">2016</option>
              <option value="/">jacket</option>
              <option value="/">Jackets</option>
              <option value="/">layers</option>
              <option value="/">Obermeyer</option>
              <option value="/">Roxy</option>
              <option value="/">womens</option>
            </select> */}
          </div>
          <div className="collection-sort" style={{ width: 150 }}>
            {pricerange.length && (
              <Slider
                value={[pricerange[0], pricerange[1]]}
                min={this.props.minPrice}
                max={this.props.maxPrice}
                // step={1}
                // scale={calculateValue}
                // getAriaValueText={valueLabelFormat}
                // valueLabelFormat={valueLabelFormat}
                onChange={this.handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
              />
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;

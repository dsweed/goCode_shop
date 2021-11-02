import { myproducts } from "./data.js";
const groupBy = (xs, key) =>
  xs.reduce((rv, x) => {
    rv[x[key]] = true || [];
    return rv;
  }, {});

export const categories = Object.keys(groupBy(myproducts, "category"));

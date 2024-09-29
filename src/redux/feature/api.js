import { getCategory, getProduct } from "../slice/slice";

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();
      dispatch(getCategory(data));  
    } catch (error) {
      console.log("Error fetching categories:", error);
    }
  };
};

const PAGE_SIZE = 10;

export const fetchProducts = (page,selectedCategory,  searchQuery) => {
  return async (dispatch) => {


    try {
      let url = `https://dummyjson.com/products?limit=${PAGE_SIZE}&skip=${(page - 1) * PAGE_SIZE}`;

      if (selectedCategory) {
        url = `https://dummyjson.com/products/category/${selectedCategory}?limit=${PAGE_SIZE}&skip=${(page - 1) * PAGE_SIZE}`;
      }

      if (searchQuery) {
        url = `https://dummyjson.com/products/search?q=${encodeURIComponent(searchQuery)}&limit=${PAGE_SIZE}&skip=${(page - 1) * PAGE_SIZE}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      if (data && data.products) {
        console.log("Products fetched:", data.products);
        dispatch(getProduct(data.products)); 
      } else {
        console.log("No products found");
      }
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };
};
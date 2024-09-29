"use client";
import ProductCard from "@/components/card";
import { fetchCategories, fetchProducts } from "@/redux/feature/api";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"

export default function Home() {
  const dispatch=useDispatch()
  const categories=useSelector((state)=>state.product.category)
  const products=useSelector((state)=>state.product.product)
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); 
  const [page, setPage] = useState(1); 
  
  useEffect(() => {
    dispatch(fetchCategories())
  }, []);

  useEffect(() => {
    dispatch(fetchProducts(page,selectedCategory,searchQuery));
  }, [page, selectedCategory,searchQuery]);


  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setPage(1); 
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setPage(1); 
  };

  
  const handlePageClick = (newPage) => {
    setPage(newPage);
  };


  return (
    <div className="pt-8 min-h-screen bg-lime-450">
      <div className="flex flex-col items-center m-auto gap-3 justify-center max-w-64 md:flex-row  ">
      <div className="flex m-auto justify-center ">
        <select
          value={selectedCategory}x
          onChange={handleCategoryChange}
          className="outline-none bg-white rounded-full text-lime-500 font-medium px-3 p-1 py-1 mx-auto"
        >
          <option value="">All Categories</option>
          {categories?.map((category, index) => (
            <option key={index} value={category.name}>
            {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div>
      <input
        type="text"
        className="outline-none bg-white my-5 rounded-full text-lime-500 flex items-center m-auto px-3 py-1 border-none"
        placeholder="Search by name"
        value={searchQuery}
        onChange={handleSearch}
      />
      </div>
      </div>
      <div className="flex flex-wrap m-auto justify-around">
        {products<=10 ? (
          <p>No products found.</p>
        ) : (
          products?.map((item) => <ProductCard key={item.id} product={item} />)

        )}
      </div>

      {/* Pagination Controls */}
        <div className="text-center py-5">
          <button
            disabled={page === 1}
            onClick={() => handlePageClick(page - 1)}
            className="px-4 py-2 bg-lime-600 text-white rounded-lg mr-2"
          >
            Previous
          </button>

          <span className="font-medium text-lime-600">Page {page}</span>

          <button
            disabled={products?.length < 10}
            onClick={() => handlePageClick(page + 1)}
            className={`px-4 py-2 bg-lime-600 text-white rounded-lg ml-2 ${products?.length >= 10?'cursor-pointer':'cursor-not-allowed '}`}
          >
            Next
          </button>
        </div>

    </div>
  );
}


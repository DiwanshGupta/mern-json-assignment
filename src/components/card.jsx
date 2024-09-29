import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded-md overflow-hidden hover:shadow-[0_10px_20px_rgba(31,_29,_30,_0.7)] p-4 shadow-lg hover:bg-white/70 bg-white my-3">
      <img
        className="w-full h-48 object-cover"
        src={product.thumbnail}
        alt={product.title}
      />

      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{product.title}</h2>
        <p className="text-green-600 font-semibold text-lg mb-2">${product.price}</p>
        <p className="text-gray-700 text-base mb-2">{product.description}</p>
        
        <p className="text-sm"><strong>Brand:</strong> {product.brand}</p>
        <p className="text-sm"><strong>Category:</strong> {product.category}</p>
        <p className="text-sm">
          <strong>Stock:</strong> {product.stock} ({product.availabilityStatus})
        </p>
        <p className="text-sm"><strong>Rating:</strong> {product.rating} ⭐</p>
        <p className="text-sm">
          <strong>Minimum Order Quantity:</strong> {product.minimumOrderQuantity}
        </p>
        <p className="text-sm"><strong>Shipping:</strong> {product.shippingInformation}</p>
        <p className="text-sm"><strong>Warranty:</strong> {product.warrantyInformation}</p>

        <div className="mt-4">
          {product.tags?.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
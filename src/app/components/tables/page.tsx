"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Product } from "../../../../types/products";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/querries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addToCart } from "@/app/actions/actions";
import Swal from "sweetalert2"

const Tables = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product[] = await client.fetch(allProducts);
      setProduct(fetchedProduct);
    }
    fetchProduct();
  }, []);
  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon:"success",
      title:`${product.name} added to cart`,
      showConfirmButton:false,
      timer:1000
    })
    addToCart(product);
    
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Our Newest Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {product.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200 mb-4"
          >
            <h1 className="font-semi-bold font-serif font-semibold">
              {product.name}
            </h1>
            <br />
            <Link href={`/product/${product.slug.current}`}>
              {/* <h1 className="text-lg font-semibold mt-4">
                {typeof product.category === "string"
                  ? product.category
                  : "Unknown Category"}
              </h1> */}
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.category || "Product Image"}
                  width={300}
                  height={200}
                  className="w-ful h-44 object-cover rounded-md"
                />
              )}
              <p className="text-gray-700 mt-2">
                {product.price ? `$${product.price}` : "Price not available"}
              </p>
              <br />

              <p className="font-sans"> {product.description}</p>
              <br />
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-400 text-white font-normal py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out
              "
                onClick={(e) => handleAddToCart(e, product)}
              >
                {" "}
                Add To Cart{" "}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tables;

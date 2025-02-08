import { groq } from "next-sanity"; 

export const allProducts = groq`*[_type == "product"]`; // Gets all products
export const allProductDetails = groq`*[_type == "product"] { _id, name, category, image }`; // Gets all products with specific fields
export const four = groq`*[_type =="product"][0..3]`; // Gets first 4 products

  

// export const allProductsQuery = groq`*[_type == "product"]`;
// export const allProductsFields = `*[_type == "product"] { _id, name, category, image }`;

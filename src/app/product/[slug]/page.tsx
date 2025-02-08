import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

interface ProductPageProps {
    params: { slug: string };
    
}

async function getProduct(slug: string): Promise<Product> {
    return client.fetch(
        groq`*[_type == "product" && slug.current == $slug][0]{
            _id,
            name,
            category,   
            image,       
            price,       
            description  
        }`, 
        { slug }
    );
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = await getProduct(slug);

    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Image Section */}
                <div className="aspect-square">
                    {product.image && (
                        <Image
                            src={urlFor(product.image).url()}
                            alt={product.name}
                            width={500}
                            height={500}
                            className="rounded-lg shadow-md"
                        />
                    )}
                </div>

                {/* Product Details Section */}
                <div className="flex flex-col gap-8">
                    <h1 className="text-4xl font-bold">{product.name}</h1>
                    <p className="text-2xl font-sans">${product.price}</p>
                    <p className="text-lg font-sans">{product.description}</p>
                    <p className="text-2xl font-sans">{product.quantity}</p>
                    <p className="text-2xl font-sans">{product.tags}</p>
                </div>
            </div>
        </div>
    );
}

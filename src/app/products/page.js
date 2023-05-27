import Card from "@/components/Card"
import Link from "next/link"
import React from "react"

export const metadata = {
    title: 'Product',
    description: 'Here is list all products'
}

export async function getProducts() {
    const res = await fetch("https://api.escuelajs.co/api/v1/products?limit=20&offset=0", { cache: "no-store" })
    return res.json()
}

export default async function Product() {
    const products = await getProducts()

    return (
        products.length > 0 && <>
        <div className="flex flex-wrap gap-3 justify-between mb-5" >
            {
                products.map(product => (
                    <Card key={product.id} 
                    id={product.id} 
                    title={product.title} 
                    description={product.description} 
                    image={product.images[0]} />
                ))
            }
    </div>
        </>
    )


}

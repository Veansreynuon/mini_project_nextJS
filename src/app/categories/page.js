import React from "react"
import Card from "@/components/Card"

export const metadata = {
    title: 'Category',
    description: 'Here is list all category'
}

export async function getCategories() {
    const res = await fetch("https://api.escuelajs.co/api/v1/categories", { cache: "no-store" })
    return res.json()
}


export default async function Category() {
    const categories = await getCategories();
    return (
        categories.length > 0 && <>
            <div className="flex flex-wrap gap-3" >
                {
                    categories.map(Category => (
                        <Card key={Category.id}
                            id={Category.id}
                            title={Category.name}
                            // creationAt={Category.creationAt}
                            image={Category.image} />
                    ))
                }
            </div>
        </>

    )
}
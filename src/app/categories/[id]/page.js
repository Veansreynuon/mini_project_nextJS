import Category, { getCategories, getCategory } from "../page"

export async function getProducts(id){
    const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`)
    return res.json()
}

export async function generateMetedata({params}){
    const category =  await getCategories(params.id)
    return{
        title: category.name,
        creationAt: category.creationAt,
        thumbnail: category.images[0],
        openGraph:{
            images: category.images[0],
            title: category.name,
            creationAt: category.creationAt
        },
    }
}

export default async function DetailAbuotCategory({params}){
    const{id} = params
    const categories = await getCategories(id)
    return(
        <>
        
        <h1>Product Detail: {categories.name}</h1>
        <img src={categories.images[0]} alt={categories.name}/>

        </>
    )
}
export async function getProducts(id){
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    return res.json()
}

export async function generateMetedata({params}){
    const product =  await getProducts(params.id)
    return{
        title: product.name,
        description: product.description,
        thumbnail: product.images[0],
        openGraph:{
            images: product.images[0],
            title: product.title,
            description: product.description
        },
    }
}

export default async function DetailAbuotProduct({params}){
    const{id} = params
    const product = await getProducts(id)
    return(
        <>
        
        <h1>Product Detail: {product.title}</h1>
        <img src={product.images[0]} alt={product.title}/>

        </>
    )
}
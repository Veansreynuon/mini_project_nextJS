export async function fetchUser(id){
    const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`)
    return res.json()
}

export async function generateMetedata({params}){
    const user =  await fetchUser(params.id)
    return{
        title: user.name,
        description: user.description,
        role:user.customer,
        thumbnail: user.images[0],
        openGraph:{
            images: user.images[0],
            title: user.title,
            role:user.customer,
            description: user.description
        },
    }
}

export default async function DetailAbuotUser({params}){
    const{id} = params
    const user = await fetch(id)
    return(
        <>
        
        <h1>Product Detail: {user.name}</h1>
        <img src={user.images} alt={user.name}/>

        </>
    )
}
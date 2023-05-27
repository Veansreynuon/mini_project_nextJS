import React from "react"
import Card from "@/components/Card"

export const metadata = {
    title: 'User',
    description: 'Here is list all user'
}

export async function fetchUser() {
    const res = await fetch("https://api.escuelajs.co/api/v1/users?limit=8&offset=1", { cache: "no-store" })
    return res.json()
}

export default async function User() {
    const users = await fetchUser()
    console.log(users);
    return (
        users.length > 0 && <>
            <div className="flex flex-wrap gap-3" >
                {
                    users.map((user,index) => (
                        <Card key={user.id}
                            id={user.id}
                            title={user.name}
                            // avatar={user.avatar}
                            image={user.avatar}
                            />
                    ))
                }
            </div>
        </>
    )
}
"use client"
import Homepage from '@/components/homepage'
import Product from './products/page'
import Category from './categories/page'
import User from './users/page'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Homepage/>
      <h1 className='text-3xl font-bold mt-10 '> Product</h1>
      <Product/>
      <h1 className='text-3xl font-bold mt-10'> Category</h1>
      <Category/>
      <h1 className='text-3xl font-bold mt-10'> User </h1>
      <User/>
    </main>
  )
}

import React from 'react'

import getBillboard from '@/actions/get-billboard'
import getProducts from '@/actions/get-products'

import ProductsList from '@/components/ProductsList'
import Billboard from '@/components/Billboard'
import Container from '@/components/ui/Container'

export const revalidate = 0

const HomePage = async () => {
  const products = await getProducts({isFeatured: true})
  const billboard = await getBillboard('9526aac4-83ce-4171-a0a2-2407d3667f36')
  
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard}/>
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductsList title="Featured products" items={products}/>
        </div>
      </div>
    </Container>
  )
}

export default HomePage
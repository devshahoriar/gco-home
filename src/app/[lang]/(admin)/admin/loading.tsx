import { Loader } from 'lucide-react'
import React from 'react'

const loading = () => {
  return (
    <div className='container w-full h-[80vh] flex justify-center items-center'>
      <Loader className='animate-spin' size={50} />
    </div>
  )
}

export default loading
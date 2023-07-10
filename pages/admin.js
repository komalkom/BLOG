import AdminPanel from '@/components/AdminPanel'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function admin() {
  return (
    <div className='h-screen w-screen'>
      <Navbar />
      <AdminPanel/>
      </div>
  )
}

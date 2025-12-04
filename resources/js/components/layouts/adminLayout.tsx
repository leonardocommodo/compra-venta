import React from 'react'
import { Navbar } from '../ui/navbar'

interface AdminLayoutProps {
  children: React.ReactNode

}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className='h-screen w-full bg-[#f7f7f7]'>

      <Navbar />

      <div className='px-5'>
        {children}
      </div>
    </div>
  )
}

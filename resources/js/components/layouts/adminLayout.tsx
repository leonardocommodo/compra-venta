import React from 'react'

interface AdminLayoutProps {
    children: React.ReactNode
    
}

export const AdminLayout = ({children}:AdminLayoutProps) => {
  return (
    <div>
        { children }
    </div>
  )
}

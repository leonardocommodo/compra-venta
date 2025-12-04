import { AdminLayout } from '@/components/layouts/adminLayout'
import React from 'react'
import { TableArticles } from '../components/TableArticles'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export const ArticleContent = () => {
  return (
    <AdminLayout>

      <Card>
        <CardHeader>
          <CardTitle>Listado de articulos</CardTitle>
          <CardDescription>Aquí se pueden gestionar todos los articulos registrados en el sistema</CardDescription>
          {/* <CardAction>Card Action</CardAction> */}
        </CardHeader>
        <CardContent>          
          <TableArticles />
        </CardContent>
      </Card>
    </AdminLayout>
  )
}

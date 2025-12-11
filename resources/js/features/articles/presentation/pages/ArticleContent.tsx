import { AdminLayout } from '@/components/layouts/adminLayout'
import React from 'react'
import { TableArticles } from '../components/TableArticles'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Article } from '../../domain/entities/Article';
import { Button } from '@/components/ui/button';

interface Props {
  articles: Article[];
}


export const ArticleContent = ({ articles }: Props) => {
  console.log(articles)
  return (
    <AdminLayout>
      <div className='flex justify-end'>
        <Button className='mb-2 cursor-pointer'>Crear nuevo articulo</Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Listado de articulos</CardTitle>
          <CardDescription>Aquí se pueden gestionar todos los articulos registrados en el sistema</CardDescription>
          {/* <CardAction>Card Action</CardAction> */}
        </CardHeader>
        <CardContent>
          <TableArticles articles={articles} />
        </CardContent>
      </Card>
    </AdminLayout>
  )
}

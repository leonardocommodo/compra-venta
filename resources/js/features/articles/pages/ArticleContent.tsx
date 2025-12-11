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

import { Article } from '@/models/Article';
import { Category } from '@/models/Category';
import { MeasurementUnit } from '@/models/MeasurementUnit';
import CreateArticleDialog from '../dialog/create-article';


interface Props {
  articles: Article[];
  categories: Category[];
  measurementUnits: MeasurementUnit[];
}


export const ArticleContent = ({ articles, categories, measurementUnits }: Props) => {
  console.log(categories);
  console.log(measurementUnits);
  return (
    <AdminLayout>
      <div className='flex justify-end'>
        < CreateArticleDialog categories={categories} measurementUnits={measurementUnits} />
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

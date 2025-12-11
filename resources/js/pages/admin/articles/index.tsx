import { Article } from '@/models/Article'
import { Category } from '@/models/Category';
import { MeasurementUnit } from '@/models/MeasurementUnit';
import { ArticleContent } from '@/features/articles/pages/ArticleContent';


interface Props {
  articles: Article[];
  categories: Category[];
  measurementUnits: MeasurementUnit[];
}

const ArticlesPage = ({ articles, categories, measurementUnits }: Props) => {
  return (
    <ArticleContent articles={articles} categories={categories} measurementUnits={measurementUnits} />
  )
}

export default ArticlesPage
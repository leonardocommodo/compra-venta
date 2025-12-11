import { AdminLayout } from '@/components/layouts/adminLayout'
import { Article } from '@/features/articles/domain/entities/Article'
import { ArticleContent } from '@/features/articles/presentation/pages/ArticleContent'

interface Props{
  articles: Article[];
}

const ArticlesPage = ({ articles }: Props) => {  
  return (
    <ArticleContent articles={ articles } />
  )
}

export default ArticlesPage
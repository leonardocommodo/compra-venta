import { Article } from '../entities/Article';
export abstract class IArticleRepository {
    abstract create(article: Article): Promise<Article>;
    abstract findAll(offset?:number, limit?:number): Promise<Article[]>;
    abstract delete(articleId:number): Promise<boolean>;
    abstract update(articleId:number, article:Article): Promise<boolean>;
}
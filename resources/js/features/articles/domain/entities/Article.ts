import { Category } from "./Category";
import { MeasurementUnit } from "./MeasurementUnit";

export class Article {
    constructor(public code: string, 
        public name: string, 
        public minStock: number, 
        public stock: number, 
        public costPrice: number, 
        public sellPrice: number,
        public status:string,
        public id?:number,
        public brand?:string,
        public barcode?:string,
        public categoryId?: number,
        public measurementUnitId?:number,
        public measurement_unit?: MeasurementUnit,
        public category?: Category
     ) {}
}
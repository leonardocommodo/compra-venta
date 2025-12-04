export class Article {
    constructor(private code: string, 
        private name: string, 
        private minStock: number, 
        private stock: number, 
        private costPrice: number, 
        private sellPrice: number,
        private status:string,
        private id?:number,
        private brand?:string,
        private barcode?:string,
        private categoryId?: number,
        private measurementUnitId?:number ) {}
}
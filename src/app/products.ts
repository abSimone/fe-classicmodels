export class Products{
  constructor(public productCode: string, public productName: string, public productLine: string, public productScale: string,
              public productVendor: string, public productDescription:string, public quantityInStock: number,
              public buyPrice: number, public MSRP: number) {}
};

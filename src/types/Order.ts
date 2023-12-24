export interface Order {
  _id: string;
  table: string;
  status: 'pending' | 'Production' | 'completed'
  products: Array<{
    _id: string;
    quantity: number;
    product: {
      name: string;
      imagePath: string;
      price: number;
    }
  }>

}


//1.46

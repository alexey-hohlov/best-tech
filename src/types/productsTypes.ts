export interface IProduct {
  name: string;
  price: number;
  id: string;
  imageUrl: string;
  description: string;
}

export interface ICartItem extends IProduct {
  quantity: number;
}

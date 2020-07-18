export interface IProduct {
  uid: string;
  sku: string;
  title: string;
  category: string;
  img: string[];
  quantity: number;
  description: string;
  price: number;
  currencyId: string;
  currencyFormat: string;
  availableSizes: Array<string>;
  availableColor: Array<string>;
  isOffertShipping?: boolean;
  priceMayor?: number;
  minQuantity?: number;
  style?: string;
}

type Product = {
  name: string;
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
};

type Products = {
  id: number;
  name: string;
  description: string;
  price: number;
  products: Product[];
};

export default Products;

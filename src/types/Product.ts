export interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    oldPrice?: number;
    discount?: string;
    category?: string;
    weight?: string;
    size?: string;
    assay?: string;
    availableSizes?: string[];
  }
  
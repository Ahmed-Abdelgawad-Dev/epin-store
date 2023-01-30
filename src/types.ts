import { Provider } from "./ContextApi";
type category =
  | "games_gift_card"
  | "top_up_card"
  | "visa"
  | "mobile_top_up"
  | "games_e";
type tag = "steam" | "origin" | "uPlay" | "blizzard";
export interface order {
  email: string;
  order_price: number;
  products: {
    product_id: number;
    quantity: number;
    serials: string[];
    total_price: number;
  }[];
  status: "pending" | "delivered";
}
interface Product {
  id: number;
  url: string;
  title: string;
  description: string;
  price: string;
  before_discount: string;
  serials: string[];
  category: category;
  tags: tag[];
}
export interface storeProduct extends Product {
  inCart: false;
  count: number;
  total: number;
}
interface filters {
  q: string;
  category: string[];
  tags: string[];
  price: { from: number; to: number };
}
export interface ContextState {
  loading: boolean;
  store: storeProduct[];
  detailProduct: storeProduct;
  cart: storeProduct[];
  cartsubtotal: number;
  cartTax: number;
  carttotal: number;
  tags: string[];
  filters: filters;
  categories: string[];
  screen: {
    width: number;
    height: number;
  };
  modal: {
    hidden: boolean;
    title: string;
    body: string;
    success: {
      text: string;
      onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
    };
    decline: {
      text: string;
      onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
    };
  };
  /**
   * update details screen product data by id
   */
  hadelDetails: (id: string) => void;
  /**
   * add item to cart
   */
  addToCart: (id: number, count?: number) => void;
  /**
   * change item count at cart
   */
  changCount: (id: number, type: "add" | "dec") => void;
  /**
   * delete item from cart
   */
  deleteItem: (id: number) => void;
  /**
   * clear cart items
   */
  clearCart: () => void;
  checkout: (order: order) => Promise<boolean>;
  applyFilters: (filters: filters) => void;
  closeModal: () => void;
  setModal: (modal: ContextState["modal"]) => void;
  setLoading: (loading: boolean) => void;
}
export interface CardParams {
  product: storeProduct;
  titleHight: string;
}

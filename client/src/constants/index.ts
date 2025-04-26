import { IFeedBack, IOurProducts } from "../types/constants";

export const products: IOurProducts[] = [
  { id: 1, name: "Bitcoin", category: "Crypto", icon: "fab fa-btc" },
  { id: 2, name: "Ethereum", category: "Crypto", icon: "fab fa-ethereum" },
  { id: 3, name: "Tesla Stock", category: "Stock", icon: "fab fa-automobile" },
  { id: 4, name: "Apple Stock", category: "Stock", icon: "fab fa-apple" },
  { id: 5, name: "Solana", category: "Crypto", icon: "fab fa-bitcoin" },
  { id: 6, name: "Amazon Stock", category: "Stock", icon: "fab fa-amazon" },
  { id: 7, name: "Cardano", category: "Crypto", icon: "fab fa-bitcoin" },
  {
    id: 8,
    name: "Microsoft Stock",
    category: "Stock",
    icon: "fab fa-microsoft",
  },
  { id: 9, name: "Dogecoin", category: "Crypto", icon: "fab fa-dog" },
  { id: 10, name: "NVIDIA Stock", category: "Stock", icon: "fab fa-nvidia" },
  { id: 11, name: "Litecoin", category: "Crypto", icon: "fab fa-btc" },
  {
    id: 12,
    name: "Meta (Facebook) Stock",
    category: "Stock",
    icon: "fab fa-facebook",
  },
  { id: 13, name: "BNB", category: "Crypto", icon: "fab fa-btc" },
  { id: 14, name: "Netflix Stock", category: "Stock", icon: "fab fa-netflix" },
  { id: 15, name: "XRP", category: "Crypto", icon: "fab fa-bitcoin" },
  {
    id: 16,
    name: "Google (Alphabet) Stock",
    category: "Stock",
    icon: "fab fa-google",
  },
  { id: 17, name: "Polkadot", category: "Crypto", icon: "fab fa-bitcoin" },
  {
    id: 18,
    name: "Coca-Cola Stock",
    category: "Stock",
    icon: "fab fa-coca-cola",
  },
  { id: 19, name: "Chainlink", category: "Crypto", icon: "fab fa-link" },
  { id: 20, name: "PayPal Stock", category: "Stock", icon: "fab fa-paypal" },
];

export const feedbacks: IFeedBack[] = [
  {
    userId: 1,
    userName: "John Doe",
    rating: 5,
    text: "Amazing product! Totally worth the investment. Highly recommend to everyone!",
  },
  {
    userId: 2,
    userName: "Jane Smith",
    rating: 4,
    text: "Good product, but there is room for improvement. Still, I am happy with it.",
  },
  {
    userId: 3,
    userName: "Emily Johnson",
    rating: 3,
    text: "The product is decent, but it didn't meet all of my expectations. Could be better.",
  },
];

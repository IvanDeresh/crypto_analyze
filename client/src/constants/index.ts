import { bitcoin_news, economic_abacus, global, gold } from "../assets/img";
import {
  ConnectOption,
  IFeedBack,
  IOurProducts,
  NewsItem,
} from "../types/constants";

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

export const connectOptions: ConnectOption[] = [
  {
    title: "Connect via API",
    description:
      "Securely link your investment accounts like Binance, Coinbase, or Robinhood using API keys.",
    actionText: "Connect API",
    method: "api",
  },
  {
    title: "Upload CSV",
    description:
      "Import your portfolio easily by uploading a CSV file exported from your broker or exchange.",
    actionText: "Upload CSV",
    method: "csv",
  },
  {
    title: "Add Manually",
    description:
      "Manually input your assets to track and analyze your custom portfolio.",
    actionText: "Add Assets",
    method: "manual",
  },
];

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Stock Market Hits New Highs",
    description:
      "The stock market has seen significant growth recently, with major indices reaching all-time highs.",
    date: "2025-04-27",
    category: "stocks",
    image: economic_abacus,
  },
  {
    id: 2,
    title: "Bitcoin Reaches $100,000",
    description:
      "Bitcoin continues its upward trend, hitting a new milestone of $100,000 per coin.",
    date: "2025-04-25",
    category: "cryptocurrency",
    image: bitcoin_news,
  },
  {
    id: 3,
    title: "Gold Prices Surge Amid Inflation Concerns",
    description:
      "Investors are turning to gold as a safe haven as inflation worries rise globally.",
    date: "2025-04-23",
    category: "precious metals",
    image: gold,
  },
  {
    id: 4,
    title: "Global Economic Outlook for 2025",
    description:
      "A detailed analysis of the global economy and expected trends in various asset classes for the year.",
    date: "2025-04-22",
    category: "general",
    image: global,
  },
];

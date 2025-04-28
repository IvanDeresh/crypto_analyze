export interface IOurProducts {
  id: number;
  name: string;
  icon: string;
  category: string;
}

export interface IFeedBack {
  userId: number;
  userName: string;
  rating: number;
  text: string;
}

export interface ConnectOption {
  title: string;
  description: string;
  actionText: string;
  method: "api" | "csv" | "manual";
}

export interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  category: "stocks" | "cryptocurrency" | "precious metals" | "general";
  image: string;
}

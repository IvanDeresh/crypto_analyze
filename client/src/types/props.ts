import { MouseEventHandler } from "react";

export type LayoutProps = {
  children: React.ReactNode;
};

export type ButtonProps = {
  label: string;
  type?: "submit" | "reset" | "button";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  styles: string;
};

export type FeedBackItemProps = {
  userName: string;
  rating: number;
  text: string;
};

export type OurProductsProps = { name: string; icon: string; category: string };

export interface Portfolio {
  platform: string;
  accountName: string;
  credentials: Record<string, string | number>;
  connectedAt: string;
}
export interface User {
  _id: string;
  name: string;
  email: string;
  portfolios: Portfolio[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

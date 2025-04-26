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

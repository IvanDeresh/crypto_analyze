import { Request } from "express";

export interface AuthenticatedRequest extends Request {
  user?: any;
}
export interface IPortfolio extends Document {
  platform: string;
  accountName?: string;
  connectedAt: Date;
  credentials: any;
}
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  portfolios: IPortfolio[];
}

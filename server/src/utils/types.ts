import { Request } from "express";

export interface AuthTokenPayload {
  userId: string;
  role: string;
  type: "access" | "refresh";
}

export interface AuthenticatedRequest extends Request {
  authUser?: AuthTokenPayload;
}
import { User } from "@/Model/Interfaces";
import { genericAPI } from "./GenericAPI";
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import Cookies from "universal-cookie";

interface LoginResponse {
  token: string;
}

class UserAPI {
  static readonly endpoint = "/users";
  private cookies = new Cookies();

  async signUp(userData: User): Promise<void> {
    try {
      await genericAPI.post(`${UserAPI.endpoint}/signup`, userData);
    } catch (error) {
      console.error("Error signing up user:", error);
      throw new Error("Error signing up user");
    }
  }

  async userLogin(email: string, password: string): Promise<string | null> {
    try {
      const response: AxiosResponse<LoginResponse> = await genericAPI.post(`${UserAPI.endpoint}/login`, { email, password });
      const token = response.data.token;
      this.setTokenInCookie(token); // Set token as a cookie in the front end
      return token;
    } catch (error) {
      console.error("Error logging in:", error);
      throw new Error("Error logging in");
    }
  }

  setTokenInCookie(token: string): void {
    this.cookies.set('token', token, { path: '/', httpOnly: true, secure: true, sameSite: 'strict' });
  }
  
  async addOrder(userId: string, orderData: any): Promise<void> {
    try {
      const token = this.getToken();
      if (!token) {
        throw new Error("Authentication token is missing.");
      }
  
      const headers: AxiosRequestConfig['headers'] = {
        Authorization: `Bearer ${token}`,
      };
  
      await genericAPI.post(`${UserAPI.endpoint}/${userId}/add-order`, orderData, headers);
    } catch (error) {
      console.error("Error adding order to user:", error);
      throw new Error("Error adding order to user");
    }
  }

  getToken(): string | null {
    const token = this.cookies.get('token');
    return token || null;
  }
  
}

export const userAPI = new UserAPI();

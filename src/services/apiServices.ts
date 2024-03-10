import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const URL = "http://localhost:3000/api";

class ApiService {

  async get<T>(url: string, headers?: AxiosRequestConfig["headers"], options: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    return axios.get<T>(`${URL}${url}`, { ...options, headers });
  }

  async post<T>(
    url: string,
    data: unknown,
    headers?: AxiosRequestConfig["headers"],
    options: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T>> {
    return axios.post<T>(`${URL}${url}`, data, { ...options, headers });
  }

  async put<T>(
    url: string,
    data: unknown,
    headers?: AxiosRequestConfig["headers"],
    options: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T>> {
    return axios.put<T>(`${URL}${url}`, data, { ...options, headers });
  }

  async delete<T>(url: string, headers?: AxiosRequestConfig["headers"], options: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    return axios.delete<T>(`${URL}${url}`, { ...options, headers });
  }
}

export const apiService = new ApiService();
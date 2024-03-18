import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const URL = "http://localhost:3000/api";

class ApiService {
  get = async <T>(url: string, headers?: AxiosRequestConfig["headers"], options: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> => {
    return axios.get<T>(`${URL}${url}`, { ...options, headers });
  };

  post = async <T>(
    url: string,
    data: unknown,
    headers?: AxiosRequestConfig["headers"],
    options: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T>> => {
    return axios.post<T>(`${URL}${url}`, data, { ...options, headers });
  };

  put = async <T>(
    url: string,
    data: unknown,
    headers?: AxiosRequestConfig["headers"],
    options: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T>> => {
    return axios.put<T>(`${URL}${url}`, data, { ...options, headers });
  };

  delete = async <T>(url: string, headers?: AxiosRequestConfig["headers"], options: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> => {
    return axios.delete<T>(`${URL}${url}`, { ...options, headers });
  };
}

export const apiService = new ApiService();

import axios, { AxiosResponse } from 'axios';

import delay from '../../shared/utils/delay';

interface RequestConfig {
  headers?: Record<string, string>;
}

class HttpClient {
  private makeRequest;

  constructor(baseURL: string) {
    this.makeRequest = axios.create({ baseURL });
    this.makeRequest.defaults.headers.common.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzQ4NjAwNzQsImV4cCI6MTY3NDk0NjQ3NCwic3ViIjoiNjNhYjg5YTE0MjEzODNjM2IyODY3NTdiIn0.7X1OpSCa4qY_i5L6T32g9_nZ4F8WT7cGBQVVZJHFWBA';
    this.makeRequest.interceptors.response.use(async (data) => {
      await delay(500);
      return data;
    });
  }

  get<TResponse = unknown>(path: string, config?: RequestConfig) {
    return this.makeRequest.get<TResponse>(path, config);
  }

  post<TResponse = unknown, TData = unknown>(path: string, data?: TData, config?: RequestConfig) {
    return this.makeRequest
      .post<TResponse, AxiosResponse<TResponse, TData>, TData>(path, data, config);
  }

  put<TResponse = unknown, TData = unknown>(path: string, data?: TData, config?: RequestConfig) {
    return this.makeRequest
      .put<TResponse, AxiosResponse<TResponse, TData>, TData>(path, data, config);
  }

  delete<TResponse = unknown>(path: string, config?: RequestConfig) {
    return this.makeRequest.delete<TResponse>(path, config);
  }
}

export default HttpClient;

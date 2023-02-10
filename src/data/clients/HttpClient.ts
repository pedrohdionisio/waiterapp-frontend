import axios, { AxiosResponse } from 'axios';

import delay from 'shared/utils/delay';

interface RequestConfig {
  headers?: Record<string, string>;
}

class HttpClient {
  private makeRequest;

  constructor(baseURL: string) {
    this.makeRequest = axios.create({ baseURL });
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

  patch<TResponse = unknown, TData = unknown>(path: string, data?: TData, config?: RequestConfig) {
    return this.makeRequest
      .patch<TResponse, AxiosResponse<TResponse, TData>, TData>(path, data, config);
  }

  delete<TResponse = unknown>(path: string, config?: RequestConfig) {
    return this.makeRequest.delete<TResponse>(path, config);
  }
}

export default HttpClient;

import { AxiosRequestConfig, AxiosResponse } from 'axios';
import api from '../api';

export default class HttpClient {
  async get(path: string, options?: AxiosRequestConfig): Promise<AxiosResponse> {
    return api.get(path, options);
  }

  async post(path: string, payload: unknown): Promise<AxiosResponse> {
    return api.post(path, payload);
  }

  // put(path, options) {
  //   return this.makeRequest(path, {
  //     method: 'PUT',
  //     body: options?.body,
  //     headers: options?.headers,
  //   });
  // }

  // delete(path, options) {
  //   return this.makeRequest(path, {
  //     method: 'DELETE',
  //     headers: options?.headers,
  //   });
  // }
}

/**
 *  @version 1.0.0
 *  @author ROny cb - Mrvalem
 *  @description Cliente HTTP para todas las peticiones Web basada en superagent: GET, POST, DELETE, PUT, PATCH
 *  @param {String} url: "/EndPoint"
 *  @param {Object} data: Payload
 */

import request from "superagent";

export default class Request {
  // web API url
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private captureErrorHttp = async (request: Promise<request.Response>) => {
    try {
      const response = await request;
      return { result: response.body, statusCode: response.status };
    } catch (error) {
      console.error(error);
      const { status } = error;
      if (status >= 400) {
        return { message: error.message, statusCode: status };
      }
      return { message: error.message, statusCode: 503 };
    }
  };

  get = async (url: string, data?: any) => {
    return await this.captureErrorHttp(
      request.get(this.baseUrl + url).query(data)
    );
  };

  post = async (url: string, data?: any) => {
    return await this.captureErrorHttp(
      request.post(this.baseUrl + url).send(data)
    );
  };

  delete = async (url: string, data?: any) => {
    return this.captureErrorHttp(request.delete(this.baseUrl + url).send(data));
  };

  put = (url: string, data?: any) => {
    return this.captureErrorHttp(request.put(this.baseUrl + url).send(data));
  };

  patch = (url: string, data?: any) => {
    return this.captureErrorHttp(request.patch(this.baseUrl + url).send(data));
  };
}

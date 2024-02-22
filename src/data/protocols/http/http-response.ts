export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  rateLimitExceeded = 429,
  serverError = 500,
  serverOverload = 503,
  serverOverloaded = 504,
}

export type HttpResponse<T> = {
  statusCode: HttpStatusCode;
  body?: T;
};

export type HttpRequest = {
  url: string;
  method: HttpMethod;
  body?: any;
  headers?: any;
};

export interface HttpClient<R = any> {
  request: ({
    method,
    url,
    body,
    headers,
  }: HttpRequest) => Promise<HttpResponse<R>>;
}

export enum HttpMethod {
  Post = "post",
  Get = "get",
  Patch = "patch",
  Put = "put",
  Delete = "delete",
}

export type HttpGetClientParams<T> = {
  url: string;
  body?: T;
};

export interface HttpGetClient<T, R> {
  get(params?: HttpGetClientParams<T>): Promise<HttpResponse<R>>;
}

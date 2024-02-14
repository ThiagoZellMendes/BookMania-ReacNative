import { HttpClient, HttpRequest, HttpResponse } from "@/data";
import axios, { AxiosResponse } from "axios";

import Config from "react-native-config";

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse<any>> {
    let axiosResponse: AxiosResponse;

    axios.defaults.headers.common["books-api-key"] = Config.API_KEY;

    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
      });
    } catch ({ message }: any) {
      axiosResponse = message as unknown as AxiosResponse<string>;
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}
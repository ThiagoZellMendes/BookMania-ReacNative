import { HttpClient, HttpRequest, HttpResponse } from '@/data';
import axios, { AxiosResponse } from 'axios';

import Config from 'react-native-config';

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse<any>> {
    let axiosResponse: AxiosResponse;

    if (Config.API_KEY) {
      axios.defaults.headers.common['books-api-key'] = Config.API_KEY;
    } else {
      throw new Error('API_KEY não está definida no arquivo de configuração');
    }

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

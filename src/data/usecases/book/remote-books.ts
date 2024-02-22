import { HttpClient, HttpMethod, HttpStatusCode } from '@/data';
import { IBooks, IGetBooks } from '@/domain';
import { UnexpectedError } from '@/domain/error/enexpected-error';
import { OverloadedError } from '@/domain/error/server-overloaded';
import Config from 'react-native-config';

export class RemoteBooks implements IGetBooks {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpClient<IBooks[]>,
  ) {}

  async exec(): Promise<IBooks[]> {
    const httpResponse = await this.httpGetClient.request({
      url: `${this.url}?api-key=${Config.API_KEY}`,
      method: HttpMethod.Get,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body as IBooks[];
      case HttpStatusCode.serverOverload:
        throw new OverloadedError();
      default:
        throw new UnexpectedError();
    }
  }
}

import { HttpClient, HttpMethod, HttpStatusCode } from '@/data';
import {
  IBooks,
  IGetBooks
} from '@/domain';
import { UnexpectedError } from '@/domain/error/enexpected-error';
import { OverloadedError } from '@/domain/error/server-overloaded';

export class RemoteBooks implements IGetBooks {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpClient<IBooks[]>,
  ) {}

  async exec(param?: string): Promise<IBooks[]> {
    const httpResponse = await this.httpGetClient.request({
      url: this.url + param,
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

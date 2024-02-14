import { HttpClient, HttpMethod, HttpStatusCode } from "@/data";
import { IBookDescription, IGetBookDescription } from "@/domain";
import { UnexpectedError } from "@/domain/error/enexpected-error";
import { OverloadedError } from "@/domain/error/server-overloaded";

export class RemoteBookDescription implements IGetBookDescription {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpClient<IBookDescription>
  ) {}

  async exec(param: string): Promise<IBookDescription> {
    const httpResponse = await this.httpGetClient.request({
      url: this.url + param + "?extended=full",
      method: HttpMethod.Get,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body as IBookDescription;
      case HttpStatusCode.serverOverload:
        throw new OverloadedError();
      default:
        throw new UnexpectedError();
    }
  }
}

import { RemoteBookDescription } from "@/data";
import { manufactureApiUrl } from "@/main/factories/api/api-url-factory";
import { manufactureHttpClient } from "@/main/factories/http/http-client-factory";

export const manufactureGetRemoteDescriptionBooks =
  (): RemoteBookDescription =>
    new RemoteBookDescription(
      manufactureApiUrl("/"),
      manufactureHttpClient()
    );

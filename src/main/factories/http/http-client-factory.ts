import { AxiosHttpClient } from "@/infra/http/axios";


export const manufactureHttpClient = (): AxiosHttpClient =>
  new AxiosHttpClient();

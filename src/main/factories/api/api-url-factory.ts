import { APIsConfig } from "@/infra/config/api";

const { Books } = APIsConfig;
export const manufactureApiUrl = (path: string): string =>
  `${Books.baseUrl}/${path}`;
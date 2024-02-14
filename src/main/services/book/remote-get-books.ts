import { RemoteBooks } from '@/data';
import { manufactureApiUrl } from '@/main/factories/api/api-url-factory';
import { manufactureHttpClient } from '@/main/factories/http/http-client-factory';

export const manufactureGetRemoteBooks = (): RemoteBooks =>
  new RemoteBooks(manufactureApiUrl('/list/books'), manufactureHttpClient());

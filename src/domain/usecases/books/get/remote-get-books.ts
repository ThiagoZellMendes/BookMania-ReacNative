import { IBooks } from '@/domain';

export interface IGetBooks {
  exec: (param?: string) => Promise<IBooks[]>;
}

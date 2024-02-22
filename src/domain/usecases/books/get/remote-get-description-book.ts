import { IBookDescription } from "@/domain";



export interface IGetBookDescription {
  exec: (param: string) => Promise<IBookDescription>
}
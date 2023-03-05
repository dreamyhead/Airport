import {Ticket} from "../../../../../../main-layout/shared/interfaces/ticket";

export interface User {
  id?: number,
  login?: string,
  password?: string,
  role: string,
  name: string,
  lastName: string,
  surName?: string,
  serialOfPassport?: number,
  NumberOfPassport?: number,
  ticket?: Ticket[]
}

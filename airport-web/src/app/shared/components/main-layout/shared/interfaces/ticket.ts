import {Flight} from "./flight";
import {User} from "../../../admin-layout/shared/components/employee/shared/interfaces/User";

export interface Ticket {
  id?: number,
  numberOfFlight?: number,
  numberOfPlace?: number,
  price: number,
  isBusy?: boolean,
  flightId: number,
  flight?: Flight,
  user?: User
}

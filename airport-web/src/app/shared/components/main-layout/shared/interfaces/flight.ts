import {Ticket} from "./ticket";
import {Airplane} from "../../../admin-layout/shared/components/airplane/shared/interfaces/airplane";

export interface Flight {
  id?: number,
  startPoint: string,
  endPoint: string,
  startDate: string,
  endDate: string,
  tickets?: Ticket[],
  airplaneId: number,
  airplane?: Airplane
}

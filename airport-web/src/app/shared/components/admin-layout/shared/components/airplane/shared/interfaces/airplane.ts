import {Flight} from "../../../../../../main-layout/shared/interfaces/flight";

export interface Airplane {
  id?: number,
  name: string,
  numberPlaces: number,
  isBusy: boolean,
  isBought?: boolean,
  isDecommissioned?: boolean,
  flight: Flight
}

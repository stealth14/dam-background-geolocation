import { db } from "./data";

export interface Location {
  lng: number;
  lat: number;
  date: string;
}

export const postLocation = async (location: Location) => {
  const data = {
    lng: location.lng,
    lat: location.lat,
    date: location.date,
  };

  await db.collection("locations").doc().set(data);
};

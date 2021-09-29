import { db } from "./data";

export interface Location {
  lng: number;
  lat: number;
  date: string;
}

export const postLocation = async (location: Location) => {
  const data = {
    ownerId: location.lng,
    fromName: location.lat,
  };

  await db.collection("locations").doc().set(data);
};

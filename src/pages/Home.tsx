import React from "react";
import { useState, useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import moment from "moment";
import { getLocation } from "../lib/geolocation";
import { Location, postLocation } from "../data/location";

const Home: React.FC = () => {
  const [current, setCurrent] = useState("Tracking location...");

  const send = async () => {
    const coords = await getLocation();

    let location = {
      lat: coords?.lat,
      lng: coords?.lng,
      date: moment().format("MMMM Do YYYY, h:mm:ss a").toString(),
    } as Location;

    postLocation(location);
    setCurrent(
      `Last location synchronized: lat:${Number(location.lat).toFixed(
        2
      )} lng:${Number(location.lng).toFixed(2)}`
    );
  };

  useEffect(() => {
    setInterval(() => {
      send();
    }, 3000);
  }, []);

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Location sniffer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonTitle>{current}</IonTitle>
      </IonContent>
    </IonPage>
  );
};

export default Home;

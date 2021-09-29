import React from "react";
import { useState, useEffect } from "react";
import {
  IonButton,
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
  const send = async () => {
    const coords = await getLocation();

    let location = {
      lat: coords?.lat,
      lng: coords?.lng,
      date: moment().format("MMMM Do YYYY, h:mm:ss a").toString(),
    } as Location;

    postLocation(location);
    console.log("location sent")
  };

  const onClick = async () => {
    send();
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
          <IonTitle>Inbox</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton onClick={onClick} expand="block">
          Send
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;

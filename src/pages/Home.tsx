import React from "react";
import { useState, useEffect } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";

import moment from "moment";
import { geolocate } from "../lib/geolocation";
import { Location, postLocation } from "../data/location";

const Home: React.FC = () => {
  const send = async (lat: string, lng: string) => {
    let message = {
      lat,
      lng,
      date: moment().format("MMMM Do YYYY, h:mm:ss a").toString(),
    } as Location;

    postLocation(message);
  };

  const onClick = async () => {
    geolocate();

  };

  useEffect(() => {
    
    document.addEventListener(
      "deviceready",
      () => {
        geolocate();
        console.log("ready!!");
      },
      false
    );

    console.log("ready!!");
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

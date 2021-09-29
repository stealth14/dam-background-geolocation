import React, { useState } from 'react';
import { login, register } from '../data/users';

import {
  IonApp, 
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonInput,
  IonList,
  IonItem,
  IonLabel,
  IonButton
} from '@ionic/react';


const LoginForm = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ formErrors, setFormErrors ] = useState({});

  const submit = async () => {
    try {
        const id = "";

        let user = {email, password, firstName, lastName, id};

        login(user, password);
    } catch (e) {
      setFormErrors(e);
    }
  }

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Login
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form onSubmit={(e) => { e.preventDefault(); submit();}}>
          {/* <div>
            {formErrors ? (
              formErrors.message
            ): null}
          </div> */}
          <IonList>
            <IonItem>
              <IonLabel>Email</IonLabel>
              <IonInput name="email" type="email" value={email} onIonChange={(e) => setEmail(e.detail.value!)}/>
            </IonItem>
            <IonItem>
              <IonLabel>Password</IonLabel>
              <IonInput name="password" type="password" value={password}    onIonChange={(e) => setPassword(e.detail.value!)}/>
            </IonItem>
            <IonItem>
              <IonLabel>First name</IonLabel>
              <IonInput name="firstName" type="text" value={firstName}    onIonChange={(e) => setFirstName(e.detail.value!)}/>
            </IonItem>
            <IonItem>
              <IonLabel>Last name</IonLabel>
              <IonInput name="lastName" type="text" value={lastName}    onIonChange={(e) => setLastName(e.detail.value!)}/>
            </IonItem>
          </IonList>

          <IonButton expand="full" type="submit">Log in</IonButton>
          <IonButton expand="full" type="submit">Register</IonButton>
        </form>
      </IonContent>
    </>
  )
}

export default LoginForm;
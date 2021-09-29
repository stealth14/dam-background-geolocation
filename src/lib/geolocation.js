import { Geolocation } from "@ionic-native/geolocation/ngx";

let options = {
  enableHighAccuracy: true,
  timeout: 25000,
};

export const getLocation = async () => {
  const geo = new Geolocation();

  try {
    const resp = await geo.getCurrentPosition(options);

    return { lat: resp.coords.latitude, lng: resp.coords.longitude };
  } catch (e) {
    alert(e.message);

    return null
  }
};

export const listen = () => {
  let watch = Geolocation.watchPosition();
  watch.subscribe((data) => {
    // data.coords.latitude
    // data.coords.longitude
  });
};

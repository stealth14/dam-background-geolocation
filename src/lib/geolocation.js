import { Geolocation } from "@ionic-native/geolocation/ngx";

let options = {
  enableHighAccuracy: true,
  timeout: 25000
};


export const geolocate = async () => {
  const geo = new Geolocation();
  console.log(geo)

  const resp = geo.getCurrentPosition(options);
  console.log(resp.coords);
  console.log(resp.coords);


  // return {
  //   lat: resp.coords.latitude,
  //   lng: resp.coords.longitude,
  // };
};

export const listen = () => {
  let watch = Geolocation.watchPosition();
  watch.subscribe((data) => {
    // data.coords.latitude
    // data.coords.longitude
  });
};

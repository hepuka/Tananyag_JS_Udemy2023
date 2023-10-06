const getPosition = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(err)
    );
  });
};

const register = () => {
  getPosition().then(res => {
    const { latitude, longitude } = res.coords;
    let obj = {};
    console.log(res);
    obj.lat = latitude;
    obj.lng = longitude;

    localStorage.setItem('coords', JSON.stringify(obj));
  });
};

register();

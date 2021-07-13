export class CityFormValues {
  id = undefined;
  text = "";
  value = "";
  country = "";

  constructor(city) {
    if (city) {
      this.id = activity.id;
      this.text = activity.text;
      this.value = activity.value;
      this.country = activity.country;
    }
  }
}

export class City {
  constructor(init) {
    Object.assign(this, init);
  }
}

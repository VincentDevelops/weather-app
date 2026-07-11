function getFTemp(data) {
  return data.currentConditions.temp;
}

function getCTemp(data) {
  return (getFTemp(data) - 32) * (5 / 9);
}

function getHumidity(data) {
  return data.currentConditions.humidity;
}

function getPressure(data) {
  return data.currentConditions.pressure;
}

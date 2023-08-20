function farenheitToCelsius(data) {
  if (typeof data === "number") {
    return (data - 32) / 1.8;
  }
  if (typeof data === "object") {
    return data.map((item) => (item - 32) / 1.8);
  }

  return 1;
}

module.exports = farenheitToCelsius;

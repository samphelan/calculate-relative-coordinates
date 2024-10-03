function toRadians(deg: number) {
  return deg * (Math.PI / 180);
}

function toDegrees(rad: number) {
  return rad * (180 / Math.PI);
}

function calculateNewCoordinates(lat1: number, lon1: number, distance: number, bearing: number) {
  const R = 6371000; // Earth's radius in meters
  const δ = distance / R; // Angular distance
  const θ = toRadians(bearing); // Convert bearing to radians

  // Convert lat1 and lon1 from degrees to radians
  lat1 = toRadians(lat1);
  lon1 = toRadians(lon1);

  // Calculate new latitude
  const lat2 = Math.asin(
    Math.sin(lat1) * Math.cos(δ) + Math.cos(lat1) * Math.sin(δ) * Math.cos(θ)
  );

  // Calculate new longitude
  const lon2 =
    lon1 +
    Math.atan2(
      Math.sin(θ) * Math.sin(δ) * Math.cos(lat1),
      Math.cos(δ) - Math.sin(lat1) * Math.sin(lat2)
    );

  // Convert the new latitude and longitude back to degrees
  return {
    latitude: toDegrees(lat2),
    longitude: toDegrees(lon2),
  };
}

module.exports = calculateNewCoordinates;

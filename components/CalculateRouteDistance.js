import axios from 'axios';

const CalculateRouteDistance = async (origin, destination, unitSystem, travelMode, apiKey, callback) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&units=${unitSystem}&mode=${travelMode}&key=${apiKey}`
    );

    console.log('response:', response.data)

    const { routes } = response.data;
    if (routes.length > 0) {
      const { distance } = routes[0].legs[0];
      callback(distance.value);
    } else {
      throw new Error('No routes found');
    }
  } catch (error) {
    console.error('Error calculating route distance:', error);
    callback(null);
  }
};

export default CalculateRouteDistance;
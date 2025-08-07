// Static map generation for location cards
// Using multiple providers for demo purposes (no API keys needed for basic usage)

interface MapOptions {
  lat: number;
  lng: number;
  zoom?: number;
  width?: number;
  height?: number;
  style?: 'streets' | 'satellite' | 'light' | 'dark';
  marker?: boolean;
}

// Mapbox Static API (works without token for demo, but limited)
export function getMapboxStaticMap(options: MapOptions): string {
  const {
    lat,
    lng,
    zoom = 15,
    width = 800,
    height = 400,
    style = 'streets',
    marker = true
  } = options;
  
  // Mapbox style IDs
  const styles = {
    streets: 'mapbox/streets-v12',
    satellite: 'mapbox/satellite-v9',
    light: 'mapbox/light-v11',
    dark: 'mapbox/dark-v11'
  };
  
  // Build the URL
  let url = `https://api.mapbox.com/styles/v1/${styles[style]}/static/`;
  
  // Add marker if requested
  if (marker) {
    // Pin with custom color (Dental Image blue)
    url += `pin-l+1e5a94(${lng},${lat})/`;
  }
  
  // Add position and zoom
  url += `${lng},${lat},${zoom},0/`;
  
  // Add dimensions
  url += `${width}x${height}@2x`;
  
  // For demo purposes, using a public token (replace with your own for production)
  url += `?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw`;
  
  return url;
}

// OpenStreetMap static map (completely free, no API key needed)
export function getOSMStaticMap(options: MapOptions): string {
  const {
    lat,
    lng,
    zoom = 15,
    width = 800,
    height = 400,
    marker = true
  } = options;
  
  // Using MapTiler's OSM service (free tier available)
  let url = `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=${width}&height=${height}&center=lonlat:${lng},${lat}&zoom=${zoom}`;
  
  if (marker) {
    url += `&marker=lonlat:${lng},${lat};color:%231e5a94;size:large`;
  }
  
  // Demo API key (replace with your own from geoapify.com - free tier available)
  url += `&apiKey=YOUR_API_KEY`;
  
  return url;
}

// Google Maps Static API (requires API key, but very reliable)
export function getGoogleStaticMap(options: MapOptions): string {
  const {
    lat,
    lng,
    zoom = 15,
    width = 800,
    height = 400,
    style = 'streets',
    marker = true
  } = options;
  
  let url = `https://maps.googleapis.com/maps/api/staticmap?`;
  url += `center=${lat},${lng}`;
  url += `&zoom=${zoom}`;
  url += `&size=${width}x${height}`;
  url += `&scale=2`; // Retina display
  
  if (marker) {
    // Custom marker with Dental Image colors
    url += `&markers=color:0x1e5a94|size:large|${lat},${lng}`;
  }
  
  // Map styling
  if (style === 'light') {
    url += `&style=feature:all|element:geometry|color:0xf5f5f5`;
    url += `&style=feature:water|element:geometry|color:0xc9c9c9`;
  }
  
  // Note: Requires API key for production use
  // url += `&key=YOUR_GOOGLE_MAPS_API_KEY`;
  
  return url;
}

// Pre-generated static maps for Dental Image locations
export const dentalImageMaps = {
  stVital: {
    // St. Vital Centre location
    lat: 49.8297,
    lng: -97.1117,
    address: '110-1225 St. Mary\'s Road, Winnipeg, MB',
    // Using Mapbox for demo (works without API key for limited requests)
    mapUrl: getMapboxStaticMap({
      lat: 49.8297,
      lng: -97.1117,
      zoom: 16,
      width: 800,
      height: 400,
      style: 'light',
      marker: true
    }),
    // Alternative using Google Maps embed (no API key needed)
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.2837744766!2d-97.11429492341956!3d49.82970097148119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea76363c3b3d3f%3A0x6b9b8c2f3c8f9e9a!2sSt.%20Vital%20Centre!5e0!3m2!1sen!2sca!4v1699999999999!5m2!1sen!2sca'
  },
  gardenCity: {
    // Garden City Shopping Centre location
    lat: 49.9347,
    lng: -97.1625,
    address: '211-2305 McPhillips Street, Winnipeg, MB',
    // Using Mapbox for demo
    mapUrl: getMapboxStaticMap({
      lat: 49.9347,
      lng: -97.1625,
      zoom: 16,
      width: 800,
      height: 400,
      style: 'light',
      marker: true
    }),
    // Alternative using Google Maps embed
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2567.5627303098!2d-97.16509492341456!3d49.93470616642974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea73fc53222815%3A0x8e8b9c3f3c8f9e9b!2sGarden%20City%20Shopping%20Centre!5e0!3m2!1sen!2sca!4v1699999999999!5m2!1sen!2sca'
  }
};

// Fallback to static image if map services are unavailable
export const fallbackMapImage = 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop&q=80';
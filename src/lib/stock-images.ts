// Stock image URLs for demo purposes
// Using Unsplash's direct image URLs (no API key needed for demo)

export const stockImages = {
  hero: {
    // Modern dental office images
    officeMain: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&h=1080&fit=crop',
    dentistChair: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1920&h=1080&fit=crop',
    modernClinic: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1920&h=1080&fit=crop',
  },
  
  team: {
    // Professional medical team
    dentist1: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&h=600&fit=crop',
    dentist2: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=600&fit=crop',
    dentist3: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&h=600&fit=crop',
    team: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop',
  },
  
  services: {
    // Service-specific images
    generalDentistry: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop',
    cosmetic: 'https://images.unsplash.com/photo-1609207825181-52d3214556dd?w=800&h=600&fit=crop',
    emergency: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop',
    pediatric: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&h=600&fit=crop',
    orthodontics: 'https://images.unsplash.com/photo-1606811971618-4a6c2c8f7c92?w=800&h=600&fit=crop',
    implants: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=600&fit=crop',
  },
  
  locations: {
    // Location/building images
    modernBuilding: 'https://images.unsplash.com/photo-1554232682-b9ef9c92f8de?w=800&h=400&fit=crop',
    reception: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=400&fit=crop',
    waitingRoom: 'https://images.unsplash.com/photo-1600959907703-125ba1374a12?w=800&h=400&fit=crop',
  },
  
  icons: {
    // Abstract medical/dental patterns
    pattern1: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=400&fit=crop',
    pattern2: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=400&fit=crop',
  }
};

// Function to get optimized image URL with specific dimensions
export function getStockImage(
  category: keyof typeof stockImages, 
  name: string, 
  width?: number, 
  height?: number
): string {
  const image = stockImages[category]?.[name];
  if (!image) return '';
  
  // If custom dimensions requested, modify the URL
  if (width || height) {
    const url = new URL(image);
    if (width) url.searchParams.set('w', width.toString());
    if (height) url.searchParams.set('h', height.toString());
    return url.toString();
  }
  
  return image;
}

// Pexels alternative URLs (no API key needed for direct image links)
export const pexelsImages = {
  dental: {
    // Direct Pexels image URLs
    clinic1: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&w=1920&h=1080',
    clinic2: 'https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg?auto=compress&w=1920&h=1080',
    tools: 'https://images.pexels.com/photos/6502633/pexels-photo-6502633.jpeg?auto=compress&w=800&h=600',
    smile: 'https://images.pexels.com/photos/3845553/pexels-photo-3845553.jpeg?auto=compress&w=800&h=600',
  }
};
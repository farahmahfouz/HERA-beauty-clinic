export interface ClinicInfo {
  clinicName: string;
  email: string;
  phone: string;
  location: {
    coordinates: [number, number];
    address: string;
    googleMapLink?: string;
  };
  workingHours: {
    open: string;
    close: string;
  };
  social: {
    facebook?: string;
    instagram?: string;
    tiktok?: string;
    whatsapp?: string;
  };
  logo?: string;
  coverImage?: string;
  gallery?: string[];
}
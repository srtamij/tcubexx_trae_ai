export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: {
    main: string;
    gallery?: string[];
  };
  stock: number;
  specifications?: Record<string, string>;
}

export const products: Product[] = [
  {
    id: "rpi-5",
    name: "Raspberry Pi 5",
    description: "The latest Raspberry Pi with enhanced performance",
    price: 59.99,
    category: "development-boards",
    images: {
      main: "/images/products/development-boards/raspberry-pi-5-main.jpg",
      gallery: [
        "/images/products/development-boards/raspberry-pi-5-angle.jpg",
        "/images/products/development-boards/raspberry-pi-5-ports.jpg"
      ]
    },
    stock: 10,
    specifications: {
      processor: "2.4GHz quad-core ARM Cortex-A76",
      ram: "4GB LPDDR4X",
      gpio: "40-pin GPIO header"
    }
  },
  {
    id: "arduino-uno-r4",
    name: "Arduino UNO R4",
    description: "The next generation of the most popular Arduino board",
    price: 29.99,
    category: "development-boards",
    images: {
      main: "/images/products/development-boards/arduino-uno-r4-main.jpg"
    },
    stock: 15,
    specifications: {
      processor: "Renesas RA4M1",
      ram: "32KB SRAM",
      flash: "256KB Flash"
    }
  }
  // ... Add more products
];
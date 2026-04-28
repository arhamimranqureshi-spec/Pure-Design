"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import USAIcon from "@/public/assets/images/USA.svg";
import UKIcon from "@/public/assets/images/UK.svg";

interface GeoData {
  country: string;
  currencySymbol: string;
  phone: string;
  address: string;
  icon: typeof USAIcon;
}

const defaultGeo: GeoData = {
  country: "US",
  currencySymbol: "$",
  phone: "+1 940 2454 561",
  // phone: "+1 ",
  address: "8 The Green, Suite B Dover, DE 19901",
  icon: USAIcon,
};

const GeoContext = createContext<GeoData | null>(null);

export function GeoProvider({ children }: { children: ReactNode }) {
  const [geoData, setGeoData] = useState<GeoData>(defaultGeo);

  useEffect(() => {
    async function fetchGeoData() {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        if (data.country_code === "GB") {
          setGeoData({
            country: "GB",
            currencySymbol: "£",
            phone: "+44 20 7946 0958",
            address: "941 Stratford Road, Hall Green, Birmingham, England, B28 8BH",
            icon: UKIcon,
          });
        }
      } catch (err) {
        console.log("Geo API error", err);
      }
    }

    fetchGeoData();
  }, []);

  return <GeoContext.Provider value={geoData}>{children}</GeoContext.Provider>;
}

export const useGeo = () => {
  const context = useContext(GeoContext);
  if (!context) throw new Error("useGeo must be used within a GeoProvider");
  return context;
};

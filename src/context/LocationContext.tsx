import { createContext, useContext, useState, useEffect } from "react";

type LocationContextType = {
  city: string;
  setCity: (city: string) => void;
};

const LocationContext = createContext<LocationContextType | null>(null);

export const LocationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // 🔹 city initialize from localStorage (single source of truth)
  const [city, setCityState] = useState<string>(() => {
    return localStorage.getItem("city") || "Patna";
  });

  // 🔹 wrapper function (IMPORTANT)
  const setCity = (newCity: string) => {
    setCityState(newCity);
    localStorage.setItem("city", newCity);
  };

  // 🔹 safety sync (optional but good)
  useEffect(() => {
    localStorage.setItem("city", city);
  }, [city]);

  return (
    <LocationContext.Provider value={{ city, setCity }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("useLocation must be used inside LocationProvider");
  }
  return context;
};

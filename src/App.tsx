import AppRoutes from "./routes/AppRoutes";
import { LocationProvider } from "./context/LocationContext";

export default function App() {
  return (
    <LocationProvider>
      <AppRoutes />
    </LocationProvider>
  );
}

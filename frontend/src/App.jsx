import { useState } from "react";
import TripForm from "./components/TripForm";
import RouteMap from "./components/RouteMap";
import LogDisplay from "./components/LogDisplay";

export default function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="p-4">
      <TripForm onResult={setResult} />
      {result && <RouteMap geometry={result.route_geometry} />}
      {result && <LogDisplay logs={result.logs.logs} />}
      {result && result.logs.HOS_warning && (
        <div className="text-red-500 font-bold">⚠️ HOS Rule Violated!</div>
      )}
    </div>
  );
}

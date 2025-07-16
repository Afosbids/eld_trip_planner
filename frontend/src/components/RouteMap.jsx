import { MapContainer, TileLayer, Polyline } from "react-leaflet";

export default function RouteMap({ geometry }) {
  return (
    <MapContainer
      center={[37.7749, -122.4194]}
      zoom={5}
      className="h-96 w-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Polyline
        positions={geometry.coordinates.map((c) => [c[1], c[0]])}
        color="blue"
      />
    </MapContainer>
  );
}

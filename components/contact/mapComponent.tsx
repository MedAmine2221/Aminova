"use client";;
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix missing marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/mark.png",
  iconUrl: "/mark.png",
  shadowUrl: undefined,
});

export default function MapComponent() {
  return (
    <MapContainer
      center={[35.820310, 10.562323]}
      zoom={13}
      style={{ height: "350px", width: "600px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[35.820310, 10.562323]}>
        <Popup>AMA Academy</Popup>
      </Marker>
    </MapContainer>
  );
}
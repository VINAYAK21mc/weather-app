"use client";
import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useGlobalContext } from "@/app/Context/globalContext";
import { Skeleton } from "@/components/ui/skeleton";

function FlyToActiveCity({ activeCityCords }) {
  const map = useMap();

  useEffect(() => {
    if (activeCityCords) {
      const zoomLev = 13;
      const flyToOptions = {
        duration: 1.5,
      };

      map.flyTo(
        [activeCityCords?.lat, activeCityCords?.lon],
        zoomLev,
        flyToOptions
      );
    }
  }, [activeCityCords, map]);

  return null;
}

function Mapbox() {
  const { forecast } = useGlobalContext(); // Your coordinates
  // console.log(forecast?.coord)

  const activeCityCords = forecast?.coord;

  if (!forecast || !forecast.coord || !activeCityCords) {
    return (
     <Skeleton className="h-[12rem] w-full" />
    );
  }
  let cords=[Number(activeCityCords.lat), Number(activeCityCords.lon)]

  return (
    <div className="flex-1 basis-[50%] border rounded-lg">
      <MapContainer
        center={cords}
        zoom={13}
        className="rounded-lg m-4"
        style={{ height: "calc(100% - 2rem)", width: "calc(100% - 2rem)" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={cords}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        <FlyToActiveCity activeCityCords={activeCityCords} />
      </MapContainer>
    </div>
  );
}

export default Mapbox;

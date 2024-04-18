"use client";
import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useGlobalContext } from "@/app/Context/globalContext";

function FlyToActiveCity({ activeCityCords }: any) {
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
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
  let cords=[Number(activeCityCords.lat), Number(activeCityCords.lon)]
  let attr='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

  return (
    <div className="flex-1 basis-[50%] border rounded-lg">
      <MapContainer
        bounds={cords}
        className="rounded-lg m-4"
        style={{ height: "calc(100% - 2rem)", width: "calc(100% - 2rem)" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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

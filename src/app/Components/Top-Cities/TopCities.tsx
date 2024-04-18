import { useGlobalContextUpdate } from '@/app/Context/globalContext';
import defaultStates from '@/app/Utils/defaultStates';
import React from 'react'

const TopCities = () => {
    const { setActiveCityCoords } = useGlobalContextUpdate();

    const getClickedCityCords = (lat: number, lon: number) => {
      setActiveCityCoords([lat, lon]);
  
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  return (
    <div className="flex flex-col gap-4">
                {defaultStates.map((state, index) => {
                  return (
                    <div
                      key={index}
                      className="border rounded-lg cursor-pointer dark:bg-dark-grey shadow-sm dark:shadow-none"
                      onClick={() => {
                        getClickedCityCords(state.lat, state.lon);
                      }}
                    >
                      <p className="px-6 py-4">{state.name}</p>
                    </div>
                  );
                })}
              </div>
  )
}

export default TopCities
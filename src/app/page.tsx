import Navbar from "./Components/Navbar";
import Temperature from "./Components/Temperature/Temperature";
import AirPollution from "./Components/Airpollution/Airpollution";
import FivedayForecast from "./Components/FivedayForecast/FivedayForecast";
import Sunset from "./Components/Sunset/Sunset";
import Wind from "./Components/Wind/Wind";
import Dailyforecast from "./Components/Dailyforecast/Dailyforecast";
import UvIndex from "./Components/UvIndex/UvIndex";
import Population from "./Components/Population/Population";
import FeelsLike from "./Components/FeelsLike/FeelsLike";
import Humidity from "./Components/Humidity/Humidity";
import Visibility from "./Components/Visibility/Visibility";
import Pressure from "./Components/Pressure/Pressure";
import Mapbox from "./Components/Mapbox/Mapbox";
import TopCities from "./Components/Top-Cities/TopCities";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default function Home() {
  return (
    <main className="mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] xl-2:mx-[16rem] m-auto">
      <Navbar />
      <div className="pb-4 flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-4 w-full min-w-[18rem] md:w-[35rem]">
          <Temperature />
          <FivedayForecast />
        </div>
        <div className="flex flex-col w-full">
          <div className="instruments grid h-full gap-4 col-span-full sm-2:col-span-2 lg:grid-cols-3 xl:grid-cols-4">
            <AirPollution />
            <Sunset />
            <Wind />
            <Dailyforecast />
            <UvIndex />
            <Population />
            <FeelsLike />
            <Humidity />
            <Visibility />
            <Pressure />
          </div>
          <div className="mapbox-con mt-4 flex gap-4">
            <Mapbox />
            <div className="states flex flex-col gap-3 flex-1">
              <h2 className="flex items-center gap-2 font-medium">
                Top Large Cities
              </h2>
              <TopCities />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

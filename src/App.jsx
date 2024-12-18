import Banner from "./components/banner";
import Navbar from "./components/Navbar";
import ColorSelector from "./components/ColorSelector";
import InteriorColor from "./components/InteriorColor";
import WheelsSelector from "./components/WheelsSelector";
import ExteriorDisplay from "./components/ExteriorDisplay";
import InteriorDisplay from "./components/InteriorDisplay";
import FullSelfDriving from "./components/FullSelfDriving";
import Accessories from "./components/Accessories";
import TotalPrice from "./components/TotalPrice";
import PaymentBreakdown from "./components/PaymentBreakdown";

function App() {
  return (
    <>
      <Banner />
      <Navbar />
      <div className="flex flex-col md:flex-row md:h-screen overflow-hidden">
        <div className="w-full md:w-2/3 overflow-y-auto scrollbar-none p-4 bg-gray-100 px-10 mx-auto">
          <div className="space-y-4">
            <ExteriorDisplay />
            <InteriorDisplay />
          </div>
        </div>
        <div className="w-full md:w-1/3 overflow-y-auto scrollbar-none p-4 bg-gray-200 mx-auto">
          <div className="space-y-4">
            <h2 className="flex pt-6 text-4xl font-semibold justify-center">
              Model Y
            </h2>
            <p className="flex justify-center text-xl">Customize Your Car</p>
            <ColorSelector />
            <InteriorColor />
            <WheelsSelector />
            <FullSelfDriving />
            <Accessories />
            <TotalPrice />
            <PaymentBreakdown />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

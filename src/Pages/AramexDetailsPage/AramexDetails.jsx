import { Outlet, Link } from "react-router-dom";
import aramexLogo from "../../assets/aramex.png";

function AramexDetails() {
  return (
    <div className="space-y-10">
      
      <div className="flex items-center justify-between gap-10 rounded-2xl border border-gray-200 bg-white p-10 shadow-md">
        
        <div className="flex items-center gap-8">
          
          <div className="h-28 w-28 overflow-hidden rounded-xl border border-gray-300 bg-white">
            <img
              src={aramexLogo}
              alt="Aramex Company Logo"
              className="h-full w-full object-contain p-2"
            />
          </div>

          <div className="space-y-2">
            <h1 className="text-5xl font-bold text-gray-900">
              Aramex
            </h1>
            <p className="text-lg text-gray-500">
              Logistics and Delivery Services
            </p>
          </div>
        </div>

        <Link
          to="ViewProducts"
          className="rounded-xl bg-black px-8 py-4 text-lg font-semibold text-white transition hover:bg-gray-800"
        >
          View Products
        </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default AramexDetails;

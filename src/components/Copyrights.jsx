import React from "react";
import Methods from "../assets/imgs/methods.png";
const Copyrights = () => {
  return (
    <div className="bg-gray-800 py-4 bottom-0 w-full mt-20">
      <div className="container flex flex-warp items-center justify-between">
        <p className="text-white">
          <a className="text-xs" href="/"  rel="noreferrer">©NASIM AL AZRAK PORTAL L.L.C</a><br />
          {/* <a className="text-xs" href="https://lancerfree.com" target="_blank" rel="noreferrer">©NASIM AL AZRAK PORTAL L.L.C</a><br /> */}
          <p className="text-xs">License N. 1143226</p>
        </p>
        <p className="text-white">
          <a className="text-xs" href="https://consumerrights.ae/en/Pages/consumer-rights.aspx" target="_blank" rel="noreferrer">Consumer Regulations</a><br />
        </p>
        <div className="flex flex-col">
          <div>
            <i className="text-white bg-red-500 mx-2 scale-75 rounded-full p-1 fa-brands fa-google"></i>
            <a
              href="mailto:support@epin-store.com"
              className="text-white text-xs underline"
            >
              support@epin-store.com
            </a>
          </div>
          <div>
            <i className="text-white bg-green-500 rounded-full mx-3 fa-brands fa-whatsapp"></i>
            <a
              href="https://api.whatsapp.com/send?phone=+905368998601&text=Can%20you%20help%20me"
              className="text-white underline text-xs"
            >
              +971 50 690 6157
            </a>
          </div>
        </div>
        <div>
          <img src={Methods} alt="methods" className="h-5" />
        </div>
      </div>
    </div>
  );
};

export default Copyrights;

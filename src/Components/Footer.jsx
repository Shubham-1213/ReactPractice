import { Link } from "react-router-dom";



function Footer() {
  return (
      <div className="h-full bg-gray-200">
          <div className="flex  flex-col gap-5 sm:flex-row py-24 text-black justify-evenly">
              <div className="text-black lg:w-[50%] flex flex-col gap-4">
                  <div className="font-3xl">
                      <span className="text-3xl text-black font-bold">
                          <span className="">Your</span>Logo.
                      </span>
                  </div>
                  <div>
                      <p className="font-semibold text-justify">
                          Intellio is a healthcare solutions firm focused on
                          providing global support that facilitates the
                          governments and organizations in providing the best
                          quality health at the most affordable cost. At
                          Intellio, we bring together a global team that harbors
                          a passion for health access and innovation.Read More..
                      </p>
                  </div>
                  <div>
                      <p className="text-lg font-bold">healthcare@support.com</p>
                  </div>
              </div>
              <div className="flex flex-col gap-6">
                  <h1 className="text-2xl font-bold">Quicl Links</h1>
                  <div className="flex flex-col gap-3">
                      <Link className="text-lg" to="/">
                          Home
                      </Link>
                      <Link className="text-lg" to="/">
                          About Us
                      </Link>
                      <Link className="text-lg" to="/">
                          Service
                      </Link>
                      <Link className="text-lg" to="/">
                          Contact US
                      </Link>
                  </div>
              </div>
              <div className="flex flex-col gap-6">
                  <h1 className="text-2xl font-bold">Our Product Portfolio</h1>
                  <div className="flex flex-col gap-3">
                      <Link className="text-lg" to="/">
                          Medical & Surgical Equipment
                      </Link>
                      <Link className="text-lg" to="/">
                          Medical Consumables
                      </Link>
                      <Link className="text-lg" to="/">
                          Laboratory Solutions
                      </Link>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Footer
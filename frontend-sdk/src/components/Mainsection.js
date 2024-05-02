import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import prompts from "./prompts.json";

const Mainsection = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

 
  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token, navigate]);

  let data =
    prompts.catchlines[Math.floor(Math.random() * prompts.catchlines.length)];

  return (
    <div className="w-full h-full overflow-hidden">
      <section
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 1, 3, 0.8), rgba(1, 29, 87, 0.7)), url(https://assets.cntraveller.in/photos/60ba1a540f3a5367ec9fe38e/master/pass/image-1366x768.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex flex-col items-center p-4 mobile:pb-20 mobile:pt-20 bg-black w-full lg:py-0"
      >
        <div className="flex flex-col items-center justify-center w-full h-full overflow-y-auto">
          <div className="w-full lg:w-2/3 border-dashed border-2 p-6 lg:mt-16 mt-12 text-center text-white">
            <h2 className="font-bold font-mont text-3xl sm:text-5xl mb-6">
              {data.heading}
            </h2>
            <p className="font-mont sm:text-xl mobile:text-base px-4 text-justify">
              {data.text}
            </p>
          </div>

          <div className="flex flex-col items-center lg:w-2/3 bg-white bg-opacity-60 rounded-lg mt-12 mb-12 p-6 sm:flex-row sm:justify-around">
            <div className="flex flex-col items-center">
              <h3 className="font-mont text-xl sm:text-2xl">
                Are You a Caterer?
              </h3>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1940/1940899.png"
                alt="caterer"
                className="h-16 mt-4 sm:h-20"
              />
              <Link to="/csignup">
                <button className="bg-phorange text-black font-semibold p-4 mt-4 rounded transition hover:bg-orange-600 hover:text-white">
                  Create Caterer Profile
                </button>
              </Link>
            </div>

            <div className="flex flex-col items-center mt-6 sm:mt-0">
              <h3 className="font-mont text-xl sm:text-2xl">
                Are You a Customer?
              </h3>
              <img
                src="https://cdn-icons-png.flaticon.com/512/4149/4149881.png"
                alt="customer"
                className="h-16 mt-4 sm:h-20"
              />
              <Link to="/usersignup">
                <button className="bg-phorange text-black font-semibold p-4 mt-4 rounded transition hover:bg-orange-600 hover:text-white">
                  Create User Profile
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mainsection;

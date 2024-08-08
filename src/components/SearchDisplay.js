import React from "react";
import { useTranslation } from "react-i18next";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

const SearchDisplay = ({ randomHotelsData={} }) => {
  const { t } = useTranslation();
  const {  _id} = randomHotelsData;
  console.log("id",_id);

  return (
    <Link to={`/hoteldetails/${_id}`} state={{ randomHotelsData }}>
      <div className="flex justify-center items-center mt-9">
        <div className="p-4">
          <div className="relative bg-white shadow-2xl mx-auto my-0 rounded-3xl border border-slate-300 border-solid h-[307px] z-20 p-3 md:px-8 md:py-4 max-[376px]:w-[290px] w-[395px] md:w-[95%] xl:w-[1340px]">
            <div className="flex justify-between items-center mb-4 md:m-0 gap-[8px]">
              <div className="flex">
                <h2 className="md:text-[40px] text-[20px] sm:text-[30px] max-[376px]:font-semibold font-extrabold">
                  {t("For")} <span className="text-rose-600">Toronto</span>
                </h2>
              </div>
              <span className="text-right font-medium md:text-[20px] sm:text-[15px] text-[10px]">
                23 May'24 - 24 May'24
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[20px] md:gap-[25px] pt-0 md:pt-4 justify-items-center">
              {randomHotelsData.map((hotel, index) => (
                <div
                  key={index}
                  className={`w-full max-w-[290px] h-[285px] rounded-3xl shadow-2xl truncate bg-white md:max-w-[300px] md:h-[350px] lg:h-[307px] sm:max-w-[200px] sm:h-[270px] ${
                    index > 1 ? "hidden md:block" : ""
                  } ${index > 0 ? "hidden lg:block" : ""}`}
                >
                  <div
                    className="w-[290px] h-[100px] bg-cover bg-center md:w-[300px] md:h-[160px] sm:w-[200px] sm:h-[130px]"
                    style={{ backgroundImage: `url(${hotel.imageURLs[0]})` }}
                  ></div>
                  <div className="p-2 md:p-3">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-[12px] md:text-[15px]">
                        {hotel.name}
                      </h3>
                      <p className="font-semibold text-[12px] md:text-[15px]">
                        ${hotel.price}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="font-medium text-[10px] text-slate-500">
                        {hotel.city}
                      </p>
                      <span className="font-medium text-[10px] text-slate-500">
                        {t("per night")}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 mt-2 pt-0 md:pt-1">
                      {hotel.amenities.slice(0, 4).map((amenity, i) => (
                        <div key={i} className="flex items-center">
                          <span className="w-4 h-4 mr-[4px]">
                            {getAmenityIcon(amenity)}
                          </span>
                          <span className="text-[12px]">{t(amenity)}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex mt-[8px] justify-center">
                      <Rating
                        name="half-rating-read"
                        defaultValue={hotel.reviews}
                        precision={0.1}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const getAmenityIcon = (amenity) => {
  switch (amenity) {
    case "Free WiFi":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clipPath="url(#clip0_631_94)">
            <path
              d="M8.03773 14.0206C9.07006 14.0206 9.90694 13.1837 9.90694 12.1514C9.90694 11.119 9.07006 10.2822 8.03773 10.2822C7.00539 10.2822 6.16852 11.119 6.16852 12.1514C6.16852 13.1837 7.00539 14.0206 8.03773 14.0206Z"
              fill="#00B0F3"
            />
            <path
              d="M12.505 7.64785C12.4773 7.61934 12.448 7.59391 12.4195 7.56772L12.3355 7.48836C12.3216 7.47372 12.3062 7.46293 12.2885 7.44906C9.87148 5.25317 6.17236 5.34023 3.86551 7.64708L3.59507 7.91829L3.22061 8.29275C2.76448 8.74888 2.76679 9.4924 3.22369 9.9493C3.68136 10.4077 4.42489 10.4085 4.88025 9.95238L5.52592 9.30671C6.99293 7.84047 9.37914 7.84047 10.8454 9.30594L11.3115 9.75745C11.763 10.209 12.4996 10.2082 12.9534 9.7536C13.173 9.53478 13.294 9.24276 13.2948 8.93226C13.2955 8.62329 13.1761 8.33127 12.9565 8.11322L12.505 7.64785Z"
              fill="#00B0F3"
            />
            <path
              d="M15.6895 5.33716L15.3011 4.94884C15.2996 4.9473 15.2988 4.94498 15.2958 4.94421L14.9891 4.63602C14.9352 4.58285 14.8766 4.53662 14.815 4.49656C10.8754 1.03783 4.88335 1.14416 1.06942 4.81323C1.05093 4.83018 1.03013 4.84174 1.01163 4.86023L0.310487 5.56215C-0.105578 5.97744 -0.103266 6.65316 0.31511 7.07154C0.732716 7.48914 1.40844 7.49222 1.8245 7.07539L2.52565 6.37501C2.53027 6.36885 2.53412 6.36346 2.53875 6.3596C5.62302 3.38012 10.5156 3.36163 13.6246 6.29874L14.1762 6.85118C14.5915 7.26647 15.2688 7.26493 15.6864 6.84732C16.1032 6.42895 16.1048 5.75246 15.6895 5.33716Z"
              fill="#00B0F3"
            />
          </g>
          <defs>
            <clipPath id="clip0_631_94">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "Breakfast Included":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M6.1425 15.5H4.5C3.5 15.5 2.5 15.25 2.5 13.75C2.5 12.25 2.5 11.5 3.25 10.5C3.55 10.1025 3.8875 9.90249 4.2825 9.67749C4.2875 9.69249 4.295 9.70749 4.3025 9.72249C4.4225 9.96499 4.655 10.11 4.925 10.11C5.155 10.11 5.3675 10.0075 5.5725 9.90749C5.7125 9.84249 5.9 9.74999 6 9.74999C6.0675 9.74999 6.25 9.74999 6.25 10.24C6.23 10.3975 5.91 10.8725 5.7 11.1875C5.2325 11.88 4.75 12.595 4.75 13.25C4.75 14.035 5.4525 14.955 6.1425 15.5Z"
            fill="#008FC6"
          />
          <path
            d="M13.25 2.925C13.25 2.98 13.24 3.0375 13.22 3.09C13.125 3.335 12.77 4 11.75 4C11.75 4 11 4 11 4.5C11 4.72 11.1925 5.13 11.41 5.67C10.9975 5.8075 10.5825 6.055 10.3225 6.4925C10.0225 6.9925 10.015 7.5775 10.01 8.095C10.0025 8.725 9.98503 9.1225 9.68753 9.36C9.57003 9.4525 9.34503 9.58 9.10753 9.7125C8.79003 9.89 8.39003 10.115 7.98753 10.41C7.99753 10.3575 8.00003 10.3025 8.00003 10.25C8.00003 8.96 7.06253 8.1825 6.28003 8.03C6.35253 7.9425 6.42503 7.8475 6.50003 7.75C7.47253 6.455 7.92003 5.1575 8.11503 4.405C8.19503 4.4775 8.30503 4.5 8.50003 4.5C9.00003 4.5 10.5 4.5 9.75003 2.5C10 4 9.25003 4.25 8.75003 4.25C8.45253 4.25 8.33253 4.0725 8.23003 3.8775C8.16253 3.7425 8.10003 3.6 8.00003 3.5C7.75003 3.25 7.50003 3.5 7.50003 2.75C7.50003 2 8.50003 0.75 10 0.75C11.5 0.75 11.75 2 11.75 2C12.0475 2.2975 12.5225 2.4175 12.8575 2.4675C13.0825 2.5 13.25 2.695 13.25 2.925Z"
            fill="#008FC6"
          />
          <path
            d="M2.00003 10.5C1.65503 11.5375 2.02503 12.095 2.28753 12.3425C2.25003 12.7525 2.25003 13.2075 2.25003 13.75C2.25003 13.8625 2.25503 13.97 2.26753 14.07C0.73003 12.8175 0.53503 10.9425 1.25003 9.75002C2.00003 8.50002 3.75003 8.25002 4.00003 8.50002C4.00003 8.50002 2.50003 9.00002 2.00003 10.5Z"
            fill="#008FC6"
          />
          <path
            d="M10.25 13.75C10.25 13.75 10.75 14.445 10.75 15.5H12.25C12.25 15.5 12.25 14.75 11.5 14.75C11.5 14.75 11.1475 14.13 11.5 13.25C11.8525 12.37 12.75 12.4075 12.75 11C12.75 9.59249 12.25 8.98999 12.25 8.98999C12.25 8.98999 12.25 8.81499 12.425 8.81499C12.6 8.81499 13.7475 8.85249 13.7475 8.49999C13.7475 8.14749 13.2475 7.85249 13.2475 7.49999C13.2475 7.14749 13.2475 6.74999 12.4975 6.74999C12.6725 6.57499 12.7475 5.99999 12.7475 5.99999C12.7475 5.99999 11.275 5.86999 10.7475 6.74999C10.22 7.62999 10.8775 9.04749 9.99752 9.74999C9.11752 10.4525 5.48752 11.4525 7.24752 15.5H10.2475C10.2475 15.5 10.2 14.75 9.49752 14.75C9.49752 14.75 10.2475 14.2325 10.2475 13V13.75H10.25Z"
            fill="#008FC6"
          />
          <path
            d="M6.58752 14.2075C6.65002 14.58 6.76752 14.9825 6.94752 15.42C6.27252 15.1275 5.25002 14.0325 5.25002 13.25C5.25002 12.3375 6.75002 10.8575 6.75002 10.25C6.75002 9.6425 6.50002 9.25 6.00002 9.25C5.50002 9.25 4.92502 9.8525 4.75002 9.5C4.46752 8.9325 5.50002 8.5 6.00002 8.5C6.50002 8.5 7.50002 9.035 7.50002 10.25C7.50002 11.13 6.00002 12.3375 6.00002 13.25C6.00002 13.8875 6.36752 14.1225 6.58752 14.2075Z"
            fill="#008FC6"
          />
        </svg>
      );
    case "Parking Available":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M6.1425 15.5H4.5C3.5 15.5 2.5 15.25 2.5 13.75C2.5 12.25 2.5 11.5 3.25 10.5C3.55 10.1025 3.8875 9.90249 4.2825 9.67749C4.2875 9.69249 4.295 9.70749 4.3025 9.72249C4.4225 9.96499 4.655 10.11 4.925 10.11C5.155 10.11 5.3675 10.0075 5.5725 9.90749C5.7125 9.84249 5.9 9.74999 6 9.74999C6.0675 9.74999 6.25 9.74999 6.25 10.24C6.23 10.3975 5.91 10.8725 5.7 11.1875C5.2325 11.88 4.75 12.595 4.75 13.25C4.75 14.035 5.4525 14.955 6.1425 15.5Z"
            fill="#00B0F3"
          />
          <path
            d="M13.25 2.925C13.25 2.98 13.24 3.0375 13.22 3.09C13.125 3.335 12.77 4 11.75 4C11.75 4 11 4 11 4.5C11 4.72 11.1925 5.13 11.41 5.67C10.9975 5.8075 10.5825 6.055 10.3225 6.4925C10.0225 6.9925 10.015 7.5775 10.01 8.095C10.0025 8.725 9.98503 9.1225 9.68753 9.36C9.57003 9.4525 9.34503 9.58 9.10753 9.7125C8.79003 9.89 8.39003 10.115 7.98753 10.41C7.99753 10.3575 8.00003 10.3025 8.00003 10.25C8.00003 8.96 7.06253 8.1825 6.28003 8.03C6.35253 7.9425 6.42503 7.8475 6.50003 7.75C7.47253 6.455 7.92003 5.1575 8.11503 4.405C8.19503 4.4775 8.30503 4.5 8.50003 4.5C9.00003 4.5 10.5 4.5 9.75003 2.5C10 4 9.25003 4.25 8.75003 4.25C8.45253 4.25 8.33253 4.0725 8.23003 3.8775C8.16253 3.7425 8.10003 3.6 8.00003 3.5C7.75003 3.25 7.50003 3.5 7.50003 2.75C7.50003 2 8.50003 0.75 10 0.75C11.5 0.75 11.75 2 11.75 2C12.0475 2.2975 12.5225 2.4175 12.8575 2.4675C13.0825 2.5 13.25 2.695 13.25 2.925Z"
            fill="#00B0F3"
          />
          <path
            d="M2.00003 10.5C1.65503 11.5375 2.02503 12.095 2.28753 12.3425C2.25003 12.7525 2.25003 13.2075 2.25003 13.75C2.25003 13.8625 2.25503 13.97 2.26753 14.07C0.73003 12.8175 0.53503 10.9425 1.25003 9.75002C2.00003 8.50002 3.75003 8.25002 4.00003 8.50002C4.00003 8.50002 2.50003 9.00002 2.00003 10.5Z"
            fill="#00B0F3"
          />
          <path
            d="M10.25 13.75C10.25 13.75 10.75 14.445 10.75 15.5H12.25C12.25 15.5 12.25 14.75 11.5 14.75C11.5 14.75 11.1475 14.13 11.5 13.25C11.8525 12.37 12.75 12.4075 12.75 11C12.75 9.59249 12.25 8.98999 12.25 8.98999C12.25 8.98999 12.25 8.81499 12.425 8.81499C12.6 8.81499 13.7475 8.85249 13.7475 8.49999C13.7475 8.14749 13.2475 7.85249 13.2475 7.49999C13.2475 7.14749 13.2475 6.74999 12.4975 6.74999C12.6725 6.57499 12.7475 5.99999 12.7475 5.99999C12.7475 5.99999 11.275 5.86999 10.7475 6.74999C10.22 7.62999 10.8775 9.04749 9.99752 9.74999C9.11752 10.4525 5.48752 11.4525 7.24752 15.5H10.2475C10.2475 15.5 10.2 14.75 9.49752 14.75C9.49752 14.75 10.2475 14.2325 10.2475 13V13.75H10.25Z"
            fill="#00B0F3"
          />
          <path
            d="M6.58752 14.2075C6.65002 14.58 6.76752 14.9825 6.94752 15.42C6.27252 15.1275 5.25002 14.0325 5.25002 13.25C5.25002 12.3375 6.75002 10.8575 6.75002 10.25C6.75002 9.6425 6.50002 9.25 6.00002 9.25C5.50002 9.25 4.92502 9.8525 4.75002 9.5C4.46752 8.9325 5.50002 8.5 6.00002 8.5C6.50002 8.5 7.50002 9.035 7.50002 10.25C7.50002 11.13 6.00002 12.3375 6.00002 13.25C6.00002 13.8875 6.36752 14.1225 6.58752 14.2075Z"
            fill="#00B0F3"
          />
        </svg>
      );
    case "Pet Friendly":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M15.2378 7.00581C15.1443 6.84987 14.2208 6.45096 14.2208 6.45096C14.3814 6.368 14.4912 6.35084 14.4912 6.00776C14.4912 5.63349 14.4893 5.50874 14.2398 5.50874H13.3933C13.3899 5.50125 13.3861 5.49345 13.3827 5.48566C12.8363 4.29236 12.763 3.99076 11.948 3.58468C10.8548 3.04106 8.8054 3.01361 8.00197 3.01361C7.19854 3.01361 5.1491 3.04106 4.05686 3.58468C3.24096 3.99014 3.26123 4.1988 2.62218 5.48566C2.62218 5.48909 2.61563 5.49813 2.6097 5.50874H1.76229C1.51465 5.50874 1.51278 5.63349 1.51278 6.00776C1.51278 6.35084 1.62257 6.368 1.78319 6.45096C1.78319 6.45096 0.890871 6.88106 0.766114 7.00581C0.641358 7.13057 0.516602 8.00386 0.516602 9.50094C0.516602 10.998 0.641358 12.4951 0.641358 12.4951H1.01376C1.01376 12.9317 1.07801 12.9941 1.26514 12.9941H3.76025C3.94739 12.9941 4.00977 12.9317 4.00977 12.4951H11.9942C11.9942 12.9317 12.0566 12.9941 12.2437 12.9941H14.8012C14.9259 12.9941 14.9883 12.9005 14.9883 12.4951H15.3626C15.3626 12.4951 15.4873 10.9668 15.4873 9.50094C15.4873 8.03505 15.3314 7.16176 15.2378 7.00581ZM3.92431 8.40745C3.35629 8.46955 2.78534 8.50142 2.21391 8.50289C1.57703 8.50289 1.5552 8.54375 1.51029 8.14609C1.49339 7.96407 1.49873 7.78067 1.52619 7.59997L1.54584 7.50484H1.63941C2.01368 7.50484 2.36518 7.52074 3.02888 7.7163C3.36646 7.8176 3.68397 7.97651 3.96735 8.18601C4.10333 8.28457 4.13452 8.37813 4.13452 8.37813L3.92431 8.40745ZM11.633 10.6531L11.4951 10.998H4.50879C4.50879 10.998 4.52096 10.979 4.35285 10.6493C4.22809 10.4054 4.38404 10.2495 4.63074 10.1609C5.10856 9.98874 6.50489 9.50094 8.00197 9.50094C9.49905 9.50094 10.9231 9.92137 11.386 10.1609C11.5575 10.2495 11.7705 10.3119 11.633 10.6549V10.6531ZM3.61741 6.39482C3.51667 6.40062 3.41571 6.40137 3.31487 6.397C3.39628 6.25228 3.4415 6.09104 3.52103 5.92262C3.77055 5.3924 4.05593 4.79232 4.564 4.53938C5.29819 4.17384 6.8199 4.00917 8.00197 4.00917C9.18404 4.00917 10.7058 4.1726 11.4399 4.53938C11.948 4.79232 12.2321 5.39271 12.4829 5.92262C12.5631 6.0926 12.6077 6.25509 12.6912 6.40075C12.6289 6.40418 12.5571 6.40075 12.3859 6.39482H3.61741ZM14.4625 8.14484C14.3957 8.53408 14.4581 8.50289 13.79 8.50289C13.2186 8.50142 12.6477 8.46955 12.0796 8.40745C11.9907 8.39154 11.9655 8.24152 12.0366 8.18601C12.3186 7.97417 12.6365 7.81504 12.9751 7.7163C13.6388 7.52074 14.0124 7.49455 14.3814 7.50765C14.4062 7.50858 14.4297 7.51869 14.4475 7.53593C14.4653 7.55321 14.4761 7.57648 14.4778 7.60121C14.4954 7.78276 14.4903 7.96581 14.4625 8.14609V8.14484Z"
            fill="#00B0F3"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default SearchDisplay;

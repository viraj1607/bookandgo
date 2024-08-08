import React from "react";

export const Recomflights = [
  {
    from: "DCA",
    to: "JFK",
    price: 250,
    fromCity: "Washington",
    toCity: "New York",
    travelDates: "Fri., May 31 - Sun., Jun. 2",
    imageUrl: require("../imgs/american-airlines.png"),
  },
  {
    from: "DCA",
    to: "JFK",
    price: 257,
    fromCity: "Washington",
    toCity: "New York",
    travelDates: "Fri., May 31 - Sun., Jun. 2",
    imageUrl: require("../imgs/delta-airlines.png"),
  },
  {
    from: "DCA",
    to: "JFK",
    price: 270,
    fromCity: "Washington",
    toCity: "New York",
    travelDates: "Fri., May 31 - Sun., Jun. 2",
    imageUrl: require("../imgs/jetblue.jpeg"),
  },
  {
    from: "DCA",
    to: "JFK",
    price: 250,
    fromCity: "Washington",
    toCity: "New York",
    travelDates: "Fri., May 31 - Sun., Jun. 2",
    imageUrl: require("../imgs/spirit-airlines.jpg"),
  },
];

export const Mostviewflights = [
  {
    from: "DCA",
    to: "JFK",
    price: 250,
    fromCity: "Washington",
    toCity: "New York",
    travelDates: "Fri., May 31 - Sun., Jun. 2",
    imageUrl: require("../imgs/american-airlines.png"),
  },
  {
    from: "DCA",
    to: "JFK",
    price: 257,
    fromCity: "Washington",
    toCity: "New York",
    travelDates: "Fri., May 31 - Sun., Jun. 2",
    imageUrl: require("../imgs/delta-airlines.png"),
  },
  {
    from: "DCA",
    to: "JFK",
    price: 270,
    fromCity: "Washington",
    toCity: "New York",
    travelDates: "Fri., May 31 - Sun., Jun. 2",
    imageUrl: require("../imgs/jetblue.jpeg"),
  },
  {
    from: "DCA",
    to: "JFK",
    price: 250,
    fromCity: "Washington",
    toCity: "New York",
    travelDates: "Fri., May 31 - Sun., Jun. 2",
    imageUrl: require("../imgs/spirit-airlines.jpg"),
  },
];

const RecommendAndMostViewed = () => {
  return (
    <div className="flex justify-center items-center mt-9">
      <div className="p-4">
        <div className="flex justify-center items-center">
            <h2 className="md:text-[40px] text-[20px] sm:text-[30px] font-semibold font-extrabold">Recommended For You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[20px] md:gap-[25px] pt-0 md:pt-4 justify-items-center">
            {Recomflights.map((flight, index) => (
              <div
                key={index}
                className={`w-full max-w-[290px] h-[285px] rounded-3xl shadow-2xl truncate bg-white md:max-w-[300px] md:h-[350px] lg:h-[307px] sm:max-w-[200px] sm:h-[270px] ${index > 1 ? 'hidden md:block' : ''} ${index > 0 ? 'hidden lg:block' : ''}`}
              >
                <div className="w-[290px] h-[100px] bg-cover bg-center md:w-[300px] md:h-[160px] sm:w-[200px] sm:h-[130px]" style={{ backgroundImage: `url(${flight.imageUrl})` }}></div>
                <div className="p-2 md:p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-[20px] md:text-[25px]">{flight.from} ⇆ {flight.to}</h3>
                      <div className="flex justify-between items-center">
                        <p className="font-medium text-[12px] text-slate-500">{flight.fromCity}</p>
                        <p className="font-medium text-[12px] text-slate-500">{flight.toCity}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-[#000] text-[20px]">${flight.price}</p>
                      <span className="font-medium text-[12px] text-slate-500">roundtrip</span>
                    </div>
                  </div>
                  <div className="text-left mt-2">
                    <span className="font-semibold text-[12px] text-rose-600">{flight.travelDates}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center mt-10">
            <h2 className="md:text-[40px] text-[20px] sm:text-[30px] font-semibold font-extrabold">Most Viewd</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[20px] md:gap-[25px] pt-0 md:pt-4 justify-items-center">
            {Mostviewflights.map((flight, index) => (
              <div
                key={index}
                className={`w-full max-w-[290px] h-[285px] rounded-3xl shadow-2xl truncate bg-white md:max-w-[300px] md:h-[350px] lg:h-[307px] sm:max-w-[200px] sm:h-[270px] ${index > 1 ? 'hidden md:block' : ''} ${index > 0 ? 'hidden lg:block' : ''}`}
              >
                <div className="w-[290px] h-[100px] bg-cover bg-center md:w-[300px] md:h-[160px] sm:w-[200px] sm:h-[130px]" style={{ backgroundImage: `url(${flight.imageUrl})` }}></div>
                <div className="p-2 md:p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-[20px] md:text-[25px]">{flight.from} ⇆ {flight.to}</h3>
                      <div className="flex justify-between items-center">
                        <p className="font-medium text-[12px] text-slate-500">{flight.fromCity}</p>
                        <p className="font-medium text-[12px] text-slate-500">{flight.toCity}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-[#000] text-[20px]">${flight.price}</p>
                      <span className="font-medium text-[12px] text-slate-500">roundtrip</span>
                    </div>
                  </div>
                  <div className="text-left mt-2">
                    <span className="font-semibold text-[12px] text-rose-600">{flight.travelDates}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default RecommendAndMostViewed;
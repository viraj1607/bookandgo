// recomend.js

import React from "react";
import jetblue from "../imgs/jetblue.jpeg";
import american from "../imgs/american.jpg";
import delta from "../imgs/delta.jpeg";
import spiritAirlines from "../imgs/spirit-airlines.jpg";

export const recommendedHotelsList = [
  {
    name: "Hilton Garden Inn",
    location: "New York",
    price: 200,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/1e62/1dad/e56ee28e11d0dff458b97d7da821d243?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aMjKXaHOoWocMDNKovg~8YVPZ5yH2VOKSAKfa6nnQ6DFwrnSsjHfwf6WvF0FDGiV~~IHBgYE83ar7DAtMG5wZT9wcwHUrF~3CZJEUMqZ~Oz8h~H51BqdPkT58t-Ldj3RYo-BhISZg8dpcMyUTwZqrJBkst2btntHjd~Hs2UgYbNJz1qIDme~4Z4~PuP4QPfG8PkqHdKaBmWyaPW3oxScLGDZ3nYfyxs~KFzeqUT~NO3gr6hqseBO-bTb-UKgGHieSvXCPfMiCXOzi~SEmqq1THX7w-fo-~gixE1TcYMNn49XoVgJsQesv8xk8ZJP4h3-TNuP7YSEhsarhgVwaDzeUg__",
  },
  {
    name: "DoubleTree",
    location: "New York",
    price: 243,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/56ee/9b5e/be399a0fe03c4b509c5dce94a3b7b6f7?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mwEY9WuZigCEVav8627XQjSm~p9k2ZvCfY5PpFkppBQHsVcOjsltFuVJvJ7X-PQwgr9xe4ONwGQliD1OVqZ8JPNlmtnkjZfnnawffzHMpOISCgGgHKt~7jmHfJQsLRWKUMuTyDlhqARws4FcQZ15jr0K8Glh98h-r9dF-JPaleQy6OSsIDSi-bDinc0tqXOa7NdmPSzvTE4HU7TesEBfw-w5nwLnku1efhxOEK-DXQSMFYvVyxMvuzW0vWzh8WWvKd3GXL85PruWKuBFs8HzXoLQ5qyKESrpxMP5UsvDKzXM-U9gfJhsF2UQHlVDxDvAdm9VBT1~UJQSssyaPb98ug__",
  },
  {
    name: "Holiday Inn Express",
    location: "New York",
    price: 187,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/acf4/b9e1/980face65675966b164728984277eea1?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bNhOpGE1yXZaYJem7FEUg2FGWlJKnmG8Ka69-GukEBdzKHhakcRE4yH4QSBCNtj73MRSvG-P0nX24ewfPaen-ttFPTQZPu1Nc6uGgqVMfF7RFmuQvm7D4-xhD-bWb0iUcrQ6EKpcFjUOkNTDHO7oBtXvlR6QDyUReb4tYHghx67SDE5ozXF3axC8w8nLcYWkDAd8dQBPd6tBwDGA1OPjWmgugN30XckWQ28xSI79CaeQA0Yd9fiFEAeeLFpcziX86YhnQeM0e46xSph6tph8yq2pJ7I4R4OCiyAQuKuHIWRTFKXW-9iOR64He0cFhvHX5V4~5Z8LLXe9OqNIaKDSvw__",
  },
  {
    name: "Hyatt Grand",
    location: "New York",
    price: 266,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/56ee/9b5e/be399a0fe03c4b509c5dce94a3b7b6f7?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mwEY9WuZigCEVav8627XQjSm~p9k2ZvCfY5PpFkppBQHsVcOjsltFuVJvJ7X-PQwgr9xe4ONwGQliD1OVqZ8JPNlmtnkjZfnnawffzHMpOISCgGgHKt~7jmHfJQsLRWKUMuTyDlhqARws4FcQZ15jr0K8Glh98h-r9dF-JPaleQy6OSsIDSi-bDinc0tqXOa7NdmPSzvTE4HU7TesEBfw-w5nwLnku1efhxOEK-DXQSMFYvVyxMvuzW0vWzh8WWvKd3GXL85PruWKuBFs8HzXoLQ5qyKESrpxMP5UsvDKzXM-U9gfJhsF2UQHlVDxDvAdm9VBT1~UJQSssyaPb98ug__",
  },
];

export const mostViewedHotelsList = [
  {
    name: "Hyatt Grand",
    location: "New York",
    price: 266,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/56ee/9b5e/be399a0fe03c4b509c5dce94a3b7b6f7?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mwEY9WuZigCEVav8627XQjSm~p9k2ZvCfY5PpFkppBQHsVcOjsltFuVJvJ7X-PQwgr9xe4ONwGQliD1OVqZ8JPNlmtnkjZfnnawffzHMpOISCgGgHKt~7jmHfJQsLRWKUMuTyDlhqARws4FcQZ15jr0K8Glh98h-r9dF-JPaleQy6OSsIDSi-bDinc0tqXOa7NdmPSzvTE4HU7TesEBfw-w5nwLnku1efhxOEK-DXQSMFYvVyxMvuzW0vWzh8WWvKd3GXL85PruWKuBFs8HzXoLQ5qyKESrpxMP5UsvDKzXM-U9gfJhsF2UQHlVDxDvAdm9VBT1~UJQSssyaPb98ug__",
  },
  {
    name: "DoubleTree",
    location: "New York",
    price: 243,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/56ee/9b5e/be399a0fe03c4b509c5dce94a3b7b6f7?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mwEY9WuZigCEVav8627XQjSm~p9k2ZvCfY5PpFkppBQHsVcOjsltFuVJvJ7X-PQwgr9xe4ONwGQliD1OVqZ8JPNlmtnkjZfnnawffzHMpOISCgGgHKt~7jmHfJQsLRWKUMuTyDlhqARws4FcQZ15jr0K8Glh98h-r9dF-JPaleQy6OSsIDSi-bDinc0tqXOa7NdmPSzvTE4HU7TesEBfw-w5nwLnku1efhxOEK-DXQSMFYvVyxMvuzW0vWzh8WWvKd3GXL85PruWKuBFs8HzXoLQ5qyKESrpxMP5UsvDKzXM-U9gfJhsF2UQHlVDxDvAdm9VBT1~UJQSssyaPb98ug__",
  },
  {
    name: "Hilton Garden Inn",
    location: "New York",
    price: 200,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/1e62/1dad/e56ee28e11d0dff458b97d7da821d243?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aMjKXaHOoWocMDNKovg~8YVPZ5yH2VOKSAKfa6nnQ6DFwrnSsjHfwf6WvF0FDGiV~~IHBgYE83ar7DAtMG5wZT9wcwHUrF~3CZJEUMqZ~Oz8h~H51BqdPkT58t-Ldj3RYo-BhISZg8dpcMyUTwZqrJBkst2btntHjd~Hs2UgYbNJz1qIDme~4Z4~PuP4QPfG8PkqHdKaBmWyaPW3oxScLGDZ3nYfyxs~KFzeqUT~NO3gr6hqseBO-bTb-UKgGHieSvXCPfMiCXOzi~SEmqq1THX7w-fo-~gixE1TcYMNn49XoVgJsQesv8xk8ZJP4h3-TNuP7YSEhsarhgVwaDzeUg__",
  },
  {
    name: "Holiday Inn Express",
    location: "New York",
    price: 187,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/acf4/b9e1/980face65675966b164728984277eea1?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bNhOpGE1yXZaYJem7FEUg2FGWlJKnmG8Ka69-GukEBdzKHhakcRE4yH4QSBCNtj73MRSvG-P0nX24ewfPaen-ttFPTQZPu1Nc6uGgqVMfF7RFmuQvm7D4-xhD-bWb0iUcrQ6EKpcFjUOkNTDHO7oBtXvlR6QDyUReb4tYHghx67SDE5ozXF3axC8w8nLcYWkDAd8dQBPd6tBwDGA1OPjWmgugN30XckWQ28xSI79CaeQA0Yd9fiFEAeeLFpcziX86YhnQeM0e46xSph6tph8yq2pJ7I4R4OCiyAQuKuHIWRTFKXW-9iOR64He0cFhvHX5V4~5Z8LLXe9OqNIaKDSvw__",
  },
];

const RecommendAndMostViewed = ({ title, hotels }) => {
  return (
    <div className="flex justify-center items-center my-4">
      <div className="p-4 w-full max-w-screen-xl">
        <div className="section-recommended">
          <h1 className="font-bold text-center text-[30px]">{title}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[25px] pt-4">
          {hotels?.map((hotel, index) => (
            <div key={index} className="card bg-white rounded-lg shadow-lg">
              <img src={hotel.imageUrl}></img>
              {/* <div className="card-image" style={{ backgroundImage: `url(${hotel.imageUrl})` }}></div> */}
              {/* <hr className="my-2" /> */}
              <div className="card-content p-2">
                <div className="flex justify-between items-center">
                  <h3 className="card-title">{hotel.name}</h3>
                  <p className="card-price">${hotel.price}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="card-location">{hotel.location}</p>
                  <span className="card-per-night">per night</span>
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

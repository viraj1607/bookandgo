import React from "react";
import HotelCard from "../components/HotelCard";
import Filters from "../components/Filters";

const hotelList = [
  {
    img: "https://s3-alpha-sig.figma.com/img/1e62/1dad/e56ee28e11d0dff458b97d7da821d243?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aMjKXaHOoWocMDNKovg~8YVPZ5yH2VOKSAKfa6nnQ6DFwrnSsjHfwf6WvF0FDGiV~~IHBgYE83ar7DAtMG5wZT9wcwHUrF~3CZJEUMqZ~Oz8h~H51BqdPkT58t-Ldj3RYo-BhISZg8dpcMyUTwZqrJBkst2btntHjd~Hs2UgYbNJz1qIDme~4Z4~PuP4QPfG8PkqHdKaBmWyaPW3oxScLGDZ3nYfyxs~KFzeqUT~NO3gr6hqseBO-bTb-UKgGHieSvXCPfMiCXOzi~SEmqq1THX7w-fo-~gixE1TcYMNn49XoVgJsQesv8xk8ZJP4h3-TNuP7YSEhsarhgVwaDzeUg__",
    hotelName: "Hilton Garden Inn",
    city: "New York",
    landmark: "Near John F. Kennedy International Airport",
    price: "200",
    rating: 4.7,
    description:
      "The stylish Hilton Garden Inn New York/Central Park South-Midtown West hotel boasts a central location in the heart of Midtown Manhattan, offering easy access to a wealth of shopping opportunities,restaurants, bars and entertainment.",
    aminities: ["Breakfast Included", "Bar", "Swimming Pool", "Kids Play Area"],
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/56ee/9b5e/be399a0fe03c4b509c5dce94a3b7b6f7?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mwEY9WuZigCEVav8627XQjSm~p9k2ZvCfY5PpFkppBQHsVcOjsltFuVJvJ7X-PQwgr9xe4ONwGQliD1OVqZ8JPNlmtnkjZfnnawffzHMpOISCgGgHKt~7jmHfJQsLRWKUMuTyDlhqARws4FcQZ15jr0K8Glh98h-r9dF-JPaleQy6OSsIDSi-bDinc0tqXOa7NdmPSzvTE4HU7TesEBfw-w5nwLnku1efhxOEK-DXQSMFYvVyxMvuzW0vWzh8WWvKd3GXL85PruWKuBFs8HzXoLQ5qyKESrpxMP5UsvDKzXM-U9gfJhsF2UQHlVDxDvAdm9VBT1~UJQSssyaPb98ug__",
    hotelName: "Double Tree",
    city: "New York",
    landmark: "Near Newark (EWR) Airport",
    price: "243",
    rating: 4.3,
    description:
      "It features modern and comfortable accommodations, a rooftop bar with stunning views of the city, and a variety of dining options. The hotel is located near several popular attractions, including the Empire State Building.",
    aminities: [
      "Breakfast Included",
      "Bar",
      "Swimming Pool",
      "Kids Play Area",
      "Indoor Games",
    ],
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/acf4/b9e1/980face65675966b164728984277eea1?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bNhOpGE1yXZaYJem7FEUg2FGWlJKnmG8Ka69-GukEBdzKHhakcRE4yH4QSBCNtj73MRSvG-P0nX24ewfPaen-ttFPTQZPu1Nc6uGgqVMfF7RFmuQvm7D4-xhD-bWb0iUcrQ6EKpcFjUOkNTDHO7oBtXvlR6QDyUReb4tYHghx67SDE5ozXF3axC8w8nLcYWkDAd8dQBPd6tBwDGA1OPjWmgugN30XckWQ28xSI79CaeQA0Yd9fiFEAeeLFpcziX86YhnQeM0e46xSph6tph8yq2pJ7I4R4OCiyAQuKuHIWRTFKXW-9iOR64He0cFhvHX5V4~5Z8LLXe9OqNIaKDSvw__",
    hotelName: "Holiday Inn Express",
    city: "New York",
    landmark: "Near John F. Kennedy International Airport",
    price: "187",
    rating: 4.5,
    description:
      "The Holiday Inn Express New York City Times Square provides free breakfast and offers convenient access to attractions like Times Square and the Empire State Building. It is noted as the largest Holiday Inn Express property.",
    aminities: [
      "Breakfast Included",
      "Bar",
      "Swimming Pool",
      "Kids Play Area",
      "Indoor Games",
    ],
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/56ee/9b5e/be399a0fe03c4b509c5dce94a3b7b6f7?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mwEY9WuZigCEVav8627XQjSm~p9k2ZvCfY5PpFkppBQHsVcOjsltFuVJvJ7X-PQwgr9xe4ONwGQliD1OVqZ8JPNlmtnkjZfnnawffzHMpOISCgGgHKt~7jmHfJQsLRWKUMuTyDlhqARws4FcQZ15jr0K8Glh98h-r9dF-JPaleQy6OSsIDSi-bDinc0tqXOa7NdmPSzvTE4HU7TesEBfw-w5nwLnku1efhxOEK-DXQSMFYvVyxMvuzW0vWzh8WWvKd3GXL85PruWKuBFs8HzXoLQ5qyKESrpxMP5UsvDKzXM-U9gfJhsF2UQHlVDxDvAdm9VBT1~UJQSssyaPb98ug__",
    hotelName: "Holiday Inn Express",
    city: "New York",
    landmark: "Near John F. Kennedy International Airport",
    price: "187",
    rating: 4.5,
    description:
      "The Holiday Inn Express New York City Times Square provides free breakfast and offers convenient access to attractions like Times Square and the Empire State Building. It is noted as the largest Holiday Inn Express property.",
    aminities: [
      "Breakfast Included",
      "Bar",
      "Swimming Pool",
      "Kids Play Area",
      "Indoor Games",
    ],
  },
];

const HotelList = () => {
  return (
    <div>
      <div className="bg-[#E5F4FF] p-4">
        <ul className="flex justify-evenly">
          <li className="font-bold">Sort By:</li>
          <li className="cursor-pointer">Popular</li>
          <li className="cursor-pointer">Ratings</li>
          <li className="cursor-pointer">Price(High)</li>
          <li className="cursor-pointer">Price(Low)</li>
        </ul>
      </div>
      <div className="flex">
        <div className="w-[80%]">
          {hotelList.map((val, ind) => {
            return <HotelCard hotelData={val} />;
          })}
        </div>
        <div>
          <Filters />
        </div>
      </div>
    </div>
  );
};

export default HotelList;

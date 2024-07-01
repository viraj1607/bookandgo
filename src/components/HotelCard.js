import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const HotelCard = () => {
  const aminities = [
    "Breakfast Included",
    "Bar",
    "Swimming Pool",
    "Kids Play Area",
    "Indoor Games",
  ];
  return (
    <div className="flex h-fit shadow-custom-grey p-4 m-4 rounded-xl">
      <div>
        <img
          className="rounded-xl"
          src="https://s3-alpha-sig.figma.com/img/1e62/1dad/e56ee28e11d0dff458b97d7da821d243?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aMjKXaHOoWocMDNKovg~8YVPZ5yH2VOKSAKfa6nnQ6DFwrnSsjHfwf6WvF0FDGiV~~IHBgYE83ar7DAtMG5wZT9wcwHUrF~3CZJEUMqZ~Oz8h~H51BqdPkT58t-Ldj3RYo-BhISZg8dpcMyUTwZqrJBkst2btntHjd~Hs2UgYbNJz1qIDme~4Z4~PuP4QPfG8PkqHdKaBmWyaPW3oxScLGDZ3nYfyxs~KFzeqUT~NO3gr6hqseBO-bTb-UKgGHieSvXCPfMiCXOzi~SEmqq1THX7w-fo-~gixE1TcYMNn49XoVgJsQesv8xk8ZJP4h3-TNuP7YSEhsarhgVwaDzeUg__"
        />
      </div>
      <div className="ml-4">
        <div className="flex justify-between mb-2">
          <div>
            <h2 className="font-bold text-[35px]">Hilton Garden Inn</h2>
            <p className="text-[#6F6F6F] text-[20px]">New York</p>
            <span className="text-[#00B0F3]">
              Near John F. Kennedy International Airport
            </span>
          </div>
          <div>
            <h2 className="font-bold text-[35px]">$200</h2>
            <span className="text-[#6F6F6F] text-right">
              +taxes <br /> per night
            </span>
          </div>
        </div>
        <Rating
          name="half-rating-read"
          defaultValue={2.7}
          precision={0.1}
          readOnly
        />
        <p>
          The stylish Hilton Garden Inn New York/Central Park South-Midtown West
          hotel boasts a central location in the heart of Midtown Manhattan,
          offering easy access to a wealth of shopping opportunities,
          restaurants, bars and entertainment.
        </p>
        <div className="flex flex-wrap">
          {aminities.map((val,ind)=>{
            return(
                <span key={ind} className="border-grey border-2 px-2 m-2 rounded-lg">{val}</span>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default HotelCard;

import React from "react";
import Rating from "@mui/material/Rating";
import { Chip, IconButton } from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import PoolIcon from "@mui/icons-material/Pool";
import ChildCareIcon from "@mui/icons-material/ChildCare";

const hoteldata = {
      img_1: "https://s3-alpha-sig.figma.com/img/1e62/1dad/e56ee28e11d0dff458b97d7da821d243?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aMjKXaHOoWocMDNKovg~8YVPZ5yH2VOKSAKfa6nnQ6DFwrnSsjHfwf6WvF0FDGiV~~IHBgYE83ar7DAtMG5wZT9wcwHUrF~3CZJEUMqZ~Oz8h~H51BqdPkT58t-Ldj3RYo-BhISZg8dpcMyUTwZqrJBkst2btntHjd~Hs2UgYbNJz1qIDme~4Z4~PuP4QPfG8PkqHdKaBmWyaPW3oxScLGDZ3nYfyxs~KFzeqUT~NO3gr6hqseBO-bTb-UKgGHieSvXCPfMiCXOzi~SEmqq1THX7w-fo-~gixE1TcYMNn49XoVgJsQesv8xk8ZJP4h3-TNuP7YSEhsarhgVwaDzeUg__",
      img_2:"https://s3-alpha-sig.figma.com/img/60f1/771f/a0606d84826fcd99213f2d2fec51b143?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qbmulHecIFCMSkO4Q6bL3hva-R-DJroIvs-GcJX3Y5SftY9wNMGrJrWGsnAXI3xQCsu8f1jTAusVaNMVbIoV0ZynUnsoYS6pmu4540vJh0DQxBs55WjJUf-snX-p0VrC6Tj6sYp0nxsM~DzEhC9Eiqrrg2RceCXP-1FSQH-OiX14FNh0MeTCY7-IcbjfpgbOcbeXJkjW7Q1lkzvU~HgbqSL9tEwxttxx3TGNQqk2tH96lToCrwSRDLYR5O5A2mQU6Y8u3BCQq3veP1CRmmgKYA0cllu0Qnt6ZfhRX8OxLlClIU43kwfqN5rONtxIfOxD9vVhpKZzu0P2aYEtafPppA__",
      img_3:"https://s3-alpha-sig.figma.com/img/60f1/771f/a0606d84826fcd99213f2d2fec51b143?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qbmulHecIFCMSkO4Q6bL3hva-R-DJroIvs-GcJX3Y5SftY9wNMGrJrWGsnAXI3xQCsu8f1jTAusVaNMVbIoV0ZynUnsoYS6pmu4540vJh0DQxBs55WjJUf-snX-p0VrC6Tj6sYp0nxsM~DzEhC9Eiqrrg2RceCXP-1FSQH-OiX14FNh0MeTCY7-IcbjfpgbOcbeXJkjW7Q1lkzvU~HgbqSL9tEwxttxx3TGNQqk2tH96lToCrwSRDLYR5O5A2mQU6Y8u3BCQq3veP1CRmmgKYA0cllu0Qnt6ZfhRX8OxLlClIU43kwfqN5rONtxIfOxD9vVhpKZzu0P2aYEtafPppA__",
      hotelName: "Hilton Garden Inn",
      city: "New York",
      landmark: "Near John F. Kennedy International Airport",
      price: "200",
      rating: 4.7,
      description:
        "The stylish Hilton Garden Inn New York/Central Park South-Midtown West hotel boasts a central location in the heart of Midtown Manhattan, offering easy access to a wealth of shopping opportunities,restaurants, bars and entertainment.",
      amenities: ["Breakfast Included", "Bar", "Swimming Pool", "Kids Play Area"],
}

const getIcon = (amenity) => {
    switch (amenity) {
        case "Breakfast Included":
            return <RestaurantIcon style={{ color: '#00B0F3' }} />;
        case "Bar":
            return <LocalBarIcon style={{ color: '#00B0F3' }} />;
        case "Swimming Pool":
            return <PoolIcon style={{ color: '#00B0F3' }} />;
        case "Kids Play Area":
            return <ChildCareIcon style={{ color: '#00B0F3' }} />;
        default:
            return null;
    }
};

const HotelInfo = () =>{
    return(
        <div className="hotel-info-container w-full md:w-3/4 p-4 my-8 mx-4 ">
            <div className="flex flex-col h-fit p-4 my-8 mx-4 md:mx-16">
                <div className="grid grid-cols-3 grid-rows-2 gap-8">
                    <div className="col-span-2 row-span-2">
                        <img src={hoteldata.img_1} alt="Image 1" className="rounded-xl w-full h-full object-cover"/>
                    </div>
                    <div className="col-span-1 row-span-1">
                        <img src={hoteldata.img_2} alt="Image 2" className="rounded-xl w-full h-full object-cover"/>
                    </div>
                    <div className="col-span-1 row-span-1">
                        <img src={hoteldata.img_3} alt="Image 3" className="rounded-xl w-full h-full object-cover"/>
                    </div>
                </div>
                <div className="flex items-center mt-4">
                    <span className="font-bold text-2xl md:text-[35px] mr-4">{hoteldata.hotelName}</span>
                    <Rating
                        name="half-rating-read"
                        defaultValue={hoteldata.rating}
                        precision={0.1}
                        readOnly
                    />
                </div>
                <p className="mt-4">{hoteldata.description}</p>
                <div className="mt-4">
                    <h3 className="text-xl font-semibold mb-2">Amenities</h3>
                    <div className="flex flex-wrap gap-4">
                        {hoteldata.amenities.map((amenity, index) => (
                            <div key={index} className="flex items-center text-black text-sm font-semibold">
                                {getIcon(amenity)}
                                <span className="ml-2">{amenity}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HotelInfo;
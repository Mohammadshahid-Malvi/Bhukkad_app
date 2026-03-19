import { RESTAURANT_LOGO } from "../utils/constants.js";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = resData?.info ;

    return (
        <div className="m-2 p-2 w-[200px] border-1 bg-gray-50 hover:bg-gray-100 cursor-pointer">
            <img className="h-[200px] w-[200px]" alt="res-logo" src={RESTAURANT_LOGO+cloudinaryImageId}/>
            <h3 className="font-bold text-lg">{name}</h3>
            <h4 className="text-sm">{cuisines.join(", ")} cuisines</h4>
            <h4 className="text-sm">{avgRating} stars</h4>
            <h4 className="text-sm">{costForTwo}</h4>
        </div>
    )
}
export default RestaurantCard;
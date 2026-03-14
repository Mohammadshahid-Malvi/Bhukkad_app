import { RESTAURANT_LOGO } from "../utils/constants.js";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = resData?.info ;

    return (
        <div className="restaurant-card">
            <img className="res-image" alt="res-logo" src={RESTAURANT_LOGO+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")} cuisines</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}
export default RestaurantCard;
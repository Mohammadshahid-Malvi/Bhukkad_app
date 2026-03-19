import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard.js";
import Shimmer from "./Shimmer.js";

const Body = () => {
    // SuperPower state variable of React
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState([]);

    // useEffect hooks to fetch API data,after first rendered Component.
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.010741&lng=72.513461&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // Optional Chaining
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return listOfRestaurants.length === 0 ? (<Shimmer/>) : (
        <div className="body">
            <div className="flex align-middle">
                <div className="">
                    <input type="text" className="border-1 p-2 m-2 rounded-md" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button className="p-4 bg-gray-100 cursor-pointer rounded-2xl" onClick={()=>{
                        // Filter the restaurant cards & update the UI
                        const filteredRestaurant = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setFilteredRestaurant(filteredRestaurant);

                    }}>Search</button>
                </div>
                <button className="p-2 m-2 bg-pink-100 rounded-md" 
                    
                    onClick={()=>{
                        const filteredList = listOfRestaurants.filter(   
                            (res) => res.info.avgRating > 4.5
                        )
                        setListOfRestaurants(filteredList);
                    }}

                >Top Rated Restaurant</button>
            </div>
            <div className="flex flex-wrap">
                {
                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))   
                }
            </div>
        </div>
    )
}

export default Body;
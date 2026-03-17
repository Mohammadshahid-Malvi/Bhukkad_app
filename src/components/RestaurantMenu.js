import { useEffect, useState } from "react";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.010741&lng=72.513461&restaurantId=37650&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        // setResInfo(data);
    };

    return (
        <div className="restaurant-menu">
            <h1>Restaurant Name</h1>
            <h3>Cuisines</h3>
            <h3>Price</h3>
            <h3>Rating</h3>
            <h3>Menu</h3>
            <ul>
                <li>Menu 1</li>
                <li>Menu 2</li>
                <li>Menu 3</li>
                <li>Menu 4</li>
                <li>Menu 5</li>
            </ul>
        </div>
    );
}

export default RestaurantMenu;
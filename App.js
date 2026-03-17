import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.js";
import Body from "./src/components/Body.js";
import Footer from "./src/components/Footer";
import About from "./src/components/About.js";
import Error from "./src/components/Error.js";
import Contact from "./src/components/Contact.js";
import RestaurantMenu from "./src/components/RestaurantMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import RestaurantMenu from "./src/components/RestaurantMenu.js";

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

const appRouter = createBrowserRouter ([
    {
        path:"/",
        element: <AppLayout />,
        children: [
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            }

        ],
        errorElement: <Error/>
    },
    {
        path:"/restaurants/:resID",
        element:<RestaurantMenu/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);































// React Element using core react
    // const title = React.createElement("h1",{id:"title"},"React Element without JSX");

// React Element using JSX
    // const title1 = (
    //     <h1>React Element using jsx</h1>
    // );

// Functional Component using arrow function
// const FunComponent = () => <h2>Functional component using arrow function one line</h2>;

// Functional Component using arrow function Multiple line
// const FunComponent2 = () => {
//     return <h2>
//         Functional component using arrow function Multiple line
//     </h2>
// }

// Normal Functional Component
// const FunCompNormal = function(){
//     return (
//         <div id="container">
//             <h2>Normal Function Component</h2>
//             {title}
//             {title1}
//             <FunComponent/>
//             <FunComponent2></FunComponent2>
//         </div>
//     );
// }
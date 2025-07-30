import {
  createBrowserRouter,
} from "react-router-dom";
import Mainleyaout from "../component/Mainleyaout/Mainleyaout";
import Home from "../component/Home/Home";
import AddReview from "../component/AddReview/AddReview";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainleyaout></Mainleyaout>,
    children:[
    {
    path: '/',
    element: <Home></Home>
    },
    {
    path: '/AddReview',
    element: <AddReview></AddReview>
    },
 
    ]
  },
]);

export default router;
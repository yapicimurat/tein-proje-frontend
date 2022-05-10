//REACT SPECIAL
import { Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
//END REACT SPECIAL

//REDUCER
import { setReducer } from "./features/user/";
//END REDUCER

//COMPONENTS
import Login from "./components/login/Login";
//END COMPONENTS


//CONFIG
import CONFIG, { USER_TYPE } from "./app/";

//END CONFIG


export default function App() {

  //const {isLogged, type} = useSelector(state => state.userReducer);
  
  
  return (
    <Routes>
      {
        CONFIG.ROUTES.map((route, index) => {
          return <Route
            key={index}
            exact={route.exact}
            path={route.path}
            element={route.component}
            />
        })
      }
    </Routes>
  );
  

}



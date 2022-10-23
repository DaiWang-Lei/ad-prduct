import React, { Children, FC } from "react";
import { useHistory, useLocation } from "react-router";
import "./style.scss";

interface AppProps {}
const App: FC<AppProps> = (props) => {
  const { children } = props;
  const { pathname } = useLocation();
  const history = useHistory();
  const handleRoute = () => {
    if (pathname === "/") {
      history.push("index");
      return false;
    }
    return true;
  };

  return <div>{handleRoute() ? children : "other"}</div>;
};
export default App;

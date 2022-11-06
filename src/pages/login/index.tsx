import React, { FC, useEffect } from "react";
import utils from "@utils/index";

interface AppProps{

}
const Login:FC<AppProps> = (props) => {
  useEffect(()=>{
    const id = utils.getUrlParam('id')

    console.log(id);
    
  },[])
  return <h1>Login</h1>;
};
export default Login;

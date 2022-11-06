import { Button, DatePicker } from "antd";
import axios from "axios";
import moment, { Moment } from "moment";
import React, { FC, useEffect } from "react";
import "./index.scss";

interface AppProps {}
const Home: FC<AppProps> = (props) => {
  useEffect(() => {
    axios
      .get("/ad/index/gray")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleChange = (date: Moment | null ) => {
    console.log(moment(date).unix());
    
  };

  return (
    <div className="home-page">
      <div className="middle-box">
        <Button type="primary">按钮</Button>
        <DatePicker onChange={handleChange} />
      </div>
    </div>
  );
};
export default Home;

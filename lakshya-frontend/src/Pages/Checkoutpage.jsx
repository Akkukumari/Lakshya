import React, { useEffect, useState } from "react";
import "./All.css";
import { Link as RouterLink, useLocation } from "react-router-dom";

import {
  Avatar,
  Box,
  chakra,
  Container,
  Flex,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Checkoutpage() {
  const location = useLocation();
  // const { data } = location.state;
  // console.log(data);

const [tutor, setTutor] = useState([]);
  const abc = () => {
    fetch("http://localhost:4500/tutor", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((ans) => setTutor(ans))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    abc();
  }, []);  

  return (
    <>
      <div className="checkoutbody">
        {tutor?.map((el, ind) => {
          return (
            <>
              <div className="checkleft">
                <div className="headpart">
                  <div className="headpart1">
                    <h2>Tutor Name</h2>
                    <h2>Class Type</h2>
                    <h2>Price per Class </h2>
                    <h2>Total </h2>
                  </div>
                </div>

                <div className="hedinner">
                  <Avatar
                    src={el.img}
                    height={"60px"}
                    width={"60px"}
                    alignSelf={"center"}
                    ml={"10px"}
                  />
                  <div className="heddetail">
                    <h2 className="nname">{el.name}</h2>
                    <h2 className="role">online</h2>
                    <h2 className="pper">₹ {el.price}</h2>
                    <h2 className="total">₹ {el.price}</h2>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        <div className="rightbar">
          <div className="headpartlast">Booking Summary</div>
          <div className="headpartlast1">
            <h2 className="subtext">Subtotal </h2>
            <h2 className="subtext">Subtotal </h2>
          </div>
          <RouterLink to="/payment" >
            <button className="checkoutbtn">Checkout</button>
          </RouterLink>
        </div>
      </div>
    </>
  );
}


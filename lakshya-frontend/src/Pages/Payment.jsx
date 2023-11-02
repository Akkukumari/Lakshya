import React, { useEffect, useState } from 'react';
import "./All.css";
import { Link as RouterLink } from "react-router-dom";

import {
  Avatar,
  Box,
  chakra,
  Container,
  Flex,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
      ModalFooter,
    ModalContent,
    useDisclosure,
    Button,
    Input
  } from "@chakra-ui/react";
  import greenTick from "../assets/Images/green_tick.svg";
  import { BsCardHeading } from "react-icons/bs";

export default function Payment(props) {
   const { isOpen, onOpen, onClose } = useDisclosure();
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
          return (<>
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
       <Avatar src={' https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'}
        height={'60px'}
        width={'60px'}
        alignSelf={'center'}
      />
      <div className="heddetail">
      <h2 className="nname">{el.name}</h2>
      <h2 className="role">online</h2>
      <h2 className="pper">₹ {el.price}</h2>
      <h2 className="total">₹ {el.price}</h2>
      </div>
    </div>
     <div className='cecklt'>
     <h2 className="totall">Total:₹ {el.price}</h2>
     </div>
     </div>
     </>
     );
    })}

    <div className="rightbar"> 
    <div className="headpartlast">Payment information</div>
    <div className='py'>
    <div className='pyment' >Select your Payment Method</div>
        <h2 className="subtext">Cash on delivery </h2>
    </div>

    <RouterLink to="/payment">
    <button className="checkoutbtn" onClick={onOpen}>Make Payment</button>
    </RouterLink>
    </div>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay  />
        <ModalContent >
          <ModalHeader className="successfully-placed" >
            Your Order has been placed Successfully!
          </ModalHeader>
          <ModalCloseButton  mt={"10px"}ml={"10px"}/>
          <ModalBody className="modalBody">
           <img src={greenTick} alt="img" />
          </ModalBody>

          <ModalFooter>
            <Button className="thankyou" >
              Thank You
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
         
   </div>

</>
  )
}
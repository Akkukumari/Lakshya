import React, { useEffect, useState } from "react";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Counter from "./Counter";
import "./All.css";
import { AiFillHome } from "react-icons/ai";
import { RiComputerFill } from "react-icons/ri";
import {
  Link as RouterLink,
  useLocation,
  useSearchParams,
} from "react-router-dom";

export default function Tutordetail() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
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
      .then((ans) => {
        const newData = [];
        const priceArray = searchParams.getAll("price");
        // const b
        if (priceArray.length > 0) {
          const data = [...ans];
          priceArray?.map((el) => {
            const priceRange = el.split("-");
            newData.push(
              ...data.filter(
                (el) =>
                  (Number(el.price) >= Number(priceRange[0]) &&
                  Number(el.price) <= Number(priceRange[1])) ||
                  (Number(el.onlineprice) >= Number(priceRange[0]) && Number(el.onlineprice) <= Number(priceRange[1]))
              )
            );
          });
          setTutor([...newData]);
        } else {
          setTutor([...ans]);
        }
        
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    abc();
  }, [location.search]);

  console.log("tutor", tutor);

  return (
    <div className="Tutordetail">
      {/* <Center py={6} m={"auto"} gap={"10px"}> */}
      <Grid w={"100%"} templateColumns={"repeat(2,1fr)"}>
        {tutor
          ? tutor?.map((el, ind) => {
              return (
                <Box
                key={el._id}
                  h={"280px"}
                  maxW={"540px"}
                  w={"full"}
                  boxShadow={
                    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
                  }
                  rounded={"lg"}
                  p={6}
                  textAlign={"center"}
                >
                  <div className="tutorfirst">
                    <Avatar
                      size={"xl"}
                      src={el.img}
                      mb={4}
                      pos={"relative"}
                      _after={{
                        content: '""',
                        w: 4,
                        h: 4,
                        // bg: 'green.300',
                        border: "2px solid white",
                        rounded: "full",
                        pos: "absolute",
                        bottom: 0,
                        // right: 3,
                      }}
                    />
                    <div className="tutorsec">
                      <Heading
                        fontSize={"18px"}
                        fontWeight={500}
                        fontFamily={"body"}
                        mt={"10px"}
                      >
                        {el.name}
                        <Text
                          fontWeight={400}
                          fontSize={"16px"}
                          color={"gray.500"}
                        >
                          TUTOR ID: {el.tutuorid}
                        </Text>
                      </Heading>
                    </div>

                    <div className="iconprice">
                      <div className="icon">
                        <AiFillHome className="iconn"> </AiFillHome>
                        <Text
                          className="price"
                          fontWeight={400}
                          color={"black.600"}
                          fontSize={"16px"}
                          mt={"20px"}
                          h={"30px"}
                        >
                          PRICE:₹ {el.price}/hr
                        </Text>
                      </div>
                      <div className="icon">
                        <RiComputerFill className="iconn"></RiComputerFill>
                        <Text
                          className="price"
                          fontWeight={400}
                          color={"black.600"}
                          fontSize={"16px"}
                          mt={"20px"}
                          h={"30px"}
                        >
                          PRICE:₹ {el.onlineprice}/hr
                        </Text>
                      </div>
                    </div>
                  </div>

                  <div className="tutorsecond">
                    <Text className="">Location: {el.location}</Text>
                    <Text>Experience: {el.experience}</Text>
                    <Text>Qualification: {el.qualification}</Text>
                  </div>

                  <Stack direction={"row"} spacing={4} h={"40px"} mt={"5px"}>
                    <Button
                      flex={1}
                      fontSize={"sm"}
                      rounded={"full"}
                      outline={"none"}
                      border={"none"}
                      _hover={{
                        bg: "blue.500",
                      }}
                      _focus={{
                        bg: "blue.200",
                      }}
                    >
                      BOOK DEMO
                    </Button>
                    <Button
                      flex={1}
                      fontSize={"sm"}
                      rounded={"full"}
                      bg={"blue.400"}
                      color={"white"}
                      outline={"none"}
                      border={"none"}
                      boxShadow={
                        "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                      }
                      _hover={{
                        bg: "blue.500",
                      }}
                      _focus={{
                        bg: "blue.500",
                      }}
                      onClick={onOpen}
                    >
                      BOOK CLASS
                    </Button>

                    <Modal isOpen={isOpen} onClose={onClose}>
                      <ModalOverlay border={"10px solid red"} filter={"blur"} />
                      <ModalContent className="popup-body">
                        <ModalHeader backgroundColor={"blue.100"}>
                          Class Status
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <table className="table">
                            <tr className="table1">
                              <td>Classes</td>
                              <td>1-5</td>
                              <td>6-10</td>
                              <td>11-25</td>
                            </tr>
                            <tr>
                              <td>Online Tuition</td>
                              <td>₹ {el.price}/hr</td>
                              <td>₹ {el.price}/hr</td>
                              <td>₹ {el.price}/hr</td>
                            </tr>
                          </table>

                          <Counter />
                          <div className="TotalPrice">
                            <h2>Total Price: {el.price}</h2>
                          </div>
                        </ModalBody>

                        <ModalFooter>
                          <RouterLink to="/checkoutpage">
                            <Button
                              colorScheme="blue"
                              border={"none"}
                              w={"70%"}
                              onClick={onClose}
                            >
                              BOOK NOW
                            </Button>
                          </RouterLink>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </Stack>
                </Box>
              );
            })
          : ""}
      </Grid>
      {/* </Center>  */}
    </div>
  );
}

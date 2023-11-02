import React, { useEffect } from 'react';
import Stats from "./Stats"; 
import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react'
import Carousel from "../Components/Carousel";
import Stats1 from './Stats1';
import Stats2 from './Stats2';
import Footer from './Footer';

function StatsCard(props) {
  const { title, stat } = props
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      // shadow={'xl'} 
      // border={'1px solid'}
      // box-shadow= {'rgba(0, 0, 0, 0.24) 0px 3px 8px'}
     shadow= {'rgba(65, 175, 219, 0.821) -5px 5px, rgba(89, 179, 197, 0.688) -10px 10px, rgba(136, 162, 171, 0.622) -10px 12px, rgba(139, 191, 215, 0.862) -20px 20px, rgba(179, 207, 214, 0.879) -15px 15px'}
        height={'120px'} w={'85%'}   gap={'2px'}
      borderColor={useColorModeValue('gray.800', 'gray.500')} borderRadius={'20px'}
      >
      <StatLabel fontWeight={'medium'} fontSize={'2xl'} color={'blue.600'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'1xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  )
}
export default function Home() {
 
//   const abc =()=> {
// fetch("http://localhost:4500/notes",{
//   method:"GET",
//   headers:{
//     "Content-Type":"application/json"
//   }
// })
// .then(res=>res.json())
// .then(ans=>console.log(ans))
// .catch(error=>console.log(error))
//   }

//   useEffect(()=>{
//     abc()
//   },[])
  return (
  <>
  <Carousel  />
    <div>
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }} >
           <SimpleGrid columns={{ base: 1, md: 3 }} gap={'0px'}>
        <StatsCard title={'35000+'} stat={'GuruQ Certified Tutors'} />
        <StatsCard  title={'300000+'} stat={'Registered Students'} />
        <StatsCard title={'150000+'} stat={'Classes Conducted'} />
      </SimpleGrid>
    </Box>
    </div>

    <Stats/>
    <Stats1/>
    <Stats2  />

    <div>
      <img width={'100%'} height={'60%'} src='https://www.connectzone.in/images/connect_slider/16-%20LOCATE%20US.jpg'></img>
    </div>
    <Footer  />
    </>
  )
}






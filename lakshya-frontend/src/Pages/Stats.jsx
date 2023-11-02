'use client'

import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { BsPerson } from 'react-icons/bs'
import { FiServer } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'
import "./All.css";

function StatsCard(props) {
  const { title, stat, icon } = props
  return (
    <Stat 
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      box-shadow= {'rgba(0, 0, 0, 0.24) 10px 13px 18px'}
      backgroundColor={"blue.500"}
    //   border={'1px solid'} 
    borderRadius={'20px'}
     w={"72%"} h={"170px"} mt={"20px"}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      >
      <Flex >
       
        <Box 
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'} w={"30px"}m={"auto"}>
          {icon}
        </Box>
      </Flex>
       <Box pl={{ base: 2, md: 4 }} mt={"8px"}>
          <StatLabel  fontSize={'1xl'} fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'1xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box> 
    </Stat>
  )
}

export default function Stats() {
  return (
    <Box className='midbg' maxW="10xl" h={"380px"}  mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }} mt={"60px"}>

      <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={6} fontWeight={'600'}>
      Let us Help You Find The Best Tutor
      </chakra.h1>
      <h2 textAlign={'center'}  py={6} fontWeight={'500'} >
       Please Select your Study Area
      </h2>
      <SimpleGrid columns={{ base: 1, md:4 }} spacing={{ base: 15, lg: 18 }}  w={"80%"} m={"auto"}>
        <StatsCard   title={'School'} stat={'Education(K-12)'} icon={<BsPerson size={'3em'} />} />
        <StatsCard title={'Language '} stat={'Learning'} icon={<FiServer size={'3em'} />} />
        <StatsCard title={'Competitive'} stat={'Exam'} icon={<GoLocation size={'3em'} />} />
        <StatsCard title={'Study'} stat={'Abroad'} icon={<GoLocation size={'3em'} />} />
      </SimpleGrid>
    </Box>
  )
}
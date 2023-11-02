'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link as RouterLink } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = () => {
    const payload = {
      email,
      pass,
    };
    fetch("http://localhost:4500/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);

        if(localStorage.getItem("token")){
          navigate('/')
        }
      })
      .catch((err) => console.log(err));
    setEmail("")
    setPass("")
  };
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Log in to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name="pass" value={pass} onChange={(e) => setPass(e.target.value)} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>  
              <Text align={'center'}>

              Don't have an account? 
              <RouterLink to="/signup">
              <Link color={'blue.500'}> Signup</Link>
              </RouterLink>
              </Text>
            </Stack>
             
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.800',
                }} onClick={handleSubmit}>
                Log in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
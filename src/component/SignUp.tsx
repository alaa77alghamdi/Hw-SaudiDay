import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { useNavigate } from 'react-router-dom'
import React from 'react';
  
  export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [firestName , setFirestName]= React.useState("")
    const [ pass , setPass ] = React.useState<any>()
    const navigate = useNavigate()

    const getInfo = ()=>{
        if(firestName.length >=3 && pass.length >=3){
        localStorage.setItem("firestName" ,firestName)
        navigate("/saudiday")
        }else{
            alert("Please enter correct information")
        }
            }
  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
 >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
               تسجيل
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
          
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('whgit', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" onChange={e =>{setFirestName(e.target.value)}}   />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} onChange={e =>{setPass(e.target.value)}} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'crimson'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}  
                  type='submit' onClick={getInfo}>
                  تسجيل جديد
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>

      
    );
  }
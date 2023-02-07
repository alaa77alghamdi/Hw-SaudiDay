
import {
  Container,
  FormControl,
  Input,
  Stack,
  Button,
  Heading,
  VStack,
  Center,
  Checkbox,
  Link
} from '@chakra-ui/react';
// Here we have used react-icons package for the icon
 import { useNavigate } from 'react-router-dom';
import React from 'react';




const Log = () => {
    const [name , setName]= React.useState("")
   

   
const navigate = useNavigate()

    const getInfo = ()=>{
let name1 = localStorage.getItem("firestName")

if(name == name1 ){

navigate("/saudiday")
}else{
    alert("Please enter correct information")
}
    }
  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="3xl">تسجيل دخول</Heading>
          </Stack>
          <VStack as="form" spacing={8} w={{ base: 'sm', sm: 'lg' }} p={{ base: 5, sm: 6 }}>
            <VStack spacing={0} w="100%">
              <FormControl id="Name">
                <Input
                type="name" onChange={e =>{setName(e.target.value)}}
                  placeholder="First Name"
                  rounded="md"
                  borderBottomLeftRadius="0"
                  borderBottomRightRadius="0"
                  
                 />
              </FormControl>
              <FormControl id="password" position="relative" bottom="1px">
                <Input
                  type="password"
                  placeholder="Password"
                  rounded="md"
                  borderTopLeftRadius="0"
                  borderTopRightRadius="0"
                />
              </FormControl>
            </VStack>
            <VStack w="100%">
              <Stack direction="row" justify="space-between" w="100%">
                <Checkbox colorScheme="green" size="md">
                  Remember me
                </Checkbox>
                <Link fontSize={{ base: 'md', sm: 'md' }}>Forgot password?</Link>
              </Stack>
              <Button
             
                bg="crimson"
                color="white"
                _hover={{
                  bg: 'green.500'
                }}
                rounded="md"
                w="100%"
                onClick={getInfo}
             >
                 اهلا وسهلا
              </Button>
            </VStack>
          </VStack>
        </Stack>
      </Center>
    </Container>
  );
};

export default Log;


/**
 * 

 */
import {
    Container,
    Box,
    Avatar,
    Button,
    HStack,
    VStack,
    Image,
    Input,
    Spacer,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Text,
    Link,
    MenuDivider,
    useColorModeValue
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  
  import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

  export interface Item extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    Image: string;
  }
  const countries = [

    { name: "1", Image: "https://images.pexels.com/photos/11309513/pexels-photo-11309513.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { name: "2", Image: "https://images.pexels.com/photos/4493205/pexels-photo-4493205.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { name: "3", Image: "https://images.pexels.com/photos/4552350/pexels-photo-4552350.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { name: "4", Image: "https://images.pexels.com/photos/13126897/pexels-photo-13126897.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { name: "5", Image: "https://images.pexels.com/photos/11695881/pexels-photo-11695881.jpeg?auto=compress&cs=tinysrgb&w=1600" },
   
  
  
  
  ];

const out=()=>{
    localStorage.clear()
}

  

  
  type IconButtonProps = {
    children: ReactNode;
  };
  
  const IconButton = ({ children }: IconButtonProps) => {
    return (
      <Button
        padding="0.4rem"
        width="auto"
        height="auto"
        borderRadius="100%"
        bg="transparent"
        _hover={{ bg: '#f6f6f6' }}
      >
        {children}
      </Button>
    );
  };
  
  const Navbar = () => {
    const [pickerItems, setPickerItems] = React.useState(countries);
    const [selectedItems, setSelectedItems] = React.useState<Item[]>([]);

    const handleCreateItem = (item: Item) => {
        setPickerItems((curr) => [...curr, item]);
        setSelectedItems((curr) => [...curr, item]);
      };

      const handleSelectedItemsChange = (selectedItems?: Item[]) => {
        if (selectedItems) {
          setSelectedItems(selectedItems);
        }}
    return (
      
      
      
      <Box
        py="2"
        boxShadow="sm"
        border="0 solid #e5e7eb"
        position="fixed"
        top="0"
       bg="Beige"
        width="100%"
        zIndex="1"
      >
        <Container maxW="1280px" px={4} mx="auto">
          <HStack spacing={4}>
          
            <Input
              maxW="26rem"
              placeholder="Search..."
              borderColor={useColorModeValue('gray.300', 'white')}
              borderRadius="5px"
              display={{ base: 'none', md: 'block' }}
              type="text"
             
                
    
              

            />



            <Spacer />
            <HStack spacing={3}>
              <Button color="#fff" rounded="md" bg="crimson" _hover={{ bg: '#323ebe' }} onClick={out}>
             تسجيل خروج
              </Button>
             
             
            </HStack>
          </HStack>
        </Container>
      </Box>
    );
  };
  
  export default Navbar;
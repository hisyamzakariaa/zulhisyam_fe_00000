'use client'

import FetchMovies, { getMovies } from "@/app/component/FetchMovies";
import PlaceInput from "@/app/component/Input";
import Logo from "@/app/component/Logo";
import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function page() {
    
  return (
    <>
        <header className='header'>
          <Logo />
          <div className='text'>
            <h2>Search your movies here!</h2>
            <form action="">
              <Flex>
                <Box borderRadius='20px' bgColor='white' p='5px 10px'>
                  <SearchIcon color='black'/>
                  <Input type='text' placeholder="Search by theatre..." border='none' />
                </Box>
                <Box borderRadius='20px' p='5px 10px' bgColor='white' ml='10px'>
                  <Input type='date' border='none' />
                </Box>
              </Flex>
                <Button borderRadius='20px' p='5px 10px' ml='5px' mt='10px' border='none' bgColor='gold'><Text color='black' fontWeight='bold'>Search</Text></Button>
            </form>
            <Box w='fit-content'>
              <Flex>
            <Link href='/'><Box w='fit-content' className="button"><Text color='black' fontSize='13px' fontWeight='bold'>Home</Text></Box></Link>
            <Link href='/search/by_timeslot'><Box w='fit-content' className="button"><Text color='black' fontSize='13px' fontWeight='bold'>By Timeslot</Text></Box></Link>
              </Flex>
            </Box>
          </div>
        </header>
        <main>
          <FetchMovies link='http://localhost:4000/byTheatre' />
        </main>
    </>
  )
}

'use client'

import { useContext, useEffect } from "react";
import FetchMovies from "./component/FetchMovies";
import Logo from "./component/Logo";
import Header from "./component/Logo";
import MovieContent from "./component/MovieContent";
import { MoviesContext, MoviesContextProvider } from "./store/context";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {

return (
  <>
    <header className='header'>
      {/* <Box> */}
        <Logo />
        <div className='text'>
          <h1>Find your movies here!</h1>
          <small>Explore our gallery full of exciting films from all around the globe only for your entertainments. No hidden charges or disturbing ads.</small>
          <Box><Flex>
            <Link href='/search/by_theatre'><Box w='fit-content' className="button"><Text color='black' fontSize='13px' fontWeight='bold'>By Theatre</Text></Box></Link>
            <Link href='/search/by_timeslot'><Box w='fit-content' className="button"><Text color='black' fontSize='13px' fontWeight='bold'>By Timeslot</Text></Box></Link>
          </Flex>
          </Box>
        </div>
      {/* </Box> */}
    </header>
      <main>
        <FetchMovies link='http://localhost:4000/newMovie' />
      </main>
  </>
  );
}

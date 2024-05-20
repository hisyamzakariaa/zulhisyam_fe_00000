'use client'

import { SearchIcon } from "@chakra-ui/icons";
import { Avatar, Box, Flex, List, ListItem } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Flex justifyContent='center'>
        <Box display='flex' gap='20px' bg='transparent'>
            <List flex='1'>
                <Flex p='10px' gap='50px' justifyContent='space-between' alignItems='center'>
                    <ListItem>
                        <Link href='/'>
                            <h2>PcariMovie</h2>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/'>
                            <small>Home</small>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='tvshow'>
                            <small>TV Show</small>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/video'>
                            <small>Video</small>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/faq'>
                            <small>FAQ</small>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/pricing'>
                            <small>Pricing</small>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/contact'>
                            <small>Contact Us</small>
                        </Link>
                    </ListItem>
                </Flex>
            </List>
            <Box>
                <Flex p='10px' alignItems='center' gap='20px'>
                    <Box>
                        <SearchIcon cursor='pointer' height='100%'/>
                    </Box>
                    <Avatar w='30px' />
                    <small>John Glich</small>
                </Flex>
            </Box>
        </Box>
    </Flex>
  )
}

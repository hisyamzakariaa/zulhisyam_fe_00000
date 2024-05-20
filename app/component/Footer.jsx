'use client'

import { ArrowForwardIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, FormControl, Heading, Input, List, ListIcon, ListItem, Text } from "@chakra-ui/react"

export default function Footer() {
  return (
    <Box>
        <Flex justifyContent='center' alignItems='center'>
            <Box h='100%' bg='transparent' m='0 50px' p='0 30px'>
                        <Heading as='h1'>PcariMovie</Heading>
                        <Text m='20px 0' maxW='300px' fontSize='13px'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro molestias rem magnam id dolorem tempore mollitia alias?</Text>
                        <Heading mb='10px' as='h4'>Join Newsletters</Heading>
                        <Box>
                            <form action="">
                                <Box bgColor='rgb(59,59,59)' display='flex' alignItems='center' justifyContent='space-between' p='10px 20px' borderRadius='10px'>
                                    <FormControl>
                                        <Input type="email" name="email" bgColor='transparent' border='none' placeholder="Insert your mail here" />
                                    </FormControl>
                                    <Button w='40px' h='40px' border='none'
                                    borderRadius='7px' bgColor='gold'><ArrowForwardIcon color='black' fontSize='30px'/></Button>
                                </Box>
                            </form>
                        </Box>
            </Box>

            <Box bgColor='rgb(68,68,68)' flex='1'>
                <Flex p='50px' flexDirection='row' justifyContent='space-evenly'>
                    <List>
                        <ListItem>
                            <Text fontWeight='bold' fontSize='13px'>Product</Text>
                        </ListItem>
                        <ListItem>
                            <Text fontSize='13px'>Movies</Text>
                        </ListItem>
                        <ListItem>
                            <Text fontSize='13px'>TV Show</Text>
                        </ListItem>
                        <ListItem>
                            <Text fontSize='13px'>Videos</Text>
                        </ListItem>
                    </List>

                    <List>
                        <ListItem>
                            <Text fontWeight='bold' fontSize='13px'>Media Group</Text>
                        </ListItem>
                        <ListItem>
                            <Text fontSize='13px'>Nice Studio</Text>
                        </ListItem>
                        <ListItem>
                            <Text fontSize='13px'>Nice News</Text>
                        </ListItem>
                        <ListItem>
                            <Text fontSize='13px'>Nice TV</Text>
                        </ListItem>
                    </List>

                    <List>
                        <ListItem>
                            <Text fontWeight='bold' fontSize='13px'>Sitemap</Text>
                        </ListItem>
                        <ListItem>
                            <Text fontSize='13px'>About</Text>
                        </ListItem>
                        <ListItem>
                            <Text fontSize='13px'>Careers</Text>
                        </ListItem>
                        <ListItem>
                            <Text fontSize='13px'>Press</Text>
                        </ListItem>
                    </List>
                </Flex>

                
                <List p='30px'>
                    <Flex justifyContent='space-evenly'>
                        <ListItem>
                            {/* <ListIcon as={}/> */}
                            <Text fontSize='13px'>8819 Ohio St. South Gate, California 90280</Text>
                        </ListItem>
                        <ListItem>
                            
                            <Text fontSize='13px'>
                                <ListIcon fontSize='18px' as={EmailIcon}/>ourstudio@hello.com
                            </Text>
                        </ListItem>
                        <ListItem>
                            
                            <Text fontSize='13px'>
                                <ListIcon as={PhoneIcon}/>+271 386-647-3637
                            </Text>
                        </ListItem>
                    </Flex>
                </List>
                
            </Box>
        </Flex>
    </Box>
  )
}

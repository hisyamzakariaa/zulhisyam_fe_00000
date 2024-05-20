'use client'

import { TimeIcon, ViewIcon } from "@chakra-ui/icons"
import { Box, Card, CardFooter, CardHeader, Flex, HStack, Heading, Image, Spacer, Text, VStack } from "@chakra-ui/react"
import Link from "next/link"

export default function MovieContent({movies}) {

  return (
    <Box maxW='1000px'>
        <VStack p='10px 20px' >
            <Flex alignItems='center' w='100%' justifyContent='space-between'>
                <Text fontSize='25px'>New Releases</Text>
                <Text color='gold'>View More</Text>
            </Flex>
        </VStack>
        <Flex flexWrap='wrap' justifyContent='center'>
            {movies.map((movie) => (
            <Link key={movie.Movie_ID} href={`/movie/${movie.Movie_ID}`}>
                <Card cursor='pointer' key={movie.Movie_ID} m='10px' w='300px' h='400px' bgImage={`url(${movie.Poster})`} bgSize='100%' _hover={{blur:'5px'}}>
                        <CardHeader w='fit-content'>
                            <Text 
                            bg='gold' 
                            p='2px 5px' 
                            fontSize='13px'
                            borderRadius='20px'
                            color='black'
                            m='10px'
                            >
                                {movie.Genre}
                            </Text>
                        </CardHeader>
                        <Spacer />
                        <CardFooter p='10px'>
                            <Flex flexDirection='column' gap='10px'>
                                <HStack gap='20px'>
                                    <Box display='flex' gap='10px'>
                                        <TimeIcon />
                                        <Text fontSize='13px'>{movie.Duration}</Text>
                                    </Box>
                                    <Box display='flex' gap='10px'>
                                        <ViewIcon />
                                        <Text fontSize='13px'>{movie.Views}</Text >
                                    </Box>
                                </HStack>
                                <Heading as='h3'>{movie.Title}</Heading>
                            </Flex>
                        </CardFooter> 
                </Card>
            </Link>
            ))}
        </Flex>
    </Box>
  )
}

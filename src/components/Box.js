import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Box = ({image_url,disp,first_brewed,name}) => {
  return (
    <Card >
  <CardBody>
    <Image w={100} h={250}
       src={image_url}
      alt='beer'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='4'>
      <Heading size='md'>{name}</Heading>
      <Text>
        {disp}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        {first_brewed}
      </Text>
    </Stack>
  </CardBody>
  
</Card>
  )
}

export default Box
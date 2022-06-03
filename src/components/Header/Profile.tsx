import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Pedro Dalpa</Text>
        <Text color='gray.300' fontSize='small'>
          pedro.dalpa@gmail.com
        </Text>
      </Box>
      <Avatar size='md' name="Pedro Dalpa" src="https://github.com/pedrodalpa.png" />
    </Flex>
  )
}
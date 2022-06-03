import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize='3xl'
      fontWeight='bold'
      letterSpacing='tighter'
      w='64'
    >
      dashgo
      <Text color='pink.500' as='span' ml='1'>.</Text>
    </Text>
  )
}
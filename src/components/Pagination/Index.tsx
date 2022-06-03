import { Box, HStack } from "@chakra-ui/react";
import { PaginationButton } from "./PaginationButton";

export function Pagination() {
  return (
    <HStack
      spacing='6'
      mt='8'
      justifyContent='space-between'
      align='center'
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing='2'>
        <PaginationButton number={1} isCurrent={true} />
        <PaginationButton number={2} />
      </HStack>
    </HStack>
  )

}
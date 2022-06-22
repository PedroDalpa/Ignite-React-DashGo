import { Box, Stack, Text } from '@chakra-ui/react';
import { PaginationButton } from './PaginationButton';

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void
}

const siblingsCount = 1;

function generatePageArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter(page => page > 0)
}

export function Pagination({
  totalCountOfRegisters,
  currentPage = 1,
  onPageChange,
  registersPerPage = 10
}: PaginationProps) {

  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage)

  const previousPage = currentPage > 1
    ? generatePageArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

  const nextPages = currentPage < lastPage
    ? generatePageArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

  return (
    <Stack
      spacing='6'
      mt='8'
      justifyContent='space-between'
      align='center'
      direction={['column', 'row']}
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction='row' spacing='2'>
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationButton onPageChange={onPageChange} number={1} />
            {currentPage > (2 + siblingsCount) && (
              <Text color='gray.300' width='8' textAlign='center'>...</Text>
            )}
          </>

        )}

        {previousPage.length > 0 && previousPage.map(page => {
          return <PaginationButton onPageChange={onPageChange} key={page} number={page} />
        })}

        <PaginationButton onPageChange={onPageChange} number={currentPage} isCurrent={true} />

        {nextPages.length > 0 && nextPages.map(page => {
          return <PaginationButton onPageChange={onPageChange} key={page} number={page} />
        })}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color='gray.300' width='8' textAlign={'center'}>...</Text>
            )}
            <PaginationButton onPageChange={onPageChange} number={lastPage} />

          </>
        )}
      </Stack>
    </Stack>
  )

}
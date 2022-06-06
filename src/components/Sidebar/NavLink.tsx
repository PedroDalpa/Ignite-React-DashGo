import { Icon, Link as ChakraLink, LinkProps as ChakraLinkProps, Text } from '@chakra-ui/react';
import { ElementType } from 'react';
import { ActiveLink } from '../ActiveLink';

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  title: string;
  href: string;
}
export function NavLink({ title, icon, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display='flex' alignItems='center' {...rest} color='pink.600'>
        <Icon as={icon} fontSize='20' />
        <Text ml='4' fontWeight='medium' casing='capitalize'>{title}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}
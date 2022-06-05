import { Icon, Link as ChakraLink, LinkProps as ChakraLinkProps, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { ElementType } from 'react';

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  title: string;
  href: string;
}
export function NavLink({ title, icon, href, ...rest }: NavLinkProps) {
  return (
    <Link href={href}>
      <ChakraLink display='flex' alignItems='center' {...rest}>
        <Icon as={icon} fontSize='20' />
        <Text ml='4' fontWeight='medium' casing='capitalize'>{title}</Text>
      </ChakraLink>
    </Link>
  )
}
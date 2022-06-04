import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { RiMenu2Line } from 'react-icons/ri';
import { useSidebarDrawer } from '../../context/SideBarDrawerContext';
import { Logo } from './Logo';
import { NotificationNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';
export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  const { onOpen } = useSidebarDrawer();

  return (
    <Flex
      width='100%'
      as='header'
      maxWidth={1480}
      h='20'
      mx='auto'
      mt='4'
      px='6'
      align='center'
    >
      {!isWideVersion && (
        <IconButton
          aria-label='Abrir navegação'
          icon={<Icon as={RiMenu2Line} />}
          fontSize='24'
          variant='unstyled'
          onClick={onOpen}
          mr='2'
          mt='3'
        />
      )}
      <Logo />

      {isWideVersion && (<SearchBox />)}

      <Flex
        align='center'
        ml='auto'
      >
        <NotificationNav />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )

}
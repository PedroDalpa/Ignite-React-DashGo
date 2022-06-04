import { Stack } from '@chakra-ui/react';
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';


export function SidebarNav() {
  return (
    <Stack spacing='12' align='flex-start'>
      <NavSection title="Geral" >
        <NavLink title="dashboard" icon={RiDashboardLine} />
        <NavLink title="Usuários" icon={RiContactsLine} />
      </NavSection>
      <NavSection title="Automação" >
        <NavLink title="Formulário" icon={RiInputMethodLine} />
        <NavLink title="Automação" icon={RiGitMergeLine} />
      </NavSection>
    </Stack>
  )
}
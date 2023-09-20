import { Menu, MenuButton, MenuGroup, MenuItem, MenuList } from '@chakra-ui/menu';
import { IconButton } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { RxAvatar } from 'react-icons/rx';

interface UserIcon {
  email: string;
  id: number;
}

export const UserIcon = ({ email, id }: UserIcon) => {

  const router = useRouter();

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<RxAvatar style={{ fontSize: '36px' }} />}
        variant='unstyled'
      />
      <MenuList>
        <MenuGroup title={email}>
          <MenuItem onClick={() => router.push(`/user/${id}`)}>My account</MenuItem>
          <MenuItem onClick={() => router.push(`/user/${id}/orders`)}>My orders</MenuItem>
        </MenuGroup>
        <MenuItem>
          Sign out
        </MenuItem>
      </MenuList>
    </Menu>
  );
};


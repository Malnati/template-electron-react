import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import PinIcon from '@mui/icons-material/Pin';
import BackupIcon from '@mui/icons-material/Backup';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

const categories = [
  {
    id: 'User',
    children: [
        { id: 'Profile', icon: <FolderSharedIcon /> },
        { id: 'Preferences', icon: <PeopleOutlineIcon /> },
        { id: 'Security', icon: <PeopleIcon />, active: true },
        { id: 'Language', icon: <SettingsAccessibilityIcon /> },
        { id: 'Privacity', icon: <SupervisedUserCircleIcon /> },
    ],
  },
  {
    id: 'Settings',
    children: [
        { id: 'Sizes', icon: <PinIcon /> },
        { id: 'Colors', icon: <BackupIcon /> },
        { id: 'Layers', icon: <SettingsIcon /> },
    ],
  },
];

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function Navigator(props) {
  const { ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
          Subtitle
        </ListItem>
        <ListItem sx={{ ...item, ...itemCategory }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Main</ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }) => (
              <ListItem disablePadding key={childId}>
                <ListItemButton selected={active} sx={item}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
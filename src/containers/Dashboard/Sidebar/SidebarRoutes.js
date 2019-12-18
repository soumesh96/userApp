import React from 'react';
import {
  Home as HomeIcon,
  BorderAll as TableIcon,
  Dashboard as DashboardIcon,
  Book as BookIcon,
  CloudUpload as CloudUploadIcon,
  TableChart as TableChartIcon,
} from '@material-ui/icons';

const functionalities = [
  {
    id: 0,
    label: 'Dashboard',
    link: '/dashboard',
    icon: <DashboardIcon />,
  },
  {
    id: 1,
    label: 'Test Definition',
    link: '/omr/testdefiniton',
    icon: <TableChartIcon />,
  },
  {
    id: 2,
    label: 'OMR Upload',
    link: '/omr/upload',
    icon: <CloudUploadIcon />,
  },
];

const definition = [
  {
    id: 0,
    label: 'Add Branch',
    link: '/omr/addbranch',
    icon: <HomeIcon />,
  },
  {
    id: 1,
    label: 'Add Subject',
    link: '/omr/addsubject',
    icon: <BookIcon />,
  },
  {
    id: 2,
    label: 'Add Layout',
    link: '/omr/addlayout',
    icon: <TableIcon />,
  },
  // {
  //   id: 4,
  //   label: 'UI Elements',
  //   link: '/app/ui',
  //   icon: <UIElementsIcon />,
  //   children: [
  //     { id: 1, label: 'Icons', link: '/app/ui/icons' },
  //     { id: 2, label: 'Charts', link: '/app/ui/charts' },
  //     { id: 3, label: 'Maps', link: '/app/ui/maps' },
  //   ],
  // },
];

const sidebarRoutes = [
  {
    id: 1,
    title: 'Functionalities',
    routes: functionalities,
  },
  {
    id: 2,
    title: 'Definition',
    routes: definition,
  },
];

export default sidebarRoutes;

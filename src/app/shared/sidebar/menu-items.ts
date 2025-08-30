import { Teacher } from 'src/app/component/tlist/tlist-data';
import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

  // {
  //   path: '/dashboard',
  //   title: 'Dashboard',
  //   icon: 'bi bi-speedometer2',
  //   class: '',
  //   extralink: false,
  //   submenu: [],
  //   roles: ['123']
  // },
  // {
  //   path: '/component/alert',
  //   title: 'Alert',
  //   icon: 'bi bi-bell',
  //   class: '',
  //   extralink: false,
  //   submenu: [],
  //   roles: ['admin','teacher','student']
  // },
  // {
  //   path: '/component/badges',
  //   title: 'Badges',
  //   icon: 'bi bi-patch-check',
  //   class: '',
  //   extralink: false,
  //   submenu: [],
  //   roles: ['admin','teacher','student']
  // },
  // {
  //   path: '/component/buttons',
  //   title: 'Button',
  //   icon: 'bi bi-hdd-stack',
  //   class: '',
  //   extralink: false,
  //   submenu: [],
  //   roles: ['admin','teacher','student']
  // },
  // {
  //   path: '/component/card',
  //   title: 'Card',
  //   icon: 'bi bi-card-text',
  //   class: '',
  //   extralink: false,
  //   submenu: [],
  //   roles: ['admin','teacher','student']
  // },
  // {
  //   path: '/component/dropdown',
  //   title: 'Dropdown',
  //   icon: 'bi bi-menu-app',
  //   class: '',
  //   extralink: false,
  //   submenu: [],
  //   roles: ['admin','teacher','student']
  // },
  // {
  //   path: '/component/pagination',
  //   title: 'Pagination',
  //   icon: 'bi bi-dice-1',
  //   class: '',
  //   extralink: false,
  //   submenu: [],
  //   roles: ['admin','teacher','student']
  // },
  // {
  //   path: '/component/nav',
  //   title: 'Nav',
  //   icon: 'bi bi-pause-btn',
  //   class: '',
  //   extralink: false,
  //   submenu: [],
  //   roles: ['admin','teacher','student']
  // },
  // {
  //   path: '/component/table',
  //   title: 'Table',
  //   icon: 'bi bi-layout-split',
  //   class: '',
  //   extralink: false,
  //   submenu: [],
  //   roles: ['admin','teacher','student']
  // },

  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    icon: 'bi bi-speedometer2',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['admin']
  },
  {
    path: '/admin/teacherList',
    title: 'Teacher',
    icon: 'bi bi-people',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['admin']
  },
  {
    path: '/admin/studentList',
    title: 'Student',
    icon: 'bi bi-people',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['admin']
  },
  {
    path: '/teacher/dashboard',
    title: 'Dashboard',
    icon: 'bi bi-speedometer2',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['teacher']
  },
  {
    path: '/teacher/studentlist',
    title: 'Student',
    icon: 'bi bi-people',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['teacher']
  },
    {
    path: '/student/dashboard',
    title: 'Dashboard',
    icon: 'bi bi-speedometer2',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['student']
  },
  {
    path: '/about',
    title: 'About',
    icon: 'bi bi-people',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['admin','teacher','student']
  },
  {
    path: '/login',
    title: 'logOut',
    icon: 'bi bi-people',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['admin','teacher','student']
  },
];

export const links = [
  {
    type: 'LINK',
    name: 'Dashboard',
    link: '/admin/',
  },
  {
    heading: 'Manage',
    type: 'GROUP',
    children: [
      {
        name: 'Offers',
        link: '/admin/manage/offers',
      },
      {
        name: 'Affiliates',
        link: '/admin/manage/affiliates',
      },
      {
        name: 'Advertisers',
        link: '/admin/manage/advertisers',
      },
    ],
  },
  {
    heading: 'Analyse',
    type: 'GROUP',
    children: [
      {
        name: 'Report',
        link: '/admin/analyse/report',
      },
      {
        name: 'Transactions',
        link: '/admin/analyse/transactions',
      },
    ],
  },
  {
    heading: 'Pay',
    type: 'GROUP',
    children: [
      {
        name: 'Add',
        link: '/admin/pay/affiliate-billing',
      },
      {
        name: 'Manage',
        link: '/admin/pay/advertising-billing',
      },
    ],
  },
  {
    heading: 'Administrator',
    type: 'GROUP',
    children: [
      {
        name: 'Add',
        link: '/admin/administrator/outbound',
      },
      {
        name: 'Manage',
        link: '/admin/administrator/activity-log',
      },
      {
        name: 'Manage',
        link: '/admin/administrator/mobile-app',
      },
    ],
  },
  {
    heading: 'Configure',
    type: 'GROUP',
    children: [
      {
        name: 'Setting',
        link: '/admin/setting',
      },
    ],
  },
];

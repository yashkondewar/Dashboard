import React from 'react';
import { FiShoppingBag, FiEdit, FiCreditCard, FiStar, FiShoppingCart, FiHome, FiList } from 'react-icons/fi';
import { BsCurrencyDollar, BsShield, BsChatLeft, BsQuestionSquare } from 'react-icons/bs';
import { RiContactsLine } from 'react-icons/ri';
import { TiTick } from 'react-icons/ti';
import { FaCog } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';
import product1 from './product1.jpg';
import product2 from './product2.jpg';
import product3 from './product3.jpg';
import product4 from './product4.jpg';
import product5 from './product5.jpg';
import product6 from './product6.jpg';
import product7 from './product7.jpg';
import { AiFillBulb } from 'react-icons/ai';

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);
export const EditorData = () => (
  <div>
    <h3>
      Try React
      React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.

      Online Playgrounds
      If you’re interested in playing around with React, you can use an online code playground. Try a Hello World template on CodePen, CodeSandbox, or Stackblitz.

      If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos.

      Add React to a Website
      You can add React to an HTML page in one minute. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets.
      
    </h3>
  </div>
);
const customerGridImage = (props) => (
  <div className="image">
    <img
      className="w-13 h-13"
      src={props.CustomerImage}
      alt="employee"
    />
  </div>
);

const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
    <p>{props.Status}</p>
  </div>
);

export const customersGrid = [
  { type: 'checkbox', width: '50' },
  { headerText: 'Image',
    width: '80',
    template: customerGridImage},
  { field: 'PostTitle',
    headerText: 'Post Title',
    width: '150',
    textAlign: 'Center' },
  { field: 'Status',
    headerText: 'Status',
    width: '130',
    format: 'yMd',
    textAlign: 'Center',
    template: customerGridStatus },
  {
    field: 'Likes',
    headerText: 'Likes',
    width: '100',
    format: 'C2',
    textAlign: 'Center' },
  // { field: 'Budget',
  //   headerText: 'Budget',
  //   width: '100',
  //   format: 'yMd',
  //   textAlign: 'Center' },

  // { field: 'Location',
  //   headerText: 'Location',
  //   width: '150',
  //   textAlign: 'Center' },

  { field: 'PostID',
    headerText: 'Customer ID',
    width: '120',
    textAlign: 'Center',
    isPrimaryKey: true,
  },

];

export const employeesGrid = [
  { headerText: 'Employee',
    width: '150',
    template: gridEmployeeProfile,
    textAlign: 'Center' },
  { field: 'Name',
    headerText: '',
    width: '0',
    textAlign: 'Center',
  },
  { field: 'Title',
    headerText: 'Designation',
    width: '170',
    textAlign: 'Center',
  },
  { headerText: 'Country',
    width: '120',
    textAlign: 'Center',
    template: gridEmployeeCountry },

  { field: 'HireDate',
    headerText: 'Hire Date',
    width: '135',
    format: 'yMd',
    textAlign: 'Center' },

  { field: 'ReportsTo',
    headerText: 'Reports To',
    width: '120',
    textAlign: 'Center' },
  { field: 'EmployeeID',
    headerText: 'Employee ID',
    width: '125',
    textAlign: 'Center' },
];

export const links = [
  {
    links: [
      {
        name: 'Home',
        icon: <FiHome />,
      },
      {
        name: 'Inspiration',
        icon: <AiFillBulb />,
      },
      {
        name: 'editor',
        icon: <FiEdit />,
      },
      {
        name: 'Queue',
        icon: <FiList />,
      },
      {
        name: 'Settings',
        icon: <FaCog />,
      },
    ],
  },   
];

export const cartData = [
  {
    image:
      product5,
    name: 'butterscotch ice-cream',
    category: 'Milk product',
    price: '$250',
  },
  {
    image:
      product6,
    name: 'Supreme fresh tomato',
    category: 'Vegetable Item',
    price: '$450',
  },
  {
    image:
      product7,
    name: 'Red color candy',
    category: 'Food Item',
    price: '$190',
  },
];

export const chatData = [
  {
    image:
      avatar2,
    message: 'Roman Joined the Team!',
    desc: 'Congratulate him',
    time: '9:08 AM',
  },
  {
    image:
      avatar3,
    message: 'New message received',
    desc: 'Salma sent you new message',
    time: '11:56 AM',
  },
  {
    image:
      avatar4,
    message: 'New Payment received',
    desc: 'Check your earnings',
    time: '4:39 AM',
  },
  {
    image:
      avatar,
    message: 'Jolly Published Post tasks',
    desc: 'Assign her new tasks',
    time: '1:12 AM',
  },
];

export const recentTransactions = [
  {
    icon: <BsCurrencyDollar />,
    amount: '+$350',
    title: 'Paypal Transfer',
    desc: 'Money Added',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'green-600',
  },
  {
    icon: <BsShield />,
    amount: '-$560',
    desc: 'Bill Payment',
    title: 'Wallet',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
  {
    icon: <FiCreditCard />,
    amount: '+$350',
    title: 'Credit Card',
    desc: 'Money reversed',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',

    pcColor: 'green-600',
  },
  {
    icon: <TiTick />,
    amount: '+$350',
    title: 'Bank Transfer',
    desc: 'Money Added',

    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',
    pcColor: 'green-600',
  },
  {
    icon: <BsCurrencyDollar />,
    amount: '-$50',
    percentage: '+38%',
    title: 'Refund',
    desc: 'Payment Sent',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
];

export const weeklyStats = [
  {
    icon: <FiShoppingCart />,
    amount: '-$560',
    title: 'Top Sales',
    desc: 'Johnathan Doe',
    iconBg: '#FB9678',
    pcColor: 'red-600',
  },
  {
    icon: <FiStar />,
    amount: '-$560',
    title: 'Best Seller',
    desc: 'MaterialPro Admin',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'red-600',
  },
  {
    icon: <BsChatLeft />,
    amount: '+$560',
    title: 'Most Commented',
    desc: 'Ample Admin',
    iconBg: '#00C292',
    pcColor: 'green-600',
  },
];

export const productsPerformance = [
  {
    image:
      product5,
    title: 'Is it good butterscotch ice-cream?',
    desc: 'Ice-Cream, Milk, Powder',
    rating: 'Good',
    itemSold: '65%',
    earningAmount: '$546,000',
  },
  {
    image:
      product6,
    title: 'Supreme fresh tomato available',
    desc: 'Market, Mall',
    rating: 'Excellent',
    itemSold: '98%',
    earningAmount: '$780,000',
  },
  {
    image:
      product7,
    title: 'Red color candy from Gucci',
    desc: 'Chocolate, Yummy',
    rating: 'Average',
    itemSold: '46%',
    earningAmount: '$457,000',
  },
  {
    image:
      product4,
    title: 'Stylish night lamp for night',
    desc: 'Electric, Wire, Current',
    rating: 'Poor',
    itemSold: '23%',
    earningAmount: '$123,000',
  },
];

export const medicalproBranding = {
  data: [
    {
      title: 'Due Date',
      desc: 'Oct 23, 2021',
    },
    {
      title: 'Budget',
      desc: '$98,500',
    },
    {
      title: 'Expense',
      desc: '$63,000',
    },
  ],
  teams: [
    {
      name: 'Bootstrap',
      color: 'orange',
    },
    {
      name: 'Angular',
      color: '#FB9678',
    },
  ],
  leaders: [
    {
      image:
        avatar2,
    },
    {
      image:
        avatar3,
    },
    {
      image:
        avatar2,
    },
    {
      image:
        avatar4,
    },
    {
      image:
        avatar,
    },
  ],
};

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];

export const ordersGrid = [
  {
    headerText: 'Image',
    template: gridOrderImage,
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'OrderItems',
    headerText: 'Item',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  { field: 'CustomerName',
    headerText: 'Customer Name',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'TotalAmount',
    headerText: 'Total Amount',
    format: 'C2',
    textAlign: 'Center',
    editType: 'numericedit',
    width: '150',
  },
  {
    headerText: 'Status',
    template: gridOrderStatus,
    field: 'OrderItems',
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'OrderID',
    headerText: 'Order ID',
    width: '120',
    textAlign: 'Center',
  },

  {
    field: 'Location',
    headerText: 'Location',
    width: '150',
    textAlign: 'Center',
  },
];

export const customersData = [
  {
    PostID: 1001,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
    product6,
    PostTitle: 'Hosting Press HTML',
    Status: 'Scheduled',
    StatusBg: '#8BE78B',
    Likes: '40',
    // Budget:  '$2.4k',
    // Location: 'India',
  },
  {
    PostID: 1002,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    PostTitle: 'Elite Admin',
    Status: 'Scheduled',
    CustomerImage:
      product3,

    StatusBg: '#8BE78B',
    Likes: '11',
    // Budget:  '$3.9k',
    // Location: 'India',
  },
  {
    PostID: 1003,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    PostTitle: 'Real Homes WP Theme',
    Status: 'Draft',
    CustomerImage:
      product4,
    StatusBg: '#FEC90F',
    Likes: '19',
    // Budget:  '$24.5k',
    // Location: 'USA',
  },
  {
    PostID: 1004,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    PostTitle: 'MedicalPro WP Theme',
    Status: 'Published Post',
    CustomerImage:
      product1,
    StatusBg: '#8BE78B',
    Likes: '34',
    // Budget:  '$16.5k',
    // Location: 'USA',
  },
  {
    PostID: 1005,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    PostTitle: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      product2,
    StatusBg: 'red',
    Likes: '34',
    // Budget:  '$16.5k',
    // Location: 'USA',
  },
  {
    PostID: 1006,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      product2,
    PostTitle: 'Hosting Press HTML',
    Status: 'Scheduled',
    StatusBg: '#8BE78B',
    Likes: '40',
    // Budget:  '$2.4k',
    // Location: 'India',
  },
  {
    PostID: 1007,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    PostTitle: 'Elite Admin',
    Status: 'Scheduled',
    CustomerImage:
      product3,

    StatusBg: '#8BE78B',
    Likes: '11',
    // Budget:  '$3.9k',
    // Location: 'India',
  },
  {
    PostID: 1008,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    PostTitle: 'Real Homes WP Theme',
    Status: 'Draft',
    CustomerImage:
      product4,
    StatusBg: '#FEC90F',
    Likes: '19',
    // Budget:  '$24.5k',
    // Location: 'USA',
  },
  {
    PostID: 1009,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    PostTitle: 'MedicalPro WP Theme',
    Status: 'Published Post',
    CustomerImage:
      product3,
    StatusBg: '#8BE78B',
    Likes: '34',
    // Budget:   '$16.5k',
    // Location: 'USA',
  },
  {
    PostID: 1010,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    PostTitle: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      product2,
    StatusBg: 'red',
    Likes: '34',
    // Budget:  '$16.5k',
    // Location: 'USA',
  },
  {
    PostID: 1011,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      product2,
    PostTitle: 'Hosting Press HTML',
    Status: 'Scheduled',
    StatusBg: '#8BE78B',
    Likes: '40',
    // Budget:  '$2.4k',
    // Location: 'India',
  },
  {
    PostID: 1012,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    PostTitle: 'Elite Admin',
    Status: 'Scheduled',
    CustomerImage:
      product3,

    StatusBg: '#8BE78B',
    Likes: '11',
    // Budget:  '$3.9k',
    // Location: 'India',
  },
  {
    PostID: 1013,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    PostTitle: 'Real Homes WP Theme',
    Status: 'Draft',
    CustomerImage:
      product4,
    StatusBg: '#FEC90F',
    Likes: '19',
    // Budget:  '$24.5k',
    // Location: 'USA',
  },
  {
    PostID: 1014,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    PostTitle: 'MedicalPro WP Theme',
    Status: 'Published Post',
    CustomerImage:
      product5,
    StatusBg: '#8BE78B',
    Likes: '34',
    // Budget:  '$16.5k',
    // Location: 'USA',
  },
  {
    PostID: 1015,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    PostTitle: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      product2,
    StatusBg: 'red',
    Likes: '34',
    // Budget:  '$16.5k',
    // Location: 'USA',
  },
  {
    PostID: 1016,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      product2,
    PostTitle: 'Hosting Press HTML',
    Status: 'Scheduled',
    StatusBg: '#8BE78B',
    Likes: '40',
    // Budget:  '$2.4k',
    // Location: 'India',
  },
  {
    PostID: 1017,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    PostTitle: 'Elite Admin',
    Status: 'Scheduled',
    CustomerImage:
      product3,

    StatusBg: '#8BE78B',
    Likes: '11',
    // Budget:  '$3.9k',
    // Location: 'India',
  },
  {
    PostID: 1018,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    PostTitle: 'Real Homes WP Theme',
    Status: 'Draft',
    CustomerImage:
      product4,
    StatusBg: '#FEC90F',
    Likes: '19',
    // Budget:  '$24.5k',
    // Location: 'USA',
  },
  {
    PostID: 1019,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    PostTitle: 'MedicalPro WP Theme',
    Status: 'Published Post',
    CustomerImage:
      product1,
    StatusBg: '#8BE78B',
    Likes: '34',
    // Budget:  '$16.5k',
    // Location: 'USA',
  },
  {
    PostID: 1020,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    PostTitle: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      product2,
    StatusBg: 'red',
    Likes: '34',
    // Budget:  '$16.5k',
    // Location: 'USA',
  },
  {
    PostID: 1021,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      product2,
    PostTitle: 'Hosting Press HTML',
    Status: 'Scheduled',
    StatusBg: '#8BE78B',
    Likes: '40',
    // Budget:  '$2.4k',
    // Location: 'India',
  },
  {
    PostID: 1022,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    PostTitle: 'Elite Admin',
    Status: 'Scheduled',
    CustomerImage:
      product3,

    StatusBg: '#8BE78B',
    Likes: '11',
    // Budget:  '$3.9k',
    // Location: 'India',
  },
  {
    PostID: 1023,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    PostTitle: 'Real Homes WP Theme',
    Status: 'Draft',
    CustomerImage:
      product4,
    StatusBg: '#FEC90F',
    Likes: '19',
    // Budget:  '$24.5k',
    // Location: 'USA',
  },
  {
    PostID: 1024,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    PostTitle: 'MedicalPro WP Theme',
    Status: 'Published Post',
    CustomerImage:
      product3,
    StatusBg: '#8BE78B',
    Likes: '34',
    // Budget:  '$16.5k',
    // Location: 'USA',
  },
  {
    PostID: 1025,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    PostTitle: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      product2,
    StatusBg: 'red',
    Likes: '34',
    // Budget:  '$16.5k',
    // Location: 'USA',
  },
  {
    PostID: 1026,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      product2,
    PostTitle: 'Hosting Press HTML',
    Status: 'Scheduled',
    StatusBg: '#8BE78B',
    Likes: '40',
    // Budget:  '$2.4k',
    // Location: 'India',
  },
  {
    PostID: 1027,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    PostTitle: 'Elite Admin',
    Status: 'Scheduled',
    CustomerImage:
      product3,

    StatusBg: '#8BE78B',
    Likes: '11',
    // Budget:  '$3.9k',
    // Location: 'India',
  },
  {
    PostID: 1028,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    PostTitle: 'Real Homes WP Theme',
    Status: 'Draft',
    CustomerImage:
      product4,
    StatusBg: '#FEC90F',
    Likes: '19',
    // Budget:  '$24.5k',
    // Location: 'USA',
  },
  {
    PostID: 1029,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    PostTitle: 'MedicalPro WP Theme',
    Status: 'Published Post',
    CustomerImage:
      product1,
    StatusBg: '#8BE78B',
    Likes: '34',
    // Budget:  '$16.5k',
    // Location: 'USA',
  },
  {
    PostID: 1030,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    PostTitle: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      product2,
    StatusBg: 'red',
    Likes: '34',
    // Budget:  '$16.5k',
    // Location: 'USA',
  },
  {
    PostID: 1031,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      product2,
    PostTitle: 'Hosting Press HTML',
    Status: 'Scheduled',
    StatusBg: '#8BE78B',
    Likes: '40',
    // Budget:  '$2.4k',
    // Location: 'India',
  },
  {
    PostID: 1032,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    PostTitle: 'Elite Admin',
    Status: 'Scheduled',
    CustomerImage:
      product3,

    StatusBg: '#8BE78B',
    Likes: '11',
    // Budget:  '$3.9k',
    // Location: 'India',
  },
  {
    PostID: 1033,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    PostTitle: 'Real Homes WP Theme',
    Status: 'Draft',
    CustomerImage:
      product4,
    StatusBg: '#FEC90F',
    Likes: '19',
    // Budget:  '$24.5k',
    // Location: 'USA',
  },
  {
    PostID: 1034,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    PostTitle: 'MedicalPro WP Theme',
    Status: 'Published Post',
    CustomerImage:
      product1,
    StatusBg: '#8BE78B',
    Likes: '34',
    // Budget:  '$16.5k',
    // Location: 'USA',
  },
  {
    PostID: 1035,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    PostTitle: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      product2,
    StatusBg: 'red',
    Likes: '34',
    // Budget:  '$16.5k',
    // Location: 'USA',
  },
  {
    PostID: 1036,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      product2,
    PostTitle: 'Hosting Press HTML',
    Status: 'Scheduled',
    StatusBg: '#8BE78B',
    Likes: '40',
    // Budget:  '$2.4k',
    // Location: 'India',
  },
  {
    PostID: 1037,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    PostTitle: 'Elite Admin',
    Status: 'Scheduled',
    CustomerImage:
      product3,

    StatusBg: '#8BE78B',
    Likes: '11',
    // Budget:  '$3.9k',
    // Location: 'India',
  },
  {
    PostID: 1038,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    PostTitle: 'Real Homes WP Theme',
    Status: 'Draft',
    CustomerImage:
      product4,
    StatusBg: '#FEC90F',
    Likes: '19',
    // Budget:  '$24.5k',
    // Location: 'USA',
  },
  {
    PostID: 1039,
    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    PostTitle: 'MedicalPro WP Theme',
    Status: 'Published Post',
    CustomerImage:
      product2,
    StatusBg: '#8BE78B',
    Likes: '34',
    // Budget:  '$16.5k',
    // Location: 'USA',
  },
  {
    PostID: 1040,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    PostTitle: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      product2,
    StatusBg: 'red',
    Likes: '34',
    // Budget:  '$16.5k',
    // Location: 'USA',
  },

];

export const employeesData = [
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
    avatar3,
  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
    avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
    avatar,
  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
    avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
    avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
    avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
    avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
    avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
    avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
];

export const ordersData = [
  {
    OrderID: 10248,
    CustomerName: 'Vinet',

    TotalAmount: 32.38,
    OrderItems: 'Fresh Tomato',
    // Location: 'USA',
    Status: 'Draft',
    StatusBg: '#FB9678',
    ProductImage:
      product6,
  },
  {
    OrderID: 345653,
    CustomerName: 'Carson Darrin',
    TotalAmount: 56.34,
    OrderItems: 'Butter Scotch',
    // Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product5,
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    TotalAmount: 93.31,
    OrderItems: 'Candy Gucci',
    // Location: 'New York',
    Status: 'Scheduled',
    StatusBg: '#03C9D7',
    ProductImage:
      product7,
  },
  {
    OrderID: 893486,
    CustomerName: 'Anika Viseer',
    TotalAmount: 93.31,
    OrderItems: 'Night Lamp',
    // Location: 'Germany',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product4,
  },
  {
    OrderID: 748975,
    CustomerName: 'Miron Vitold',
    TotalAmount: 23.99,
    OrderItems: 'Healthcare Erbology',
    // Location: 'Spain',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage:
    product1,
  },
  {
    OrderID: 94757,
    CustomerName: 'Omar Darobe',
    TotalAmount: 95.99,
    OrderItems: 'Makeup Lancome Rouge',
    // Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product2,
  },
  {
    OrderID: 944895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    OrderItems: 'Skincare',
    // Location: 'USA',
    Status: 'Scheduled',
    StatusBg: '#03C9D7',
    ProductImage:
      product3,
  },
  {
    OrderID: 845954,
    CustomerName: 'Penjani',
    TotalAmount: 59.99,
    OrderItems: 'Headphone',
    // Location: 'USA',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product4,
  },
  {
    OrderID: 845954,
    CustomerName: 'Jie Yan',
    TotalAmount: 87.99,
    OrderItems: 'Shoes',
    // Location: 'USA',
    Status: 'Draft',
    StatusBg: '#FB9678',
    ProductImage:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    // Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 38489,
    CustomerName: 'Miron',
    TotalAmount: 87.99,
    OrderItems: 'Ice Cream',
    // Location: 'USA',
    Status: 'Scheduled',
    StatusBg: '#03C9D7',
    ProductImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    OrderID: 24546,
    CustomerName: 'Frank',
    TotalAmount: 84.99,
    OrderItems: 'Pan Cake',
    // Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    // Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',

    TotalAmount: 32.38,
    OrderItems: 'Fresh Tomato',
    // Location: 'USA',
    Status: 'Draft',
    StatusBg: '#FB9678',
    ProductImage:
      product6,
  },
  {
    OrderID: 345653,
    CustomerName: 'Carson Darrin',
    TotalAmount: 56.34,
    OrderItems: 'Butter Scotch',
    // Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product5,
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    TotalAmount: 93.31,
    OrderItems: 'Candy Gucci',
    // Location: 'New York',
    Status: 'Scheduled',
    StatusBg: '#03C9D7',
    ProductImage:
      product7,
  },
  {
    OrderID: 893486,
    CustomerName: 'Anika Viseer',
    TotalAmount: 93.31,
    OrderItems: 'Night Lamp',
    // Location: 'Germany',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product4,
  },
  {
    OrderID: 748975,
    CustomerName: 'Miron Vitold',
    TotalAmount: 23.99,
    OrderItems: 'Healthcare Erbology',
    // Location: 'Spain',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage:
      product1,
  },
  {
    OrderID: 94757,
    CustomerName: 'Omar Darobe',
    TotalAmount: 95.99,
    OrderItems: 'Makeup Lancome Rouge',
    // Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product2,
  },
  {
    OrderID: 944895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    OrderItems: 'Skincare',
    // Location: 'USA',
    Status: 'Scheduled',
    StatusBg: '#03C9D7',
    ProductImage:
      product3,
  },
  {
    OrderID: 845954,
    CustomerName: 'Penjani',
    TotalAmount: 59.99,
    OrderItems: 'Headphone',
    // Location: 'USA',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product4,
  },
  {
    OrderID: 845954,
    CustomerName: 'Jie Yan',
    TotalAmount: 87.99,
    OrderItems: 'Shoes',
    // Location: 'USA',
    Status: 'Draft',
    StatusBg: '#FB9678',
    ProductImage:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    // Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 38489,
    CustomerName: 'Miron',
    TotalAmount: 87.99,
    OrderItems: 'Ice Cream',
    // Location: 'USA',
    Status: 'Scheduled',
    StatusBg: '#03C9D7',
    ProductImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    OrderID: 24546,
    CustomerName: 'Frank',
    TotalAmount: 84.99,
    OrderItems: 'Pan Cake',
    // Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    // Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',

    TotalAmount: 32.38,
    OrderItems: 'Fresh Tomato',
    // Location: 'USA',
    Status: 'Draft',
    StatusBg: '#FB9678',
    ProductImage:
      product6,
  },
  {
    OrderID: 345653,
    CustomerName: 'Carson Darrin',
    TotalAmount: 56.34,
    OrderItems: 'Butter Scotch',
    // Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product5,
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    TotalAmount: 93.31,
    OrderItems: 'Candy Gucci',
    // Location: 'New York',
    Status: 'Scheduled',
    StatusBg: '#03C9D7',
    ProductImage:
      product7,
  },
  {
    OrderID: 893486,
    CustomerName: 'Anika Viseer',
    TotalAmount: 93.31,
    OrderItems: 'Night Lamp',
    // Location: 'Germany',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product4,
  },
  {
    OrderID: 748975,
    CustomerName: 'Miron Vitold',
    TotalAmount: 23.99,
    OrderItems: 'Healthcare Erbology',
    // Location: 'Spain',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage:
      product1,
  },
  {
    OrderID: 94757,
    CustomerName: 'Omar Darobe',
    TotalAmount: 95.99,
    OrderItems: 'Makeup Lancome Rouge',
    // Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product2,
  },
  {
    OrderID: 944895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    OrderItems: 'Skincare',
    // Location: 'USA',
    Status: 'Scheduled',
    StatusBg: '#03C9D7',
    ProductImage:
      product3,
  },
  {
    OrderID: 845954,
    CustomerName: 'Penjani',
    TotalAmount: 59.99,
    OrderItems: 'Headphone',
    // Location: 'USA',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product4,
  },
  {
    OrderID: 845954,
    CustomerName: 'Jie Yan',
    TotalAmount: 87.99,
    OrderItems: 'Shoes',
    // Location: 'USA',
    Status: 'Draft',
    StatusBg: '#FB9678',
    ProductImage:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    // Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 38489,
    CustomerName: 'Miron',
    TotalAmount: 87.99,
    OrderItems: 'Ice Cream',
    // Location: 'USA',
    Status: 'Scheduled',
    StatusBg: '#03C9D7',
    ProductImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    OrderID: 24546,
    CustomerName: 'Frank',
    TotalAmount: 84.99,
    OrderItems: 'Pan Cake',
    // Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    // Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',

    TotalAmount: 32.38,
    OrderItems: 'Fresh Tomato',
    // Location: 'USA',
    Status: 'Draft',
    StatusBg: '#FB9678',
    ProductImage:
      product6,
  },
  {
    OrderID: 345653,
    CustomerName: 'Carson Darrin',
    TotalAmount: 56.34,
    OrderItems: 'Butter Scotch',
    // Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product5,
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    TotalAmount: 93.31,
    OrderItems: 'Candy Gucci',
    // Location: 'New York',
    Status: 'Scheduled',
    StatusBg: '#03C9D7',
    ProductImage:
      product7,
  },
  {
    OrderID: 893486,
    CustomerName: 'Anika Viseer',
    TotalAmount: 93.31,
    OrderItems: 'Night Lamp',
    // Location: 'Germany',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product4,
  },
  {
    OrderID: 748975,
    CustomerName: 'Miron Vitold',
    TotalAmount: 23.99,
    OrderItems: 'Healthcare Erbology',
    // Location: 'Spain',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage:
      product1,
  },
  {
    OrderID: 94757,
    CustomerName: 'Omar Darobe',
    TotalAmount: 95.99,
    OrderItems: 'Makeup Lancome Rouge',
    // Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product2,
  },
  {
    OrderID: 944895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    OrderItems: 'Skincare',
    // Location: 'USA',
    Status: 'Scheduled',
    StatusBg: '#03C9D7',
    ProductImage:
      product3,
  },
  {
    OrderID: 845954,
    CustomerName: 'Penjani',
    TotalAmount: 59.99,
    OrderItems: 'Headphone',
    // Location: 'USA',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product4,
  },
  {
    OrderID: 845954,
    CustomerName: 'Jie Yan',
    TotalAmount: 87.99,
    OrderItems: 'Shoes',
    // Location: 'USA',
    Status: 'Draft',
    StatusBg: '#FB9678',
    ProductImage:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    // Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 38489,
    CustomerName: 'Miron',
    TotalAmount: 87.99,
    OrderItems: 'Ice Cream',
    // Location: 'USA',
    Status: 'Scheduled',
    StatusBg: '#03C9D7',
    ProductImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    OrderID: 24546,
    CustomerName: 'Frank',
    TotalAmount: 84.99,
    OrderItems: 'Pan Cake',
    // Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    // Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',

    TotalAmount: 32.38,
    OrderItems: 'Fresh Tomato',
    // Location: 'USA',
    Status: 'Draft',
    StatusBg: '#FB9678',
    ProductImage:
      product6,
  },
  {
    OrderID: 345653,
    CustomerName: 'Carson Darrin',
    TotalAmount: 56.34,
    OrderItems: 'Butter Scotch',
    // Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product5,
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    TotalAmount: 93.31,
    OrderItems: 'Candy Gucci',
    // Location: 'New York',
    Status: 'Scheduled',
    StatusBg: '#03C9D7',
    ProductImage:
      product7,
  },
  {
    OrderID: 893486,
    CustomerName: 'Anika Viseer',
    TotalAmount: 93.31,
    OrderItems: 'Night Lamp',
    // Location: 'Germany',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product4,
  },
  {
    OrderID: 748975,
    CustomerName: 'Miron Vitold',
    TotalAmount: 23.99,
    OrderItems: 'Healthcare Erbology',
    // Location: 'Spain',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage:
      product1,
  },
  {
    OrderID: 94757,
    CustomerName: 'Omar Darobe',
    TotalAmount: 95.99,
    OrderItems: 'Makeup Lancome Rouge',
    // Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product2,
  },
  {
    OrderID: 944895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    OrderItems: 'Skincare',
    // Location: 'USA',
    Status: 'Scheduled',
    StatusBg: '#03C9D7',
    ProductImage:
      product3,
  },
  {
    OrderID: 845954,
    CustomerName: 'Penjani',
    TotalAmount: 59.99,
    OrderItems: 'Headphone',
    // Location: 'USA',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product4,
  },
  {
    OrderID: 845954,
    CustomerName: 'Jie Yan',
    TotalAmount: 87.99,
    OrderItems: 'Shoes',
    // Location: 'USA',
    Status: 'Draft',
    StatusBg: '#FB9678',
    ProductImage:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    // Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 38489,
    CustomerName: 'Miron',
    TotalAmount: 87.99,
    OrderItems: 'Ice Cream',
    // Location: 'USA',
    Status: 'Scheduled',
    StatusBg: '#03C9D7',
    ProductImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    OrderID: 24546,
    CustomerName: 'Frank',
    TotalAmount: 84.99,
    OrderItems: 'Pan Cake',
    // Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    // Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
];

export const scheduleData = [
  {
    Id: 1,
    Subject: 'Explosion of Betelgeuse Star',
    // Location: 'Space Center USA',
    StartTime: '2021-01-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 2,
    Subject: 'Thule Air Crash Report',
    // Location: 'Newyork City',
    StartTime: '2021-01-11T06:30:00.000Z',
    EndTime: '2021-01-11T08:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 3,
    Subject: 'Blue Moon Eclipse',
    // Location: 'Space Center USA',
    StartTime: '2021-01-12T04:00:00.000Z',
    EndTime: '2021-01-12T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 4,
    Subject: 'Meteor Showers in 2021',
    // Location: 'Space Center USA',
    StartTime: '2021-01-13T07:30:00.000Z',
    EndTime: '2021-01-13T09:00:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 5,
    Subject: 'Milky Way as Melting pot',
    // Location: 'Space Center USA',
    StartTime: '2021-01-14T06:30:00.000Z',
    EndTime: '2021-01-14T08:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 6,
    Subject: 'Mysteries of Bermuda Triangle',
    // Location: 'Bermuda',
    StartTime: '2021-01-14T04:00:00.000Z',
    EndTime: '2021-01-14T05:30:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 7,
    Subject: 'Glaciers and Snowflakes',
    // Location: 'Himalayas',
    StartTime: '2021-01-15T05:30:00.000Z',
    EndTime: '2021-01-15T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 8,
    Subject: 'Life on Mars',
    // Location: 'Space Center USA',
    StartTime: '2021-01-16T03:30:00.000Z',
    EndTime: '2021-01-16T04:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 9,
    Subject: 'Alien Civilization',
    // Location: 'Space Center USA',
    StartTime: '2021-01-18T05:30:00.000Z',
    EndTime: '2021-01-18T07:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 10,
    Subject: 'Wildlife Galleries',
    // Location: 'Africa',
    StartTime: '2021-01-20T05:30:00.000Z',
    EndTime: '2021-01-20T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 11,
    Subject: 'Best Photography 2021',
    // Location: 'London',
    StartTime: '2021-01-21T04:00:00.000Z',
    EndTime: '2021-01-21T05:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 12,
    Subject: 'Smarter Puppies',
    // Location: 'Sweden',
    StartTime: '2021-01-08T04:30:00.000Z',
    EndTime: '2021-01-08T06:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 13,
    Subject: 'Myths of Andromeda Galaxy',
    // Location: 'Space Center USA',
    StartTime: '2021-01-06T05:00:00.000Z',
    EndTime: '2021-01-06T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 14,
    Subject: 'Aliens vs Humans',
    // Location: 'Research Center of USA',
    StartTime: '2021-01-05T04:30:00.000Z',
    EndTime: '2021-01-05T06:00:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 15,
    Subject: 'Facts of Humming Birds',
    // Location: 'California',
    StartTime: '2021-01-19T04:00:00.000Z',
    EndTime: '2021-01-19T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 16,
    Subject: 'Sky Gazers',
    // Location: 'Alaska',
    StartTime: '2021-01-22T05:30:00.000Z',
    EndTime: '2021-01-22T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 17,
    Subject: 'The Cycle of Seasons',
    // Location: 'Research Center of USA',
    StartTime: '2021-01-11T00:00:00.000Z',
    EndTime: '2021-01-11T02:00:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 18,
    Subject: 'Space Galaxies and Planets',
    // Location: 'Space Center USA',
    StartTime: '2021-01-11T11:30:00.000Z',
    EndTime: '2021-01-11T13:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 19,
    Subject: 'Lifecycle of Bumblebee',
    // Location: 'San Fransisco',
    StartTime: '2021-01-14T00:30:00.000Z',
    EndTime: '2021-01-14T02:00:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 20,
    Subject: 'Alien Civilization',
    // Location: 'Space Center USA',
    StartTime: '2021-01-14T10:30:00.000Z',
    EndTime: '2021-01-14T12:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 21,
    Subject: 'Alien Civilization',
    // Location: 'Space Center USA',
    StartTime: '2021-01-10T08:30:00.000Z',
    EndTime: '2021-01-10T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 22,
    Subject: 'The Cycle of Seasons',
    // Location: 'Research Center of USA',
    StartTime: '2021-01-12T09:00:00.000Z',
    EndTime: '2021-01-12T10:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 23,
    Subject: 'Sky Gazers',
    // Location: 'Greenland',
    StartTime: '2021-01-15T09:00:00.000Z',
    EndTime: '2021-01-15T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 24,
    Subject: 'Facts of Humming Birds',
    // Location: 'California',
    StartTime: '2021-01-16T07:00:00.000Z',
    EndTime: '2021-01-16T09:00:00.000Z',
    CategoryColor: '#7fa900',
  },
];


export const dropdownData = [
  {
    Id: '1',
    Time: 'March 2021',
  },
  {
    Id: '2',
    Time: 'April 2021',
  }, {
    Id: '3',
    Time: 'May 2021',
  },
];



export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];








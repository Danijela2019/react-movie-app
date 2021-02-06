import React from 'react';
import { AiOutlineGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';

export const footerAnchors = [
  {
    id: 1,
    category: 'Brands',
    links: [
      {
        href: '#',
        text: 'Samsung A22',
      },
      {
        href: '#',
        text: 'IPhone10',
      },
      {
        href: '#',
        text: 'Huawei SX',
      },
    ],
  },
  {
    id: 2,
    category: 'About',
    links: [
      {
        href: '#',
        text: 'Locations',
      },
      {
        href: '#',
        text: 'Company goal',
      },
      {
        href: '#',
        text: 'Our team',
      },
    ],
  },
  {
    id: 3,
    category: 'FAQ',
    links: [
      {
        href: '#',
        text: 'How to choose a phone',
      },
      {
        href: '#',
        text: 'Payment methods',
      },
      {
        href: '#',
        text: 'Other questions',
      },
    ],
  },
];

export const followMeData = [
  {
    id: 1,
    text: 'Facebook',
    icon:  <AiFillFacebook />,
    link:'https://www.facebook.com/deni83',
  },
  {
    id: 2,
    text: 'Github',
    icon: <AiOutlineGithub />,
    link:'https://github.com/Danijela2019',
  },
  {
    id: 3,
    text: 'Linkedin',
    icon: <AiFillLinkedin />,
    link:'https://www.linkedin.com/in/danijela-milenkovic-926b0a57/',
  },
];
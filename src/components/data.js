import card from '../assets/card.png'
import book from '../assets/book.png'
import briefcase from '../assets/briefcase.png'

const sublinks = [
    {
      page: 'products',
      links: [
        { label: 'payment', icon: card, url: '/products' },
        { label: 'terminal', icon: card, url: '/products' },
        { label: 'connect', icon: card, url: '/products' },
      ],
    },
    {
      page: 'developers',
      links: [
        { label: 'plugins', icon: book, url: '/products' },
        { label: 'libraries', icon: book, url: '/products' },
        { label: 'help', icon: book, url: '/products' },
        { label: 'billing', icon: book, url: '/products' },
      ],
    },
    {
      page: 'company',
      links: [
        { label: 'about', icon: briefcase, url: '/products' },
        { label: 'customers', icon: briefcase, url: '/products' },
      ],
    },
  ];
  
  export default sublinks;
import Link  from 'next/link'
import Image  from 'next/image'
import React from 'react'
import styles from "./Menu.module.scss";
import Home from '@/public/home.svg'
import Search from '@/public/search.svg'
import Order from '@/public/order.svg'
import Chart from '@/public/chart.svg'

const Menu = () => {

const menu = [
    {
      id: 1,
      title: "main",
      listItems: [
        {
          id: 1,
          title: "Homepage",
          url: "/",
          icon: Home,
        },
        {
          id: 2,
          title: "Search",
          url: "/search",
          icon: Search,
        },
      ],
    },
    {
      id: 2,
      title: "lists",
      listItems: [
        {
          id: 1,
          title: "Trending",
          url: "/trends",
          icon: Order,
        },
      
      ],
    },
  
    {
      id: 3,
      title: "analytics",
      listItems: [
        {
          id: 1,
          title: "Charts",
          url: "/",
          icon: Chart,
        },
      ],
    },
  ];

  return (
    <div className={styles.menu}>
      {menu.map((item) => (
        <div className={styles.item} key={item.id}>
          <span className={styles.title}>{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link href={listItem.url} className={styles.listItem} key={listItem.id}>
              <Image src={listItem.icon} alt="" width={26} height={26}/>
              <span className={styles.listItemTitle}>{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;

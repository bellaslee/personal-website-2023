import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/css/Nav.module.css';
import cx from 'classnames';

const links = [
  {
    page: "home",
    route: "/"
  },
  {
    page: "blog",
    route: "../blog"
  },
];

export default function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    if (isNavExpanded) document.body.classList.add('stop-scrolling');
    else document.body.classList.remove('stop-scrolling');
  }, [isNavExpanded])

  const renderLinks = links.map((link) => {
    const content = link.url ? <a href={link.url} target="_blank" rel="noreferrer">{link.page}</a> : <Link href={link.route}>{link.page}</Link>;

    return (
      <li
        key={link.page}
        className={styles.item}
        onClick={() => setIsNavExpanded(false)}
      >
        {content}
      </li>
    )
  });

  return (
    <nav className={styles.nav}>
      <h1>
        <Link href="/">Bella Lee</Link>
      </h1>
      {/* <button
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
        className={styles.hamburger}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button> */}
      <ul className={styles.menu}>
        {renderLinks}
      </ul>
    </nav>
  );
};
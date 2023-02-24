import Logo from '../Logo/Logo';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/images/logo-responsive.svg';
import menu from '@/public/images/menu-icon.svg';
import styles from './headerNav.module.scss';

const navLinks = [
    {id: 1, name: 'Акции', href: '/stocks'},
    {id: 2, name: 'Кредит', href: '/credit'},
    {id: 3, name: 'Оплата и доставка', href: '/pay-and-delivery'},
    {id: 4, name: 'Помощь', href: '/help'},
    {id: 5, name: 'Контакты', href: '/contacts'},
];

const HeaderNav = () => {
  return (
    <nav className={styles.headerNav}>
        {navLinks.map((el) => (
            <Link key={el.id} href={el.href} className={styles.headerNavLink}>{el.name}</Link>
        ))}
        <div>
        <Logo variant='logoLight'/>
        <button className="menuButton">
            <Image src={menu} width={24} height={24} alt=""/>
        </button>
        </div>
    </nav>
  )
}

export default HeaderNav
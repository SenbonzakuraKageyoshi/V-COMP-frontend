import CatalogLink from '../CatalogLink/CatalogLink';
import PrivatePageLink from '../PrivatePageLink/PrivatePageLink';
import HeaderNav from '../HeaderNav/HeaderNav';
import Logo from '../Logo/Logo';
import Image from 'next/image';
import Link from 'next/link';
import favorite from '@/public/images/favorite-icon.svg';
import cart from '@/public/images/cart-icon.svg';
import user from '@/public/images/user-icon.svg';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.headerTopContent}>
            <div className="container">
                <HeaderNav />
            </div>
        </div>
        <div className="container">
            <div className={styles.headerBottomContent}>
                <div className={styles.headerContentLeft}>
                    <Logo variant='logoDark'/>
                    <CatalogLink />
                </div>
                <div className={styles.headerContentRight}>
                    <PrivatePageLink href="/favorite">
                        <Image src={favorite} width={36} height={36} alt="" />
                    </PrivatePageLink>
                    <PrivatePageLink href="/cart">
                        <Image src={cart} width={36} height={36} alt="" />
                    </PrivatePageLink>
                    <PrivatePageLink href="/profile">
                        <div className={styles.profileLink}>
                        <Image src={user} width={30} height={30} alt="" />
                        </div>
                    </PrivatePageLink>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
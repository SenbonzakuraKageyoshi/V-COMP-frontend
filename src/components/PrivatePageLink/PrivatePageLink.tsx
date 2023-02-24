import Link from 'next/link';
import styles from './privatePageLink.module.scss';

interface PrivatePageLink {
    children: React.ReactNode
    href: string
}

const PrivatePageLink = ({ children, href }: PrivatePageLink) => {
  return (
    <Link href={href} className={styles.privatePageLink}>
        { children }
    </Link>
  )
}

export default PrivatePageLink
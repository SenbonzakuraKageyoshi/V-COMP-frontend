import Link from "next/link"
import Image from "next/image"
import logoDark from '@/public/images/logo.svg';
import logoLight from '@/public/images/logo-responsive.svg';
import styles from './logo.module.scss';

interface Logo {
    variant: 'logoDark' | 'logoLight'
}

const logoVariants = {
    logoDark,
    logoLight
}

console.log(logoVariants)

const Logo = ({ variant }: Logo) => {
    return (
        <Link href="/" className={styles[variant]}>
            <Image src={logoVariants[variant]} width={165} height={42} alt="V-COMP"/>
        </Link>
    )
}

export default Logo
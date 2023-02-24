import Link from 'next/link';
import Image from 'next/image';
import catalog from '@/public/images/catalog-icon.svg';
import styles from './catalogLink.module.scss';

const CatalogLink = () => {
  return (
    <Link href="/catalog" className={styles.catalogLink}>
        <span>Каталог товаров</span>
        <Image src={catalog} width={20} height={20} alt="" />
    </Link>
  )
}

export default CatalogLink
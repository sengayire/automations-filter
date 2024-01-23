import Image from 'next/image'
import React from 'react'
import styles from './styles.module.scss'
interface PropsProps  {
  logo: string;
};

export const ProductLogo = ({ logo }: PropsProps) => {
  return (
    <div className={styles.container}>
      <Image src={logo} alt="" className={styles.image} width={25} height={25}/>
    </div>
  );
};

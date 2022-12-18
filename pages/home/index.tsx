import { TextField } from 'components/Input/TextField';
import React, { useCallback, useMemo, useState } from 'react';
import exchange from 'static/_mock/nepExchangeRate.json';
import styles from 'pages/home/Home.module.css';
import { Wallet } from 'Container/Wallet/Wallet';
import { Card } from 'components/Card/Card';
import Image from 'next/image';

type Props = {};

const Home = ({}: Props) => {
  const [currency, setCurrency] = useState({
    field: 'NEP',
    amount: '',
  });

  const handleInputChange = useCallback((name: string, value: string) => {
    setCurrency({
      field: name,
      amount: value,
    });
  }, []);

  const getNepValue = useMemo(() => {
    const converted =
      currency.field === 'BUSD'
        ? (
            Math.round(parseFloat(currency.amount) * 100) /
            100 /
            exchange.BUSD
          ).toFixed(2)
        : (Math.round(parseFloat(currency.amount) * 100) / 100) * exchange.NEP;

    return converted;
  }, [currency]);

  const getBusdValue = useMemo(() => {
    const converted =
      currency.field === 'NEP'
        ? (
            (Math.round(parseFloat(currency.amount) * 100) / 100) *
            exchange.BUSD
          ).toFixed(2)
        : Math.round(parseFloat(currency.amount) * 100) / 100 / exchange.NEP;

    return converted;
  }, [currency]);

  return (
    <div className='root'>
      <Image
        src={'/neptune-mutual-logo.png'}
        className='imagecomonentcard'
        alt={'Neptune'}
        width={1280}
        height={208}
        layout='responsive'
      />
      <div className={`${styles.container} flex-center flex-1`}>
        <Card>
          <form className='flex-1'>
            <TextField
              placeholder='Enter NEP'
              aria-placeholder='Enter NEP'
              name='NEP'
              type='number'
              handleInputChange={handleInputChange}
              value={getNepValue}
            />
            <div className='flex-center padding'>=</div>
            <TextField
              placeholder='Enter BUSD'
              aria-placeholder='Enter BUSD'
              name='BUSD'
              type='number'
              handleInputChange={handleInputChange}
              value={getBusdValue}
            />
          </form>
          <Wallet />
        </Card>
      </div>
    </div>
  );
};

export default Home;

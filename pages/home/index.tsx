import { TextField } from 'components/Input/TextField';
import React, { useCallback, useMemo, useState } from 'react';
import exchange from 'static/_mock/nepExchangeRate.json';
import styles from 'pages/home/Home.module.css';

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
      <h1 className='text-center'>currency converter</h1>
      <div className={`${styles.container} flex-center flex-1`}>
        <div className={`${styles.card} flex-center`}>
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
        </div>
      </div>
    </div>
  );
};

export default Home;

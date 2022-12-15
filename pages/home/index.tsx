import { TextField } from 'pages/components/Input/TextField';
import React, { useCallback, useMemo, useState } from 'react';
import exchange from 'static/_mock/nepExchangeRate.json';

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
    return currency.field === 'BUSD'
      ? Math.round(parseFloat(currency.amount) * 100) / 100 / exchange.BUSD
      : (Math.round(parseFloat(currency.amount) * 100) / 100) * exchange.NEP;
  }, [currency]);

  const getBusdValue = useMemo(() => {
    return currency.field === 'NEP'
      ? (Math.round(parseFloat(currency.amount) * 100) / 100) * exchange.BUSD
      : Math.round(parseFloat(currency.amount) * 100) / 100 / exchange.NEP;
  }, [currency]);

  return (
    <div>
      <h1>currency converter</h1>

      <div>
        <form>
          <TextField
            placeholder='Enter NEP'
            aria-placeholder='Enter NEP'
            name='NEP'
            type='number'
            handleInputChange={handleInputChange}
            value={getNepValue}
          />
          <div className='equals'>=</div>
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
  );
};

export default Home;

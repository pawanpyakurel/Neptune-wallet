import React from 'react';
import styles from 'components/Table/Table.module.css';
import { textEclipseCenter } from 'utils/stringManipulation/subString';

export type cellT = {
  dataKey: string;
  value: string;
};

type TableProps = {
  cell: Array<cellT>;
};

export const Table = ({ cell }: TableProps) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <td>Wallet key</td>
          <td>Wallet Value</td>
        </tr>
      </thead>
      <tbody>
        {cell?.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.dataKey}</td>
              <td className='font-b'>
                {textEclipseCenter({ text: item.value, minLength: 10 })}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

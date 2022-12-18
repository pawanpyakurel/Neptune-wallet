import Web3 from 'web3';

type ProviderParamsT = string | undefined | null;
type web3Props = {
  connected: boolean;
  account: ProviderParamsT;
};

export const httpProvider = new Web3(
  new Web3.providers.HttpProvider(
    'https://mainnet.infura.io/v3/a1b525f334c44dfdba9d606b6ad5e081'
  )
);

let balance: any = '';
let blockNo: any = '';

export const web3 = async ({ connected, account }: web3Props) => {
  const getBalance = async () =>
    await httpProvider.eth.getBalance(account ?? '', function (err, result) {
      if (err) {
        console.log(err);
      } else {
        balance = Web3.utils.fromWei(result, 'ether');
      }
    });

  const getBlockNumber = async () =>
    await httpProvider.eth.getBlockNumber(function (err, result) {
      if (err) {
        console.log(err);
      } else {
        blockNo = result;
      }
    });

  await getBalance();
  await getBlockNumber();
  return [
    {
      dataKey: 'balance',
      value: balance,
    },
    { dataKey: 'block no', value: blockNo },
  ];
};

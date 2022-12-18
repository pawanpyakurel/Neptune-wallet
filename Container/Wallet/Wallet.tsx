import { useWeb3React } from '@web3-react/core';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import { PopUp } from 'components/Popup/Popup';
import { Table } from 'components/Table/Table';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { injected } from 'services/connectors';
import { web3 } from 'services/httpProvider';
import { GLOBAL_CONSTANT } from 'static/constants/GlobalConstant';
import { useLocalStorage } from 'utils/hooks/useLocalStore';

type WalletProps = {};

export const Wallet = ({}: WalletProps) => {
  const { active, account, activate, deactivate, chainId, setError, error } =
    useWeb3React();

  const [openDialog, setOpenDialog] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);

  const [data, setData]: any[] = useState([GLOBAL_CONSTANT.TABLE_DATA]);

  const [isWalletConnected, setIsWalletConnected] = useLocalStorage({
    key: 'isWalletConnected',
    data: false,
  });

  const [loading, setLoading] = useState(false);

  async function connect() {
    setLoading(true);
    try {
      await activate(injected);
      setIsWalletConnected(true);
    } catch (e: any) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  async function disconnect() {
    setLoading(true);
    try {
      deactivate();
      setIsWalletConnected(false);
    } catch (e: any) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (isWalletConnected) {
        connect();
      }
    };
    connectWalletOnPageLoad();
  }, []);

  const onOkClick = async () => {
    setOpenDialog(false);
    await connect().then(() => {
      setOpenDetails(true);
    });
  };

  const onWaletCheck = () => {
    active
      ? setOpenDetails((details) => !details)
      : setOpenDialog((dialog) => !dialog);
  };

  const onDisconnect = () => {
    setOpenDetails(false);
    disconnect();
  };

  const getFromWeb3 = useCallback(() => {
    return !!active && !!account ? web3({ connected: active, account }) : [];
  }, [active, account]);

  const tableData = async () => {
    try {
      const data = await getFromWeb3();
      setLoading(true);
      setData([
        {
          dataKey: 'account',
          value: account ?? '',
        },
        {
          dataKey: 'chain ID',
          value: chainId,
        },

        ...data,
      ]);
    } catch (error) {
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useLayoutEffect(() => {
    openDetails && tableData();
  }, [openDetails]);

  return (
    <>
      <div className='padding flex-center'>
        <a
          id='link'
          className='padding text-center'
          onClick={onWaletCheck}
        >
          Check Walet Details
        </a>
      </div>
      <Modal
        isOpen={openDetails && active && !loading}
        onClose={() => setOpenDetails((details) => !details)}
      >
        <Table cell={data} />
        <div className={`flex gap-1`}>
          <Button
            onClick={onDisconnect}
            color='danger'
          >
            Disconnect
          </Button>

          <Button onClick={() => setOpenDetails(false)}>Cancel</Button>
        </div>
      </Modal>
      <PopUp
        onOkClick={onOkClick}
        isOpen={openDialog}
        onClose={() => setOpenDialog((dialog) => !dialog)}
      >
        <h4 className='color-red'>
          Wallet is not Connected. Plese Press <b>"Connect"</b> button below.
        </h4>
      </PopUp>
    </>
  );
};

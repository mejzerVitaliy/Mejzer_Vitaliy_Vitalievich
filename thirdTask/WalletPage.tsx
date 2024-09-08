import React, { useMemo } from 'react';
import { BoxProps } from '@mui/material/Box'; 
import WalletRow from './WalletRow'; 
import { useWalletBalances, usePrices } from './hooks'; 

interface WalletBalance {
    currency: string;
    amount: number;
    blockchain?: string; // Added blockchain property to interface
}

interface FormattedWalletBalance {
  currency: string;
  amount: number;
  formatted: string;
}

interface Props extends BoxProps { }

const WalletPage: React.FC<Props> = (props: Props) => {
    const { children, ...rest } = props;
    const balances = useWalletBalances();
    const prices = usePrices();
  
    const getPriority = (blockchain: string): number => {
        const priorities: Record<string, number> = {
            'Osmosis': 100,
            'Ethereum': 50,
            'Arbitrum': 30,
            'Zilliqa': 20,
            'Neo': 20
        };
        return priorities[blockchain] ?? -99; 
      };
  
    const sortedBalances = useMemo(() => {
        return balances
            .filter((balance: WalletBalance) => balance.amount > 0) 
            .sort((lhs: WalletBalance, rhs: WalletBalance) => {
                const leftPriority = getPriority(lhs.blockchain || ''); 
                const rightPriority = getPriority(rhs.blockchain || '');
                return rightPriority - leftPriority; 
            });
    }, [balances]);
  
    const formattedBalances = sortedBalances.map((balance: WalletBalance) => {
        return {
            ...balance,
            formatted: balance.amount.toFixed(2)
        }
    })
  
    const rows = formattedBalances.map((balance: FormattedWalletBalance, index: number) => {
        const usdValue = prices[balance.currency] * balance.amount;
        return (
            <WalletRow 
                className={classes.row}
                key={index}
                amount={balance.amount}
                usdValue={usdValue}
                formattedAmount={balance.formatted}
            />
        )
    })
  
    return (
        <section {...rest}>
            {rows}
        </section>
    )
}
  
export default WalletPage;
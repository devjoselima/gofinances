import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useFocusEffect } from "@react-navigation/native";

import { HighLightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard'

import { colors } from "../../theme";

import { 
  Container,
  Header,
  HighLightCards,
  Transactions,
  Title,
  TransactionList,
  LoadContainer
} from './styles'


export interface DataListProps extends TransactionCardProps {
  id: string;
}

interface HightlightProps {
  amount: string;
  lastTransaction: string;
}

interface HighlightData {
  entries: HightlightProps;
  expensives: HightlightProps;
  total: HightlightProps;
}

export const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [transactions, setTransactions] = useState<DataListProps[]>([]);
  const [highlightData, setHighlightData] = useState<HighlightData>({} as HighlightData);


  const getLastTransactionDate = (collection: DataListProps[], type: 'positive' | 'negative') => {

    const lastTransactions = new Date(
      Math.max.apply(Math, collection
      .filter( transaction => transaction.type === type)
      .map( transaction => new Date(transaction.date).getTime()))
    );

    if(isNaN(Number(lastTransactions))) {
      return ''
    }

    return `${lastTransactions.getDate()} de ${lastTransactions.toLocaleString('pt-BR', { month: 'long' })}`;
  }

  const loadTransactions = async () => {
    const dataKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(dataKey)
    const transactions = response ? JSON.parse(response) : [];

    let entriesTotal = 0;
    let expensiveTotal  = 0;

    const transactionsFormatted: DataListProps[] = transactions
    .map((item: DataListProps) => {

      if(item.type === 'positive') {
        entriesTotal += Number(item.amount)
      } else {
        expensiveTotal += Number(item.amount)
      }

      const amount = Number(item.amount).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });

      const date = Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
      }).format(new Date(item.date))

      return {
        id: item.id,
        name: item.name,
        amount,
        type: item.type,
        category: item.category,
        date,
      }
    });

    setTransactions(transactionsFormatted)

    const lastTransactionsEntries = getLastTransactionDate(transactions, 'positive');
    const lastTransactionsExpensives = getLastTransactionDate(transactions, 'negative');
    const totalInterval = `01 a ${new Date().getDate()} de ${new Date().toLocaleString('pt-BR', { month: 'long'})}`

    const total = entriesTotal - expensiveTotal;


    setHighlightData({
      entries: {
        amount: entriesTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }),
        lastTransaction: lastTransactionsEntries !== '' ? `Última entrada dia ${lastTransactionsEntries}` : ''
      },
      expensives: {
        amount: expensiveTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }),
        lastTransaction: lastTransactionsExpensives !== '' ? `Última saída dia ${lastTransactionsExpensives}` : ''
      },
      total: {
        amount: total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: totalInterval
      }
    });
    setIsLoading(false)
  }

  useEffect(() => {
    loadTransactions()
    
  }, []);

  useFocusEffect(useCallback(() => {
    loadTransactions();
  }, []))

  return (
    <Container>
      {
        isLoading ? 
        <LoadContainer>
          <ActivityIndicator 
            color={colors.primary}
            size='large'
          /> 
        </LoadContainer> :
        <>
          <Header>
          </Header>

          <HighLightCards>
            <HighLightCard 
              type="up" 
              title="Entradas" 
              amount={highlightData.entries.amount} 
              lastTransaction={highlightData.entries.lastTransaction}
            />
            <HighLightCard type="down" title="Saídas" amount={highlightData.expensives.amount} lastTransaction={highlightData.expensives.lastTransaction}/>
            <HighLightCard type="total" title="Total" amount={highlightData.total.amount} lastTransaction={highlightData.total.lastTransaction}/>
          </HighLightCards>

          <Transactions>
            <Title>Listagem</Title>
            <TransactionList 
              data={transactions}
              keyExtractor={(item: DataListProps)=> item.id}
              renderItem={({ item }: {item: DataListProps}) => <TransactionCard data={item} />}
            />

          
        </Transactions>
        </>
      }

    </Container>
  )
}
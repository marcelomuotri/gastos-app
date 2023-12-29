import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import PieChart from '../components/PieChart'
import Legend from '../components/Legend'
import { Button } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import { useGetFromEndpointQuery } from '../state/api'

export interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const navigation = useNavigation()

  const { data, isLoading } = useGetFromEndpointQuery('transactions')

  const transactions = data?.data || []

  const handleAddExpense = () => {
    ;(navigation as any).navigate('AddExpense', { transactions })
  }
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <PieChart transactions={transactions} />
          <Legend transactions={transactions} />
          <View style={styles.buttonContainer}>
            <Button color="success" buttonStyle={styles.button}>
              Agregar Ingreso
            </Button>
            <Button
              color="red"
              buttonStyle={styles.button}
              onPress={handleAddExpense}
            >
              Agregar Gasto
            </Button>
          </View>
        </>
      )}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  button: {
    marginRight: 10,
  },
})

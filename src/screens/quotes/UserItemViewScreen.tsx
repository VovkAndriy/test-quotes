import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../../styles';
import {FlatList, StyleSheet} from 'react-native';
import {FormUserItem} from '../../components/FormUserItem';
import {ItemUser} from '../../types/UserItem';
import {Header} from './Header';

const data: ItemUser[] = [
  {
    amount: '$3,400',
    date: 'Apr 2, 24',
  },
  {
    amount: '$3,600',
    date: 'Apr 1, 24',
  },
  {amount: '$3,700', date: 'Mar 12, 24'},
  {amount: '$3,200', date: 'Mar 3, 24'},
  {amount: '$3,900', date: 'Mar 1, 24'},
  {amount: '$2,900', date: 'Feb 27, 24'},
  {amount: '$3,000', date: 'Feb 20, 24'},
];

export const UserItemViewScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Header />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentContainerStyle}
        data={data}
        keyExtractor={(_item, index) => String(index)}
        renderItem={({item, index}) => (
          <FormUserItem amount={item.amount} date={item.date} index={index} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.light,
  },
  contentContainerStyle: {
    padding: 20,
    alignItems: 'baseline',
    gap: 16,
  },
});

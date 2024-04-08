import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {COLORS} from '../styles';
import {CheckIcon, TaskIcon} from '../assets/svg';
import {ItemUser} from '../types/UserItem';

interface IProps extends ItemUser {
  index: number;
}

export const FormUserItem = ({amount, date, index}: IProps) => {
  const handlePress = () => {
    Alert.alert('You selected quote', `Amount: ${amount} \n Date: ${date}`);
  };

  const firstItem = index === 0;

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.container, firstItem && styles.selectedContainer]}>
        <TaskIcon />
        <View style={styles.content}>
          <Text style={styles.amount}>{amount}</Text>
          <Text style={styles.date}>{date}</Text>
          <View style={styles.signedContainer}>
            {firstItem && (
              <View style={styles.checkContainer}>
                <CheckIcon />
              </View>
            )}
            <Text
              style={[
                styles.signedText,
                {color: firstItem ? COLORS.primary : COLORS.neutral},
              ]}>
              {firstItem ? 'Signed' : 'Not Signed'}
            </Text>
          </View>
        </View>
      </View>
      {firstItem && <Text style={styles.topLabel}>Latest</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.light,
    flexDirection: 'row',
    padding: 20,
    borderWidth: 2,
    borderRadius: 8,
    gap: 16,
    borderColor: COLORS.border,
  },
  selectedContainer: {
    borderColor: COLORS.primary,
  },
  content: {
    gap: 8,
    paddingRight: 20,
  },
  amount: {
    fontWeight: '600',
    fontSize: 18,
  },
  date: {
    fontSize: 18,
    fontWeight: '500',
  },
  topLabel: {
    backgroundColor: COLORS.light,
    position: 'absolute',
    paddingHorizontal: 10,
    transform: [{translateY: -8}],
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: 16,
    color: COLORS.primary,
  },
  checkContainer: {
    width: 20,
    height: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signedContainer: {flexDirection: 'row', gap: 6, alignItems: 'center'},
  signedText: {
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 1,
  },
});

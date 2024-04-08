import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../styles';
import {ArrowRightIcon} from '../../assets/svg';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quotes</Text>
      <TouchableOpacity style={styles.actionContainer}>
        <Text style={styles.actionText}>Create New Quote</Text>
        <ArrowRightIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
  },
  actionContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  actionText: {
    color: COLORS.action,
    fontSize: 20,
  },
});

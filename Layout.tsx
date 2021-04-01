import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

export const Layout: FC<{}> = ({ children }) => {
  return <View style={styles.layoutConatiner}>{children}</View>;
};

const styles = StyleSheet.create({
  layoutConatiner: {
    paddingLeft: 16,
    paddingRight: 16,
    position: 'relative',
  },
});

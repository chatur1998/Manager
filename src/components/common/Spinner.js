import React from 'react';
import { View, ActivityIndicator } from 'react-native';

//it checks that if we have assigned any particular size then take that or by default large

const Spinner = ({ SpinnerSize }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={SpinnerSize || 'large'} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Spinner };

//Import libraries
import React from 'react';
import { Text, View } from 'react-native';

//Make the component
const Header = (props) => {
            const { textStyle, viewStyle } = Styles;
    return (
      <View style={viewStyle}>
      <Text style={textStyle}> {props.headerText}</Text>
      </View>
    );
};

const Styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    elevation: 10,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};
//Make the component available to other parts of the App
export default Header;

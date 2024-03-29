import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//WE'll not directlt establish a link to the website here bcz then the button won't be
//reusable therefore we rather pass the object from the button tag in albumdetail
//telling what to do with the given button
const Button = ({ whenPressed, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
  <TouchableOpacity onPress={whenPressed} style={buttonStyle}>
    <Text style={textStyle}>
      {children}
    </Text>
  </TouchableOpacity>
 );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }

};

export default Button;

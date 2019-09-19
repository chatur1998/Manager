import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

//actions .employeeCreate to navigate to emplyoyee when clicked its name
class ListItem extends Component {
onRowPress() {
  Actions.employeeEdit({ employee: this.props.employee });

}

  render() {
    const { name } = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={this.props.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;

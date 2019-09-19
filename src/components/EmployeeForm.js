import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';


class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
        <Input
        label="Name"
        placeholder="Rishabh"
        value={this.props.name}
        onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
        />
        </CardSection>

        <CardSection>
        <Input
        label="Phone no."
        placeholder="555-555-5555"
        value={this.props.phone}
        onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
        />
        </CardSection>
//in the cardsection using style won't work ncz it is user defined
//therefore we'll have to make some correspomding changes in the cardsection.js
//to accomodate the changes
        <CardSection style={{ flexDirection: 'column' }}>
        <Text style={styles.pickerLabelStyle}>Shift</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerLabelStyle: {
  fontSize: 18,
  paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};


export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);

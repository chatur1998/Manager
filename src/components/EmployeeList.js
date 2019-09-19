//to convert  the employees object into an array
//which can be processed by the cloneWithRows
import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import employeesFetch from '../actions';
import ListItem from './ListItem';

/*class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.employees.length !== this.props.employees.length) {
      this.props.employeesFetch();
    }
  }

  render() {
    return (
      <FlatList data={this.props.employees} renderItem={({item}) => <ListItem employee={item}/>}/>
    );
  };
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid}
  });
  return { employees };
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
*/

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();

    this.createDatasource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    //nextProps are the next set of props that this components
    //will be rendered renedered with
    //this.props is still the old set of nextProps

    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
    }

renderRow(employee) {
  return <ListItem employee={employee} />;
}

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

//val represent the whole employee record
//_.map puts all the vlues in an array
const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });
  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);

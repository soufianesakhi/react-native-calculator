import React from 'react';
import { StyleSheet, View } from 'react-native';
import calculate from '../services/calculate';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

export default class Calculator extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap"
  },
});

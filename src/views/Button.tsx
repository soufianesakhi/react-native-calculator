import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";

interface ButtonPropTypes {
  name: string,
  orange?: boolean,
  wide?: boolean,
  last?: boolean,
  clickHandler: (name: string) => any,
}

export default class Button extends React.Component<ButtonPropTypes, any> {
  static propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    last: PropTypes.bool,
    clickHandler: PropTypes.func,
  };

  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    const containerStyle: any[] = [styles.container];
    if (this.props.wide) {
      containerStyle.push(styles.wide);
    }
    const textStyle: any[] = [styles.text];
    const btnStyle: any[] = [styles.btn];
    if (this.props.last) {
      btnStyle.push(styles.lastBtn);
    }
    if (this.props.orange) {
      btnStyle.push(styles.orangeBtn);
      textStyle.push(styles.white);
    }
    return (
      <View style={containerStyle}>
        <TouchableOpacity onPress={this.handleClick} style={btnStyle}>
          <Text style={textStyle}>{this.props.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wide: {
    flex: 2
  },
  btn: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#e0e0e0",
    marginRight: 1,
    padding: 0
  },
  lastBtn: {
    marginRight: 0
  },
  orangeBtn: {
    backgroundColor: "#f5923e",
    color: "white"
  },
  text: {
    textAlign: "center",
    fontSize: 50
  },
  white: {
    color: "white"
  }
});

import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from 'react-native';

export default class Display extends React.Component<any, any> {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.value}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#858694",
    fontWeight: "200",
    paddingRight: 10
  },  
  text: {
    color: "white",
    fontSize: 80
  }
  
});

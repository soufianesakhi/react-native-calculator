import Button from "./Button";
import React from "react";
import { StyleSheet, View } from 'react-native';
import PropTypes from "prop-types";

export default class ButtonPanel extends React.Component<any, any> {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
      <View style={styles.container}>
         <View style={styles.btnGroup}>
          <Button name="AC" clickHandler={this.handleClick} />
          <Button name="+/-" clickHandler={this.handleClick} />
          <Button name="%" clickHandler={this.handleClick} />
          <Button name="÷" clickHandler={this.handleClick} orange last/>
        </View>
         <View style={styles.btnGroup}>
          <Button name="7" clickHandler={this.handleClick} />
          <Button name="8" clickHandler={this.handleClick} />
          <Button name="9" clickHandler={this.handleClick} />
          <Button name="x" clickHandler={this.handleClick} orange last/>
        </View>
         <View style={styles.btnGroup}>
          <Button name="4" clickHandler={this.handleClick} />
          <Button name="5" clickHandler={this.handleClick} />
          <Button name="6" clickHandler={this.handleClick} />
          <Button name="-" clickHandler={this.handleClick} orange last/>
        </View>
         <View style={styles.btnGroup}>
          <Button name="1" clickHandler={this.handleClick} />
          <Button name="2" clickHandler={this.handleClick} />
          <Button name="3" clickHandler={this.handleClick} />
          <Button name="+" clickHandler={this.handleClick} orange last/>
        </View>
         <View style={styles.btnGroup}>
          <Button name="0" clickHandler={this.handleClick} wide />
          <Button name="." clickHandler={this.handleClick} />
          <Button name="=" clickHandler={this.handleClick} orange last/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: "#858694",
    flexWrap: "wrap"
  },  
  btnGroup: {
    flex: 1,
    marginBottom: 1,
    flexDirection: "row",
  }
});

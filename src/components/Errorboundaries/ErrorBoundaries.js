import React, { Component } from "react";
import { ImageUrlErr, Text, Error } from "./styles/Errorboundies";
class ErrorBoundaries extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, info) {
    console.log(error);
  }
  render() {
    return this.state.hasError ? (
      <Error>
        <ImageUrlErr imageUrl="https://i.imgur.com/3suxlvm.png" />
        <Text>Sorry this page is broken !</Text>
      </Error>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundaries;

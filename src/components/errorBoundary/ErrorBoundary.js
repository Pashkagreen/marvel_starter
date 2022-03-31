import { Component } from "react/cjs/react.production.min";

export default class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(err, info) {
    console.log(err, info);
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <h1>Something went wrong</h1>;
    }
    return this.props.children;
  }
}

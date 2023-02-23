import React, { Component } from 'react';

const CountHits = (WrappedComponent, power) => {
  class CountHits extends Component {
    state = {
      hits: 0,
    };

    handleAddOne = () => {
      this.setState(prevSate => {
        return {
          hits: prevSate.hits + 1,
        };
      });
    };

    componentDidUpdate(prevProps, prevState) {
      if (this.state !== prevState) {
        const actorName = WrappedComponent.name;

        this.props.handleReduceLife(actorName, power);

        console.log(this.props, power);
      }
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          hocState={this.state}
          AddOneHit={this.handleAddOne}
        />
      );
    }
  }

  return CountHits;
};

export default CountHits;

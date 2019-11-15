import React, {Component} from 'react';
import {Runtime, Inspector} from "@observablehq/runtime";
import define from "@gabgrz/github-contributions";

class Chart extends Component {
  chart = React.createRef();

  componentDidMount() {
    const runtime = new Runtime();
    runtime.module(define, name => {
      if (name === "chart") {
        return new Inspector(this.chart.current);
      }
    });
  }

  render() {
    return (
      <div className="Chart">
        <div ref={this.chart}></div>
      </div>
    );
  }
}

export default Chart;
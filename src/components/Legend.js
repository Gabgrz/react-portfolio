import React, {Component} from 'react';
import {Runtime, Inspector} from "@observablehq/runtime";
import define from "@gabgrz/github-contributions";

class Legend extends Component {
  contributionsLegend = React.createRef();

  componentDidMount() {
    const runtime = new Runtime();
    runtime.module(define, name => {
      if (name === "contributionsLegend") {
        return new Inspector(this.contributionsLegend.current);
      }
    });
  }

  render() {
    return (
      <div className="Legend">
        <div ref={this.contributionsLegend}></div>
      </div>
    );
  }
}

export default Legend;
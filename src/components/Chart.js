import React, { useRef, useEffect } from 'react';
import {Runtime, Inspector} from "@observablehq/runtime";
import define from "@gabgrz/github-contributions";

function Chart() {
  const chart = useRef(null);

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(define, name => {
      if (name === "chart") {
        return new Inspector(chart.current);
      }
    });
  }, []);

  return (
    <div className="Chart">
      <div ref={chart}></div>
    </div>
  );
}

export default Chart;
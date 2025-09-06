import React, { useRef, useEffect } from 'react';
import {Runtime, Inspector} from "@observablehq/runtime";
import define from "@gabgrz/github-contributions";

function Legend() {
  const contributionsLegend = useRef(null);

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(define, name => {
      if (name === "contributionsLegend") {
        return new Inspector(contributionsLegend.current);
      }
    });
  }, []);

  return (
    <div className="Legend">
      <div ref={contributionsLegend}></div>
    </div>
  );
}

export default Legend;
import React from "react";
import { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Inference from "./components/Inference";
import BackendStatus from "./components/BackendStatus";

function App() {
  return (
    <div>
      <Parallax pages={2}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={1}
        >
          <Inference />
        </ParallaxLayer>

        <ParallaxLayer 
          offset={0.8}
          speed={0.5}
          factor={1}
          style={{
            backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/2560px-Oranges_-_whole-halved-segment.jpg)`,
            backgroundSize: "cover"
          }}
        >
        
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;

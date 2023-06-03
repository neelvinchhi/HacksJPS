// App.js
import React from 'react';

import * as go from 'gojs';
import { ReactDiagram } from 'gojs-react';

import './App.css';

function initDiagram() {
  const $ = go.GraphObject.make;

  const diagram =
    $(go.Diagram,
      {
        'undoManager.isEnabled': true,  
        'clickCreatingTool.archetypeNodeData': { text: 'new node', color: 'lightblue' },
        model: new go.GraphLinksModel(
          {
            linkKeyProperty: 'key' 
          })
      });

  
  diagram.nodeTemplate =
    $(go.Node, 'Auto',  
      new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
      $(go.Shape, 'RoundedRectangle',
        { name: 'SHAPE', fill: 'white', strokeWidth: 0 },
        new go.Binding('fill', 'color')),
      $(go.TextBlock,
        { margin: 8, editable: true }, 
        new go.Binding('text').makeTwoWay()
      )
    );

  return diagram;
}


function handleModelChange(changes) {
  
}


function App() {
  return (
    <div>
      ...
      <ReactDiagram
        initDiagram={initDiagram}
        divClassName='diagram-component'
        nodeDataArray={[
          {key: 1, text: "Human Digestive System", color: "lightgreen", loc: "-200 0"},
          {key: 2, text: "Gastrointestinal Tract", color: "lightblue", loc: "-200 -100"},
          {key: 3, text: "Accessory Organs of Digestion", color: "lightblue", loc: "-200 -200"},
          {key: 4, text: "Tongue", color: "pink", loc: "-100 -200"},
          {key: 5, text: "Salivary Glands", color: "pink", loc: "-300 -200"},
          {key: 6, text: "Pancreas", color: "pink", loc: "-100 -300"},
          {key: 7, text: "Liver", color: "pink", loc: "-300 -300"},
          {key: 8, text: "Gallbladder", color: "pink", loc: "-200 -400"},
          {key: 9, text: "Cephalic Phase", color: "lightgreen", loc: "0 -100"},
          {key: 10, text: "Gastric Phase", color: "lightgreen", loc: "0 -200"},
          {key: 11, text: "Intestinal Phase", color: "lightgreen", loc: "0 -300"},
          {key: 12, text: "Mechanical Breakdown", color: "orange", loc: "100 -200"},
          {key: 13, text: "Chemical Breakdown", color: "orange", loc: "100 -100"},
          {key: 14, text: "Amylase", color: "orange", loc: "200 -200"},
          {key: 15, text: "Lingual Lipase", color: "orange", loc: "200 -100"},
          {key: 16, text: "Gastric Acid", color: "orange", loc: "200 0"},
          {key: 17, text: "Duodenum", color: "orange", loc: "200 -300"},
          {key: 18, text: "Pancreatic Enzymes", color: "orange", loc: "300 -300"},
          {key: 19, text: "Peristalsis", color: "orange", loc: "300 -200"},
          {key: 20, text: "Mastication", color: "orange", loc: "300 -100"},
          {key: 21, text: "Chyme", color: "orange", loc: "400 -200"},
          {key: 22, text: "Chyle", color: "orange", loc: "400 -100"},
          {key: 23, text: "Mucus", color: "orange", loc: "400 0"},
          {key: 24, text: "Colon", color: "orange", loc: "400 -300"},
          {key: 25, text: "Feces", color: "orange", loc: "500 -200"},
          {key: 26, text: "Rectum", color: "orange", loc: "500 -100"},
          {key: 27, text: "Anus", color: "orange", loc: "500 0"}
        ]}
        linkDataArray={[
          {key: 1, from: 1, to: 2},
          {key: 2, from: 1, to: 3},
          {key: 3, from: 3, to: 4},
          {key: 4, from: 3, to: 5},
          {key: 5, from: 3, to: 6},
          {key: 6, from: 3, to: 7},
          {key: 7, from: 3, to: 8},
          {key: 8, from: 1, to: 9},
          {key: 9, from: 1, to: 10},
          {key: 10, from: 1, to: 11},
          {key: 11, from: 9, to: 12},
          {key: 12, from: 9, to: 13},
          {key: 13, from: 13, to: 14},
          {key: 14, from: 13, to: 15},
          {key: 15, from: 10, to: 16},
          {key: 16, from: 10, to: 17},
          {key: 17, from: 11, to: 18},
          {key: 18, from: 11, to: 19},
          {key: 19, from: 11, to: 20},
          {key: 20, from: 11, to: 21},
          {key: 21, from: 11, to: 22},
          {key: 22, from: 11, to: 23},
          {key: 23, from: 11, to: 24},
          {key: 24, from: 11, to: 25},
          {key: 25, from: 11, to: 26},
          {key: 26, from: 11, to: 27}
        ]}
        onModelChange={handleModelChange}
      />
      ...
    </div>
  );
}

export default App;
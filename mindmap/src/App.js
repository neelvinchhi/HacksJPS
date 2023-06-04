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
          { key: 0, text: "Digestive System", color: "lightblue", loc: "0 0" },
  { key: 1, text: "Cephalic Phase", color: "lightgreen", loc: "-250 -150" },
  { key: 2, text: "Gastric Phase", color: "lightgreen", loc: "0 -250" },
  { key: 3, text: "Intestinal Phase", color: "lightgreen", loc: "250 -150" },
  { key: 4, text: "Gastrointestinal Tract", color: "orange", loc: "-400 0" },
  { key: 5, text: "Accessory Organs", color: "orange", loc: "400 0" },
  { key: 6, text: "Chewing", color: "pink", loc: "-400 -200" },
  { key: 7, text: "Chemical Breakdown", color: "pink", loc: "-250 -300" },
  { key: 8, text: "Swallowing", color: "pink", loc: "-400 0" },
  { key: 9, text: "Gastric Acid", color: "yellow", loc: "-50 -350" },
  { key: 10, text: "Enzymes", color: "yellow", loc: "150 -350" },
  { key: 11, text: "Peristalsis", color: "pink", loc: "0 -450" },
  { key: 12, text: "Small Intestine", color: "lightyellow", loc: "250 -250" },
  { key: 13, text: "Large Intestine", color: "lightyellow", loc: "400 -100" },
  { key: 14, text: "Absorption", color: "lightyellow", loc: "400 150" },
  { key: 15, text: "Elimination", color: "lightyellow", loc: "550 0" },
        ]}
        linkDataArray={[
          { key: -1, from: 0, to: 1 },
          { key: -2, from: 0, to: 2 },
          { key: -3, from: 0, to: 3 },
          { key: -4, from: 0, to: 4 },
          { key: -5, from: 0, to: 5 },
          { key: -6, from: 1, to: 6 },
          { key: -7, from: 1, to: 7 },
          { key: -8, from: 1, to: 8 },
          { key: -9, from: 2, to: 9 },
          { key: -10, from: 2, to: 10 },
          { key: -11, from: 2, to: 11 },
          { key: -12, from: 3, to: 12 },
          { key: -13, from: 3, to: 13 },
          { key: -14, from: 12, to: 14 },
          { key: -15, from: 13, to: 15 },
        ]}
        onModelChange={handleModelChange}
      />
      ...
    </div>
  );
}

export default App;
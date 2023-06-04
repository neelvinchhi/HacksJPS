
import React, { useState } from 'react';


import * as go from 'gojs';
import { ReactDiagram } from 'gojs-react';
import './App.css';


function Header() {
  return (
    <header style={headerStyles}>
      <h1 style={{color: "#3e6db5"}}>Automapic</h1>
      <div style={{width: "full", textAlign: "center"}}>
      <h2 style={titleStyles}>Generate a mind map instantly with AI</h2>
      </div>
    </header>
  );
}

const headerStyles = {
  backgroundColor: '#FFFFFF',
  padding: '20px',
  color: '#000000'
};

const titleStyles = {
  fontSize: '50px',
  FontFace: ''
};




const containerStyles = {
  display: 'flex',
  flexDirection: 'Column',
};

const elementStyles = {
  margin: '0 10px',
};

function App() {

  const url = 'http://127.0.0.1:5000/generate';

  const [linkDataArray, setLinkDataArray] = useState([]);
  const [nodeDataArray, setNodeDataArray] = useState([]);
  const [text, setText] = useState("");
  const [goDiagram, setGoDiagram] = useState();
  const [loading, setLoading] = useState(false);

  const initDiagram = () => {
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
    setGoDiagram(diagram)
    return diagram;
  }

  const getData = () => {
    console.log("GETTING DATA");
    setLoading(true);
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({text: text})
    })
      .then(response => response.json())
      .then(result => {

        console.log(result)
        setLoading(false)
        setLinkDataArray(result.data.linkDataArray);
        setNodeDataArray(result.data.nodeDataArray);
      })
      .catch(error => {
        setLoading(false)
        console.error('Error:', error);
      });
    
  }

  const downloadImage = () => {
    const downloadData = goDiagram.makeImageData({scale: 1})
    var a = document.createElement("a");
    a.href = downloadData //Image Base64 Goes here
    a.download = "MINDMAP_EXPORT.png"; //File name Here
    a.click(); //Downloaded file
  }

  return (

    <div style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly"}}>
      <Header/>
 
      <textarea  placeholder="Enter content in order to generate a mind map" value={text} style={{fontFamily: "Helvetica", alignSelf:'center', margin: '20px',padding: '20px', border: '2px solid #CCCCCC', borderRadius: '16px', fontSize: '16px', width: '970px',
  height: '200px'}} onChange={e => {setText(e.target.value)}}></textarea>
 
      <button disabled={loading || text.length == 0} classname="button" onClick = {getData} style={{ margin: '20px', alignSelf:'center', backgroundColor: '#3e6db5', width: '200px', color: '#fff', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold',
  transition: 'background-color 0.3s ease'}}>{loading ? "Loading...":"Generate"}</button>
      <button classname="button" onClick = {downloadImage} style={{ margin: '20px',alignSelf: 'center', backgroundColor: '#3e6db5', width: '200px', color: '#fff', padding: '10px 20px', border: '2px solid #007bff', borderRadius: '8px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  transition: 'background-color 0.3s ease'}}>Download</button>   
 
      <ReactDiagram style={{margin: '20px', borderRadius: '16'}}classname="diagram"
        initDiagram={initDiagram}
        divClassName='diagram-component'
        nodeDataArray={nodeDataArray}
        linkDataArray={linkDataArray}
      />
         
    </div>

  );
}

export default App;
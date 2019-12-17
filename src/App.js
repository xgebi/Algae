import React from 'react';
import './App.css';

import SaveBox from './components/SaveBox/SaveBox.js';
import Editor from './components/Editor/Editor.js'

function App() {
  return (
    <div className="App">
      <SaveBox />
      <Editor />
    </div>
  );
}

export default App;

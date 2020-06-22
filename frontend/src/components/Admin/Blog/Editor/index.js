import React from 'react';
import Toolbar from './components/Toolbar';
import './styles.css';

export default function Editor({ style }) {

  return (
    <div>

      <div
        id="editor"
        className="editor-paper"
        style={style}
        contentEditable="true"
        designmode="on"
        spellCheck="true" />

      <Toolbar />

    </div>
  )
} 
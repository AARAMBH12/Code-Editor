import React, { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { xml } from '@codemirror/lang-xml';
import { css } from '@codemirror/lang-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'

export default function Editor(props) {
  const {
    language,
    displayName,
    value,
    onChange
  } = props
  const [open, setOpen] = useState(true)

  function getExtensions(language) {
    switch (language) {
      case 'javascript':
        return [javascript()];
      case 'xml':
        return [xml()];
      case 'css':
        return [css()];
      default:
        return [];
    }
  }

  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => setOpen(prevOpen => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      {open && (
        <CodeMirror
          value={value}
          height="200px"
          extensions={getExtensions(language)}
          theme="dark"
          onChange={(val) => onChange(val)}
        />
      )}
    </div>
  )
}
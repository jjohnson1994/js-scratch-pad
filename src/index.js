import * as monaco from "monaco-editor/esm/vs/editor/editor.main";

import './style.css';

const editor = monaco.editor.create(document.getElementById("editor"), {
  value:
  "alert('Hi 👋');",
  language: "javascript",
  theme: "vs-dark"
});

document.getElementById('btnRun').addEventListener('click', () => {
  console.log(editor.getValue());
  eval(editor.getValue());
});

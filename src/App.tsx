import React from "react";
import ReactDOM from "react-dom";
import { Button } from 'primereact/button';
import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: STDIO-TEST</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <Button label="Click" className="p-button p-button-danger p-button-raised"/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

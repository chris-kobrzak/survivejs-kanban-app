import "./main.css"
import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App.jsx"
import notes from "./notes.js"

function main() {
  let divElem = document.createElement( "div" )
  document.body.appendChild( divElem )

  ReactDOM.render( <App items={notes} />, divElem )
}

main()

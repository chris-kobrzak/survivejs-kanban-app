import "./main.css"
import React from "react"
import App from "./components/App.jsx"

function main() {
  let divElem = document.createElement( "div" )
  document.body.appendChild( divElem )

  React.render( <App />, divElem )
}

main()

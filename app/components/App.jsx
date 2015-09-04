import React from "react"
import Notes from "./Notes.jsx"
import notes from "../notes.js"

export default class extends React.Component {
  render() {
    return (
      <Notes items={notes} />
    )
  }
}

import React from "react"
import Notes from "./Notes.jsx"
import notesPacket from "../notes.js"

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: notesPacket
    }
  }

  render() {
    let notes = this.state.notes

    return (
      <Notes items={notes} />
    )
  }
}

import uuid from "node-uuid"
import React from "react"
import Notes from "./Notes.jsx"
import notesPacket from "../notes.js"

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.bindInstanceMethods()

    this.state = {
      notes: notesPacket
    }
  }

  bindInstanceMethods() {
    this.addNote = this.addNote.bind( this )
  }

  render() {
    let notes = this.state.notes

    return (
      <div>
        <button onClick={this.addNote}>+</button>
        <Notes items={notes} />
      </div>
    )
  }

  addNote() {
    let newNote = this.constructor.generateRandomNote()
    this.setState({
      notes: this.state.notes.concat( newNote )
    })
  }

  static generateRandomNote() {
    return {
      id: uuid.v4(),
      task: "New task"
    }
  }
}

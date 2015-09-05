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
    let methods = [
      "addNote",
      "editNote"
    ]
    for ( let method of methods ) {
      this[ method ] = this[ method ].bind( this )
    }
  }

  render() {
    let notes = this.state.notes

    return (
      <div>
        <button onClick={this.addNote}>+</button>
        <Notes
          items={notes}
          onEditCompleted={this.editNote} />
      </div>
    )
  }

  addNote() {
    let newNote = this.constructor.generateRandomNote()
    this.setState({
      notes: this.state.notes.concat( newNote )
    })
  }

  editNote( noteId, task ) {
    let notes = this.state.notes
    let noteIndex = this.findNoteIndexById( noteId )

    if ( noteIndex < 0 ) {
      return
    }

    notes[ noteIndex ].task = task
    this.setState({ notes })
  }

  findNoteIndexById( id ) {
    let notes = this.state.notes
    let noteIndex = notes.findIndex( ( note ) => note.id === id )

    if ( noteIndex < 0 ) {
      console.warn( "Could not find note", id, notes )
    }

    return noteIndex
  }

  static generateRandomNote() {
    return {
      id: uuid.v4(),
      task: "New task"
    }
  }
}

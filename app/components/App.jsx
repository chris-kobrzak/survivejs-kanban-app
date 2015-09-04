import uuid from "node-uuid"
import React from "react"
import Note from "./Note.jsx"

const notes = [
  {
    id: uuid.v4(),
    task: 'Learn Webpack'
  },
  {
    id: uuid.v4(),
    task: 'Learn React'
  },
  {
    id: uuid.v4(),
    task: 'Do laundry'
  }
]

export default class extends React.Component {
  render() {
    return (
      <ul>
        {notes.map( this.renderNote )}
      </ul>
    )
  }

  renderNote(note) {
    return (
      <li key={`note${note.id}`}>
        <Note task={note.task} />
      </li>
    )
  }
}

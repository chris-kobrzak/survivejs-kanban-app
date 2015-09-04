import React from "react"
import Note from "./Note.jsx"

export default class extends React.Component {
  render() {
    let notes = this.props.items,
      className = this.props.className || "notes"

    return (
      <ul className={className}>
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

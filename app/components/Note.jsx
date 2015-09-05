import React from "react"

export default class extends React.Component {
  constructor(props) {
    super( props )
    this.bindInstanceMethods()

    this.state = {
      editing: false
    }
  }

  bindInstanceMethods() {
    let methods = [
      "startEditing",
      "handleInputBlur",
      "handleKeyPress",
      "renderDelete",
      "renderInput",
      "renderTask"
    ]
    for ( let method of methods ) {
      this[ method ] = this[ method ].bind( this )
    }
  }

  render() {
    let editing = this.state.editing
    let renderedElement
    if ( editing ) {
      renderedElement = this.renderInput()
    } else {
      renderedElement = this.renderTask()
    }

    return renderedElement
  }

  renderTask() {
    let renderedDelete
    if ( this.props.onDeleteCompleted ) {
      renderedDelete = this.renderDelete()
    }

    return (<div onClick={this.startEditing}>
      <span>{this.props.task}</span>
      {renderedDelete}
    </div>)
  }

  renderDelete() {
    return (<button onClick={this.props.onDeleteCompleted}>X</button>)
  }

  renderInput() {
    return (<input
      autoFocus={true}
      defaultValue={this.props.task}
      onBlur={this.handleInputBlur}
      onKeyPress={this.handleKeyPress}
    />)
  }

  startEditing() {
    this.setState({
      editing: true
    })
  }

  stopEditing() {
    this.setState({
      editing: false
    })
  }

  handleInputBlur( event ) {
    this.props.onEditCompleted( event.target.value )
    this.stopEditing()
  }

  handleKeyPress( event ) {
    if( event.key !== "Enter" ) {
      return
    }
    this.handleInputBlur( event )
  }

}

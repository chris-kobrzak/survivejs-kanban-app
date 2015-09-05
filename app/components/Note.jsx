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
    return (<span onClick={this.startEditing}>
      {this.props.task}
    </span>)
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

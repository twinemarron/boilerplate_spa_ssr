import * as React from 'react'
import { Editor, EditorState, RichUtils, DraftEditorCommand } from 'draft-js'

interface MyEditorProps {}
interface MyEditorState {
  editorState: EditorState
  editor?: Editor
}

export class MyEditor extends React.Component<MyEditorProps, MyEditorState> {
  editor: any
  onChange: (editorState: EditorState) => void
  constructor(props: MyEditorProps) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty(),
      editor: undefined,
    }
    this.onChange = editorState => {
      console.log('onChange typeof editorState: ', typeof editorState)
      console.log('onChange editorState: ', editorState)
      const contentState = editorState.getCurrentContent()
      console.log('onChange contentState: ', contentState)
      // console.log(
      //   'onChange editorState.currentContent: ',
      //   editorState.currentContent
      // )
      console.log(
        'onChange JSON.stringify(editorState): ',
        JSON.stringify(editorState)
      )
      console.log(
        'onChange JSON.parse(JSON.stringify(editorState))._immutable.currentContent: ',
        JSON.parse(JSON.stringify(editorState))._immutable.currentContent
      )
      this.setState({ editorState })
    }
  }
  componentDidMount() {
    this.editor.focus()
    this.setState({ editorState: EditorState.createEmpty() })
  }
  handleKeyCommand = (
    command: DraftEditorCommand,
    editorState: EditorState
  ) => {
    console.log('handleKeyCommand command: ', command)
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      this.onChange(newState)
      return 'handled'
    }
    return 'not-handled'
  }
  _onBoldClick = () => {
    console.log('_onBoldClick')
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
    console.log('this.state.editorState: ', this.state.editorState)
  }
  render() {
    return (
      <div>
        editor
        <button onClick={this._onBoldClick}>to bold</button>
        <Editor
          ref={(el: any) => {
            this.editor = el
          }}
          editorState={this.state.editorState}
          onChange={this.onChange}
          // onChange={e => this.handleChange(e)}
          handleKeyCommand={this.handleKeyCommand}
        />
      </div>
    )
  }
}

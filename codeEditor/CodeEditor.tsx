import * as React from 'react'
import { Frame } from 'framer'
import MonacoEditor from 'react-monaco-editor'

export class CodeEditor extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			code: ''
		}
	}

	static defaultProps = {
		width: 800,
		height: 600
	}
	editorDidMount(editor, monaco) {
		console.log('editorDidMount', editor)
		editor.focus()
	}
	onChange(newValue, e) {
		console.log('onChange', newValue, e)
	}
	render() {
		const { width, height } = this.props

		const code = this.state.code
		const options = {
			lineNumbers: true,
			selectOnLineNumbers: true,
			roundedSelection: false,
			readOnly: false,
			automaticLayout: false
		}
		return (
			<Frame width={width} height={height}>
				<MonacoEditor
					width={width}
					height={height}
					language="javascript"
					theme="vs-dark"
					value={code}
					options={options}
					onChange={this.onChange}
					editorDidMount={this.editorDidMount}
				/>
			</Frame>
		)
	}
}

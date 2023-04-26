import { useRef, useState, forwardRef, useImperativeHandle } from 'react'

const ModalWindows = forwardRef((props, ref) => {
	const inputRef = useRef(null)
	const [header, setHeader] = useState(props.header)
	const [content, setContent] = useState(null)
	const [visible, setVisible] = useState(false)

	useImperativeHandle(
		ref,
		() => {
			return {
				focusAddComment({ header, contentElement }) {
					inputRef.current.focus()
					setHeader(header)
					setContent(contentElement)
					setVisible(true)
				},
			}
		},
		[]
	)
	function handleClick() {
		setVisible(false)
	}
	
	return (
		<>
			<div style={{ opacity: visible ? 1 : 0 }}>
				<div className="header">{header}</div> C:{content}
				<button ref={inputRef} className="btn" onClick={handleClick}>
					Close Modal
				</button>
			</div>
		</>
	)
})

export default ModalWindows

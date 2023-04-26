import { useRef, forwardRef, useImperativeHandle } from 'react'

function CustomModal({ open, onClose }, ref) {
	const closeRef = useRef()
	const confirmRef = useRef()
	const denyRef = useRef()

	useImperativeHandle(ref, () => {
		return {
			closeBtn: closeRef.current,
			confirmBtn: confirmRef.current,
			denyBtn: denyRef.current,
		}
	})

	if (!open) return null

	return (
		<div>
			<button
				className="btn btn-danger"
				ref={closeRef}
				onClick={onClose}
			>
				&times;
			</button>
			<h1>Title</h1>
			<div>
				<button className="btn btn-danger" ref={confirmRef}>
					Confirm
				</button>
				<button className="btn btn-danger" ref={denyRef}>
					Deny
				</button>
			</div>
		</div>
	)
}

export default forwardRef(CustomModal)

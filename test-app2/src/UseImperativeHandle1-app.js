import { useRef, useState, forwardRef, useImperativeHandle } from 'react'
import CustomModal from './UseImperativeHandle1-customModal'

function UseImperativeHandle1App() {
	const [open, setOpen] = useState(false)
	const modalRef = useRef()

	return (
		<>
			<button className="btn" onClick={() => setOpen(true)}>
				Open
			</button>
			<button
				className="btn"
				onClick={() => modalRef.current.closeBtn.focus()}
			>
				Focus Close Btn
			</button>
			<button
				className="btn"
				onClick={() => modalRef.current.confirmBtn.focus()}
			>
				Focus Confirm Btn
			</button>
			<button
				className="btn"
				onClick={() => modalRef.current.denyBtn.focus()}
			>
				Focus Deny Btn
			</button>
			<CustomModal
				ref={modalRef}
				open={open}
				onClose={() => setOpen(false)}
			/>
		</>
	)
}

export default UseImperativeHandle1App

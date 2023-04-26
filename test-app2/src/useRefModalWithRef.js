import { useRef, useImperativeHandle } from 'react'
import UseRefModalDetail from './useRefModalDetail'
import { forwardRef } from 'react'
import ModalWindows from './modalWindows'

const UseRefModalWithRef = forwardRef(function UseRefModalWithRef(
	props,
	ref
) {
	// debugger
	// return (
	// 	<label>
	// 		Input:
	// 		<input {...props} ref={ref} />
	// 	</label>
	// )
	return <UseRefModalDetail {...props} ref={ref} />;
})

export default UseRefModalWithRef

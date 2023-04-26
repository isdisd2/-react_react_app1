import { useRef, useImperativeHandle } from 'react'
import UseRefModalContent from './useRefModalContent'
import ModalWindows from './modalWindows'
import { forwardRef } from 'react'
import UseRefModalWithRef from './useRefModalWithRef'

const UseRefModalDetail = forwardRef(function UseRefModalDetail(props, ref) {
	const modalRef = useRef(null)

	useImperativeHandle(
		ref,
		() => {
			return {
				open(joke) {
					modalRef.current.focusAddComment({
						header: joke.header,
						contentElement: <UseRefModalContent joke={joke} />,
					})
				},
			}
		},
		[]
	)
	return <ModalWindows ref={modalRef} />
})

export default UseRefModalDetail

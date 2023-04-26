import { useRef } from 'react'
import UseRefModalList from './useRefModalList'
import UseRefModalDetail from './useRefModalDetail'
import UseRefModalWithRef from './useRefModalWithRef'

const jokes = [
	{ header: 'Joke header 11', content: 'Detail obsahu 111.' },
	{ header: 'Joke header 22', content: 'Detail obsahu 222.' },
]

const UseRefModalMain = (props) => {
	const detailRef = useRef(null)

	function openDetail(joke) {
		detailRef.current.open(joke)
	}

	return (
		<div>
			<UseRefModalList jokes={jokes} onDetail={openDetail} />
			<UseRefModalDetail ref={detailRef} />
		</div>
	)
}
export default UseRefModalMain

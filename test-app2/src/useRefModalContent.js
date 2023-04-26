import { useState } from 'react'

const UseRefModalContent = ({ joke }) => {
	const [inputVal, setInputVal] = useState(joke.content)

	return (
		<>
			<div>{joke.header}</div>
			<div>{joke.content}</div>
		</>
	)
}
export default UseRefModalContent

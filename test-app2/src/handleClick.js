import { useRef, useState, forwardRef, useImperativeHandle } from 'react'

function Button({ onClick, children }) {
	return <button onClick={onClick}>{children}</button>
}

function PlayBtn() {
	return <Button onClick={() => alert('dhgjgh')}>Ukaz alert</Button>
}

function TargetExample() {
	return (
		<div
			tabIndex={1}
			onFocus={(e) => {
				if (e.currentTarget === e.target) {
					console.log('focused self')
				} else {
					console.log('focused child', e.target)
				}
				if (!e.currentTarget.contains(e.relatedTarget)) {
					// Not triggered when swapping focus between children
					console.log('focus entered self')
				}
			}}
			onBlur={(e) => {
				if (e.currentTarget === e.target) {
					console.log('unfocused self')
				} else {
					console.log('unfocused child', e.target)
				}
				if (!e.currentTarget.contains(e.relatedTarget)) {
					// Not triggered when swapping focus between children
					console.log('focus left self')
				}
			}}
		>
			<input id="1" />

			<input id="2" />
		</div>
	)
}


function HandleClick() {
	return (
		<>
			<div>
				<PlayBtn /> <TargetExample />
			</div>
		</>
	)
}

export default HandleClick

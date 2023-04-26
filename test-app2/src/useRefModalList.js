const UseRefModalList = ({ jokes, onDetail }) => {
	return (
		<>
			{jokes.map((joke) => (
				<div  key={joke.header}>
					<div>{joke.header}</div>
					<div>{joke.content}</div>
					<button className="btn" onClick={() => onDetail(joke)}>
						Open modal
					</button>
				</div>
			))}
		</>
	)
}
export default UseRefModalList

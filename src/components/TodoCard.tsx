import { FC, FormEvent, useEffect, useRef, useState } from 'react'

type TodoCardType = {
	item: string
	index: number
	deleteTodo: (id: number) => void
	editTodo: (id: number, newValue: string) => void
}

const TodoCard: FC<TodoCardType> = ({ item, index, deleteTodo, editTodo }) => {
	const [isEdit, setIsEsit] = useState(false)
	const [newValue, setNewValue] = useState(item)
	const input = useRef<HTMLInputElement>(null)

	useEffect(() => {
		setNewValue(item)
	}, [item])

	const confirmHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		editTodo(index, newValue)
		setIsEsit(false)
	}

	const editHandler = () => {
		setIsEsit(true)
		setTimeout(() => {
			input.current!.focus()
		}, 100)
	}

	return (
		<li className='todoItem'>
			{isEdit ? (
				<form onSubmit={confirmHandler}>
					<input
						type='text'
						value={newValue}
						onChange={e => setNewValue(e.target.value)}
						ref={input}
					/>
					<div className='actionsContainer'>
						<button>
							<i className='fa-solid fa-check'></i>
						</button>
						<button onClick={() => setIsEsit(false)}>
							<i className='fa-solid fa-xmark'></i>
						</button>
					</div>
				</form>
			) : (
				<>
					<p>{item}</p>
					<div className='actionsContainer'>
						<button onClick={editHandler}>
							<i className='fa-solid fa-pen-to-square'></i>
						</button>
						<button onClick={() => deleteTodo(index)}>
							<i className='fa-regular fa-trash-can'></i>
						</button>
					</div>
				</>
			)}
		</li>
	)
}

export default TodoCard

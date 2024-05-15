import { FC, FormEvent, useEffect, useRef, useState } from 'react'

type TodoInputType = {
	addTodo: (todo: string) => void
}

const TodoInput: FC<TodoInputType> = ({ addTodo }) => {
	const [todo, setTodo] = useState('')
	const input = useRef<HTMLInputElement>(null)

	useEffect(() => {
		input.current!.focus()
	}, [])

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		addTodo(todo)
		setTodo('')
	}

	return (
		<header>
			<form onSubmit={submitHandler}>
				<input
					type='text'
					placeholder='Enter todo...'
					onChange={e => setTodo(e.target.value)}
					value={todo}
					ref={input}
				/>
				<button>add</button>
			</form>
		</header>
	)
}

export default TodoInput

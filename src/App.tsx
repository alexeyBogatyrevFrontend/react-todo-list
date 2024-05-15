import { useEffect, useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

const App = () => {
	const [todos, setTodos] = useState<string[]>([])

	const persistData = (newList: string[]) => {
		localStorage.setItem('todos', JSON.stringify({ todos: newList }))
	}

	const addTodo = (todo: string) => {
		const newTodoList = [todo, ...todos]

		persistData(newTodoList)
		setTodos(newTodoList)
	}

	const deleteTodo = (id: number) => {
		const newTodoList = todos.filter((_, index) => index !== id)

		persistData(newTodoList)
		setTodos(newTodoList)
	}

	const editTodo = (id: number, newValue: string) => {
		const newTodoList = todos.map((todo, index) =>
			index === id ? newValue : todo
		)

		persistData(newTodoList)
		setTodos(newTodoList)
	}

	useEffect(() => {
		if (!localStorage) return

		const localTodos = localStorage.getItem('todos')

		if (localTodos !== null) {
			const parsedTodos = JSON.parse(localTodos).todos
			setTodos(parsedTodos)
		}
	}, [])

	return (
		<>
			<TodoInput addTodo={addTodo} />
			<TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
		</>
	)
}

export default App

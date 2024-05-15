import { FC } from 'react'
import TodoCard from './TodoCard'

type TodoListType = {
	todos: string[]
	deleteTodo: (id: number) => void
	editTodo: (id: number, newValue: string) => void
}

const TodoList: FC<TodoListType> = ({ todos, deleteTodo, editTodo }) => {
	return (
		<ul className='main'>
			{todos.map((item, index) => (
				<TodoCard
					key={index}
					item={item}
					index={index}
					deleteTodo={deleteTodo}
					editTodo={editTodo}
				/>
			))}
		</ul>
	)
}

export default TodoList

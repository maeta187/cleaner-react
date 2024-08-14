"use client";

import React, { useState } from "react";

import { CreateTodoDialog } from "./CreateTodoDialog";
import { UpdateTodoDialog } from "./UpdateTodoDialog";

type Todo = {
	id: string;
	title: string;
	description: string;
	deadline: string;
};

export const ImprovementTodo = () => {
	const todoList: Todo[] = [];
	const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
	const [isEditDialogOpen, setIsDialogOpen] = useState(false);

	return (
		<div>
			<button
				className="primaryButton"
				type="button"
				onClick={() => setIsCreateDialogOpen(true)}
			>
				<i className="fa-edit" />
				新規作成
			</button>
			<ul className="todoList">
				{todoList.map((todo) => (
					<li key={todo.id}>
						<h2 className="todoTitle">{todo.title}</h2>
						<p className="todoDescription">{todo.description}</p>
						<p className="totoDeadline">{todo.deadline}</p>
						<button
							className="primaryButton"
							type="button"
							onClick={() => setIsDialogOpen(true)}
						>
							<i className="fa-edit" />
						</button>
					</li>
				))}
			</ul>
			<CreateTodoDialog
				open={isCreateDialogOpen}
				onClose={() => setIsCreateDialogOpen(false)}
			/>
			<UpdateTodoDialog
				open={isEditDialogOpen}
				onClose={() => setIsDialogOpen(false)}
			/>
		</div>
	);
};

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

test('renders TodoList component', () => {
    render(<TodoList />);
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
});

test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/add a new todo/i);
    const button = screen.getByText (/Add Todo/i);
    
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);
    
    expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggles a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React/i);
    
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
});

test('deletes a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React/i);
    const deleteButton = todoItem.querySelector('button');

    fireEvent.click(deleteButton);
    expect(todoItem).not.toBeInTheDocument();
});

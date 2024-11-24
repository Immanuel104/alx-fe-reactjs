import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddTodoForm from "../components/AddTodoForm";

describe("AddTodoForm Component", () => {
  test("renders input and button", () => {
    render(<AddTodoForm onAddTodo={() => {}} />);
    expect(screen.getByPlaceholderText("Add a new todo")).toBeInTheDocument();
    expect(screen.getByText("Add Todo")).toBeInTheDocument();
  });

  test("calls onAddTodo when the form is submitted", () => {
    const mockOnAddTodo = jest.fn();
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);

    expect(mockOnAddTodo).toHaveBeenCalledWith("New Todo");
    expect(mockOnAddTodo).toHaveBeenCalledTimes(1);
  });

  test("does not call onAddTodo if input is empty", () => {
    const mockOnAddTodo = jest.fn();
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);
    const button = screen.getByText("Add Todo");

    fireEvent.click(button);
    expect(mockOnAddTodo).not.toHaveBeenCalled();
  });
});

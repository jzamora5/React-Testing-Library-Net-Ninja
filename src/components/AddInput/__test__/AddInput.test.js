import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodo = jest.fn();

describe("AddInput", () => {
  test("should render input element", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  test("should be able to type into input", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);

    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shoppping" },
    });

    expect(inputElement.value).toBe("Go Grocery Shoppping");
  });

  test("should have empty input when add button is clicked", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/ });

    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shoppping" },
    });

    fireEvent.click(buttonElement)

    expect(inputElement.value).toBe("");
  });
});

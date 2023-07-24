import React, { useState } from "react";
import { Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import "./style.css";
import { v4 as uuidv4, v4 } from "uuid";
const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [editBtnId, setEditBtnId] = useState("");
  const [editStatus, setEditStatus] = useState(false);

  const handleAddBtn = () => {
    setTodos([...todos, { todoId: v4(12), todoText: inputValue }]);
    setInputValue("");
  };
  const handleDeleteBtn = (e) => {
    let updatedTodos = todos.filter((todo) => todo.todoId !== e.target.id);
    setTodos(updatedTodos);
  };
  const handleEditBtn = (e) => {
    setInputValue(
      e.target.parentElement.parentElement.parentElement.children[0].innerText
    );
    setEditBtnId(e.target.id);
    setEditStatus(true);
  };
  const handleEditStatusBtn = () => {
    setEditStatus(false);
    todos.find((element) => element.todoId === editBtnId).todoText = inputValue;
    setTodos([...todos]);
    setInputValue("");
  };
  return (
    <div style={{ backgroundColor: "#1A1A1A", padding: "1px 50px 363px 0" }}>
      <Container>
        <Row>
          <Col xs={2}></Col>
          <Col xs={6}>
            <Form.Control
              onChange={(e) => setInputValue(e.target.value)}
              className="todoInput"
              placeholder="Add a new Task"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={inputValue}
            />
          </Col>
          <Col xs={2}>
            {!editStatus ? (
              <button
                onClick={() => {
                  handleAddBtn();
                }}
                className="todoBtn"
              >
                Create
                <svg
                  style={{ width: "20px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            ) : (
              <button
                onClick={() => {
                  handleEditStatusBtn();
                }}
                className="todoBtn"
              >
                Edit
                <svg
                  style={{ width: "20px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            )}
          </Col>
          <Col xs={2}></Col>
        </Row>
        {todos.map((todo) => {
          return (
            <ListGroup key={todo.todoId} className="listGroup">
              <Row>
                <Col xs={2}></Col>
                <Col xs={8}>
                  <ListGroup.Item className="listItem">
                    <p>{todo.todoText}</p>
                    <div className="btns">
                      <div
                        className="editBtn"
                        onClick={(e) => {
                          handleEditBtn(e);
                        }}
                      >
                        <svg
                          id={todo.todoId}
                          style={{ width: "25px" }}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </div>

                      <div
                        className="deleteBtn"
                        onClick={(e) => {
                          handleDeleteBtn(e);
                        }}
                      >
                        <svg
                          id={todo.todoId}
                          style={{ width: "25px" }}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </div>
                    </div>
                  </ListGroup.Item>
                </Col>
                <Col xs={2}></Col>
              </Row>
            </ListGroup>
          );
        })}
      </Container>
    </div>
  );
};

export default TodoList;

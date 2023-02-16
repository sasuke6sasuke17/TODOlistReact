// https://qiita.com/aaaasahi_17/items/33fe35f1c7590e274c0f
import React from "react";
import { useState } from "react";
import "./styles.css";
import InputTodo from "./components/InputTodo";
import IncompleteTodos from "./components/IncompleteTodos";
import CompleteTodos from "./components/CompleteTodos";

const App = () => {
  const [TodoText, setTodoText] = useState("");

  const [IncompleteTodo, setIncompleteTodos] = useState([]);

  const [CompleteList, setCompleteList] = useState([]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    // alert();
    if (TodoText === "") return; //　空欄で追加ボタンを押しても何も起こらない
    const newTodos = [...IncompleteTodo, TodoText];
    setIncompleteTodos(newTodos); // 新しく追加したものを未完了のTODOに追加する
    setTodoText(""); // 追加ボタンを押した後、入力欄を空欄にする
  };

  const onClickDelete = (index) => {
    // alert();
    const newTodos = [...IncompleteTodo];
    newTodos.splice(index, 1); // index=>何番目、1=>1個
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...IncompleteTodo];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...CompleteList, IncompleteTodo[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteList(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...CompleteList];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...IncompleteTodo, CompleteList[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteList(newCompleteTodos);
  };

  return (
    <>
      {/* <div className="input_area">
        <input
          placeholder="TODOを追加"
          value={TodoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div> */}
      <InputTodo
        TodoText={TodoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      {/* <div className="incomplete_area">
        <p className="title">未完了のTODO</p>
        <ul>
          {IncompleteTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list_row">
                  <p>{todo}</p>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div> */}
      <IncompleteTodos
        todos={IncompleteTodo}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      {/* <div className="complete_area">
        <p className="title">完了のTODO</p>
        <ul>
          {CompleteList.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list_row">
                  <p>{todo}</p>
                  <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div> */}
      <CompleteTodos todos={CompleteList} onClickBack={onClickBack} />
    </>
  );
};

export default App;

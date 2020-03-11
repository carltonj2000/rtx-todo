import React from "react";
import { connect } from "react-redux";
import { addTodo } from "features/todos/todosSlice";

const AddTodo = ({ addTodo }) => {
  const [todo, todoSet] = React.useState("");

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          const t = todo.trim();
          if (!t) return;
          addTodo(t);
          todoSet("");
        }}
      >
        <input value={todo} onChange={e => todoSet(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default connect(null, { addTodo })(AddTodo);

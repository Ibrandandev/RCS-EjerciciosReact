import { useState } from "react";

const Message = ({ value }) => {
  const [state, setState] = useState("");

  return (
    <div>
      <h1>
        Hello {value}! {state != "" && <span>{state}</span>}
      </h1>
      <button
        type="button"
        onClick={() => {
          if (state === "") setState("(From Changed State)");
          else setState("");
        }}
      >
        Ver Más
      </button>
    </div>
  );
};

export default Message;

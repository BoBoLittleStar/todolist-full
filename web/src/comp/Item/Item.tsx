import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../reducers/request";
import { TypeItem } from "../../reducers/todo/types";
import "./Item.sass";
import { Button, Div, P } from "./styles";

type Element = {
  id: string;
  item: TypeItem;
};

export default function Item({
  children: elem,
}: {
  children: Element;
}): JSX.Element {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState("");
  const task = elem.item.task;
  const checked = elem.item.checked;
  const editing = edit === elem.id;

  return (
    <li>
      <div>
        <Button
          className="select"
          checked={checked}
          editing={editing}
          onClick={() => !editing && dispatch(actions.tick(elem.id))}
        >
          <Div className="tick" checked={checked} editing={editing} />
        </Button>
        <div onDoubleClick={() => setEdit(elem.id)}>
          <P checked={checked}>{task}</P>
          <input
            defaultValue={task}
            onBlurCapture={(e) => {
              let target = e.target,
                temp = target.value.trim();
              temp
                ? dispatch(
                    actions.edit({
                      id: elem.id,
                      task: temp,
                    })
                  )
                : (target.value = target.defaultValue);
              setEdit("");
            }}
            onKeyDown={(e) => {
              let target = e.target as HTMLInputElement;
              e.key === "Escape" && !(target.value = "") && target.blur();
              e.key === "Enter" && target.blur();
            }}
            hidden={!editing}
          />
          <button
            className="button-delete"
            onClick={() => dispatch(actions.remove(elem.id))}
            hidden={editing}
          >
            <div className="cross-a" />
            <div className="cross-b" />
          </button>
        </div>
      </div>
    </li>
  );
}

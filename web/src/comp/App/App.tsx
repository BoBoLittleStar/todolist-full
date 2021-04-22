/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../reducers/request";
import { selector } from "../../reducers/todo/state";
import { TypeItem } from "../../reducers/todo/types";
import Input from "../Input";
import Item from "../Item";
import Loading from "../Loading";
import "./App.sass";
import { Arrow, Clear, Filter } from "./style";

export default function App(): JSX.Element {
  const [filter, setFilter] = useState("");
  const state = useSelector(selector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.load());
  }, [dispatch]);
  const li: { id: string; item: TypeItem }[] = [];
  state.ids.forEach(
    (id) =>
      (!filter ||
        filter === (state.items[id].checked ? "checked" : "unchecked")) &&
      li.push({ id: id, item: state.items[id] })
  );

  return (
    <div className="page">
      <div className="header">
        <div className="header-row">
          <button
            className="select-all"
            onClick={() => dispatch(actions.tickAll(state.count > 0))}
          >
            <Arrow
              className="arrow"
              allTicked={state.count === 0}
              hidden={state.ids.length === 0}
            >
              ❯
            </Arrow>
          </button>
        </div>
        <Input />
      </div>
      <Loading pending={state.status === "pending"} />
      <ul>
        {li.map((elem) => (
          <Item key={elem.id}>{elem}</Item>
        ))}
      </ul>
      <div className="footer" hidden={state.ids.length === 0}>
        <div className="left">
          {state.count} item{state.count === 1 ? "" : "s"} left
        </div>
        <div className="center">
          <Filter
            checked={filter === ""}
            onClick={() => filter !== "" && setFilter("")}
          >
            All
          </Filter>
          <Filter
            checked={filter === "unchecked"}
            onClick={() => filter !== "unchecked" && setFilter("unchecked")}
          >
            Active
          </Filter>
          <Filter
            checked={filter === "checked"}
            onClick={() => filter !== "checked" && setFilter("checked")}
          >
            Completed
          </Filter>
        </div>
        <div className="right">
          <Clear
            hidden={state.count === state.ids.length}
            onClick={() => dispatch(actions.removeChecked())}
          >
            Clear completed
          </Clear>
        </div>
      </div>
      {state.status === "pending" || state.status === "fulfilled" ? null : (
        <div className="error-message">{state.status}</div>
      )}
    </div>
  );
}

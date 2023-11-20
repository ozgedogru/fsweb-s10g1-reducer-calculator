import { useEffect, useReducer } from "react";

import {
  applyNumber,
  change_operation,
  clear_display,
  memory_plus,
  memory_rec,
  memory_del,
} from "./actions";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer, { initialState } from "./reducers";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("initial state >", initialState);
  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton
                value={"M+"}
                onClick={() => dispatch(memory_plus())}
              />
              <CalcButton
                value={"MR"}
                onClick={() => {
                  dispatch(memory_rec());
                }}
              />
              <CalcButton
                value={"MC"}
                onClick={() => {
                  dispatch(memory_del());
                }}
              />
            </div>

            <div className="row">
              <CalcButton
                value={1}
                onClick={() => {
                  dispatch(applyNumber(1));
                }}
                // onClick={() => {
                //   dispatch(addOne());
                // }}
              />
              <CalcButton
                value={2}
                onClick={() => {
                  dispatch(applyNumber(2));
                }}
              />
              <CalcButton
                value={3}
                onClick={() => {
                  dispatch(applyNumber(3));
                }}
              />
            </div>

            <div className="row">
              <CalcButton
                value={4}
                onClick={() => {
                  dispatch(applyNumber(4));
                }}
              />
              <CalcButton
                value={5}
                onClick={() => {
                  dispatch(applyNumber(5));
                }}
              />
              <CalcButton
                value={6}
                onClick={() => {
                  dispatch(applyNumber(6));
                }}
              />
            </div>

            <div className="row">
              <CalcButton
                value={7}
                onClick={() => {
                  dispatch(applyNumber(7));
                }}
              />
              <CalcButton
                value={8}
                onClick={() => {
                  dispatch(applyNumber(8));
                }}
              />
              <CalcButton
                value={9}
                onClick={() => {
                  dispatch(applyNumber(9));
                }}
              />
            </div>

            <div className="row">
              <CalcButton
                value={"+"}
                onClick={() => {
                  dispatch(change_operation("+"));
                }}
              />
              <CalcButton
                value={"*"}
                onClick={() => {
                  dispatch(change_operation("*"));
                }}
              />
              <CalcButton
                value={"-"}
                onClick={() => {
                  dispatch(change_operation("-"));
                }}
              />
            </div>

            <div className="row ce_button">
              <CalcButton
                value={"CE"}
                onClick={() => {
                  dispatch(clear_display());
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

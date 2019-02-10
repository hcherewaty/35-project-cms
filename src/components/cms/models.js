import React from "react";
import { connect } from "react-redux";

import * as actions from "./actions.js";

const styles = {
  clickable: { cursor: "pointer" },
  delete: {
    color: "red",
    cursor: "pointer",
    marginLeft: ".5em"
  }
};

const API = process.env.REACT_APP_API;

/**
 *
 *
 * @class Models - defines methods for selecting and rendering model data.
 * @extends {React.Component}
 */
class Models extends React.Component {
  /**
   *
   * @Method componentDidMount - Is executed after the Model component is rendered to the DOM and calls getModels function with API url/models to display models from API on the page.  Is executed after the Model component renders to the DOM, so that it can use the the DOM to render the information from the API.
   * @memberof Models
   */
  componentDidMount() {
    let url = `${API}/models`;
    this.props.getModels(url);
  }

  /**
   *
   * @Method selectModel - Is triggered on click of a model. First executes clearRecord function to clear the page before new information is rendered to the page.  setModel function takes the model and getRecords takes a url to make a call to the API to fetch data requested.
   * @memberof Models
   */
  selectModel = model => {
    let url = `${API}/${model}`;
    this.props.clearRecord();
    this.props.setModel(model);
    this.props.getRecords(url);
  };

  /**
   *
   * @Method render - function that renders the below JSX onto the page.  Re-renders on state change.
   * @returns markup from JSX.
   * @memberof Models
   */
  render() {
    return (
      <>
      <div className="chooser">Choose from:</div>
      <ul>
        {this.props.models &&
          this.props.models.map((model, i) => (
            <li
              key={`models-${i}`}
              onClick={() => {
                this.selectModel(model);
              }}
            >
              <span style={styles.clickable}>{model}</span>
            </li>
          ))}
      </ul>
      </>
    );
  }
}

/**
 * 
 * @Function mapStateToProps - Receives entire store state and returns selected model data from store for Models component use.  Is called in connect every time the store state changes.
 * @param {*} state
 */
const mapStateToProps = state => ({
  models: state.records.models
});

/**
 * @Function mapDispatchToProps - Receives dispatch and getState as parameters.  Dispatches actions to the store.  Dispatch is a function of the redux store and is used to dispatch actions which is used to trigger state change.  Actions dispatched for state change:  setModel, getModels, getRecords, clearRecord.
 *
 * @param {*} dispatch
 * @param {*} getState
 */
const mapDispatchToProps = (dispatch, getState) => ({
  setModel: model => dispatch(actions.setModel(model)),
  getModels: url => dispatch(actions.getModels(url)),
  getRecords: url => dispatch(actions.getRecords(url)),
  clearRecord: () => dispatch(actions.clearRecord())
});

/**
 * @Function connect - Receives mapStateToProps and mapDispatchToProps as parameters and connects to the redux store with the information from parameters to effect state.
 *
 * @param {*} mapStateToProps
 * @param {*} mapDispatchToProps
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Models);

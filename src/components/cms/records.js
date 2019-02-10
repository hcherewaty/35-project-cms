import React from "react";
import { connect } from "react-redux";

import { When } from "../if";

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
 * @class Records - defines methods for getting a record (getRecord),  deleting a record (deleteRecord), and rendering (render).
 * @extends {React.Component}
 */
class Records extends React.Component {
  /**
   * @Method getRecord - accepts an id as a parameter and gets record by id.
   *
   * @memberof Records
   * @param {*} id
   */
  getRecord = id => {
    let url = `${API}/${this.props.model}/${id}`;
    this.props.getRecord(url);
  };

  /**
   * @Method deleteRecord - accepts an id as a parameters and deletes a record by id.
   *
   * @memberof Records
   * @param {*} id
   */
  deleteRecord = id => {
    let url = `${API}/${this.props.model}/${id}`;
    this.props.deleteRecord(this.props.model, id, url);
  };

  /**
   * @Method render -  renders records based on selectec model.  Can get specific record 'onClick' of record and delete a record 'onClick' of record.
   *
   * @returns markup based on selected model; record information based on chosen record; and renders updated markup when record is deleted.
   * @memberof Records
   */
  render() {
    return (
      <When condition={this.props.model}>
        <ul>
          {this.props.records.map((record, i) => (
            <li key={record._id}>
              <span
                style={styles.clickable}
                onClick={() => this.getRecord(record._id)}
              >
                {record.name}
              </span>
              <span
                style={styles.delete}
                onClick={() => this.deleteRecord(record._id)}
              >
                x
              </span>
            </li>
          ))}
        </ul>
        <button onClick={this.props.clearRecord}>+</button>
      </When>
    );
  }
}

/**
 * @Function mapStateToProps - Accepts state as a parameter and receives entire store state nad retuns selected records and models for Records component use.  Is called in connect every time store state changes.
 *
 * @param {*} state
 */
const mapStateToProps = state => ({
  records: state.records.records,
  model: state.records.model
});

/**
 * @Function mapDispatchStateToProps - Accepts dispatch and getState as parameters.  Dispatches actions to the redux store.  Dispatch is a function of the redux store and is used to dispatch actions which is then used to trigger state change.  Actions dispatched for state change:  getRecord, deleteRecord, clearRecord.
 *
 * @param {*} dispatch
 * @param {*} getState
 */
const mapDispatchToProps = (dispatch, getState) => ({
  getRecord: url => dispatch(actions.getRecord(url)),
  deleteRecord: (model, id, url) => dispatch(actions.destroy(model, id, url)),
  clearRecord: () => dispatch(actions.clearRecord())
});

/**
 * @Function connect - Receives mapStateToProps and mapDispatchToProps as parameters and connects to the redux store with information from parameters to effect state. 
 *
 * @param {*} mapStateToProps
 * @param {*} mapDispatchStateToProps
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Records);


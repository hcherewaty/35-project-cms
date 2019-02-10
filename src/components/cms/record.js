import React from "react";
import { connect } from "react-redux";
import Form from "react-jsonschema-form";
import { When } from "../if";

import * as actions from "./actions.js";

const API = process.env.REACT_APP_API;

// Auto-Hide some of the mongo specific fields
const uiSchema = {
  _id: { "ui:widget": "hidden" },
  __v: { "ui:widget": "hidden" }
};

/**
 *
 *
 * @class Record - defines methods for getDerivedStateFromProps for pre-render; event handling 'onSubmit' of form for put and post actions; handling errors with handleError; and rendering the correct React JsonSchema Form when a model is chosen.
 * @extends {React.Component}
 */
class Record extends React.Component {
  constructor(props) {
    super(props);
    this.state = { schemas: {} };
  }

  // Runs whenever props change (pre-render)
  /**
   *
   * @Method getDerinedStateFromProps - accepts props and state as parameters and pre-renders the derived state from props whenever props change.
   * @static method
   * @param {*} props
   * @param {*} state
   * @returns object
   * @memberof Record
   */
  static getDerivedStateFromProps(props, state) {
    if (props.model && !props.schemas[props.model]) {
      let url = `${API}/${props.model}/schema`;
      props.getSchema(props.model, url);
    }
    return {};
  }

  /**
   * @Method handleError - accepts error as a parameter and logs error.
   *
   * @memberof Record
   */
  handleError = error => {
    console.error(error);
  };

  /**
   * @Method handleSubmit - takes in a form and if the form already exists (checks if there is an id on form.formData), then the form is updated in DB.  Otherwise, a new record is posted to DB. 
   *
   * @memberof Record
   */
  handleSubmit = form => {
    if (form.formData._id) {
      let url = `${API}/${this.props.model}/${form.formData._id}`;
      this.props.put(this.props.model, url, form.formData);
    } else {
      console.log('in else statement', form.formData)
      let url = `${API}/${this.props.model}`;
      this.props.post(this.props.model, url, form.formData);
    }
  };

  /**
   * @Method render - renders React JsonSchema Forms based on when condition of selected model.
   *
   * @returns Form based on selected model.
   * @memberof Record
   */
  render() {
    console.log('record.js', this.props.model)
    return (
      <When condition={this.props.schemas[this.props.model]}>
        <Form
          schema={this.props.schemas[this.props.model] || {}}
          uiSchema={uiSchema}
          formData={this.props.record}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          onError={this.handleError}
        />
      </When>
    );
  }
}

/**
 * @Function mapStateToProps - Accepts state as a parameter and receives entire store state and returns selected schema, model, and record state from store for Record component use.  Is called in connect every time the store state changes.
 *
 * @param {*} state
 */
const mapStateToProps = state => ({
  record: state.records.record,
  schemas: state.records.schemas,
  model: state.records.model
});

/**
 * @Function mapDispatchToProps - Accepts dispatch and getState as parameters.  Dispatches actions to the redux store.  Dispatch is a function of the redux store and is used to dispatch action which is then used to trigger state change.  Actions dispatched for state change:  getRecord, getSchema, post, and put.  
 *
 * @param {*} dispatch
 * @param {*} getState
 */
const mapDispatchToProps = (dispatch, getState) => ({
  getRecord: url => dispatch(actions.getRecord(url)),
  getSchema: (model, url) => dispatch(actions.getSchema(model, url)),
  post: (model, url, record) => dispatch(actions.post(model, url, record)),
  put: (model, url, record) => dispatch(actions.put(model, url, record))
});

/**
 * @Function connect - Receives mapStateToProps and mapDispatchToProps as parameters and connects to the redux store with information from parameters to effect state. 
 *
 * @param {*} mapStateToProps
 * @param {*} mapDispatchToProps
 */
export default connect(mapStateToProps, mapDispatchToProps)(Record);

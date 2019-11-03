import React from "react";
import { Field, reduxForm } from "redux-form";
import {connect} from 'react-redux';
import {createComment} from '../../actions';


class CreateComments extends React.Component {
  renderError = ({error, touched}) => {
    if(touched && error){
    return(
      <div className="ui error message">
      <div className="header">{error}</div>
    </div>
  )
}
  }
  renderInput = ({ input, label, meta }) => {
    // we've destructured the input properties of redux-form
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off"/>
        {this.renderError(meta)}
      </div>
    );
  }
  onSubmit = formValues => {
    this.props.createComment(formValues);
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter Title:" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description:"
        />
        <button className="ui button primary">Post</button>
      </form>
    );
  }
}
const validate = (formValues) => {
  const errors = {};
  if(!formValues.title){
    errors.title = 'You must enter a title.'
  }
  if(!formValues.description){
    errors.description = 'You must enter a description.'
  }
  return errors;
}
const formWrapped = reduxForm({
  form: "commentCreate",
  validate // validate : validate == object destructure
})(CreateComments);
export default connect(null, {createComment})(formWrapped);
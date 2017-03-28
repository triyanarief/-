import React, { Component, PropTypes } from 'react';
import { Tasks } from '../api/tasks.js';

// Task component represent single item
export default class Task extends Component {
  render() {
    return (
      <li>{this.props.task.text}</li>
    );
  }
}

Task.propTypes = {
  // This component gets the task to display through a react prop
  // we can use protoTypes to indicates it is required
  task: PropTypes.object.isRequired,
};

import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import requireAuth from "./requireAuth";

class CommentBox extends Component {
  state = { commnent: "" };

  handleChange = (event) => {
    this.setState({ commnent: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.saveComment(this.state.commnent);

    this.setState({ commnent: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea value={this.state.commnent} onChange={this.handleChange} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </div>
    );
  }
}

export default connect(null, actions)(requireAuth(CommentBox));

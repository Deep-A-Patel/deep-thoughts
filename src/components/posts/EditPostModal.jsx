import React, { Component } from "react";
import {
  DialogContent,
  DialogActions,
  Dialog,
  DialogTitle,
  Button,
  TextField
} from "@material-ui/core";

export class EditPostsModal extends Component {
  state = {
    name: null,
    description: null,
    category: null,
    location: null,
    url: null
  };

  componentDidMount() {
    const newState = {
      name: this.props.item.name,
      description: this.props.item.description,
      category: this.props.item.category,
      url: this.props.item.url,
      location: this.props.item.location
    };

    this.setState(newState);
  }

  editPosts = () => {
    var dateTime = new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit"
    });
    const postsObj = {
      userId: parseInt(sessionStorage.getItem("activeUser")),
      name: this.state.name,
      description: this.state.description,
      category: this.state.category,
      postDate: dateTime,
      location: this.state.location,
      url: this.state.url
    };

    let postsID = this.props.id;
    this.props.edit(postsID, postsObj);
    this.props.hideModal();
  };

  handleChange = e => {
    const stateToChange = {};
    stateToChange[e.target.id] = e.target.value;
    this.setState(stateToChange);
  };

  render() {
    return (
      <Dialog
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.modalVis}
        onClose={this.props.hideModal}
      >
        <DialogTitle>Add Posts</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="normal"
            id="name"
            label="Name"
            type="text"
            variant="outlined"
            defaultValue={this.state.name}
            onChange={this.handleChange}
            fullWidth
          />

          <TextField
            margin="normal"
            id="url"
            label="Image"
            type="text"
            variant="outlined"
            defaultValue={this.state.url}
            onChange={this.handleChange}
            fullWidth
          />
          <TextField
            margin="normal"
            id="description"
            label="Description"
            type="text"
            variant="outlined"
            defaultValue={this.state.description}
            multiline
            rows="5"
            onChange={this.handleChange}
            fullWidth
          />
          <TextField
            margin="normal"
            id="location"
            label="Location"
            type="text"
            variant="outlined"
            defaultValue={this.state.location}
            onChange={this.handleChange}
            fullWidth
          />
          <select
            margin="normal"
            id="category"
            label="Category"
            variant="outlined"
            onChange={this.handleChange}
            fullWidth
          >
            <option value={""} />
            <option value={"Other"}>Other</option>
            <option value={"Movie"}>Movie</option>
            <option value={"Music"}>Music</option>
            <option value={"TV"}>TV</option>
          </select>
        </DialogContent>
        <DialogActions>
          <Button
            color="secondary"
            variant="contained"
            onClick={this.editPosts}
          >
            SUBMIT
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={this.props.hideModal}
          >
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default EditPostsModal;

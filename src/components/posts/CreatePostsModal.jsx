import React, { Component } from "react";
import {
  DialogContent,
  DialogActions,
  Dialog,
  DialogTitle,
  Button,
  TextField
} from "@material-ui/core";

export class CreatePostsModal extends Component {
  state = {
    name: null,
    description: null,
    category: null,
    location: null,
    url: null
  };

  addPosts = () => {
    var dateTime = new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit"
    });

    if (
      this.state.category !== "Movie" &&
      this.state.category !== "Politics" &&
      this.state.category !== "Travel" &&
      this.state.category !== "TV" &&
      this.state.category !== "Music"
    ) {
      this.state.category = "Other";
    }

    const postsObj = {
      userId: parseInt(sessionStorage.getItem("activeUser")),
      name: this.state.name,
      description: this.state.description,
      category: this.state.category,
      postDate: dateTime,
      location: this.state.location,
      url: this.state.url
    };

    this.props.create(postsObj);
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
            onChange={this.handleChange}
            fullWidth
          />

          <TextField
            margin="normal"
            id="url"
            label="Image"
            type="text"
            variant="outlined"
            onChange={this.handleChange}
            fullWidth
          />
          <TextField
            margin="normal"
            id="description"
            label="Description"
            type="text"
            variant="outlined"
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
            onChange={this.handleChange}
            fullWidth
          />
          <select
            className="categroyDropDown"
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
            <option value={"Politics"}>Politics</option>
            <option value={"Travel"}>Travel</option>
            <option value={"Music"}>Music</option>
            <option value={"TV"}>TV</option>
          </select>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" variant="contained" onClick={this.addPosts}>
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

export default CreatePostsModal;

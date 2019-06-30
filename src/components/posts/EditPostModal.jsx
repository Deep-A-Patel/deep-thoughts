import React, { Component } from "react";
import API from "../../modules/dbcalls";
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
    url: null,
    categories: []
  };

  componentDidMount() {
    API.getAllCategories().then(categories => {
      this.setState({
        categories: categories
      });
    });

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
    let categories = this.state.categories;
    let optionItems = categories.map(category => (
      <option key={category.category} value={category.id}>
        {category.category}
      </option>
    ));
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
            className="postDropDown"
            margin="normal"
            id="category"
            label="Category"
            variant="outlined"
            onChange={this.handleChange}
            fullWidth
          >
            {optionItems}
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

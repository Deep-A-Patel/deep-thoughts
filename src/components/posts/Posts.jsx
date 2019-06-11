import React, { Component } from "react";
import { Grid, Fab, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import PostItem from "./PostItem";
import API from "../../modules/dbCalls";
import CreatePostsModal from "./CreatePostsModal";

export default class Posts extends Component {
  makePost = posts =>
    posts.map(item => (
      <PostItem
        key={item.id}
        delete={this.confirmDelete}
        edit={this.editPosts}
        item={item}
      />
    ));

  state = {
    posts: [],
    createModalVis: false
  };

  hideCreateModal = () => {
    this.setState({ createModalVis: false });
  };

  handleCreate = _e => {
    this.setState({ createModalVis: true });
  };

  confirmDelete = postsId => {
    API.deletePosts(postsId).then(_reply => {
      API.getUserPosts(sessionStorage.getItem("activeUser")).then(posts => {
        this.setState({ posts });
      });
    });
  };

  editPosts = (id, obj) => {
    API.editPost(id, obj).then(_reply => {
      API.getUserPosts(sessionStorage.getItem("activeUser")).then(posts => {
        this.setState({ posts });
      });
    });
  };

  addPosts = obj => {
    API.addPost(obj).then(_reply => {
      API.getUserPosts(sessionStorage.getItem("activeUser")).then(posts => {
        this.setState({ posts });
      });
    });
  };

  async componentDidMount() {
    const newState = {
      posts: await API.getUserPosts(sessionStorage.getItem("activeUser")).catch(
        _error => []
      )
    };
    this.setState(newState);
  }

  render() {
    return <></>;
  }
}

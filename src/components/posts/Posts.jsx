import React, { Component } from "react";
import { Grid, Fab, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import PostItem from "./PostItem";
import API from "../../modules/dbcalls";
import CreatePostsModal from "./CreatePostsModal";

export default class Posts extends Component {
  makePost = (posts, filterParams) => {
    const sortedPosts = posts.sort((postA, postB) => {
      const dateA = new Date(postA.postDate);
      const dateB = new Date(postB.postDate);
      return dateB - dateA;
    });
    let displayPosts = filterParams
      ? sortedPosts.filter(post => post.category === filterParams)
      : sortedPosts;

    return displayPosts.map(item => (
      <PostItem
        color={
          item.userId === parseInt(sessionStorage.getItem("activeUser"))
            ? { backgroundColor: "lightgray" }
            : null
        }
        key={item.id}
        delete={this.confirmDelete}
        edit={this.editPosts}
        item={item}
      />
    ));
  };

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
      API.getAllPosts(sessionStorage.getItem("activeUser")).then(posts => {
        this.setState({ posts });
      });
    });
  };

  editPosts = (id, obj) => {
    API.editPost(id, obj).then(_reply => {
      API.getAllPosts(sessionStorage.getItem("activeUser")).then(posts => {
        this.setState({ posts });
      });
    });
  };

  addPosts = obj => {
    API.addPost(obj).then(_reply => {
      API.getAllPosts(sessionStorage.getItem("activeUser")).then(posts => {
        this.setState({ posts });
      });
    });
  };

  componentDidMount = async () => {
    const newState = {
      posts: await API.getAllPosts(sessionStorage.getItem("activeUser")).catch(
        _error => []
      )
    };
    this.setState(newState);
  };

  render() {
    const { filterParams } = this.props;

    return (
      <>
        <Grid
          container
          direction="row"
          wrap="nowrap"
          justify="space-between"
          alignItems="center"
          style={{ margin: "1rem", width: "calc(100% - 2rem)" }}
        >
          <Grid item>
            <Typography variant="h3">Posts:</Typography>
          </Grid>
          <Grid item>
            <Fab color="secondary" onClick={this.handleCreate}>
              <AddIcon />
            </Fab>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          alignItems="stretch"
          className="postsContainer"
          wrap="wrap"
          direction="column"
          style={{ width: "290%" }}
        >
          {this.makePost(this.state.posts, filterParams)}
        </Grid>
        {this.state.createModalVis ? (
          <CreatePostsModal
            {...this.props}
            create={this.addPosts}
            hideModal={this.hideCreateModal}
            modalVis={this.state.createModalVis}
          />
        ) : null}
      </>
    );
  }
}

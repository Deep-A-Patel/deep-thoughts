import React, { Component } from "react";
import {
  Card,
  Grid,
  CardHeader,
  CardContent,
  Typography
} from "@material-ui/core";

import "@material-ui/core/IconButton";
import EditPostsModal from "./EditPostModal";
import DeletePostsModal from "./DeletePostModal";
import CardButtons from "../../modules/CardButtons";

export class PostItem extends Component {
  state = {
    editModalVis: false,
    deleteModalVis: false,
    isUserItem: false,
    avatars: []
  };

  componentDidMount() {
    const user = parseInt(sessionStorage.getItem("activeUser"));
    const itemId = this.props.item.userId;

    fetch(`http://localhost:8088/avatars/${this.props.item.user.avatar}`).then(
      res =>
        res.json().then(data => {
          this.setState({ avatars: data.avatar });
        })
    );

    if (user === itemId) {
      this.setState({ isUserItem: true });
    }
  }

  paper = {
    position: "absolute",
    width: 400,
    backgroundColor: "white",
    boxShadow: [
      [0, 14, 28, "rgba(0,0,0,0.25)"],
      [0, 10, 10, "rgba(0,0,0,0.22)"]
    ],
    padding: 10,
    outline: "none"
  };

  hideEditModal = () => {
    this.setState({ editModalVis: false });
  };
  hideDeleteModal = () => {
    this.setState({ deleteModalVis: false });
  };
  handleEdit = _e => {
    this.setState({ editModalVis: true });
  };
  handleDelete = _e => {
    this.setState({ deleteModalVis: true });
  };

  render() {
    return (
      <Grid item lg={4} md={6} sm={12}>
        <Card raised={true} style={this.props.color}>
          <div
            style={{
              backgroundImage: `url(${this.props.item.url})`,
              width: "100%",
              height: "600px",
              backgroundSize: "100% 600px"
            }}
          />
          <CardHeader
            title={this.props.item.name}
            subheader={"Date Added: " + this.props.item.postDate}
          />
          <CardContent>
            <Typography variant="body1" component="h3">
              Location: {this.props.item.location}
            </Typography>

            <Typography
              variant="body2"
              component="p"
              style={{ whiteSpace: "pre-wrap" }}
            >
              {this.props.item.description}
            </Typography>
          </CardContent>
          <div className="btnContainer">
            {this.state.isUserItem ? (
              <CardButtons
                handleEdit={this.handleEdit}
                handleDelete={this.handleDelete}
              />
            ) : null}
            <Typography variant="body4" component="h2">
              {this.state.avatars}
            </Typography>
          </div>
        </Card>
        {this.state.editModalVis ? (
          <EditPostsModal
            {...this.props}
            edit={this.props.edit}
            item={this.props.item}
            id={this.props.item.id}
            hideModal={this.hideEditModal}
            modalVis={this.state.editModalVis}
          />
        ) : null}{" "}
        {this.state.deleteModalVis ? (
          <DeletePostsModal
            {...this.props}
            delete={this.props.delete}
            postsId={this.props.item.id}
            hideModal={this.hideDeleteModal}
            modalVis={this.state.deleteModalVis}
          />
        ) : null}
      </Grid>
    );
  }
}

export default PostItem;

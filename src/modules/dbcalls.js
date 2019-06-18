const API = {
  loginUser: function(username, password) {
    return fetch(
      `http://localhost:8088/users?username=${username}&password=${password}`
    ).then(response => response.json());
  },

  getAllUsers: function() {
    return fetch("http://localhost:8088/users").then(response =>
      response.json()
    );
  },

  getAllUsersExcluding: function(excludingUserId) {
    return fetch(`http://localhost:8088/users?id_ne=${excludingUserId}`).then(
      response => response.json()
    );
  },

  addUser: function(obj) {
    return fetch("http://localhost:8088/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(response => response.json());
  },

  getUserPosts: function(userId) {
    return fetch(
      `http://localhost:8088/posts?userId=${userId}&_sort=postDate&_order=desc`
    ).then(response => response.json());
  },
  getAllPosts: function() {
    return fetch(`http://localhost:8088/posts?_expand=user`).then(response =>
      response.json()
    );
  },

  getSingleUserPost: function(postId) {
    return fetch(`http://localhost:8088/posts/${postId}`).then(response =>
      response.json()
    );
  },

  addPost: function(obj) {
    return fetch("http://localhost:8088/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(response => response.json());
  },

  editPost: function(postsId, obj) {
    return fetch(`http://localhost:8088/posts/${postsId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(response => response.json());
  },

  deletePosts: function(postsId) {
    return fetch(`http://localhost:8088/posts/${postsId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json());
  }
};

export default API;

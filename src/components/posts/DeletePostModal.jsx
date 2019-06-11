// import React, { Component } from "react";
// import { DialogContent, DialogContentText, DialogActions, Dialog, DialogTitle, Button } from "@material-ui/core";

// export class DeletePostsModal extends Component {
//   handleDel = () => {
//     this.props.delete(this.props.postsId);
//   };

//   render() {
//     return (
//       <Dialog aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" open={this.props.modalVis} onClose={this.props.hideModal}>
//         <DialogTitle>Are you sure you want to delete this post?</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Deleted posts cannot be recovered
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button style={{ backgroundColor: "darkred", color: "white" }} variant="contained" onClick={this.handleDel}>
//             YES
//           </Button>
//           <Button className="" variant="contained" onClick={this.props.hideModal}>
//             NO
//           </Button>
//         </DialogActions>
//       </Dialog>
//     );
//   }
// }

// export default DeletePostsModal;

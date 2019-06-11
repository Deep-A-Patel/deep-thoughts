// import React, { Component } from 'react'
// import { DialogContent, DialogActions, Dialog, DialogTitle, Button, TextField } from '@material-ui/core';

// export class CreatePostsModal extends Component {
//     state = {
//         name: null,
//         description: null,
//         location: null,
//         url: null
//     }

//     addPosts = () => {
//         var dateTime = new Date().toLocaleString("en-US", {
//             year: "numeric",
//             month: "short",
//             day: "2-digit",
//             hour: "numeric",
//             minute: "2-digit",
//             second: "2-digit"
//         });

//         const postsObj = {
//             userId: parseInt(sessionStorage.getItem("activeUser")),
//             name: this.state.name,
//             description: this.state.description,
//             postDate: dateTime,
//             location: this.state.description,
//             url: this.state.url
//         }

//         this.props.create(postsObj)
//         this.props.hideModal()
//     }

//     handleChange = (e) => {
//         const stateToChange = {}
//         stateToChange[e.target.id] = e.target.value
//         this.setState(stateToChange)
//     }

//     render() {
//         return (
//             <Dialog aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" open={this.props.modalVis} onClose={this.props.hideModal}>
//                 <DialogTitle>Add Posts</DialogTitle>
//                 <DialogContent>
//                     <TextField autoFocus margin="normal" id="name" label="Name" type="text" variant="outlined" onChange={this.handleChange} fullWidth />
//                     <TextField id="datetime-local" defaultValue={new Date()} label="Post Date:" type="datetime-local" InputLabelProps={{ shrink: true, }} />
//                     <TextField margin="normal" id="url" label="Image" type="text" variant="outlined" onChange={this.handleChange} fullWidth />
//                     <TextField margin="normal" id="description" label="Description" type="text" variant="outlined" multiline rows="5" onChange={this.handleChange} fullWidth />
//                     <TextField margin="normal" id="location" label="Location" type="text" variant="outlined" onChange={this.handleChange} fullWidth />
//                 </DialogContent>
//                 <DialogActions>
//                     <Button color="secondary" variant="contained" onClick={this.addPosts}>SUBMIT</Button>
//                     <Button color="secondary" variant="contained" onClick={this.props.hideModal}>CLOSE</Button>
//                 </DialogActions>
//             </Dialog>
//         )
//     }
// }

// export default CreatePostsModal

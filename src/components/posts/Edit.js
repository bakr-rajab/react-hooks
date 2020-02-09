import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from '@material-ui/core';
import firebase from "../../firebase/firebase";

export default function EditModal(props) {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState(props.post.title);
    const [body, setBody] = React.useState(props.post.body);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleBody = (body) => {
        setBody(body);
    };
    const handleTitle = (title) => {
        setTitle(title);
        console.log(title)
    };
    const handleUpdate = () => {
        const db = firebase.firestore();
        db.collection('posts').doc(props.post.id).set({title, body});
        console.table([title, body]);
        setOpen(false);
    };


    // console.log(props.post)
    return (
        <div>
            <Button variant="outlined" color='primary' onClick={handleClickOpen}>
                Edit
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create Post</DialogTitle>
                <DialogContent style={{width: 400}}>
                    <TextField
                        autoFocus
                        id="title"
                        value={title}
                        label="Post Titile"
                        type="text"
                        fullWidth
                        required
                        onChange={(e) => {
                            handleTitle(e.target.value)
                        }
                        }

                    />
                    <br/>
                    <TextField
                        required
                        id="body"
                        value={body}
                        label="Post Body"
                        multiline
                        type="text"
                        fullWidth
                        onChange={(e) => handleBody(e.target.value)}
                    />
                    <br/><br/>
                    <Button onClick={handleUpdate} color="primary">
                        Submit
                    </Button>
                </DialogContent>
                <DialogActions>

                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

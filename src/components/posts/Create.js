import React,{useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from '@material-ui/core';
import firebase from "../../firebase/firebase";

export default function FormModal() {
    const [open, setOpen] = useState(false);
    const [post, setPost] = useState({
        title: '',
        body: ''
    });
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleCreate = (e) => {
        setPost({
            ...post,
            [e.target.name]:e.target.value
        });
    };
    const handleSubmit = () => {
        const db = firebase.firestore();
        db.collection('posts').add(post);
        setOpen(false);
    };

    return (
        <div>
            <br/> <br/>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Create New Post
            </Button>
            <br/><br/>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create Post</DialogTitle>
                <DialogContent style={{width: 400}}>
                        <TextField
                            autoFocus
                            id="title"
                            name='title'
                            label="Post Titile"
                            type="text"
                            fullWidth
                            required
                            onChange={handleCreate}
                        />
                        <br/>
                        <TextField
                            required
                            multiline
                            id="body"
                            name='body'
                            label="Post Body"
                            type="text"
                            fullWidth
                            onChange={handleCreate}
                        />
                        <br/><br/>
                        <Button onClick={handleSubmit} color="primary">
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

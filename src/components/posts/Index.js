import React, {useEffect, useState} from "react";
import firebase from "../../firebase/firebase";
import Post from "./Show";
import FormModal from "./Create";
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function Posts() {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);
    const db = firebase.firestore();
    // const ch=[];
    //let lis='77';

    useEffect(() => {

        const fetchData = async () => {

            const data = await db.collection("posts").get();
             setPosts(data.docs.map(doc => ({...doc.data(), id: doc.id})));
        };
        fetchData();

        return ()=>{
            firebase.firestore();
        }
    });

    // console.log();
    return (
        <div className="container posts">

            <FormModal/>

            <div className={classes.root}>
                <Grid container spacing={1}>
                    {posts.map(post => (
                        <Grid key={post.id} container item md={4}>
                            <Post post={post}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}

export default Posts;

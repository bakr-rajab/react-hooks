import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditModal from "./Edit";
import firebase from "../../firebase/firebase";

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        minWidth:300,
    },
    media: {
        height: 140,
    },
    edit_btn: {
        margin: '0px 0px 0px 0px',
    },
    delete_btn: {
        margin: '0px 0px 0px 55%',
        float: 'right'
    },
    body: {
        minHeight: 150
    }
});

export default function Post(props) {
    const classes = useStyles();
    const handelDelete = (id) => {
        const db = firebase.firestore();
        db.collection('posts').doc(id).delete();
    };

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={process.env.PUBLIC_URL + 'sample-1.jpg'}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.post.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.body}>
                        {props.post.body}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <section className={classes.edit_btn}>
                    <EditModal post={props.post}/>
                </section>
                <Button onClick={() => handelDelete(props.post.id)} size="small" color="secondary"
                        className={classes.delete_btn}>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

// <img src={process.env.PUBLIC_URL + 'sample-1.jpg'} alt='img'/>

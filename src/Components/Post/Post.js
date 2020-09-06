import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Post.css';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
      maxWidth: 800,
    },
  });

const Post = (props) => {
    const classes = useStyles();
    const userDetails = props.post;

    const { title, id } = userDetails;


    return (
        <div id="post-container" >
            <Card id = "card-tag" className={classes.root}>
                <CardActionArea>
                    <CardContent className = "card-content">
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        {
                            props.postDetails && props.children
                        }
                    </CardContent>
                </CardActionArea>
                {
                    !props.postDetails &&
                    <CardActions >
                        <Link to={`/post/postDetails/${id}`}><Button size="small"><span className = "button" >See More</span></Button></Link>
                    </CardActions>
                }
            </Card>
        </div>
    );
};

export default Post;
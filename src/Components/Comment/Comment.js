import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '800px',
        backgroundColor: 'rgb(66, 66, 66)',
    },
    inline: {
        display: 'inline',
    },
    dividerColor: {
        backgroundColor: 'rgb(39, 44, 52)',
      },
}));

const Comment = (props) => {
    const { id, name, email, body } = props.comment;
    const classes = useStyles();
    const imgURL = `https://avatars2.githubusercontent.com/u/${id}`;

    return (
        <List className={classes.root}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar key={id} alt="Remy Sharp" src={imgURL} />
                </ListItemAvatar>
                <ListItemText
                    primary={name}
                    disableTypography
                    secondary={
                        <React.Fragment>
                            <br />
                            {email}
                            <br /> <br />
                            {body}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider className = {classes.dividerColor} variant="inset" component="li" />
        </List>
    );
};

export default Comment;
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: 700,
    },
    title: {
        marginTop: theme.spacing(2),
    },
}));


const Review = ({ setCheckout }) => {
    const classes = useStyles();
    const checkOutList = useSelector(state => state.checkOut.checkOutList);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            setCheckout(false);
            dispatch({ type: 'CLEAN_ITEM', payload: null });
        };
    }, [setCheckout, dispatch]);

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
      </Typography>
            <List disablePadding>
                {checkOutList.map((product) => (
                    <ListItem className={classes.listItem} key={product.name}>
                        <ListItemText primary={product.title} secondary={"Quatity:" + product.qty} />
                        <Typography variant="body2">{"$" + Number.parseFloat((product.price * product.qty).toFixed(2))}</Typography>
                    </ListItem>
                ))}
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Shipping" />
                    <Typography variant="body2">Free</Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" className={classes.total}>
                        {"$" + checkOutList.reduce((accumulator, currentValue) => {
                            return accumulator + Number.parseFloat(currentValue.price * currentValue.qty);
                        }, 0).toFixed(2)}
                    </Typography>
                </ListItem>
            </List>
        </React.Fragment>
    );
}

export default Review;
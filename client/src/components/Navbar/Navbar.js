import React, { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import useStyles from './styles';
import todos from '../../images/todos.png';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const logout = () => {
        const action = {
            type: 'LOGOUT'
        }
        dispatch(action)
        history.push('/');
        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;

        // JWT
        if(token) {
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()){
                logout();
            }
        }

        // from google
        setUser(JSON.parse(localStorage.getItem('profile')));

    }, [location])

    return (
        <div>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <div className={classes.brandContainer}>
                    <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Todos</Typography>
                    <img className={classes.image} src={todos} alt="/todos" height="60" />
                </div>
                <Toolbar className={classes.toolbar}>
                    {user ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl} >{user.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant="h6" >{user.result.name}</Typography>
                            <Button varianr="contained" className={classes.logout} color="secondary" onClick={logout} >Logout</Button>
                        </div>
                    ) : (
                            <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                        )}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar

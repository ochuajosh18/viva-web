import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { logoutUser } from '../../../store/auth/actions';

const Logout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(logoutUser())
    }, [dispatch])
    return <Redirect to="/login" />
}

export default Logout;
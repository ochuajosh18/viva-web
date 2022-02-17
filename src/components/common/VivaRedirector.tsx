import { useDispatch } from 'react-redux';
import { Redirect, RedirectProps } from 'react-router';
import { SET_SYSTEM_STATE } from '../../store/system/types';

const VivaRedirector = (props: RedirectProps) => {
    const dispatch = useDispatch();
    dispatch({ type: SET_SYSTEM_STATE, payload: { redirectTo: ''} })
    return <Redirect {...props} />
}

export default VivaRedirector;
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import {
    useSelector,
    useDispatch
} from 'react-redux';
import { AppState } from '../../store';
import { SET_SYSTEM_STATE } from '../../store/system/types';

const VivaSnackbar = () => {
    const system = useSelector((state: AppState) => state.system)
    const dispatch = useDispatch()
    const onClose = () => dispatch({
        type: SET_SYSTEM_STATE,
        payload: { snackbarOpen: false }
    })
    return (
        <Snackbar open={system.snackbarOpen} onClose={onClose} autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <Alert severity={system.snackbarType}>
                {system.snackbarMessage}
            </Alert>
        </Snackbar>
    )
}

export default VivaSnackbar
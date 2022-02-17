import { connect } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { AppState } from '../../store';
import { AuthState } from '../../store/auth/types';

interface AuthenticatedRouteProps extends RouteProps {
    auth: AuthState
}

const AuthenticatedRoute = (props: AuthenticatedRouteProps) => {
    return props.auth.isLoggedIn ? <Route {...props} /> : <Redirect to="/login" />
}

const mapStateToProps = (state: AppState) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(AuthenticatedRoute);
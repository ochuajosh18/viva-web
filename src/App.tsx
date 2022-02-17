import { connect } from 'react-redux';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { AuthState } from './store/auth/types';
import { SystemState } from './store/system/types';
import { AppState } from './store';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ScrollUpButton } from './components/common/VivaButton';
import VivaSnackbar from './components/common/VivaSnackbar';
import Login from './components/login'
import Logout from './components/login/fragments/Logout';
import ForgotPassword from './components/forgotpassword'
import VivaRedirector from './components/common/VivaRedirector';
import ChangePassword from './components/forgotpassword/fragments/ChangePassword';
import VivaHeader from './components/common/VivaHeader';
import NewsDetails from './components/home/newsDetails';
import Home from './components/home';
import About from './components/about';
import VivaFooter from './components/common/VivaFooter';
import Classes from './components/classes';
import Shop from './components/shop';
import ClassDetails from './components/classes/fragments/ClassDetails';
import ProductDetails from './components/shop/productDetails';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const vivaTheme = createTheme({
    palette: {
        primary: {
            main: '#62CCF4',
            contrastText: '#FFF'
        },
        secondary: {
            main: '#373355',
            contrastText: '#8D96A8'
        }
    }
})

interface AppProps {
    auth: AuthState;
    system: SystemState;
}

const App = (props: AppProps) => {
    const { system: { redirectTo }} = props;            
    return (
        <ThemeProvider theme={vivaTheme}>
            <Router>
                <VivaHeader />
                <Switch>
                    {redirectTo && <VivaRedirector to={redirectTo} />}
                    <Route path="/articles/:title" component={NewsDetails}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/classes/:className" component={ClassDetails}/>
                    <Route path="/classes" component={Classes}/>
                    <Route path="/shop/:id" component={ProductDetails}/>
                    <Route path="/shop" component={Shop}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/logout" component={Logout}/>
                    <Route path="/forgot-password" component={ForgotPassword} />
                    <Route path="/change-password/:token" component={ChangePassword} />
                    <Route path="/register" component={Login}/>
                    <Route path="/" component={() => <Redirect to="/home" />} />
                </Switch>
                <VivaFooter />
                <ScrollUpButton showBelow={250}/>
            </Router>
            <VivaSnackbar />
        </ThemeProvider>
    )
}

const mapStateToProps = (state: AppState) => ({ system: state.system, auth: state.auth });
export default connect(mapStateToProps)(App);

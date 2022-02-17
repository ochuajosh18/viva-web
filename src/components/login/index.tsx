import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { AppState } from '../../store'
import { AuthState }from '../../store/auth/types'
import { setAuthState, loginUser } from '../../store/auth/actions'
import { Link } from 'react-router-dom';
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Grid from '@mui/material/Grid'
import LoginBackground from '../../assets/images/login/login_image_background.png'
import VivaLogo from '../../assets/images/login/viva_logo.png'
import ReCaptcha from 'react-google-recaptcha'

import { 
    LoginContainer, 
    ImageGridContainer, 
    LoginFormGridContainer, 
    LoginLogoContainer, 
    LoginFormBox,
    LoginFormAuxContainer,
    LoginButtonContainer,
    LoginButton,
    LoginRegisterLinkContainer
 } from './fragments/LoginComponents'
import Typography from '@mui/material/Typography'
import VivaInput from '../common/VivaInput'
import { ChangeEvent, useCallback, useEffect, useState } from 'react';

interface LoginIndexProps {
    setAuthState: typeof setAuthState;
    loginUser: typeof loginUser;
    auth: AuthState;
} 

const LoginIndex = (props: LoginIndexProps) => {
    const [loginDisabled, setLoginDisabled] = useState(true)
    const { auth, setAuthState, loginUser } = props;
    const { isLoggedIn, username, password, loginCaptcha, rememberMe } = auth
    
    const _onLoginInput = useCallback((type: keyof typeof auth, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setAuthState({ [type]: e.target.value })
        let disabled = type === 'username' ? !(Boolean(e.target.value) && Boolean(password)) : !(Boolean(username) && Boolean(e.target.value))
        if (loginCaptcha !== null) {    
            setLoginDisabled(disabled)
        }
        
    }, [setAuthState, username, password, loginCaptcha])

    const _onCheck = useCallback((type: keyof typeof auth, e: ChangeEvent<HTMLInputElement>) => {
        setAuthState({ [type]: e.target.checked })
    }, [setAuthState])

    const _onCaptchaChange = useCallback((captchaToken) => {
        setAuthState({ loginCaptcha: captchaToken })
        if ( Boolean(username) && Boolean(password)) {
            setLoginDisabled(captchaToken === null)
        }
       
    }, [setAuthState, password, username])

    const _onLoginClick = useCallback(() => {
        if (username && password) loginUser()
    }, [loginUser, username, password])

    const _checkRememberMe = useCallback(() => {
        setAuthState(
            { 
                'username' : localStorage.getItem('username') ? `${localStorage.getItem('username')}`: '',
                'rememberMe' : localStorage.getItem('rememberMe') === 'true' ? true : false
            })
    }, [setAuthState])

    useEffect(() => {
        _checkRememberMe()
    }, [_checkRememberMe])
    
    return (
        <LoginContainer>
            {isLoggedIn && <Redirect to="/home" />}
            <Grid container>
                <ImageGridContainer item sm={6}>
                        <Typography className="login-text-small" variant="body1" component="div" >
                            VIVA School - Your child perfect start
                        </Typography>
                        <Typography className="login-text-big" variant="h3" component="div" fontFamily="Alike-Regular">
                            Welcome to the attractive world of Music & Dance
                        </Typography>
                        <img src={ LoginBackground } alt=""/>
                </ImageGridContainer>
                <LoginFormGridContainer item sm={6}>
                    <LoginLogoContainer>
                        <img src= { VivaLogo } alt=""/>
                    </LoginLogoContainer>
                    <LoginFormBox>
                        <Typography className="login-form-title">Login</Typography>
                        <Typography className="login-form-subtitle">Login your E-Learning account</Typography>
                    </LoginFormBox>
                    <VivaInput
                        type="text"
                        textInputType="standard"
                        value={ username }
                        placeholder="Username"
                        onChange={(e) => _onLoginInput('username', e)}
                    />
                    <VivaInput
                        type="password"
                        textInputType="standard"
                        value={ password }
                        placeholder="Password"
                        onChange={(e) => _onLoginInput('password', e)}
                    />
                    <LoginFormAuxContainer>
                        <FormGroup>
                            <FormControlLabel 
                                control={
                                    <Checkbox 
                                        checked={rememberMe}
                                        value={rememberMe} 
                                        onChange={(e) => _onCheck('rememberMe', e)}
                                    />
                                }
                                label="Remember me" 
                            />
                        </FormGroup>
                        <Link className="forgot-password-link" to="/forgot-password" >Forgot Password?</Link>
                    </LoginFormAuxContainer>
                    
                    <LoginButtonContainer>
                        <ReCaptcha 
                            sitekey="6Ld5xMwcAAAAALebBgPhqGJOxd-yoPYraiAop-A2"
                            onExpired={() => _onCaptchaChange(null)}
                            onChange={_onCaptchaChange}         
                        
                        />
                        <LoginButton disabled={loginDisabled} onClick={_onLoginClick} endIcon={<ArrowForwardIcon />}>
                            {auth.loading ? <CircularProgress /> : 'Proceed'}
                        </LoginButton>
                    </LoginButtonContainer>
                    <LoginRegisterLinkContainer>
                    <Typography className="register-link-text">Don't have an account yet? <Link className="register-link" to="/register">Register Account</Link></Typography>
                    </LoginRegisterLinkContainer>
                </LoginFormGridContainer>
            </Grid>
        </LoginContainer>
    )
}

const mapStateToProps = (state: AppState) => ({
    auth: state.auth
})

const mapDispatchToProps = {
    setAuthState,
    loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginIndex) 


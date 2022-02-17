import { ChangeEvent, KeyboardEvent, useCallback, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { AuthState } from '../../store/auth/types';
import { setAuthState, sendForgotPasswordEmail } from '../../store/auth/actions';
import { systemRedirect } from '../../store/system/actions';
import { 
    LoginContainer, 
    LoginTitleBox, 
    ImageGridContainer, 
    LoginLogoContainer, 
    LoginFormGridContainer, 
    LoginFormAuxContainer,
    LoginButtonContainer,
    LoginButton,
} from '../login/fragments/LoginComponents';
import VivaInput from '../common/VivaInput';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VivaLoginBg from '../../assets/images/login/vivaloginbg.svg';
import VivaLogo from '../../assets/images/login/viva_logo.png';

interface ForgotPasswordIndexProps {
    setAuthState: typeof setAuthState;
    sendForgotPasswordEmail: typeof sendForgotPasswordEmail;
    systemRedirect: typeof systemRedirect;
    auth: AuthState;
}

const ForgotPasswordIndex = (props: ForgotPasswordIndexProps) => {
    const [forgotPasswordDisabled, setForgotPasswordDisabled] = useState(true)
    const { auth, setAuthState, sendForgotPasswordEmail, systemRedirect } = props;
    const { forgotPasswordEmail, forgotPasswordSendSuccess } = auth;

    useEffect(() => {
        setAuthState({ forgotPasswordEmail: '', forgotPasswordSendSuccess: false })
    }, [setAuthState])

    const _onForgotPasswordInput = useCallback((type: keyof typeof auth, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setAuthState({ [type]: e.target.value })
        setForgotPasswordDisabled(!Boolean(e.target.value))
    }, [setAuthState])
    
    const _onForgotPasswordClick = useCallback(() => {
        if (forgotPasswordEmail) sendForgotPasswordEmail()
    }, [sendForgotPasswordEmail, forgotPasswordEmail])
    
    const _onKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') _onForgotPasswordClick()
    }, [_onForgotPasswordClick])
    
    return (
        <LoginContainer>
            {auth.isLoggedIn && <Redirect to="/home" />}
            <Grid container>
                <ImageGridContainer item xs={12} sm={6}>
                    <Typography className="login-text-small" variant="body1" component="div" >
                        VIVA School - Your child perfect start
                    </Typography>
                    <Typography className="login-text-big" variant="h3" component="div" fontFamily="Alike-Regular">
                        Welcome to the attractive world of Music & Dance
                    </Typography>
                    <img src={VivaLoginBg} alt=""/>
                </ImageGridContainer>
                <LoginFormGridContainer item xs={12} sm={6}>
                    <LoginLogoContainer>
                        <img src={VivaLogo} alt="" />
                    </LoginLogoContainer>
                    {forgotPasswordSendSuccess ? 
                        <LoginButtonContainer flexDirection="column" alignItems="center">
                            <Box display="flex" alignItems="center" fontFamily="Arial" marginBottom="16px">
                                <CheckCircleIcon sx={{ width: 42, height: 42, marginRight: 1, color: (theme) => theme.palette.success.main }} />
                                Please check your email to reset password
                            </Box>
                            <LoginButton onClick={() => systemRedirect('/login')} startIcon={<ArrowBackIcon />}>
                                Go Back to Login
                            </LoginButton>
                        </LoginButtonContainer>
                    :
                        <>
                            <LoginTitleBox>
                                <Typography className="login-form-title">Forgot Password</Typography>
                                <Typography className="login-form-subtitle">Enter Email to Reset Password</Typography>
                            </LoginTitleBox>
                            <VivaInput
                                id="forgot-password-email"
                                type="text"
                                textInputType="standard"
                                value={forgotPasswordEmail}
                                placeholder="someone@email.com"
                                onChange={(e) => _onForgotPasswordInput('forgotPasswordEmail', e)}
                                onKeyDown={_onKeyDown}
                            />
                            <LoginFormAuxContainer sx={{ justifyContent: 'flex-start' }}>
                                <Link className="login-link" to="/login">Back to Login</Link>
                            </LoginFormAuxContainer>
                            <LoginButtonContainer>
                                <LoginButton id="submit-btn" disabled={forgotPasswordDisabled} onClick={_onForgotPasswordClick} endIcon={<ArrowForwardIcon />}>
                                    {auth.loading ? <CircularProgress /> : 'Submit'}
                                </LoginButton>
                            </LoginButtonContainer>
                        </>
                    }
                </LoginFormGridContainer>
            </Grid>
        </LoginContainer>
    )
}

const mapStateToProps = (state: AppState) => ({
    auth: state.auth
});

const mapDispatchToProps = {
    setAuthState,
    sendForgotPasswordEmail,
    systemRedirect
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordIndex);
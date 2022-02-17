import { ChangeEvent, KeyboardEvent, useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { AppState } from '../../../store';
import { AuthState } from '../../../store/auth/types';
import { setSystemState } from '../../../store/system/actions';
import { setAuthState, changePassword } from '../../../store/auth/actions';
import { 
    LoginContainer, 
    LoginTitleBox, 
    ImageGridContainer, 
    LoginLogoContainer, 
    LoginFormGridContainer, 
    LoginButtonContainer,
    LoginButton,
} from '../../login/fragments/LoginComponents';
import ChangePasswordGuidelines from './ChangePasswordGuidelines';
import VivaInput from '../../common/VivaInput';
import VivaLoginBg from '../../../assets/images/login/vivaloginbg.svg';
import VivaLogo from '../../../assets/images/login/viva_logo.png';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CancelIcon from '@mui/icons-material/Cancel';

interface ChangePasswordProps {
    setAuthState: typeof setAuthState;
    setSystemState: typeof setSystemState;
    changePassword: typeof changePassword;
    auth: AuthState;
}

type VivaChangeTokenPayload = JwtPayload & { firstName: string; lastName: string; email: string };
const ChangePassword = (props: ChangePasswordProps) => {
    const [tokenDetails, setTokenDetails] = useState<VivaChangeTokenPayload | null>(null)
    const [tokenError, setTokenError] = useState(false)
    const [changePassDisabled, setChangePassDisabled] = useState(true)
    const [confirmIconVisible, setConfirmIconVisible] = useState(false)
    const params = useParams<{ token: string }>();
    const { auth, setSystemState, setAuthState, changePassword } = props;
    const { changeNewPassword, changeConfirmNewPassword  } = auth;
    useEffect(() => {
        try {
            const token = jwt.decode(params.token) as VivaChangeTokenPayload;
            if (!token) setTokenError(true)
            else setTokenDetails(token)
        }
        catch (e) { 
            setSystemState({ 
                snackbarType: 'error',
                snackbarMessage: (e as Error).message,
                snackbarOpen: true 
            })
        }
    }, [params.token, setSystemState])

    const _onChangePasswordInput = useCallback((type: keyof typeof auth, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setAuthState({ [type]: e.target.value })
        const disabled = type === 'changeNewPassword' ? !(Boolean(e.target.value) && Boolean(changeConfirmNewPassword)) : !(Boolean(e.target.value) && Boolean(changeNewPassword))
        setChangePassDisabled(disabled)
        setConfirmIconVisible(false);
    }, [setAuthState, changeConfirmNewPassword, changeNewPassword])
    
    const _onChangePasswordClick = useCallback(() => {
        if (tokenDetails) {
            const generalValidation =  /([A-Z])+([a-z])+/g.test(changeNewPassword) && /\d/g.test(changeNewPassword) && changeNewPassword.length >= 8 && changeNewPassword.length <= 26;
            const nameValidation = changeNewPassword.toLowerCase().indexOf(tokenDetails.firstName.toLowerCase()) === -1 && changeNewPassword.toLowerCase().indexOf(tokenDetails.lastName.toLowerCase()) === -1
            if (!generalValidation || !nameValidation) {
                setSystemState({ 
                    snackbarType: 'warning',
                    snackbarMessage: 'Please check your password so that it follows the guidelines',
                    snackbarOpen: true 
                })
                return;
            }
            if (changeNewPassword !== changeConfirmNewPassword) {
                setSystemState({ 
                    snackbarType: 'warning',
                    snackbarMessage: 'New password is not equal to confirm new password',
                    snackbarOpen: true 
                })
                setConfirmIconVisible(true);
                return;
            }
            changePassword(tokenDetails.email, params.token)
        }
    }, [changeNewPassword, changeConfirmNewPassword, tokenDetails, params.token, setSystemState, changePassword])
    
    const _onKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') _onChangePasswordClick()
    }, [_onChangePasswordClick])

    return (
        <LoginContainer >
            {tokenError&& <Redirect to="/login" />}
            <Grid container>
                <ImageGridContainer item sm={6}>
                    <Typography className="login-phrase" component="div">
                        VIVA School - Your child's perfect start
                    </Typography>
                    <Typography className="login-title" variant="h3" component="div">
                        Welcome to the attractive world of Music & Dance
                    </Typography>
                    <img src={VivaLoginBg} alt="" />
                </ImageGridContainer>
                <LoginFormGridContainer item sm={6}>
                    <LoginLogoContainer>
                        <img src={VivaLogo} alt="" />
                    </LoginLogoContainer>
                        <LoginTitleBox>
                            <Typography className="login-form-title">Change Password</Typography>
                            <Typography className="login-form-subtitle">Enter New Password</Typography>
                        </LoginTitleBox>
                        <VivaInput
                            id="change-pass"
                            type="password"
                            textInputType="standard"
                            value={changeNewPassword}
                            placeholder="New Password"
                            onChange={(e) => _onChangePasswordInput('changeNewPassword', e)}
                            onKeyDown={_onKeyDown}
                        />
                        <Box position="relative">
                            <VivaInput
                                id="confirm-change-pass"
                                type="password"
                                textInputType="standard"
                                value={changeConfirmNewPassword}
                                placeholder="Confirm New Password"
                                onChange={(e) => _onChangePasswordInput('changeConfirmNewPassword', e)}
                                onKeyDown={_onKeyDown}
                            />
                            <Box position="absolute" right="-32px" top="0" bottom="0" height="100%" display="flex" alignItems="center">
                                {confirmIconVisible && <CancelIcon sx={{ color: 'red' }} />}
                            </Box>
                        </Box>
                        <ChangePasswordGuidelines 
                            pass={changeNewPassword} 
                            firstName={tokenDetails ? tokenDetails.firstName : ''} 
                            lastName={tokenDetails ? tokenDetails.lastName : ''} 
                        />
                        <LoginButtonContainer sx={{ marginTop: { sm: 0, md: 1, lg: 2 }}}>
                            <LoginButton disabled={changePassDisabled} onClick={_onChangePasswordClick} endIcon={<ArrowForwardIcon />}>
                                {auth.loading ? <CircularProgress /> : 'Submit'}
                            </LoginButton>
                        </LoginButtonContainer>
                </LoginFormGridContainer>
            </Grid>
        </LoginContainer>
    )
}

const mapStateToProps = (state: AppState) => ({
    auth: state.auth
})

const mapDispatchToProps = { setAuthState, setSystemState, changePassword }

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword)
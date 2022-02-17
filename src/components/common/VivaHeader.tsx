import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { AppState } from '../../store';
import { SystemState } from '../../store/system/types';
import { setSystemState } from '../../store/system/actions';
import {
  AppBar,
  Toolbar,
  useTheme,
  useMediaQuery,
  IconButton,
  Badge
} from '@mui/material';
import VivaDrawer from './VivaDrawer';
import { HeaderLogoContainer, HeaderNav, HeaderIconsContainer, HeaderNavIcons } from './CommonVivaComponents';
import VivaLogo from '../../assets/images/login/viva_logo.png'
import SearchLogo from '../../assets/images/icons/search-line.png'
import ShoppingLogo from '../../assets/images/icons/shopping-bag-2-line.png'
import UserLogo from '../../assets/images/icons/User_Icon.png'
import MenuIcon from '@mui/icons-material/Menu';
import { HeaderNavItem } from './VivaHeaderNavItem';

interface VivaHeaderProps {
  setSystemState: typeof setSystemState;
  system: SystemState;
} 

const Navbar = (props: VivaHeaderProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const _onSystemInput = (field: string, value: boolean | string | number) => {
      props.setSystemState({ [field]: value });
  }

  const _setOpenDrawer = () => {
      _onSystemInput('openDrawer', !props.system.openDrawer)
  }

  const location = useLocation();
  
  return (
    <AppBar position="static" style={{ display: ['/login', '/forgot-password', '/change-password'].includes(location.pathname) ? 'none' : 'block', height: 100, backgroundColor: '#fff', marginBottom: 10, boxShadow: 'none' }}>
      <Toolbar style={{ padding: 0 }}>
        <HeaderLogoContainer>
            <img src= { VivaLogo } alt=""/>
        </HeaderLogoContainer>
        {isMobile ? (
          <>
              <VivaDrawer
                openDrawer={props.system.openDrawer}
                setOpenDrawer={_setOpenDrawer}
              />
              <IconButton onClick={() => _onSystemInput('openDrawer', !props.system.openDrawer)} style={{ position: 'absolute', right: 0, padding: '37px 20px', top: 0, zIndex: 12 }}>
                  <MenuIcon />
              </IconButton>
          </>
        ) : (
          <HeaderNav>
            <HeaderNavItem label="Home" activeRoute="Home" routeName="/home" subMenu={false}/>
            <HeaderNavItem label="About" activeRoute="About" routeName="/about" subMenu={false}/>
            <HeaderNavItem label="Classes" activeRoute="Classes" routeName="/classes" subMenu={true}/>
            <HeaderNavItem label="Shop" activeRoute="Shop" routeName="/shop" subMenu={false}/>
            <HeaderNavItem label="Contact" activeRoute="Contact" routeName="/contact" subMenu={false}/>
          </HeaderNav>
        )}
        <HeaderIconsContainer>
            <HeaderNavIcons to="/search">
                <img src= { SearchLogo } alt="" style={{ width: '100%', height: 'auto'}}/>
            </HeaderNavIcons>
            <HeaderNavIcons to="/cart">
                <Badge badgeContent={2} color="error">
                    <img src= { ShoppingLogo } alt="" style={{ width: '100%', height: 'auto'}}/>
                </Badge>
            </HeaderNavIcons>
            <HeaderNavIcons to="/account">
                <img src= { UserLogo } alt="" style={{ width: '100%', height: 'auto'}}/>
            </HeaderNavIcons>
        </HeaderIconsContainer>
      </Toolbar>
    </AppBar>
  );
}

const mapStateToProps = (state: AppState) => ({
  system: state.system
})

const mapDispatchToProps = {
  setSystemState
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
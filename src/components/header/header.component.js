import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { seletCartHidden } from '../../redux/cart/cart.selectors';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './header.style'
// import './header.style.scss';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/" >
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {
                currentUser ?
                    (<OptionDiv onClick={() => auth.signOut()} > SIGN OUT </OptionDiv>)
                    :
                    (<OptionLink to='/signin' > SIGN IN </OptionLink>)
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
    </HeaderContainer>
)

// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser
// })

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: seletCartHidden
})

export default connect(mapStateToProps)(Header);
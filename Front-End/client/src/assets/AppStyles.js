import styled from 'styled-components';
import { AiOutlineShoppingCart } from '@react-icons/all-files/ai/AiOutlineShoppingCart';

const StyledBanner = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 100%;
  z-index: 1;
`

const StyledFooter = styled(StyledBanner)`
  height: 200px;
`

const StyledLogo = styled.div`
  display: flex;
  width: 180px;
  height: 180px;
  padding: 5px 5px 5px;
  color: #F4F4F9;
  z-index: 3;
`

const StyledToggler = styled.div`
  // margin-left: auto;
  padding: 50px;
`

const Logo = styled.img`
  z-index: 4;
`

const StyledShoppingCart = styled(AiOutlineShoppingCart)`
  margin-left: auto;
  padding-top: 55px;
  padding-bottom: 50px;
  padding-right: 20px;
  font-size: 2rem;
  color: #C6C5B9;
  z-index: 3;
  cursor: pointer;
`

export { StyledBanner, StyledFooter, StyledLogo, StyledToggler, Logo, StyledShoppingCart}
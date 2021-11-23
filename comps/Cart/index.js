import styled from 'styled-components';
import Subhead from '../SubheadText';

const CartCont = styled.div`
  max-height:220px;
  margin:30px 20px 0 0;
  padding:10px 0 0 10px;
  border: 3px solid #95AFBA;
  border-radius:10px;
  display:flex;
  justify-content:space-around;
`;

const ItemCont = styled.div`
  display:flex;
  margin:10px;
  padding:5px;
  align-items:center;
`;

const Item = styled.p`

`;

const CartItem  = ({
  text="Garbage",
  itemtext="ga"
}) => {
  return<ItemCont>
    <Subhead text={text}></Subhead>
    <Item>{itemtext}</Item>
  </ItemCont>
}

export default CartItem;
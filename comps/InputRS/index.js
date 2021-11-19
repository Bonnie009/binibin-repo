import styled from 'styled-components';
import Image from 'next/image';
  
const Cont = styled.form`
  display:flex;
  margin:10px;
  padding:10px;
  flex-direction:column;
  background-color:#ccc;
  min-width:200px;
`;

const ItemCont = styled.div`
  display:flex;
  flex-direction:column;
`;

const Label = styled.label`
  display: block;
  font-size: 1em;
  margin-top: 1.33em;
  margin-bottom: 1.33em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
`;

const Name = styled.input`
  min-height:35px;
`;

const Number = styled.input`
  display:flex;
  min-height:35px;
  max-width:90px;
`;

const Select = styled.select`
  display:flex;
  min-height:35px;
  max-width:90px;
`;

const TextBox = styled.textarea`
  min-height:60px;
`;

const Submit = styled.input`
  min-height:35px;
  margin-top:10px;
`;

const myLoader = ({src}) => {
  return `${src}`
}

const IRS = ({
  // item_name="Recycling (quantity unit)",
  unit="items",
  src="juicebox.png",
  alt="recyclable"
}) => {
  return <Cont>
    <ItemCont>
      <Label id="search">Recycling</Label>
      <Image loader={myLoader} src={src} width={50} height={150} alt={alt}/>
      <Name for="search" type="search" placeholder="Search"></Name>
    </ItemCont>
    <ItemCont>
      <Label id="quantity">Quantity</Label>
      <Number for="quantity" type="number" min="0" defaultValue="0"></Number>
    </ItemCont>
    <Submit type="submit" value="Add Entry"></Submit>
    {/* <Image loader={myLoader} src={src} width={50} height={200} alt={alt}/> */}
  </Cont>
}

export default IRS;
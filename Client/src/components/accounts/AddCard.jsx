import React, {useState} from 'react';
import "./addCard.scss";
import { Input as BaseInput } from '@mui/base/Input';
import { styled } from '@mui/system';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Accounts4 from './Accounts4';

const AddCard = () => {

    const [cancel, setCancel] = useState(true);

    const handleClick = () => {
        setCancel(false);
    }

    const blue = {
        100: '#DAECFF',
        200: '#b6daff',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        900: '#003A75',
      };
      
      const grey = {
        50: '#F3F6F9',
        100: '#E5EAF2',
        200: '#DAE2ED',
        300: '#C7D0DD',
        400: '#B0B8C4',
        500: '#9DA8B7',
        600: '#6B7A90',
        700: '#434D5B',
        800: '#303740',
        900: '#1C2025',
      };
      
      const InputElement = styled('input')(
        ({ theme }) => `
        width: 100%;
        margin-top:10px;
        font-family: IBM Plex Sans, sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        border-radius: 8px;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        box-shadow: 0px 2px 4px ${
          theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
        };
      
        &:hover {
          border-color: ${blue[400]};
        }
      
        &:focus {
          border-color: ${blue[400]};
          box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
        }
      
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `,
    );
    
    const Input = React.forwardRef(function CustomInput(props, ref) {
        return <BaseInput slots={{ input: InputElement }} {...props} ref={ref} />;
      });
  return (
      <>
        {
          cancel ?
            <>
        <div className="addCardMainContainer">
       <div className="addCardText">
           <div className="addCardBoldText">Payment details</div>
           <div className="addCardSmallText">Securely add or remove payment methods to make it easier when you book.</div>
       </div> 
       </div>
       <hr style={{ color: "gray", width: "99%", marginLeft: "18px" }} />
          
    <div className="addCardSection">
      <div className="addCardSection1">
        <div className="section1Text">Payment cards</div>    
      </div>
      <div className="addCardSection2">
        <div className="section2Images">
           <div className="section2Image1"> <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/amex.svg" alt="" /> </div>   
           <div className="section2Image2"> <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/discover.svg" alt="" /> </div>   
           <div className="section2Image3"> <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/mc.svg" alt="" /> </div>   
           <div className="section2Image4"> <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/jcb.svg" alt="" /> </div>   
           <div className="section2Image5"> <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/cartebancaire.svg" alt="" /> </div>   
           <div className="section2Image6"> <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/visa.svg" alt="" /> </div>   
           <div className="section2Image7"> <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/unionpay.svg" alt="" /> </div>   
           <div className="section2Image8"> <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/diners.svg" alt="" /> </div>   
        </div>    
        <div className="section2Input">
           <div className="cardholdersName">
            <div className="section2NameText">Cardholder's Name *</div>
            <Input aria-label="Demo input" required />
           </div> 
           <div className="cardNumber">
            <div className="section2NameText">Card Number *</div>
            <Input aria-label="Demo input" required />
           </div>           
            <div className="section2NameText">Expiry Date *</div>
            <div className="expiryDate">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker label={'"month" and "year"'} views={['month', 'year']} />
                </LocalizationProvider>
            </div>
        </div>
      </div>
      <div className="addCardSection3">
        <div className="section3Cancel" onClick={handleClick}>Cancel</div>    
        <div className="section3Save">Save</div>
       </div>
      </div>
      </>
        :
        <div style={{width:"1350px"}}>
            <Accounts4 />
        </div>
    }
    </>
  )
}

export default AddCard;

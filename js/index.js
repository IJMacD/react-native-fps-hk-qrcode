import React,{Component} from "react";
import ReactDOM from "react-dom";
var QRCode = require('qrcode-react');
const emvEncode = require('./emv-code') 
const crc16 = require('./crc-16-ccitt')
require('./pad')

class FasterPaymentSystemQRCode extends Component {

  constructor(props){
    super(props)
  }

  

  render(){
    let qrcode = <div></div>

    const { bank_code, fps_id, mobile, email, mcc, currency, amount, reference } = this.props;

    let account = null

    if(fps_id) { account = "02" }
    if(mobile) { account = "03" }
    if(email)  { account = "04" }

    if( account ){
      const msg = emvEncode({
        "account": account,
        "bank_code": bank_code,
        "fps_id": fps_id,
        "mobile": mobile,
        "email": email,
        "mcc": mcc,
        "currency": currency,
        "amount": amount,
        "reference": reference
      });

      const crc = crc16(msg).toString(16).pad(4).toUpperCase();
      qrcode = <QRCode value={msg+crc}/>

    }
    
    return (
      qrcode
    );
  }

  
};

export default FasterPaymentSystemQRCode;
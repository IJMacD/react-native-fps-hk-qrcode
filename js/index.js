import React,{Component} from "react";
var QRCode = require('qrcode-react');
const emvEncode = require('./emv-code') 
const crc16 = require('./crc-16-ccitt')
const pad = require('./pad')

class FasterPaymentSystemQRCode extends Component {
  render(){
    let qrcode = <div>Invalid or missing input data.</div>
    const { bank_code, fps_id, mobile, email, mcc="0000", currency="344", amount, reference="" } = this.props;
    let account = null

    if(fps_id) { account = "02" }
    if(mobile&&bank_code) { account = "03" }
    if(email&&bank_code)  { account = "04" }

    if( account ){
      const msg = emvEncode({
        "account": account,
        "bank_code": bank_code || "",
        "fps_id": fps_id,
        "mobile": mobile,
        "email": email,
        "mcc": mcc,
        "currency": currency,
        "amount": amount,
        "reference": reference
      });

      if( msg ){
        const crc = pad(crc16(msg).toString(16),4).toUpperCase();
        qrcode = <QRCode value={msg+crc}/>
      }
    }
    
    return (qrcode);
  }
};

export default FasterPaymentSystemQRCode;
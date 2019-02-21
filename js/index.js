import React from "react";
const QRCode = require('./qrcode.min.js')
const emvCode = require('./emv-code') 
const crc16 = require('./crc-16-ccitt')
require('./pad')

const FasterPaymentSystemQRCode = props => {
  let qrcode = <div></div>

  const { bank_code, fps_id, mobile, email, mcc, currency, amount, message, reference } = props;

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

    new QRCode(qrcode, msg + crc)
  }

  return (
    <div>
      {qrcode}
    </div>
  );
};

export default FasterPaymentSystemQRCode;
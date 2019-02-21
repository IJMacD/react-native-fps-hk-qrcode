# Hong Kong Faster Payment System (FPS) QR Code React Component

### Installing

```
npm install react-fps-hk-qrcode
```

### Usage

Use in React App:

```
<FasterPaymentSystemQRCode account="04" bank_code="004" email="email@example.com" mcc="0000" currency="344" amount="2000" reference=""/>
```

The following properties can be set (all are strings):

* bank_code: The Hong Kong bank code for the bank hosting the FPS recipient account.
* fps_id: The recipient FPS id
* mobile: The recipient mobile number if used as FPS id
* email: The recipient email if used as FPS id
* mcc: Merchant Category Code (default: 0000)
* currency: The FPS currency code (default HKD: 344)
* amount: Transaction amount
* reference: A payment reference code (not required)

## Versioning

* 1.0 - First Release

## Authors

Forked from [fps-hk-qrcode](https://github.com/nessgor/fps-hk-qrcode) by [nessgor](https://github.com/nessgor)
React code by [Frey](invite-frey)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


# Hong Kong Faster Payment System (FPS) QR Code React Native Component

### Installing

```
npx install-peerdeps react-native-fps-hk-qrcode
```

### Usage

Use in React Native App:

```
import FasterPaymentSystemQRCode from "react-native-fps-hk-qrcode"
...

<FasterPaymentSystemQRCode account="04" bank_code="004" email="email@example.com" mcc="0000" currency="344" amount="2000" reference=""/>
```

The following properties can be set (all are strings):

* bank_code: The Hong Kong bank code for the bank hosting the FPS recipient account.
* fps_id: The recipient FPS id
* mobile: The recipient mobile number if used as FPS id
* email: The recipient email if used as FPS id
* mcc: Merchant Category Code as defined by ISO 18245 (default: 0000)
* currency: The FPS currency code as defined by ISO 4217 (default HKD: 344)
* amount: Transaction amount
* reference: A payment reference code (not required)

## Versioning

* 1.0 - First Release

## Authors

* Forked from [fps-hk-qrcode](https://github.com/invite-frey/fps-hk-qrcode) by [invite-frey](https://github.com/invite-frey)
* Forked from [fps-hk-qrcode](https://github.com/nessgor/fps-hk-qrcode) by [nessgor](https://github.com/nessgor)
* React code by [Frey](invite-frey)
* React Native code by [IJMacD](ijmacd)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


import logo from "./logo.svg";
import "./App.css";
import Text from "./Components/Text";
import Select from "./Components/Select";
import QRCode from "qrcode";
let typeNumber = ["Auto Detect"];
for (let i = 1; i <= 40; i++) {
  typeNumber.push(i);
}
const eCL = ["L", "M", "Q", "H"];
const mode = ["Numeric", "Alphanumeric", "Byte", "Kanji"];
const multibyte = ["None", "SJIS", "UTF-8"];
function App() {
  QRCode.toDataURL("1234", {
    errorCorrectionLevel: "M",
    version: 2,
    type: "image/png",
    mode: "Numeric",
  })
    .then((url) => {
      console.log(url);
      var img = document.getElementById("imgQRCode");
      img.src = url;
    })
    .catch((err) => {
      console.error(err);
    });
  return (
    <div className="container">
      <h1>QR CODE GENERATOR</h1>
      <p>QR Code Generator implementation in JavaScript, Java and more.</p>
      <div className="selects">
        <Select label="Type Number" list={typeNumber} />
        <Select label="Error Correction Level" list={eCL} />
        {/* <Select label="Mode" list={mode} />
        <Select label="Multibyte" list={multibyte} /> */}
      </div>
      <Text />
      <img id="imgQRCode" width="270" height="270" />
    </div>
  );
}

export default App;

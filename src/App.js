import './App.css';
import { QRCodeSVG } from 'qrcode.react';
import ClipLoader from 'react-spinners/ClipLoader';
import qrcodeimage from './assets/images/qrcodeimage.svg';
import { useState } from 'react';

function App() {
  const [qrInput, setQrInput] = useState();
  const [qrSize, setQrSize] = useState();
  const [isValid, setIsValid] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();
    setSeconds(1);
    setIsValid(true);
    setTimeout(secondTimer, 300);
    setQrInput(e.target.elements[0].value);
    setQrSize(e.target.elements[1].value);
  };

  const secondTimer = () => {
    setSeconds(0);
  };

  return (
    <div>
      <header className="bg-red-500 p-6 mb-10">
        <div className="max-w-5xl m-auto">
          <div className="text-xl font-bold text-white">QR Code Generator</div>
        </div>
      </header>

      <main>
        <div className="flex flex-col-reverse align-center justify-center p-10 m-auto md:max-w-4xl md:flex-row">
          <div className="w-full md:w-2/3 mr-24">
            <h1 className="text-3xl font-bold mb-5 md:text-4xl">
              QR Code Generator
            </h1>
            <p>
              Enter your URL below to generate a QR Code and download the image.
            </p>
            <form id="generate-form" className="mt-4" onSubmit={submitHandler}>
              <input
                id="url"
                type="text"
                placeholder="Enter a URL"
                className="w-full border-2 border-gray-200 rounded p-3 text-gray-dark mr-2 focus:outline-none mb-5 rounded-xl"
              />
              <select
                defaultValue="300"
                id="size"
                className="w-full border-2 border-gray-200 rounded p-3 text-gray-dark mr-2 focus:outline-none rounded-xl"
              >
                <option value="100">100x100</option>
                <option value="200">200x200</option>
                <option value="300">300x300</option>
                <option value="400">400x400</option>
                <option value="500">500x500</option>
                <option value="600">600x600</option>
                <option value="700">700x700</option>
              </select>

              <button
                type="submit"
                className="bg-gray-600 rounded-xl w-full text-white py-3 px-4 mt-5 hover:bg-black"
              >
                Generate QR Code
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/3 self-center">
            <img
              src={qrcodeimage}
              alt="qrcode"
              className="w-1/2 m-auto mb-10 md:w-full"
            />
          </div>
        </div>
        <div className="max-w-5xl m-auto flex flex-col text-center align-center justify-center mt-10 mb-10">
          {seconds === 1 && (
            <ClipLoader color="#000000" loading={true} size={100} />
          )}
          <div className="m-auto" id="qrcode">
            {isValid && seconds === 0 && (
              <QRCodeSVG value={qrInput} size={qrSize} renderAs="svg" />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

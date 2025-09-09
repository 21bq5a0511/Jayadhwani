import React from 'react';
import { QRCodeCanvas } from 'qrcode.react'; // Use named import
import './Donate.css';

function Donate() {
  // Replace with your actual PhonePe UPI ID
  const phonePeLink = 'upi://pay?pa=your-vpa@upi&pn=JayadhwaniMinistries&am=&cu=INR';

  return (
    <div className="donate-page">
      <h1>Donate to Jayadhwani Ministries</h1>
      <p>Scan the QR code below to donate using PhonePe:</p>
      <div className="qr-code">
        <QRCodeCanvas value={phonePeLink} size={256} />
      </div>
      <p>Thank you for your generous contribution!</p>
    </div>
  );
}

export default Donate;

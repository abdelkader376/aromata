import React from "react";
import '../whatsapp/whatsapp.css'
const WhatsAppButton = () => {
  const phoneNumber = "+971508151578"; // Replace with the phone number you want to send the message to
  const message = "How can I help you"; // Customize the message

  // Encode the message to make sure it is URL-friendly
  const encodedMessage = encodeURIComponent(message);

  // Construct the WhatsApp URL
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div >
      <a className="mm" href={whatsappURL} target="_blank" rel="noopener noreferrer">
      +971508151578
      </a>
    </div>
  );
};

export default WhatsAppButton;
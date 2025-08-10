import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>

      <div className="mb-6">
        <p>
          You can reach us at:
          <br />
          <strong>Address:</strong> ECB Chattar dhaka, Bangladesh
          <br />
          <strong>Phone:</strong> +880 1987356091
          <br />
          <strong>Email:</strong> sabrinaboby786@gmail.com
        </p>
      </div>

      <div className="w-full h-96 rounded overflow-hidden shadow">
        <iframe
          title="Google Map - ECB Chattar Dhaka"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.7756292799454!2d90.38453501543964!3d23.810727684582177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c69c7a4c8d23%3A0xa31f4f520cceae2!2sECB%20Chattar%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1691604893000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;

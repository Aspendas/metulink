'use client'
import React from 'react';
import { AiOutlineGoogle, AiOutlineWhatsApp } from 'react-icons/ai';

const IconHandler = ({ icon }) => {
  switch (icon) {
    case 'google':
      return <AiOutlineGoogle size="1.8em" />;
    case 'whatsapp':
      return <AiOutlineWhatsApp size="1.8em" />;
    default:
      return <div></div>;
  }
};

export default IconHandler;
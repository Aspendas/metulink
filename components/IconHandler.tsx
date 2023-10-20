"use client";
import React from "react";
import {
  AiOutlineGoogle,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

const IconHandler = ({ icon }) => {
  switch (icon) {
    case "google":
      return <AiOutlineGoogle size="1.8em" />;
    case "whatsapp":
      return <AiOutlineWhatsApp size="1.8em" />;
    case "instagram":
      return <AiOutlineInstagram size="1.8em" />;
    case "discord":
      return <FaDiscord size="1.8em" />;
    case "youtube":
      return <AiFillYoutube size="1.8em" />;
    case "linkedin":
      return <AiFillLinkedin size="1.8em" />;
    default:
      return <div></div>;
  }
};

export default IconHandler;

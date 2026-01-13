"use client";
import React, { createContext, useContext } from "react";
export const EmailContext = createContext();
const EmailProvider = ({ children }) => {
  const sendEmail = async (formData) => {
    const email_api = process.env.NEXT_PUBLIC_EMAIL_API;
    try {
      const response = await fetch(email_api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        alert("email has been sent successfully");
        return true;
      }
    } catch (error) {
      console.error("data is not sent", error);
    }
  };
  return <EmailContext.Provider value={{sendEmail}}>{children}</EmailContext.Provider>;
};
export default EmailProvider;
export const useEmail = () => useContext(EmailContext);

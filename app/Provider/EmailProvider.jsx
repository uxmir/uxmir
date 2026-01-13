"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
export const EmailContext = createContext();
const EmailProvider = ({ children }) => {
  const [successToast, setSuccessToast] = useState(false);
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
        setSuccessToast(true);
        return true;
      }
    } catch (error) {
      console.error("data is not sent", error);
    }
  };
  useEffect(() => {
    const toastTimeout = setTimeout(() => {
      if (successToast === true) {
        setSuccessToast(false);
      }
    }, 2000);
    return () => clearTimeout(toastTimeout);
  }, [successToast]);
  return (
    <EmailContext.Provider value={{ sendEmail, successToast }}>
      {children}
    </EmailContext.Provider>
  );
};
export default EmailProvider;
export const useEmail = () => useContext(EmailContext);

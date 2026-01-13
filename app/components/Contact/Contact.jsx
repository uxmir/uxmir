"use client";
import React, { useLayoutEffect, useRef } from "react";
import Container from "../ContainerComponent/Container";
import Input from "../Input/Input";
import gsap, { ScrollTrigger } from "../../../lib/gsap-config";
import SplitType from "split-type";
import Button from "../Button/Button";
import { useEmail } from "@/app/Provider/EmailProvider";
import { IconCheck } from "@tabler/icons-react";
const Contact = () => {
  const { successToast } = useEmail();
  const contactHeadingContainer = useRef(null);
  const contactText1 = useRef(null);
  const contactText2 = useRef(null);
  const contactText3 = useRef(null);
  useLayoutEffect(() => {
    const ContactAnimation = gsap.context(() => {
      const text1 = new SplitType(contactText1.current, { types: "chars" });
      const text2 = new SplitType(contactText2.current, { types: "chars" });
      const text3 = new SplitType(contactText3.current, { types: "chars" });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contactHeadingContainer.current,
          scroller: "body",
          start: "top center",
          end: "+=1500",
          pin:true,
          scrub:1
        },
      });
      tl.from(text1.chars, {
        y: -120,
        duration: 1.5,
        stagger: {
          amount: 0.8,
          from: "center",
        },
      })
        .from(text2.chars, {
          y: -120,
          duration: 1.5,
          stagger: {
            amount: 0.8,
            from: "start",
          },
        })
        .from(text3.chars, {
          y: 120,
          duration: 1.5,
          stagger: {
            amount: 0.8,
            from: "center",
          },
        });
    });
    return () => {
      ContactAnimation.revert();
      text1.revert();
      text2.revert();
      text3.revert();
    };
  }, []);
  return (
    <div className="py-20 lg:py-40">
      <Container>
        <div
          ref={contactHeadingContainer}
          className="flex flex-col  justify-center items-center  gap-y-10"
        >
          <ContactHeading textId={contactText1} textValue={"creative idea's"} />
          <span
            ref={contactText2}
            className="text-lg md:text-xl uppercase font-medium tracking-widest md:tracking-[20px] overflow-hidden"
          >
            brought to life through
          </span>
          <ContactHeading textId={contactText3} textValue={"clean code"} />
        </div>
        <EmailForm />
        <EmailToast
          toastText={"Email has been Sent Successfully"}
          isSuccess={successToast}
        />
      </Container>
    </div>
  );
};
export default Contact;

const ContactHeading = ({ textId, textValue }) => {
  return (
    <>
      <div
        ref={textId}
        className={`text-center overflow-hidden text-3xl md:text-4xl  xl:text-6xl font-semibold uppercase text-black`}
      >
        <span>{textValue}</span>
      </div>
    </>
  );
};
const EmailForm = () => {
  const { sendEmail } = useEmail();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone_number: e.target.phone_number.value,
      message: e.target.message.value,
    };
    const success = await sendEmail(formData);
    if (success) {
      e.target.reset();
    }
  };
  return (
    <>
      <div className="mt-16  max-w-[700px] mx-auto">
        <form className="w-full space-y-12" onSubmit={handleFormSubmit}>
          <Input
            inputType={"text"}
            inputName={"name"}
            placeHolder={"Your Name"}
          />
          <Input
            inputType={"email"}
            inputName={"email"}
            placeHolder={"Your Email"}
          />
          <Input
            inputType={"text"}
            inputName={"phone_number"}
            placeHolder={"Your PhoneNumber"}
          />
          <textarea
            name="message"
            placeholder="Write Here *"
            required
            className="w-full py-2 text-gray-800 placeholder:text-gray-800 text-lg md:text-xl border-b outline-none focus:outline-none"
          ></textarea>
          <div className="flex justify-end">
            <button type="submit" className="">
              <Button btnText={"submit"} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
const EmailToast = ({ toastText, isSuccess }) => {
  return (
    <>
      <div
        className={`w-[310px] flex gap-x-3 items-center transition-all duration-500 px-4 py-4 rounded-lg bg-white shadow-lg fixed top-4 right-4 ${
          isSuccess === true ? "translate-x-0" : "translate-x-[120%]"
        }`}
      >
        <div className="w-7 h-7 rounded-full bg-black flex justify-center items-center">
          <IconCheck size={16} className="text-white" />
        </div>
        <span>{toastText}</span>
      </div>
    </>
  );
};

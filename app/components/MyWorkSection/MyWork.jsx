"use client";
import React, { useLayoutEffect, useRef } from "react";
import Container from "../ContainerComponent/Container";
import Heading from "../HeadingComponent/Heading";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import gsap, { ScrollTrigger } from "../../../lib/gsap-config";
const MyWork = () => {
const workCard = [
  {
    id: 1,
    img: "/project_1.png",
    title: "DoctorsHero",
    sub_title: "A comprehensive SaaS Hospital Management System featuring RX, Patient, and Pharmacy solutions.",
    link: "https://doctorshero.com/",
  },
  {
    id: 2,
    img: "/project_2.png",
    title: "Bicc Finland",
    sub_title: "Islamic Center platform managing Quran classes, community donations, and religious services.",
    link: "https://biccfinland.org/",
  },
  {
    id: 3,
    img: "/project_3.png",
    title: "Cloth e-commerce",
    sub_title: "Modern e-commerce Front-end project (Academic Project) featuring a seamless Add-to-Cart and checkout flow.",
    link: "https://shop-co1.netlify.app/",
  },
  {
    id: 4,
    img: "/project_4.png",
    title: "Dahuk digital",
    sub_title: "Official software agency portal (Under Development) providing specialized web & app solutions.",
    link: "https://dahuk.bscrm.net/",
  },
  {
    id: 5,
    img: "/project_5.png",
    title: "Telirism Limited",
    sub_title: "Travel Agency Web Solution (Under Development) featuring B2B/B2C flight booking designs.",
    link: "#",
  },
  {
    id: 6,
    img: "/project_6.png",
    title: "Telirism Limited",
    sub_title: "Mobile App Interface (In Progress) for travel management and flight ticketing solutions.",
    link: "#",
  },
];
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".image-card");

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            y: "100%",
          },
          {
            y: "0%",
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className=" my-20 lg:my-40 xl:my-60">
      <Container>
        <Heading headingValue={"my works"} color="text-black" />
        {/*===project section=== */}
        <section className="mt-6 lg:mt-25">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
            {workCard?.map((project, index) => (
              <Link key={project.id} href={project.link}>
                <div
                  className={`group mt-12 overflow-hidden ${
                    index % 2 === 0 ? "lg:-translate-y-15" : "translate-y-0"
                  }`}
                >
                  <div className="relative w-full max-[350px]:h-[180px] h-[230px]  overflow-hidden  md:h-[438px] lg:h-[300px] xl:h-[438px] 2xl:h-[538px]">
                    <div className="w-full h-full group-hover:rounded-br-[100px] group-hover:rounded-tl-[100px] bg-gray-300 transition-all duration-500 "></div>
                    <div className=" image-card absolute inset-0  w-full h-full group-hover:rounded-br-[100px] group-hover:rounded-tl-[100px] -translate-y-full">
                      <img
                        src={project.img}
                        alt="image"
                        className="w-full h-full object-cover group-hover:rounded-br-[100px] group-hover:rounded-tl-[100px] transition-all duration-500"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl capitalize font-medium mt-5">
                    {project.title}
                  </h3>
                  <div className="flex items-center  mt-1">
                    <IconArrowRight className="group-hover:-translate-x-0  -translate-x-10 transition-all duration-500" />
                    <p className="text-gray-500 group-hover:ml-5 ml-[-20px] w-full md:w-[500px] transition-all duration-500">
                      {project.sub_title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default MyWork;

import React from "react";
import GithubIcon from "../../../portfolio/public/images/github-icon.png";
import LinkedinIcon from "../../../portfolio/public/images/linkedin-icon.png";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#adb7be] mb-4 max-w-md">
          I'm currently looking for new opportunities, and my inbox is always
          open. Whether you have a question or just want to say hello, I'll try
          my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={"https://github.com/Alvin-1909"}>
            <Image className="w-8 h-8 mr-2" src={GithubIcon} alt="github" />
          </Link>
          <Link href={"https://www.linkedin.com/in/alvin-x-a2ab89341/"}>
            <Image className="w-8 h-8" src={LinkedinIcon} alt="linkedin" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              className="text-white mb-2 block text-sm font-medium"
              htmlFor="email"
              typeof="email block text-sm font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="example@mail.com"
              className="rounded-lg py-2 px-4 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm block w-full p-2.5"
            />
          </div>
          <div>
            <label
              className="text-white mb-2 block text-sm font-medium"
              htmlFor="subject"
              typeof="email block text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              placeholder="Just saying hi!"
              className="rounded-lg py-2 px-4 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white mb-2 block text-sm font-medium"
            />
            Message
            <textarea
              name="message"
              id="message"
              className="rounded-lg py-2 px-4 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hn935qo",
        "test_template",
        form.current,
        "a1Cb5zhlFFr3mZx40"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="max-w-[1640px] mx-auto flex justify-center py-4">
      <div>
        <div className="text-center pb-6">
          <h1 className="font-medium text-2xl">Thank you for contacting me!</h1>
          <h1 className="font-medium text-2xl">
            Please submit any quesitons or projects below
          </h1>
          <h1 className="font-medium text-2xl">
            and I look forward to working with you!
          </h1>
        </div>
        <div className="flex justify-center">
          <form ref={form} onSubmit={sendEmail}>
            <label className="block mb-2">
              <span className="font-bold text-center">Your Name</span>
              <input
                type="text"
                className="mt-1 w-full rounded-md bg-gray-100 border-transparent"
                placeholder="Please enter your name"
                name="fullName"
              />
            </label>
            <label>
              <span className="font-bold text-center">Your Email</span>
              <input
                type="email"
                className="mt-1 w-full rounded-md bg-gray-100 border-transparent"
                placeholder="please enter your email"
              />
            </label>
            <label>
              <span className="font-bold text-center">
                What do you want to say?
              </span>
              <textarea
                className="mt-1 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                rows="3"
                placeholder="What do you want to say?"
                name="message"
              ></textarea>
            </label>
            <div className="flex justify-center">
              <button
                className="flex p-2 rounded-full border-2 border-red-600 text-red-600 cursor-pointer hover:bg-purple-600 hover:text-white hover:border-purple-600"
                type="submit"
                value="send"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Email;

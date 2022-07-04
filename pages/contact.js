import React, { useState } from 'react';
import tools from '../public/calls.jpg';
import Image from 'next/image';

export default function Contact() {
  const [htmlFormData, sethtmlFormData] = useState({
    fName: '',
    lName: '',
    email: '',
    tName: '',
    comments: '',
    student: '',
    recital: '',
  });

  function handleChange(event) {
    sethtmlFormData((prevhtmlFormData) => {
      return {
        ...prevhtmlFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div className=" bg-gray">
      <div className="grid justify-center items-center md:grid-cols-2 gap-2">
        <div className="p-6 space-y-4 text-secondary text-xl md:px-20">
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h- w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <p>Makurdi, Nigeria</p>
          </div>

          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h- w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
              />
            </svg>
            <p>+234 806 961 4994</p>
          </div>

          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h- w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <p>energmathewobule@gmail.com</p>
          </div>

          <p className="italic px-8">
            NOTE: We can travel all over the globe to give u the best of our
            service
          </p>
        </div>

        <div className="p-6 rounded-md">
          <Image
            src={tools}
            alt="tools"
            layout="responsive"
            className="rounded"
          />
        </div>
      </div>

      <htmlForm className="rounded-lg shadow-xl flex flex-col p-10">
        <h1 className="text-2xl font-bold text-secondary">Send a message</h1>

        <label
          htmlFor="fullname"
          className="text-secondary font-light mt-8 text-secondary"
        >
          Full name<span className="text-main text-secondary">*</span>
        </label>
        <input
          type="text"
          name="fullname"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-secondary font-light text-secondary"
        />

        <label
          htmlFor="email"
          className="text-secondary font-light mt-4 text-secondary"
        >
          E-mail<span className="text-main">*</span>
        </label>
        <input
          type="email"
          name="email"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-secondary font-light text-secondary"
        />

        <label
          htmlFor="subject"
          className="text-secondary font-light mt-4 text-secondary"
        >
          Subject<span className="text-main">*</span>
        </label>
        <input
          type="text"
          name="subject"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-secondary font-light text-secondary"
        />

        <label
          htmlFor="message"
          className="text-secondary font-light mt-4 text-secondary"
        >
          Message<span className="text-main">*</span>
        </label>
        <textarea
          name="message"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-secondary font-light text-secondary"
        ></textarea>
        <div className="flex flex-row items-center justify-start">
          <button className="px-10 mt-8 py-2 bg-main text-white font-light rounded-md text-xl uppercase flex flex-row items-center">
            Send
          </button>
        </div>
      </htmlForm>
    </div>
  );
}

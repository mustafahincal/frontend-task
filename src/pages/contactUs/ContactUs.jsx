import React from "react";

const ContactUs = () => {
  return (
    <div className="py-[130px]  bg-content-bg" id="contact">
      <div className="w-3/4 m-auto">
        <div className="flex justify-between gap-16">
          <div className="w-1/2">
            <div className="grid grid-cols-4 w-full gap-y-10 gap-x-10  -top-32">
              <div className="flex flex-col gap-10 col-span-2 mt-24">
                <img src="./assets/contact-item2.svg" alt="" />
                <img src="./assets/contact-item4.svg" alt="" />
              </div>
              <div className="flex flex-col gap-10 col-span-2">
                <img
                  src="./assets/contact-item1.svg"
                  className="w-[220px] object-cover"
                  alt=""
                />
                <img
                  src="./assets/contact-item3.svg"
                  alt=""
                  className="w-[220px] object-cover"
                />
              </div>
            </div>
          </div>
          <form className="flex flex-col w-1/2 gap-8">
            <div className="font-bold text-[64px] text-customer-comments-bg">
              Contact us
            </div>
            <div className="text-[20px] text-content-small-text">
              Our team would love to hear from you!
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex gap-10">
                <input
                  type="text"
                  name="firstName"
                  id=""
                  placeholder="First name"
                  className="contact-input w-1/2"
                />
                <input
                  type="text"
                  name="lastName"
                  id=""
                  placeholder="Last name"
                  className="contact-input w-1/2"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="email"
                  placeholder="Email address"
                  className="contact-input w-full"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  id=""
                  cols="30"
                  rows="10"
                  className="contact-input w-full"
                ></textarea>
              </div>
              <button className="bg-nav-button text-white p-[21px] text-[16px]">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

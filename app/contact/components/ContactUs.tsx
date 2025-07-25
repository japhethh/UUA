import React from "react";

const ContactUs = () => {
  return (
    <section className="py-10 max-md:py-6 min-h-[60vh] flex flex-col items-center justify-center">
      <div className="w-full max-w-xl mx-auto px-4 max-md:px-2">
        <h2 className="text-2xl max-md:text-lg md:text-3xl font-bold text-center text-[#222] mb-4 max-md:mb-2">Get in Touch With Us</h2>
        <p className="text-zinc-500 text-center text-base max-md:text-sm md:text-lg mb-8 max-md:mb-4 max-w-2xl max-md:max-w-full mx-auto">
          We’re here to help — whether you have questions, partnership inquiries, or want to learn more about UAA 2026.
        </p>
        <form className="flex flex-col gap-6 max-md:gap-4">
          <div>
            <label className="block text-sm max-md:text-xs font-medium text-[#222] mb-2 max-md:mb-1">Full name</label>
            <input
              type="text"
              placeholder="enter your fullname"
              className="w-full rounded-lg border border-zinc-200 px-4 max-md:px-2 py-3 max-md:py-2 text-base max-md:text-sm outline-none focus:border-[#0971B3] bg-white"
            />
          </div>
          <div>
            <label className="block text-sm max-md:text-xs font-medium text-[#222] mb-2 max-md:mb-1">Email address</label>
            <input
              type="email"
              placeholder="enter your email address"
              className="w-full rounded-lg border border-zinc-200 px-4 max-md:px-2 py-3 max-md:py-2 text-base max-md:text-sm outline-none focus:border-[#0971B3] bg-white"
            />
          </div>
          <div>
            <label className="block text-sm max-md:text-xs font-medium text-[#222] mb-2 max-md:mb-1">Contact Number</label>
            <input
              type="text"
              placeholder="09123456789"
              className="w-full rounded-lg border border-zinc-200 px-4 max-md:px-2 py-3 max-md:py-2 text-base max-md:text-sm outline-none focus:border-[#0971B3] bg-white"
            />
          </div>
          <div>
            <label className="block text-sm max-md:text-xs font-medium text-[#222] mb-2 max-md:mb-1">Message Inquiry</label>
            <textarea
              rows={4}
              placeholder="Type here"
              className="w-full rounded-lg border border-zinc-200 px-4 max-md:px-2 py-3 max-md:py-2 text-base max-md:text-sm outline-none focus:border-[#0971B3] bg-white resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#D92D40] text-white rounded-full px-6 max-md:px-4 py-3 max-md:py-2 font-medium text-base max-md:text-sm shadow hover:bg-[#b71c1c] transition md:text-lg mt-2 max-md:mt-1"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
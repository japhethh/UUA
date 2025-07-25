import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white pt-10 pb-0 border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap gap-10 justify-between">
          {/* Logo and Committee Info */}
          <div className="min-w-[260px] flex flex-col gap-4">
            <img src="/logo.svg" alt="UAAC Logo" className="w-40 mb-2" />
            <h2 className="font-semibold text-black text-base mb-1">UAAC 2025 Organizing Committee</h2>
            <div className="flex flex-col gap-2 text-zinc-700 text-sm">
              <div className="flex items-center gap-2"><span className="inline-block w-6 h-6 bg-zinc-200 rounded-full flex items-center justify-center"><img src="/root/location-icon.svg" alt="" /></span> Taiwan (Event Location)</div>
              <div className="flex items-center gap-2"><span className="inline-block w-6 h-6 bg-zinc-200 rounded-full flex items-center justify-center"><img src="/root/message-icon.svg" alt="" /></span> info@uaac2025.org</div>
              <div className="flex items-center gap-2"><span className="inline-block w-6 h-6 bg-zinc-200 rounded-full flex items-center justify-center"><img src="/root/call-icon.svg" alt="" /></span> +886 1234 5678</div>
            </div>
          </div>
          {/* Links Columns */}
          <div className="grid grid-cols-4 gap-10 flex-1">
            <div>
              <h3 className="font-semibold mb-2">Quick links</h3>
              <ul className="space-y-3 text-zinc-700 text-sm">
                <li>Home</li>
                <li>About</li>
                <li>Packages</li>
                <li>Faculty</li>
                <li>Travel and Tours</li>
                <li>Tourism</li>
                <li>Sponsorship</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Helpful links</h3>
              <ul className="space-y-3 text-zinc-700 text-sm">
                <li>FAQs</li>
                <li>Download Brochure</li>
                <li>Submit Abstract</li>
                <li>Register Now</li>
                <li>CME Accreditation</li>
                <li>Speaker Guidelines</li>
                <li>Exhibitor Information</li>
                <li>Volunteer / Join as Staff</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Media & Updates</h3>
              <ul className="space-y-3 text-zinc-700 text-sm">
                <li>News & Updates</li>
                <li>Press & Media Inquiries</li>
                <li>Media Kit</li>
                <li>Certificate of Attendance</li>
                <li>UAAC 2026 (Philippines)</li>
                <li>Venue Details</li>
                <li>Keynote Speakers</li>
                <li>Scientific Committee</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Legal & Info</h3>
              <ul className="space-y-3 text-zinc-700 text-sm">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Code of Conduct</li>
                <li>Accessibility Info</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter Subscription */}
      <div className="bg-zinc-900/95 py-8 mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <h4 className="text-white font-semibold mb-2">Newsletter Subscription</h4>
          <p className="text-zinc-300 text-sm mb-4">Subscribe to UAA newsletter and stay informed on program updates, inspiring issues, and the latest news.</p>
          <form className="flex gap-2 max-w-lg">
            <input type="email" placeholder="Your email address" className="flex-1 rounded-full px-4 py-2 text-sm border border-zinc-300 bg-white text-black" />
            <button type="submit" className="rounded-full px-6 py-2 bg-[#D92D40] text-white text-sm font-medium">Subscribe</button>
          </form>
        </div>
      </div>
      {/* Social Icons & Copyright */}
      <div className="bg-[#0971B3] py-3">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <span className="text-white text-xs">© 2025 Urological Association of Asia Congress. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="text-white"><i className="fab fa-facebook-f" /></a>
            <a href="#" className="text-white"><i className="fab fa-instagram" /></a>
            <a href="#" className="text-white"><i className="fab fa-youtube" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
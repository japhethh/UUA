import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface PersonalDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedPackage: string | null;
}

const PersonalDialog: React.FC<PersonalDialogProps> = ({
  open,
  setOpen,
  selectedPackage,
}) => {
  const [step, setStep] = React.useState(1);
  const [fields, setFields] = React.useState({
    name: "",
    email: "",
    phone: "",
    birthday: "",
    location: "",
    paymentMethod: "card",
    paymentRef: "",
    paymentImage: null as File | null,
    paymentImageUrl: "",
  });
  const [errors, setErrors] = React.useState<any>({});

  // State for QR modal
  const [qrDialog, setQrDialog] = React.useState<{
    open: boolean;
    src: string;
    alt: string;
  }>({ open: false, src: "", alt: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handlePaymentMethod = (method: string) => {
    setFields((prev) => ({ ...prev, paymentMethod: method }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setFields((prev) => ({
        ...prev,
        paymentImage: file,
        paymentImageUrl: URL.createObjectURL(file),
      }));
    }
  };

  const validateStep1 = () => {
    const newErrors: any = {};
    if (!fields.name.trim()) newErrors.name = "Full Name is required";
    if (!fields.email.trim()) newErrors.email = "Email Address is required";
    if (!fields.phone.trim()) newErrors.phone = "Phone Number is required";
    if (!fields.birthday.trim()) newErrors.birthday = "Birthday is required";
    if (!fields.location.trim()) newErrors.location = "Location is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Thank you popup state
  const [thankYouOpen, setThankYouOpen] = React.useState(false);

  // Step 2 validation
  const validateStep2 = () => {
    const newErrors: any = {};
    if (!fields.paymentMethod)
      newErrors.paymentMethod = "Choose one payment method";
    if (!fields.paymentRef.trim())
      newErrors.paymentRef = "Reference Number is required";
    // For non-card payments, require image
    if (fields.paymentMethod !== "card" && !fields.paymentImageUrl)
      newErrors.paymentImageUrl = "Proof of payment is required";
    setErrors((prev: any) => ({ ...prev, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1) {
      if (validateStep1()) setStep(2);
    } else if (step === 2) {
      if (validateStep2()) setStep(3);
    }
  };

  React.useEffect(() => {
    if (!open) {
      setStep(1);
      setFields({ name: "", email: "", phone: "", birthday: "", location: "" });
      setErrors({});
    }
  }, [open]);

  // Static payment info for dropdown
  const paymentInfo: Record<
    string,
    { qr: string; name: string; number: string }
  > = {
    gcash: {
      qr: "/payment/gcash-qr.png",
      name: "Lara Sophia Martinez",
      number: "0935 286 8373",
    },
    gotyme: {
      qr: "/payment/gotyme-qr.png",
      name: "Lara Sophia Martinez",
      number: "0139 5453 0480",
    },
    maya: {
      qr: "/payment/maya-qr.png",
      name: "Lara Sophia Martinez",
      number: "0935 286 8373",
    },
  };

  // Map package names to prices
  const packagePrices: Record<string, string> = {
    "Explorer Package": "₱9,999",
    "Adventurer Package": "₱29,999",
    "VIP Access: Premium Experience": "₱59,999",
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md w-full p-0 rounded-2xl overflow-hidden border border-gray-200 max-md:max-w-full max-md:rounded-none max-md:h-full max-md:border-0 max-md:p-0">
        {/* Header */}
        <div className="px-6 pt-6 pb-2 border-b border-gray-100 max-md:px-3 max-md:pt-4 max-md:pb-2">
          <div className="flex items-center gap-2 mb-2 max-md:gap-1">
            <button
              className="p-2 rounded-full hover:bg-gray-100 max-md:p-1"
              onClick={() => {
                if (step > 1) {
                  setStep(step - 1);
                } else {
                  setOpen(false);
                }
              }}
              aria-label={step > 1 ? "Go back" : "Close"}
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="#CC0101"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex-1 text-center max-md:text-left">
              <div className="text-xs text-[#CC0101] font-medium max-md:text-xs">
                Event Registration
              </div>
              <div className="flex items-center justify-center max-md:justify-start gap-2">
                <span className="text-xl font-bold text-gray-900 max-md:text-lg">
                  {selectedPackage || "Explorer Package"}
                </span>
                <span className="text-base font-semibold text-[#CC0101] max-md:text-sm">
                  {packagePrices[selectedPackage || "Explorer Package"]}
                </span>
              </div>
            </div>
          </div>
          {/* Progress Bar */}
          <div className="flex items-center justify-between mt-2 mb-2 max-md:mt-1 max-md:mb-1">
            <div className="flex-1 flex flex-col items-center">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  step === 1
                    ? "bg-[#CC0101] text-white"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                1
              </div>
              <div
                className={`text-xs mt-1 ${
                  step === 1 ? "text-[#CC0101] font-semibold" : "text-gray-400"
                }`}
              >
                Personal Details
              </div>
            </div>
            <div className="flex-1 h-0.5 bg-gray-200 mx-1" />
            <div className="flex-1 flex flex-col items-center">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  step === 2
                    ? "bg-[#CC0101] text-white"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                2
              </div>
              <div
                className={`text-xs mt-1 ${
                  step === 2 ? "text-[#CC0101] font-semibold" : "text-gray-400"
                }`}
              >
                Payment
              </div>
            </div>
            <div className="flex-1 h-0.5 bg-gray-200 mx-1" />
            <div className="flex-1 flex flex-col items-center">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold bg-gray-200 text-gray-400`}
              >
                3
              </div>
              <div className="text-xs mt-1 text-gray-400">Confirmation</div>
            </div>
          </div>
        </div>
        <div className="overflow-y-scroll max-h-60vh scrollbar-hide">
          {/* Step 1: Personal Details */}
          {step === 1 && (
            <div
              className="px-6 py-6 max-md:px-3 max-md:py-4 overflow-y-auto"
              style={{ maxHeight: "60vh" }}
            >
              <div className="text-lg font-semibold mb-4">Registration</div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    name="name"
                    value={fields.name}
                    onChange={handleChange}
                    className={`w-full border ${
                      errors.name ? "border-red-500" : "border-gray-200"
                    } rounded-lg px-4 py-3 text-sm outline-none`}
                    placeholder="e.g. John Doe"
                  />
                  {errors.name && (
                    <div className="text-xs text-red-500 mt-1">
                      {errors.name}
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    name="email"
                    value={fields.email}
                    onChange={handleChange}
                    className={`w-full border ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    } rounded-lg px-4 py-3 text-sm outline-none bg-gray-50`}
                    placeholder="e.g. johndoe@email.com"
                  />
                  {errors.email && (
                    <div className="text-xs text-red-500 mt-1">
                      {errors.email}
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    value={fields.phone}
                    onChange={handleChange}
                    className={`w-full border ${
                      errors.phone ? "border-red-500" : "border-gray-200"
                    } rounded-lg px-4 py-3 text-sm outline-none bg-gray-50`}
                    placeholder="e.g. +63 912 345 6789"
                  />
                  {errors.phone && (
                    <div className="text-xs text-red-500 mt-1">
                      {errors.phone}
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Birthday
                  </label>
                  <div className="relative">
                    <input
                      name="birthday"
                      value={fields.birthday}
                      onChange={handleChange}
                      type="date"
                      className={`w-full border ${
                        errors.birthday ? "border-red-500" : "border-gray-200"
                      } rounded-lg px-4 py-3 text-sm outline-none bg-gray-50`}
                    />
                  </div>
                  {errors.birthday && (
                    <div className="text-xs text-red-500 mt-1">
                      {errors.birthday}
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Location (City & Country)
                  </label>
                  <div className="relative">
                    <input
                      name="location"
                      value={fields.location}
                      onChange={handleChange}
                      className={`w-full border ${
                        errors.location ? "border-red-500" : "border-gray-200"
                      } rounded-lg px-4 py-3 text-sm outline-none bg-gray-50`}
                      placeholder="e.g. Quezon City, Philippines"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        stroke="#CC0101"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="10" r="3" />
                        <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.41 1.41M6.34 17.66l-1.41 1.41m12.02 0l-1.41-1.41M6.34 6.34L4.93 4.93" />
                      </svg>
                    </span>
                  </div>
                  {errors.location && (
                    <div className="text-xs text-red-500 mt-1">
                      {errors.location}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-start gap-2 mt-4 text-xs text-gray-500 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <span className="text-lg">🔒</span>
                <span>
                  Privacy Note: Your personal information is 100% safe with us.
                  We respect your privacy and will never share your details
                  without your consent.
                </span>
              </div>
              <button
                onClick={handleNext}
                className="w-full mt-6 bg-[#CC0101] text-white rounded-lg py-3 font-semibold text-base"
              >
                Next
              </button>
            </div>
          )}
        </div>

        <div className="overflow-y-scroll max-h-60vh scrollbar-hide">
          {/* Step 2: Payment Page */}
          {step === 2 && (
            <div className="px-6 py-6 max-md:px-3 max-md:py-4 overflow-y-auto" style={{ maxHeight: '60vh' }}>
              <div className="text-lg font-semibold mb-4">Check Out</div>
              <div className="mb-4">
                <div className="text-sm font-medium mb-2">Mode Of Payment</div>
                {errors.paymentMethod && (
                  <div className="text-xs text-red-500 mb-2">
                    {errors.paymentMethod}
                  </div>
                )}
                <div className="space-y-3">
                  {/* Credit/Debit Card */}
                  <div
                    className={`flex items-center justify-between border rounded-lg px-4 py-3 cursor-pointer transition-all
                    ${
                      fields.paymentMethod === "card"
                        ? "border-[#CC0101] bg-red-50"
                        : "hover:border-[#CC0101]"
                    }
                    ${errors.paymentMethod ? "border-red-500" : ""}
                  `}
                    onClick={() => handlePaymentMethod("card")}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-5 h-5 border-2 ${
                          fields.paymentMethod === "card"
                            ? "border-[#CC0101]"
                            : "border-gray-300"
                        } rounded-full flex items-center justify-center`}
                      >
                        {fields.paymentMethod === "card" && (
                          <span className="w-2 h-2 bg-[#CC0101] rounded-full block" />
                        )}
                      </span>
                      <span className="text-sm font-medium">
                        Credit / Debit Card
                      </span>
                    </div>
                    <span className="flex gap-1">
                      <img
                        src="/register/visa.svg"
                        alt="visa"
                        className="h-5 w-auto"
                      />
                    </span>
                  </div>
                  {/* Gcash */}
                  <div>
                    <div
                      className={`flex items-center justify-between border rounded-lg px-4 py-3 cursor-pointer transition-all
                      ${
                        fields.paymentMethod === "gcash"
                          ? "border-[#CC0101] bg-red-50"
                          : "hover:border-[#CC0101]"
                      }
                      ${errors.paymentMethod ? "border-red-500" : ""}
                    `}
                      onClick={() => handlePaymentMethod("gcash")}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-5 h-5 border-2 ${
                            fields.paymentMethod === "gcash"
                              ? "border-[#CC0101]"
                              : "border-gray-300"
                          } rounded-full flex items-center justify-center`}
                        >
                          {fields.paymentMethod === "gcash" && (
                            <span className="w-2 h-2 bg-[#CC0101] rounded-full block" />
                          )}
                        </span>
                        <span className="text-sm font-medium">Gcash</span>
                      </div>
                      <img
                        src="/register/gcash.svg"
                        alt="gcash"
                        className="h-5 w-auto"
                      />
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        fields.paymentMethod === "gcash"
                          ? "max-h-60 opacity-100 mt-2"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="bg-white border border-[#CC0101] rounded-lg p-4 flex gap-4 items-center">
                        <img
                          src={paymentInfo.gcash.qr}
                          alt="Gcash QR"
                          className="w-20 h-20 object-contain rounded cursor-pointer hover:scale-105 transition-transform"
                          onClick={() =>
                            setQrDialog({
                              open: true,
                              src: paymentInfo.gcash.qr,
                              alt: "Gcash QR",
                            })
                          }
                          title="Click to enlarge QR code"
                        />
                        <div>
                          <div className="text-xs text-gray-500 mb-1">
                            Account Name
                          </div>
                          <div className="font-semibold text-sm text-gray-800 mb-1">
                            {paymentInfo.gcash.name}
                          </div>
                          <div className="text-xs text-gray-500 mb-1">
                            Account Number
                          </div>
                          <div className="font-semibold text-sm text-gray-800">
                            {paymentInfo.gcash.number}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* GoTyme */}
                  <div>
                    <div
                      className={`flex items-center justify-between border rounded-lg px-4 py-3 cursor-pointer transition-all
                      ${
                        fields.paymentMethod === "gotyme"
                          ? "border-[#CC0101] bg-red-50"
                          : "hover:border-[#CC0101]"
                      }
                      ${errors.paymentMethod ? "border-red-500" : ""}
                    `}
                      onClick={() => handlePaymentMethod("gotyme")}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-5 h-5 border-2 ${
                            fields.paymentMethod === "gotyme"
                              ? "border-[#CC0101]"
                              : "border-gray-300"
                          } rounded-full flex items-center justify-center`}
                        >
                          {fields.paymentMethod === "gotyme" && (
                            <span className="w-2 h-2 bg-[#CC0101] rounded-full block" />
                          )}
                        </span>
                        <span className="text-sm font-medium">GoTyme</span>
                      </div>
                      <img
                        src="/register/go.svg"
                        alt="gotyme"
                        className="h-5 w-auto"
                      />
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        fields.paymentMethod === "gotyme"
                          ? "max-h-60 opacity-100 mt-2"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="bg-white border border-[#CC0101] rounded-lg p-4 flex gap-4 items-center">
                        <img
                          src={paymentInfo.gotyme.qr}
                          alt="GoTyme QR"
                          className="w-20 h-20 object-contain rounded cursor-pointer hover:scale-105 transition-transform"
                          onClick={() =>
                            setQrDialog({
                              open: true,
                              src: paymentInfo.gotyme.qr,
                              alt: "GoTyme QR",
                            })
                          }
                          title="Click to enlarge QR code"
                        />
                        <div>
                          <div className="text-xs text-gray-500 mb-1">
                            Account Name
                          </div>
                          <div className="font-semibold text-sm text-gray-800 mb-1">
                            {paymentInfo.gotyme.name}
                          </div>
                          <div className="text-xs text-gray-500 mb-1">
                            Account Number
                          </div>
                          <div className="font-semibold text-sm text-gray-800">
                            {paymentInfo.gotyme.number}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Maya */}
                  <div>
                    <div
                      className={`flex items-center justify-between border rounded-lg px-4 py-3 cursor-pointer transition-all
                      ${
                        fields.paymentMethod === "maya"
                          ? "border-[#CC0101] bg-red-50"
                          : "hover:border-[#CC0101]"
                      }
                      ${errors.paymentMethod ? "border-red-500" : ""}
                    `}
                      onClick={() => handlePaymentMethod("maya")}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-5 h-5 border-2 ${
                            fields.paymentMethod === "maya"
                              ? "border-[#CC0101]"
                              : "border-gray-300"
                          } rounded-full flex items-center justify-center`}
                        >
                          {fields.paymentMethod === "maya" && (
                            <span className="w-2 h-2 bg-[#CC0101] rounded-full block" />
                          )}
                        </span>
                        <span className="text-sm font-medium">Maya</span>
                      </div>
                      <img
                        src="/register/maya.svg"
                        alt="maya"
                        className="h-5 w-auto"
                      />
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        fields.paymentMethod === "maya"
                          ? "max-h-60 opacity-100 mt-2"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="bg-white border border-[#CC0101] rounded-lg p-4 flex gap-4 items-center">
                        <img
                          src={paymentInfo.maya.qr}
                          alt="Maya QR"
                          className="w-20 h-20 object-contain rounded cursor-pointer hover:scale-105 transition-transform"
                          onClick={() =>
                            setQrDialog({
                              open: true,
                              src: paymentInfo.maya.qr,
                              alt: "Maya QR",
                            })
                          }
                          title="Click to enlarge QR code"
                        />
                        <div>
                          <div className="text-xs text-gray-500 mb-1">
                            Account Name
                          </div>
                          <div className="font-semibold text-sm text-gray-800 mb-1">
                            {paymentInfo.maya.name}
                          </div>
                          <div className="text-xs text-gray-500 mb-1">
                            Account Number
                          </div>
                          <div className="font-semibold text-sm text-gray-800">
                            {paymentInfo.maya.number}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="text-sm font-medium mb-2">Proof Of Payment</div>
                <div className="text-xs text-gray-500 mb-2">
                  Attach the payment receipt and enter the reference number.
                </div>
                <input
                  className={`w-full border ${
                    errors.paymentRef ? "border-red-500" : "border-gray-200"
                  } rounded-lg px-4 py-3 text-sm outline-none bg-gray-50 mb-3`}
                  placeholder="Reff# 165989745"
                  name="paymentRef"
                  value={fields.paymentRef}
                  onChange={handleChange}
                />
                {errors.paymentRef && (
                  <div className="text-xs text-red-500 mb-2">
                    {errors.paymentRef}
                  </div>
                )}
                <label className="block">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <div
                    className={`border-2 border-dashed ${
                      errors.paymentImageUrl
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-lg flex flex-col items-center justify-center py-8 cursor-pointer hover:border-[#CC0101] transition-all`}
                  >
                    {fields.paymentImageUrl ? (
                      <img
                        src={fields.paymentImageUrl}
                        alt="Proof"
                        className="max-h-40 object-contain mb-2"
                      />
                    ) : (
                      <span className="text-3xl text-gray-400 mb-2">📎</span>
                    )}
                    <span className="font-semibold text-gray-500">
                      Attach Here Please
                    </span>
                    <span className="text-xs text-gray-400">
                      Tap Here To Upload
                    </span>
                    {errors.paymentImageUrl && (
                      <div className="text-xs text-red-500 mt-2">
                        {errors.paymentImageUrl}
                      </div>
                    )}
                  </div>
                </label>
              </div>
              <div className="flex items-start gap-2 mt-4 text-xs text-gray-500 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <span className="text-lg">🔒</span>
                <span>
                  Privacy Note: Your personal information is 100% safe with us.
                  We respect your privacy and will never share your details
                  without your consent.
                </span>
              </div>
              <button
                onClick={handleNext}
                className="w-full mt-6 bg-[#CC0101] text-white rounded-lg py-3 font-semibold text-base"
              >
                Next
              </button>
            </div>
          )}
        </div>
        <div className="overflow-y-scroll max-h-60vh scrollbar-hide">
          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="px-6 py-6 max-md:px-3 max-md:py-4 overflow-y-auto" style={{ maxHeight: '60vh' }}>
              <div className="text-lg font-semibold mb-4 text-[#CC0101]">
                Confirmation
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 mb-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Full Name</span>
                    <span className="font-semibold text-gray-900">
                      {fields.name}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Email Address</span>
                    <span className="font-semibold text-gray-900">
                      {fields.email}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Phone Number</span>
                    <span className="font-semibold text-gray-900">
                      {fields.phone}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Birthday</span>
                    <span className="font-semibold text-gray-900">
                      {fields.birthday}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Location</span>
                    <span className="font-semibold text-gray-900">
                      {fields.location}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Payment Method
                    </span>
                    <span className="font-semibold text-gray-900 capitalize">
                      {fields.paymentMethod}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Reference Number
                    </span>
                    <span className="font-semibold text-gray-900">
                      {fields.paymentRef}
                    </span>
                  </div>
                  {fields.paymentImageUrl && (
                    <div className="flex flex-col items-start">
                      <span className="text-sm text-gray-500 mb-1">
                        Proof of Payment
                      </span>
                      <img
                        src={fields.paymentImageUrl}
                        alt="Proof"
                        className="max-h-32 object-contain rounded border"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-start gap-2 text-xs text-gray-500 bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                <span className="text-lg">🔒</span>
                <span>
                  Privacy Note: Your personal information is 100% safe with us.
                  We respect your privacy and will never share your details
                  without your consent.
                </span>
              </div>
              <button
                className="w-full bg-[#CC0101] text-white rounded-lg py-3 font-semibold text-base"
                onClick={() => {
                  // Log all final data to the console
                  console.log("Registration Data:", {
                    package: selectedPackage || "Explorer Package",
                    price: packagePrices[selectedPackage || "Explorer Package"],
                    ...fields,
                  });
                  setThankYouOpen(true);
                  setStep(1);
                  setFields({
                    name: "",
                    email: "",
                    phone: "",
                    birthday: "",
                    location: "",
                    paymentMethod: "card",
                    paymentRef: "",
                    paymentImage: null,
                    paymentImageUrl: "",
                  });
                }}
              >
                OK
              </button>
            </div>
          )}
        </div>

        {/* Thank You Modal */}
        <Dialog
          open={thankYouOpen}
          onOpenChange={(open) => {
            setThankYouOpen(open);
            if (!open) setOpen(false);
          }}
        >
          <DialogContent className="max-w-md w-full p-0 rounded-2xl overflow-hidden border border-gray-200">
            <div className="px-6 py-8 flex flex-col items-center">
              <div className="text-center w-full">
                <div className="text-xs text-gray-500 font-medium mb-1">
                  Personal Information Form
                </div>
                <div className="text-lg md:text-xl font-bold text-green-600 mb-1">
                  Successfully submitted
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Thank you for submitting
                </div>
              </div>
              <hr className="w-full my-4 border-gray-200" />
              <div className="w-full">
                <div className="text-lg font-semibold mb-2">Instructions</div>
                <div className="space-y-4 mb-4">
                  <div>
                    <div className="font-semibold text-gray-800 text-base mb-1">
                      Lorem Ipsum has been the industry's standard
                    </div>
                    <div className="text-xs text-gray-500">
                      (This could include creating, selling, or even just
                      exploring digital content like eBooks, courses, templates,
                      etc.)
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-base mb-1">
                      Lorem Ipsum has been the industry's standard
                    </div>
                    <div className="text-xs text-gray-500">
                      (This could include creating, selling, or even just
                      exploring digital content like eBooks, courses, templates,
                      etc.)
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-base mb-1">
                      Lorem Ipsum has been the industry's standard
                    </div>
                    <div className="text-xs text-gray-500">
                      (This could include creating, selling, or even just
                      exploring digital content like eBooks, courses, templates,
                      etc.)
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-xs text-gray-500 bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                  <span className="text-lg">🔒</span>
                  <span>
                    Privacy Note: Your personal information is 100% safe with
                    us. We respect your privacy and will never share your
                    details without your consent.
                  </span>
                </div>
                <button
                  className="w-full bg-green-900 text-white rounded-lg py-3 font-semibold text-base mt-2"
                  onClick={() => {
                    setThankYouOpen(false);
                    setOpen(false);
                  }}
                >
                  Let's Do This
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </DialogContent>
      {/* QR Code Modal */}
      <Dialog
        open={qrDialog.open}
        onOpenChange={(open) => setQrDialog((q) => ({ ...q, open }))}
      >
        <DialogContent className="flex flex-col items-center justify-center max-w-xs w-full p-6 rounded-2xl">
          <img
            src={qrDialog.src}
            alt={qrDialog.alt}
            className="w-64 h-64 object-contain rounded mb-4"
          />
          <button
            className="mt-2 px-4 py-2 bg-[#CC0101] text-white rounded-lg font-semibold"
            onClick={() => setQrDialog((q) => ({ ...q, open: false }))}
          >
            Close
          </button>
        </DialogContent>
      </Dialog>
    </Dialog>
  );
};

export default PersonalDialog;

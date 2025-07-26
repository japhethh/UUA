"use client"

import { useState } from "react"
import { ArrowLeft, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { useRef } from "react";

import React from "react";

export function PersonalInfoDialog() {
  // Static step (change this to 1, 2, or 3 to show the desired step)
  const step = 1;
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-0 overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="px-6 pt-6 pb-2 border-b border-gray-100">
        <div className="flex items-center gap-2 mb-2">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg width="20" height="20" fill="none" stroke="#CC0101" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
          </button>
          <div className="flex-1 text-center">
            <div className="text-xs text-[#CC0101] font-medium">Event Registration</div>
            <div className="text-xl font-bold text-gray-900">Explorer Package</div>
          </div>
        </div>
        {/* Progress Bar */}
        <div className="flex items-center justify-between mt-2 mb-2">
          <div className="flex-1 flex flex-col items-center">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 1 ? 'bg-[#CC0101] text-white' : 'bg-gray-200 text-gray-400'}`}>1</div>
            <div className={`text-xs mt-1 ${step === 1 ? 'text-[#CC0101] font-semibold' : 'text-gray-400'}`}>Personal Details</div>
          </div>
          <div className="flex-1 h-0.5 bg-gray-200 mx-1" />
          <div className="flex-1 flex flex-col items-center">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 2 ? 'bg-[#CC0101] text-white' : 'bg-gray-200 text-gray-400'}`}>2</div>
            <div className={`text-xs mt-1 ${step === 2 ? 'text-[#CC0101] font-semibold' : 'text-gray-400'}`}>Checkout Page</div>
          </div>
          <div className="flex-1 h-0.5 bg-gray-200 mx-1" />
          <div className="flex-1 flex flex-col items-center">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 3 ? 'bg-[#CC0101] text-white' : 'bg-gray-200 text-gray-400'}`}>3</div>
            <div className={`text-xs mt-1 ${step === 3 ? 'text-[#CC0101] font-semibold' : 'text-gray-400'}`}>Payment</div>
          </div>
        </div>
      </div>

      {/* Step 1: Personal Details */}
      {step === 1 && (
        <div className="px-6 py-6">
          <div className="text-lg font-semibold mb-4">Registration</div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input className="w-full border border-[#CC0101] rounded-lg px-4 py-3 text-sm outline-none" placeholder="e.g. John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none bg-gray-50" placeholder="e.g. johndoe@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none bg-gray-50" placeholder="e.g. +63 912 345 6789" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Birthday</label>
              <div className="relative">
                <input className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none bg-gray-50" placeholder="e.g. 1996-08-15" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="20" height="20" fill="none" stroke="#CC0101" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h4l2 2"/></svg>
                </span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Location (City & Country)</label>
              <div className="relative">
                <input className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none bg-gray-50" placeholder="e.g. Quezon City, Philippines" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="20" height="20" fill="none" stroke="#CC0101" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="10" r="3"/><path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.41 1.41M6.34 17.66l-1.41 1.41m12.02 0l-1.41-1.41M6.34 6.34L4.93 4.93"/></svg>
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2 mt-4 text-xs text-gray-500 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <span className="text-lg">🔒</span>
            <span>Privacy Note: Your personal information is 100% safe with us. We respect your privacy and will never share your details without your consent.</span>
          </div>
          <button className="w-full mt-6 bg-[#CC0101] text-white rounded-lg py-3 font-semibold text-base">Next</button>
        </div>
      )}

      {/* Step 2: Checkout Page */}
      {step === 2 && (
        <div className="px-6 py-6">
          <div className="text-lg font-semibold mb-4">Check Out</div>
          <div className="mb-4">
            <div className="text-sm font-medium mb-2">Mode Of Payment</div>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer border-gray-200">
                <input type="radio" name="payment" className="accent-[#CC0101]" />
                <span className="flex-1 font-medium">Credit / Debit Card</span>
                <img src="/visa-mastercard.png" alt="Visa Mastercard" className="h-6" />
              </label>
              <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer border-gray-200">
                <input type="radio" name="payment" className="accent-[#CC0101]" />
                <span className="flex-1 font-medium">Gcash</span>
                <img src="/gcashImage.png" alt="Gcash" className="h-6" />
              </label>
              <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer border-gray-200">
                <input type="radio" name="payment" className="accent-[#CC0101]" />
                <span className="flex-1 font-medium">GoTyme</span>
                <img src="/goTimeImage.png" alt="GoTyme" className="h-6" />
              </label>
              <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer border-gray-200">
                <input type="radio" name="payment" className="accent-[#CC0101]" />
                <span className="flex-1 font-medium">Maya</span>
                <img src="/mayaImage.png" alt="Maya" className="h-6" />
              </label>
            </div>
          </div>
          <div className="mb-4">
            <div className="text-sm font-medium mb-2">Proof Of Payment</div>
            <div className="mb-2">
              <input className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none bg-gray-50" placeholder="Reff# 165989745" />
            </div>
            <div className="border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center py-8 cursor-pointer">
              <span className="text-3xl text-gray-400 mb-2">📎</span>
              <span className="font-semibold text-black">Attach Here Please</span>
              <span className="text-xs text-gray-500">Tap Here To Upload</span>
            </div>
          </div>
          <div className="flex items-start gap-2 mt-4 text-xs text-gray-500 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <span className="text-lg">🔒</span>
            <span>Privacy Note: Your personal information is 100% safe with us. We respect your privacy and will never share your details without your consent.</span>
          </div>
          <button className="w-full mt-6 bg-[#CC0101] text-white rounded-lg py-3 font-semibold text-base">Next</button>
        </div>
      )}

      {/* Step 3: Payment (static placeholder) */}
      {step === 3 && (
        <div className="px-6 py-6 text-center">
          <div className="text-lg font-semibold mb-4">Payment</div>
          <div className="text-gray-400">Payment step content goes here.</div>
        </div>
      )}
    </div>
  );
}
    }

    // Otherwise, redirect to payment step (step 4)
    setCurrentStep(4)
  }

  // Fetch existing lead mutation
  const fetchLeadMutation = useMutation({
    mutationFn: getLeadById,
    onSuccess: (response: ApiUserResponse) => {
      console.log("Existing lead found:", response)
      const leadData = response.data.user
      populateFormFromLead(leadData)
    },
    onError: (error) => {
      console.error("Error fetching lead:", error)
    },
  })

  // Step 1: Create Lead Mutation
  const createLeadMutation = useMutation({
    mutationFn: createLead,
    onSuccess: (response) => {
      const extractedId = response?.data?.id || response?.id
      setUserId(extractedId)
      setCurrentStep(2)
      console.log("Lead created successfully:", response)
    },
    onError: (error: any) => {
      console.error("Error creating lead:", error)

      // Check if user already exists by looking for the specific error structure
      if (
        error?.response?.data?.error?.rawErrors?.userId &&
        error?.response?.status === 409 &&
        error?.response?.data?.message?.includes("already exists")
      ) {
        const existingUserId = error.response.data.error.rawErrors.userId
        console.log("User already exists with ID:", existingUserId)

        // Fetch existing lead data
        fetchLeadMutation.mutate(existingUserId)
      } else {
        // This is a different error, not related to existing user
        console.error("Registration error:", error?.response?.data?.message || "Unknown error")
      }
    },
  })

  // Step 2: Update Professional Background Mutation
  const updateProfessionalMutation = useMutation({
    mutationFn: ({ userId, data }: { userId: string; data: any }) => updateLead(userId, data),
    onSuccess: (response) => {
      setCurrentStep(3)
      console.log("Professional background updated successfully:", response)
    },
    onError: (error) => {
      console.error("Error updating professional background:", error)
    },
  })

  // Step 3: Update Coaching Goals Mutation
  const updateCoachingMutation = useMutation({
    mutationFn: ({ userId, data }: { userId: string; data: any }) => updateLead(userId, data),
    onSuccess: (response) => {
      setCurrentStep(4)
      console.log("Coaching goals updated successfully:", response)
    },
    onError: (error) => {
      console.error("Error updating coaching goals:", error)
    },
  })

  // Step 4: Final Submission Mutation
  const finalSubmissionMutation = useMutation({
    mutationFn: ({ userId, data }: { userId: string; data: any }) => updateLead(userId, data),
    onSuccess: (response) => {
      setShowSuccessDialog(true)
      console.log("Registration completed successfully:", response)
    },
    onError: (error) => {
      console.error("Submission error:", error)
    },
  })

  const paymentMethods: PaymentMethod[] = [
    {
      id: "gcash",
      name: "GCash",
      logo: "/gcashImage.png",
      accountName: " Lara Sophia Martinez",
      accountNumber: "09352868373",
      qrCode: "/gcashQR.jpg",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "maya",
      name: "Maya",
      logo: "/mayaImage.png",
      accountName: "Lara Sophia Martinez",
      accountNumber: "09352868373",
      qrCode: "/mayaQR.jpg",
      color: "from-green-500 to-green-600",
    },
    {
      id: "gotyme",
      name: "GoTyme",
      logo: "/goTimeImage.png",
      accountName: "Lara Sophia Martinez",
      accountNumber: "0139 5453 0480",
      qrCode: "/goTimeQR.jpg",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "BPI",
      name: "BPI",
      logo: "/bpi-icon.png",
      accountName: "Lara Sophia Martinez",
      accountNumber: "0629171416",
      qrCode: "/bpiQR.png",
      color: "from-purple-500 to-purple-600",
    },
  ]

  const steps = [
    { id: 1, label: "Personal Details", shortLabel: "Personal", completed: currentStep > 1, active: currentStep === 1 },
    {
      id: 2,
      label: "Professional Background",
      shortLabel: "Professional",
      completed: currentStep > 2,
      active: currentStep === 2,
    },
    { id: 3, label: "Coaching Goals", shortLabel: "Goals", completed: currentStep > 3, active: currentStep === 3 },
    { id: 4, label: "Payment", shortLabel: "Payment", completed: currentStep > 4, active: currentStep === 4 },
  ]

  // Form validation
  const isStep1Valid =
    formData.firstname.trim() && formData.lastname.trim() && formData.email.trim() && formData.phone.trim()
  const isStep2Valid = professionalData.occupation.trim() && professionalData.experience
  const isStep3Valid = coachingGoalsData.interest.trim()
  const isStep4Valid = paymentData.selectedMethod && paymentData.paymentReference.trim() && paymentData.proofOfPayment

  const isCurrentStepValid =
    currentStep === 1
      ? isStep1Valid
      : currentStep === 2
        ? isStep2Valid
        : currentStep === 3
          ? isStep3Valid
          : currentStep === 4
            ? isStep4Valid
            : false

  // Event handlers
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleProfessionalDataChange = (field: keyof ProfessionalData, value: string) => {
    setProfessionalData((prev) => ({ ...prev, [field]: value }))
  }

  const handleCoachingGoalsDataChange = (field: keyof CoachingGoalsData, value: string) => {
    setCoachingGoalsData((prev) => ({ ...prev, [field]: value }))
  }

  const handlePaymentDataChange = (field: keyof PaymentData, value: string | File | null) => {
    setPaymentData((prev) => ({ ...prev, [field]: value }))
  }

  const handleViewQr = (method: PaymentMethod) => {
    setSelectedQrMethod(method)
    setQrModalOpen(true)
  }

  const handleStep1 = () => {
    const userData = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      phone: formData.phone,
      step: 1,
      selectedBundle: selectedBundle,
      personalInfo: {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        phone: formData.phone,
      },
    }

    createLeadMutation.mutate(userData)
  }

  const handleStep2 = () => {
    if (!userId) return

    const updateData = {
      step: 2,
      business_type: professionalData.occupation,
      experience:
        professionalData.experience === "experienced"
          ? "Yes, I've already created or sold digital products."
          : professionalData.experience === "learning"
            ? "I've explored or learned about digital products, but haven't launched anything yet."
            : "No, I'm completely new and have no experience at all.",
    }

    updateProfessionalMutation.mutate({ userId, data: updateData })
  }

  const handleStep3 = () => {
    if (!userId) return

    const updateData = {
      step: 3,
      why_interested: coachingGoalsData.interest,
      anything_else: coachingGoalsData.additionalInfo,
    }

    updateCoachingMutation.mutate({ userId, data: updateData })
  }
  const handleSubmit = async () => {
    if (!userId) return

    try {
      const selectedPaymentMethod = paymentMethods.find((method) => method.id === paymentData.selectedMethod)

      let imageUrl = null
      if (paymentData.proofOfPayment) {
        const uploadResult = await uploadImage(paymentData.proofOfPayment)
        imageUrl = uploadResult.url || uploadResult
      }      // Create order object based on selected bundle
      const order = selectedBundle ? {
        total: Number(selectedBundle.price) || 0,
        product_name: selectedBundle.name,
        product_price: Number(selectedBundle.price) || 0,
        payment_mode: selectedPaymentMethod?.name || "",
        payment_ref: paymentData.paymentReference,
        payment_proof_url: imageUrl
      } : null;
      
      const finalUpdateData = {
        step: 4,
        payment_mode: selectedPaymentMethod?.name || "",
        payment_ref: paymentData.paymentReference,
        payment_proof_url: imageUrl,
        // Add orders array with the new order
        orders: order ? [order] : [],
        // Set initial status as New
        status: 'New'
      }

      finalSubmissionMutation.mutate({ userId, data: finalUpdateData })
    } catch (error) {
      console.error("Error preparing submission:", error)
    }
  }

  const handleNext = () => {
    if (currentStep === 1) {
      handleStep1()
    } else if (currentStep === 2) {
      handleStep2()
    } else if (currentStep === 3) {
      handleStep3()
    } else if (currentStep === 4) {
      handleSubmit()
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    } else {
      onOpenChange(false)
    }
  }

  const resetForm = () => {
    setCurrentStep(1)
    setUserId(null)
    setFormData({ firstname: "", lastname: "", email: "", phone: "" })
    setProfessionalData({ occupation: "", experience: "" })
    setCoachingGoalsData({ interest: "", additionalInfo: "" })
    setPaymentData({ selectedMethod: "", paymentReference: "", proofOfPayment: null })
    setShowSuccessDialog(false)

    // Reset all mutations
    createLeadMutation.reset()
    updateProfessionalMutation.reset()
    updateCoachingMutation.reset()
    finalSubmissionMutation.reset()
    fetchLeadMutation.reset()
  }

  const closeDialog = () => {
    setShowSuccessDialog(false)
    onOpenChange(false)
    resetForm()
  }

  // Get the current mutation based on step
  const getCurrentMutation = () => {
    switch (currentStep) {
      case 1:
        return createLeadMutation
      case 2:
        return updateProfessionalMutation
      case 3:
        return updateCoachingMutation
      case 4:
        return finalSubmissionMutation
      default:
        return null
    }
  }

  const currentMutation = getCurrentMutation()
  const isCurrentStepLoading = currentMutation?.isPending || fetchLeadMutation.isPending || false

  // Only show errors that are not related to existing users and when not successfully fetching existing user
  const currentStepError =
    currentMutation?.error?.response?.data?.message &&
    !fetchLeadMutation.isSuccess &&
    !(
      currentMutation?.error?.response?.status === 409 &&
      currentMutation?.error?.response?.data?.message?.includes("already exists")
    )
      ? currentMutation.error.response.data.message
      : null

  return (
    <>
      {/* Main Registration Form */}
      <Dialog open={open && !showSuccessDialog} onOpenChange={onOpenChange}>
        <DialogContent className="w-[95vw] max-w-[500px] h-[95vh] sm:h-auto sm:max-h-[90vh] p-0 gap-0 overflow-y-auto">
          <DialogHeader className="p-4 sm:p-6 pb-3 sm:pb-4 space-y-2 sm:space-y-3 sticky top-0 bg-white z-10 border-b border-gray-100">
            <div className="flex items-center gap-2 sm:gap-3 relative">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 hover:bg-gray-100 transition-colors flex-shrink-0"
                onClick={handleBack}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              {selectedBundle && (
                <div className="flex-1">
                  <p className="text-sm text-gray-600">Selected Bundle:</p>
                  <p className="font-semibold text-sm">{selectedBundle.name}</p>
                  {paymentData.proofOfPayment && (
                    <div className="mt-1">
                      <p className="text-xs text-green-600">📎 {paymentData.proofOfPayment.name}</p>
                    </div>
                  )}
                </div>
              )}
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 hover:bg-gray-100 transition-colors flex-shrink-0 absolute right-0"
                onClick={() => {
                  resetForm()
                  onOpenChange(false)
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <DialogTitle className="sr-only">Registration Form - Step {currentStep} of 4</DialogTitle>
          </DialogHeader>

          <div className="px-4 sm:px-6 pb-4 sm:pb-6 flex-1">
            {/* Progress Steps */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:hidden">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center gap-2 flex-shrink-0">
                    <div className="flex flex-col items-center text-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                          step.completed
                            ? "bg-green-600 text-white shadow-lg"
                            : step.active
                              ? "bg-cyan-500 text-white shadow-lg ring-2 ring-cyan-100"
                              : "bg-gray-300 text-gray-600"
                        }`}
                      >
                        {step.completed ? <Check className="h-3 w-3" /> : step.id}
                      </div>
                      <span
                        className={`text-xs mt-1 transition-colors duration-300 whitespace-nowrap ${
                          step.active ? "text-cyan-600 font-medium" : "text-gray-600"
                        }`}
                      >
                        {step.shortLabel}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-8 h-0.5 bg-gray-300 mx-1">
                        <div
                          className={`h-full bg-gradient-to-r from-green-500 to-cyan-500 rounded-full transition-all duration-500 ${
                            step.completed ? "w-full" : "w-0"
                          }`}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="hidden sm:flex items-center justify-between relative">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center relative z-10">
                    <div className="flex flex-col items-center text-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                          step.completed
                            ? "bg-green-600 text-white shadow-lg"
                            : step.active
                              ? "bg-cyan-500 text-white shadow-lg ring-4 ring-cyan-100"
                              : "bg-gray-300 text-gray-600"
                        }`}
                      >
                        {step.completed ? <Check className="h-4 w-4" /> : step.id}
                      </div>
                      <span
                        className={`text-xs mt-2 transition-colors duration-300 text-center max-w-[80px] ${
                          step.active ? "text-cyan-600 font-medium" : "text-gray-600"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>

                    {index < steps.length - 1 && (
                      <div className="absolute left-10 top-5 w-full h-0.5 -z-10">
                        <div className="h-full bg-gray-300 rounded-full">
                          <div
                            className={`h-full bg-gradient-to-r from-green-500 to-cyan-500 rounded-full transition-all duration-500 ${
                              step.completed ? "w-full" : "w-0"
                            }`}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Error Display */}
            {currentStepError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-800">
                  <strong>Error:</strong> {currentStepError}
                </p>
              </div>
            )}

            {/* Form Steps */}
            {currentStep === 1 && (
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <h4 className="text-lg font-semibold text-gray-900">Personal Details</h4>
                  <div className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full w-fit">
                    Step {currentStep} of 4
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstname" className="text-sm font-medium text-gray-700">
                      First Name *
                    </Label>
                    <Input
                      id="firstname"
                      placeholder="e.g. John"
                      className="transition-all duration-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 h-11 sm:h-10"
                      value={formData.firstname}
                      onChange={(e) => handleInputChange("firstname", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastname" className="text-sm font-medium text-gray-700">
                      Last Name *
                    </Label>
                    <Input
                      id="lastname"
                      placeholder="e.g. Doe"
                      className="transition-all duration-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 h-11 sm:h-10"
                      value={formData.lastname}
                      onChange={(e) => handleInputChange("lastname", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="e.g. john.doe@email.com"
                      className="transition-all duration-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 h-11 sm:h-10"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      placeholder="e.g. +63 912 345 6789"
                      className="transition-all duration-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 h-11 sm:h-10"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 sm:p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0">
                    <div className="w-full h-full bg-yellow-400 rounded-md flex items-center justify-center shadow-sm">
                      <span className="text-xs">🔒</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    <strong className="text-yellow-800">Privacy Note:</strong> Your personal information is 100% safe
                    with us. We respect your privacy and will never share your details without your consent.
                  </p>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <h4 className="text-lg font-semibold text-gray-900">Professional Background</h4>
                  <div className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full w-fit">
                    Step {currentStep} of 4
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="occupation" className="text-sm font-medium text-gray-700">
                      Occupation / Business Type *
                    </Label>
                    <Input
                      id="occupation"
                      placeholder="e.g. Freelance Graphic Designer"
                      className="transition-all duration-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 h-11 sm:h-10"
                      value={professionalData.occupation}
                      onChange={(e) => handleProfessionalDataChange("occupation", e.target.value)}
                    />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-700">
                        Do you have prior experience with digital products? *
                      </Label>
                      <p className="text-xs text-gray-500 mt-1">
                        This could include creating, selling, or even just exploring digital content like eBooks,
                        courses, templates, etc.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <label className="flex items-start gap-3 p-3 sm:p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors active:bg-gray-100">
                        <input
                          type="radio"
                          name="experience"
                          value="experienced"
                          checked={professionalData.experience === "experienced"}
                          onChange={(e) => handleProfessionalDataChange("experience", e.target.value)}
                          className="mt-1 text-cyan-500 focus:ring-cyan-500 w-4 h-4"
                        />
                        <span className="text-sm text-gray-700 leading-relaxed">
                          Yes, I&apos;ve already created or sold digital products.
                        </span>
                      </label>

                      <label className="flex items-start gap-3 p-3 sm:p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors active:bg-gray-100">
                        <input
                          type="radio"
                          name="experience"
                          value="learning"
                          checked={professionalData.experience === "learning"}
                          onChange={(e) => handleProfessionalDataChange("experience", e.target.value)}
                          className="mt-1 text-cyan-500 focus:ring-cyan-500 w-4 h-4"
                        />
                        <span className="text-sm text-gray-700 leading-relaxed">
                          I&apos;ve explored or learned about digital products, but haven&apos;t launched anything yet.
                        </span>
                      </label>

                      <label className="flex items-start gap-3 p-3 sm:p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors active:bg-gray-100">
                        <input
                          type="radio"
                          name="experience"
                          value="beginner"
                          checked={professionalData.experience === "beginner"}
                          onChange={(e) => handleProfessionalDataChange("experience", e.target.value)}
                          className="mt-1 text-cyan-500 focus:ring-cyan-500 w-4 h-4"
                        />
                        <span className="text-sm text-gray-700 leading-relaxed">
                          No, I&apos;m completely new and have no experience at all.
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <h4 className="text-lg font-semibold text-gray-900">Coaching Goals</h4>
                  <div className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full w-fit">
                    Step {currentStep} of 4
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="interest" className="text-sm font-medium text-gray-700">
                      Why are you interested in Digital Products Coaching? *
                    </Label>
                    <textarea
                      id="interest"
                      placeholder="Type here..."
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 resize-none text-sm"
                      value={coachingGoalsData.interest}
                      onChange={(e) => handleCoachingGoalsDataChange("interest", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additionalInfo" className="text-sm font-medium text-gray-700">
                      Anything else you&apos;d like us to know?
                    </Label>
                    <textarea
                      id="additionalInfo"
                      placeholder="Type here..."
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 resize-none text-sm"
                      value={coachingGoalsData.additionalInfo}
                      onChange={(e) => handleCoachingGoalsDataChange("additionalInfo", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6 max-w-[400px] mx-auto">
                <div className="text-center">
                  <h2 className="text-lg font-medium text-gray-900 mb-2">
                    {selectedBundle?.name || "Bundle Selection"}
                  </h2>
                  <div className="text-3xl font-bold text-red-600 mb-1">{selectedBundle?.price || "₱0.00"}</div>
                  <p className="text-sm text-gray-600">Amount to be Pay</p>
                  {selectedBundle && (
                    <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">{selectedBundle.target}</p>
                      <p className="text-sm text-gray-700">{selectedBundle.description}</p>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-medium text-gray-900">Mode of Payment</h3>
                  </div>
                  <div className="flex items-start gap-2">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Select your payment mode to the following SkinZone verified account option.
                    </p>
                    <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-white">i</span>
                    </div>
                  </div>
                </div>

                {/* Payment Methods - Horizontal Scroll */}
                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-700">Choose your payment method: *</p>
                  <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        onClick={() => handlePaymentDataChange("selectedMethod", method.id)}
                        className={`relative p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 flex-shrink-0 w-[160px] ${
                          paymentData.selectedMethod === method.id
                            ? "border-green-500 bg-green-50"
                            : "border-gray-200 bg-white hover:border-gray-300"
                        }`}
                      >
                        <div className="absolute top-3 right-3">
                          {paymentData.selectedMethod === method.id ? (
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                          ) : (
                            <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />
                          )}
                        </div>

                        <div className="w-16 h-16 flex overflow-hidden items-center justify-center mb-3 mx-auto">
                          <Image
                            src={method.logo || "/placeholder.svg"}
                            className="object-cover rounded-xs"
                            width={64}
                            height={64}
                            alt={method.name}
                          />
                        </div>

                        <div className="space-y-1 text-center">
                          <p className="text-sm font-medium text-gray-900">{method.name}</p>
                          <p className="text-xs text-gray-600">{method.accountNumber}</p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              handleViewQr(method)
                            }}
                            className="text-xs text-green-600 hover:text-green-700 font-medium"
                          >
                            Show QR &gt;
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-medium text-gray-900">Proof of Payment</h3>
                  </div>
                  <div className="flex items-start gap-2">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Attach the payment receipt and enter the reference number.
                    </p>
                    <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-white">i</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Input
                      placeholder="Enter Payment Reference No. *"
                      className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      value={paymentData.paymentReference}
                      onChange={(e) => handlePaymentDataChange("paymentReference", e.target.value)}
                    />
                  </div>

                  <div
                    className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-gray-400 transition-colors"
                    onClick={() => document.getElementById("file-upload")?.click()}
                  >
                    <Input
                      id="file-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0] || null
                        handlePaymentDataChange("proofOfPayment", file)
                      }}
                    />
                    <div className="space-y-2">
                      <div className="w-8 h-8 mx-auto bg-gray-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Attach a Proof of Payment *</p>
                        <p className="text-xs text-gray-500">Click here to upload</p>
                      </div>
                      {paymentData.proofOfPayment && (
                        <p className="text-xs text-green-600 font-medium">
                          File selected: {paymentData.proofOfPayment.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Action Button */}
            <div className="sticky bottom-0 bg-white pt-4 mt-6 border-t border-gray-100">
              <Button
                className={`w-full py-3 sm:py-3 text-base font-medium transition-all duration-200 ${
                  isCurrentStepValid && !isCurrentStepLoading
                    ? "bg-green-700 hover:bg-green-800 text-white shadow-lg hover:shadow-xl active:scale-[0.98]"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                size="lg"
                onClick={handleNext}
                disabled={!isCurrentStepValid || isCurrentStepLoading}
              >
                {isCurrentStepLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    {currentStep === 4 ? "Submitting..." : "Processing..."}
                  </div>
                ) : currentStep === 4 ? (
                  "Complete Registration"
                ) : (
                  "Next"
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* QR Code Modal */}
      <Dialog open={qrModalOpen} onOpenChange={setQrModalOpen}>
        <DialogContent className="w-[95vw] max-w-[400px] p-6">
          <DialogHeader>
            <DialogTitle className="text-center text-lg font-semibold">{selectedQrMethod?.name} QR Code</DialogTitle>
          </DialogHeader>

          {selectedQrMethod && (
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="p-4 bg-white border-2 border-gray-200 rounded-lg">
                  <Image
                    src={selectedQrMethod.qrCode || "/placeholder.svg"}
                    alt={`${selectedQrMethod.name} QR Code`}
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Image
                    src={selectedQrMethod.logo || "/placeholder.svg"}
                    alt={selectedQrMethod.name}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                  <span className="font-semibold text-lg">{selectedQrMethod.name}</span>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">Account Name</p>
                  <p className="text-base font-semibold">{selectedQrMethod.accountName}</p>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">Account Number</p>
                  <p className="text-base font-semibold">{selectedQrMethod.accountNumber}</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-sm text-blue-800">
                  <strong>Instructions:</strong> Scan this QR code with your {selectedQrMethod.name} app to send the
                  payment of {selectedBundle?.price || "₱0.00"}
                </p>
              </div>

              <Button onClick={() => setQrModalOpen(false)} className="w-full" variant="outline">
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={() => {}}>
        <DialogContent className="w-[95vw] max-w-[500px] p-0 gap-0 overflow-hidden">
          <DialogHeader className="sr-only">
            <DialogTitle>Registration Successful</DialogTitle>
          </DialogHeader>

          <div className="relative">
            {/* Header with Close Controls */}
            <div className="p-4 border-b border-gray-100 bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 hover:bg-gray-100 transition-colors"
                    onClick={closeDialog}
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <p className="text-sm text-gray-600 font-medium">Personal Information Form</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-gray-100 transition-colors"
                  onClick={closeDialog}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Success Content */}
            <div className="p-6 text-center space-y-6">
              <div className="space-y-3">
                <div className="text-2xl font-bold text-cyan-500">Successfully submitted</div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Thank you for
                  <br />
                  submitting
                </h1>
              </div>

              <div className="space-y-6 text-left">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Instructions</h3>

                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Your registration has been received</p>
                      <p className="text-sm text-gray-600">
                        We will review your application and payment details within 24-48 hours.
                      </p>
                    </div>

                    <div>
                      <p className="font-medium text-gray-900 mb-1">Check your email for confirmation</p>
                      <p className="text-sm text-gray-600">
                        You will receive a confirmation email with next steps and access details.
                      </p>
                    </div>

                    <div>
                      <p className="font-medium text-gray-900 mb-1">Get ready to start your journey</p>
                      <p className="text-sm text-gray-600">
                        Prepare to dive into the world of digital products and transform your business.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg">
                  <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                    <div className="w-full h-full bg-yellow-400 rounded-md flex items-center justify-center shadow-sm">
                      <span className="text-xs">🔒</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    <strong className="text-yellow-800">Privacy Note:</strong> Your personal information is 100% safe
                    with us. We respect your privacy and will never share your details without your consent.
                  </p>
                </div>
              </div>

              <Button
                className="w-full bg-green-700 hover:bg-green-800 text-white py-3 text-base font-medium"
                onClick={closeDialog}
              >
                Let's Do This
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

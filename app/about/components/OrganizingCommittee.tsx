"use client";
import { committeeData } from "@/data/Committee";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const OrganizingCommittee = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const filteredCommittee = committeeData.filter(
    (committee) =>
      committee.name.toLowerCase().includes(search.toLowerCase()) ||
      (committee.position && committee.position.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      <div className="text-center mt-15 flex gap-2 flex-col">
        <h1 className="text-zinc-900 font-semibold text-3xl">
          Organizing Committee
        </h1>
        <p className="text-zinc-500 text-md font-normal max-w-2xl mx-auto">
          The minds behind UAA 2026 — curating content, shaping sessions, and
          ensuring scientific excellence throughout the congress.
        </p>
      </div>


      <div>
        <div className="w-full max-w-xl mx-auto mt-5">
          <div className="flex items-center text-lg bg-[#FAFAFA] rounded-full px-6 py-3 shadow-sm">
            <input
              type="text"
              placeholder="Search"
              className="flex-grow bg-transparent outline-none placeholder-gray-400 text-sm"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <Search className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2 mt-5">
        {filteredCommittee.map((committee, index) => (
          <React.Fragment key={index}>
            <div
              className="cursor-pointer hover:shadow-lg transition rounded-xl p-2"
              onClick={() => setOpenIndex(index)}
            >
              <img
                src={committee.image || "/about/doctor-image-01.svg"}
                alt="Doctors"
                className="rounded-xl w-full h-auto"
              />
              <h1 className="font-semibold text-zinc-800 text-lg">
                {committee.name}
              </h1>
              <p className="text-zinc-500 text-sm line-clamp-2">
                {committee.position}
              </p>
            </div>
            <Dialog
              open={openIndex === index}
              onOpenChange={() => setOpenIndex(null)}
            >
              <DialogContent className="max-w-2xl rounded-2xl">
                <DialogHeader>
                  <DialogTitle>Profile</DialogTitle>
                </DialogHeader>
                <div className="flex gap-6">
                  <img
                    src={committee.image}
                    alt={committee.name}
                    className="w-36 h-36 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <div className="mb-2">
                      <span className="text-xs text-zinc-400">Name</span>
                      <div className="font-bold text-lg">{committee.name}</div>
                    </div>
                    <div className="mb-2">
                      <span className="text-xs text-zinc-400">
                        Short Description
                      </span>
                      <div className="text-zinc-700">
                        {committee.shortDescription}
                      </div>
                    </div>
                    <div className="mb-2">
                      <span className="text-xs text-zinc-400">
                        Medical License No.
                      </span>
                      <div className="text-zinc-700">{committee.licenseNo}</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="font-semibold mb-2">Professional Details</div>
                  <div className="grid grid-cols-3 gap-4 text-xs text-zinc-500">
                    <div>
                      <div className="text-zinc-400">Specialization</div>
                      <div className="text-zinc-700">
                        {committee.specialization}
                      </div>
                    </div>
                    <div>
                      <div className="text-zinc-400">Years of Experience</div>
                      <div className="text-zinc-700">
                        {committee.experience}
                      </div>
                    </div>
                    <div>
                      <div className="text-zinc-400">
                        Clinic / Hospital Affiliation
                      </div>
                      <div className="text-zinc-700">
                        {committee.affiliation}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="font-semibold mb-2">Availability</div>
                  <div className="grid grid-cols-3 gap-4 text-xs text-zinc-500">
                    <div>
                      <div className="text-zinc-400">Clinic Hours</div>
                      <div className="text-zinc-700">
                        {committee.clinicHours}
                      </div>
                    </div>
                    <div>
                      <div className="text-zinc-400">
                        Online Consultation Availability
                      </div>
                      <div className="text-zinc-700">
                        {committee.onlineAvailability}
                      </div>
                    </div>
                    <div>
                      <div className="text-zinc-400">
                        Clinic Location / Address
                      </div>
                      <div className="text-zinc-700">
                        {committee.clinicLocation}
                      </div>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="destructive">Close</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default OrganizingCommittee;

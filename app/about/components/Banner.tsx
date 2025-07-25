import React from "react";

const Banner = () => {
  return (
    <div className="mt-20 max-md:mt-8 px-0 max-md:px-2">
      <div className="flex max-md:flex-col gap-8 max-md:gap-6">
        <div className="w-md max-md:w-full">
          <div className="flex flex-col gap-3 max-md:gap-2 items-start">
            <img src="/about/logo-banner.svg" className="w-16 max-md:w-12" alt="logo" />
            <h1 className="py-2 px-4 max-md:py-1 max-md:px-2 w-fit rounded-full border border-[#E1E1E1] text-black font-semibold text-xs max-md:text-[10px]">
              About Us
            </h1>
            <h1 className="font-bold text-5xl max-md:text-2xl text-black leading-tight">
              Urological <br /> Association <br /> of Asia
            </h1>
          </div>
        </div>
        <div className="flex-1 max-md:w-full">
          <div className="flex flex-col gap-10 max-md:gap-4 flex-1 text-sm max-md:text-xs">
            <h1 className="">
              Urological Association of Asia (UAA)’s main objective is to
              promote Urology in Asia and to improve the care of Urology
              patients in the region, which has 6% of the world’s population.
              Currently, the Uaa has 25 member associations representing more
              than 25,000 urologists in Asia.
            </h1>
            <h1 className="">
              Apart from the UAA congress, which is now held annually, the UAA
              helps to Asian School of Urology (ASU) and the affiliated
              subspecialty societies, the Asian Society of Endourology (ASE ),
              the Asian Society of Female Urology (ASFU), the Asian Association
              for Urinary Infections and STDs (AAUS), the Asian Society of
              Uro-oncology (APSU ) and the Asia-Pacific Society of
              Reconstructive Urologists and Andrological Surgeons (AP - SRUAS).
            </h1>
            <h1 className="">
              The UAA works closely with International urological bodies such as
              the International Consultations on Urological Diseases (ICUD) the
              Society International Urology (SIU), The American Urological
              Association (AUA), the European Association of Urology (EAU) and
              the Urological Society of Australia and New Zealand.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

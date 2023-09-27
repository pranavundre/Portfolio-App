import React from "react";
import cert1 from "../assets/cert1_badge.png";
import cert2 from "../assets/cert2_badge.png";
import cert3 from "../assets/cert3_badge.png";
import cert4 from "../assets/cert4_badge.png";

const Certifications = () => {
  return (

    <div id="cert" class="bg-black py-10 pt-24  lg:px-44">
      <div class="container mx-auto text-center md:text-left">
        <div class="pt-6 pb-4 text-4xl md:text-6xl text-center font-semibold text-grey">
          Certifications
        </div>

        <div class="flex flex-col items-center mx-8 mt-6 space-y-8">
          {/* <!-- Certification Card 1 --> */}

          <div class="bg-grey w-full text-faintgrey p-6 rounded-lg transition-transform duration-500 transform hover:scale-105 hover:border-gold hover:border-opacity-50">
            <div class="flex flex-col md:flex-row items-center">
              <img
                src={cert1}
                alt="Certification 1 Badge"
                class="w-40 h-40 rounded-full mb-4 md:mr-4"
              />
              <div>
                <div class="text-xl lg:text-2xl font-semibold">
                  AWS Certified Solutions Architect - Associate
                </div>
                <p class="hidden md:flex text-base lg:text-lg font-medium mt-2">
                  Earners of this certification have a comprehensive
                  understanding of AWS services and technologies. They
                  demonstrated the ability to build secure and robust solutions
                  using architectural design principles based on customer
                  requirements.
                </p>
                <p class="text-base lg:text-lg font-normal mt-2">
                  Date Earned: Aug 02, 2023
                </p>
                <a
                  href="https://www.credly.com/badges/ef1e0f0b-9fd0-4126-9013-b09acb948ba6/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gold text-sm"
                >
                  Verify Certificate
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Certification Card 2 --> */}
          <div class="bg-grey w-full text-faintgrey p-6 rounded-lg transition-transform duration-500 transform hover:scale-105 hover:border-gold hover:border-opacity-50">
            <div class="flex flex-col md:flex-row items-center">
              <img
                src={cert2}
                alt="Certification 2 Badge"
                class="w-40 h-40 rounded-full mb-4 md:mr-4"
              />
              <div>
                <div class="text-xl lg:text-2xl font-semibold">
                  Microsoft Certified: Azure Fundamentals
                </div>
                <p class="hidden md:flex text-base lg:text-lg font-medium mt-2">
                  Earners of the Azure Fundamentals certification have
                  demonstrated foundational level knowledge of cloud services
                  and how those services are provided with Microsoft Azure.
                </p>
                <p class="text-base lg:text-lg font-normal mt-2">
                  Date Earned: April 09, 2023
                </p>
                <a
                  href="https://www.credly.com/badges/abd785ba-7acb-46cd-955b-363c485f6ee8/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gold text-sm"
                >
                  Verify Certificate
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Certification Card 3 --> */}
          <div class="bg-grey w-full text-faintgrey p-6 rounded-lg transition-transform duration-500 transform hover:scale-105 hover:border-gold hover:border-opacity-50">
            <div class="flex flex-col md:flex-row items-center">
              <img
                src={cert3}
                alt="Certification 3 Badge"
                class="w-40 h-40 rounded-full mb-4 md:mr-4"
              />
              <div>
                <div class="text-xl lg:text-2xl font-semibold">
                  Microsoft Certified: Security, Compliance, and Identity
                  Fundamentals
                </div>
                <p class="hidden md:flex text-base lg:text-lg font-medium mt-2">
                  Earners of the Security, Compliance, and Identity Fundamentals
                  demonstrate a functional understanding of security,
                  compliance, and identity (SCI) across cloud-based and related
                  Microsoft services.
                </p>
                <p class="text-base lg:text-lg font-normal mt-2">
                  Date Earned: January 16, 2023
                </p>
                <a
                  href="https://www.credly.com/badges/867e8677-ac3a-42d2-a7e7-ec2663f1872e/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gold text-sm"
                >
                  Verify Certificate
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Certification Card 4 --> */}
          <div class="bg-grey w-full text-faintgrey p-6 rounded-lg transition-transform duration-500 transform hover:scale-105 hover:border-gold hover:border-opacity-50">
            <div class="flex flex-col md:flex-row items-center">
              <img
                src={cert4}
                alt="Certification 4 Badge"
                class="w-40 h-40 rounded-full mb-4 md:mr-4"
              />
              <div>
                <div class="text-xl lg:text-2xl font-semibold">
                  Mastering Data Structures & Algorithms using C and C++
                </div>
                <p class="hidden md:flex text-base lg:text-lg font-medium mt-2">
                  I have successfully completed this course on Udemy covering a
                  wide range of popular Data Structures, analytical techniques,
                  recursive algorithms, sorting methods, and hands-on
                  implementation of Data Structures using C and C++.
                </p>
                <p class="text-base lg:text-lg font-normal mt-2">
                  Date Earned: Aug 11, 2023
                </p>
                <a
                  href="https://www.udemy.com/certificate/UC-c7699d4d-960f-48b4-9d61-f242d4176252/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gold text-sm"
                >
                  Verify Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;

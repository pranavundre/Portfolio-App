import React from "react";
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {

  const [state, handleSubmit] = useForm("xknlqabe");
  if (state.succeeded) {
    alert("Thanks for joining!");
    return <p>Thanks for joining!</p>;
  }

  return (
    <section id="contact" class="bg-black py-10 pt-24">
      <div class="container mx-auto text-left">
        <div class="pt-6 pb-4 text-4xl md:text-6xl text-center font-semibold text-grey">
          Contact Me
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 mx-8">
          {/* <!-- Contact Info --> */}
          <div class="bg-grey text-faintgrey p-6 rounded-lg col-span-1">
            <h3 class="text-2xl font-semibold">Contact Information</h3>
            <p class="text-base font-medium mt-2">
              Address: Vitthalwadi, Pune, Maharashtra, India
            </p>
            <p class="text-base font-medium mt-2">
              Email:{" "}
              <a
                href="mailto:undrepranav@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gold hover:underline"
              >
                undrepranav@gmail.com
              </a>
            </p>
            <p class="text-base font-medium mt-2">
              Phone:{" "}
              <a
                href="tel:+918010886466"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gold hover:underline"
              >
                +91 80108 86466
              </a>
            </p>
            <div class="mt-6">
              {/* <!-- Social Media Links --> */}
              <h3 class="text-2xl font-semibold">Social Media</h3>
              <ul class="mt-2">
                <li class="mb-2">
                  <a
                    href="https://github.com/pranavundre"
                    class="text-gold hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="https://www.linkedin.com/in/pranavundre"
                    class="text-gold hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="https://twitter.com/pranavundre"
                    class="text-gold hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="https://www.instagram.com/pranavuuu.dmg"
                    class="text-gold hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://leetcode.com/pranavundre"
                    class="text-gold hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LeetCode
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Contact Form --> */}
          <div class="bg-grey text-faintgrey p-6 rounded-lg col-span-1">
            <h3 class="text-2xl font-semibold">Get in Touch</h3>
             <form
              action="https://getform.io/f/1ec60985-068d-4ae6-930c-85eb2eca08c1"
              method="POST"
            >
              <div className="mt-4">
                <label for="name" class="text-base font-medium mt-4">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  class="w-full bg-grey rounded-lg border border-midgrey p-2 mt-2"
                />
              </div>
              <div className="mt-4">
                <label for="email" class="text-base font-medium">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  class="w-full bg-grey rounded-lg border border-midgrey p-2 mt-2"
                />
              </div>
              <div className="mt-4">
                <label for="message" class="text-base font-medium">
                  Message:
                </label>
                <textarea
                  type="text"
                  name="message"
                  class="w-full bg-grey rounded-lg border border-midgrey p-2 mt-2"
                />
              </div>
              <button
                type="submit"
                class="bg-gold text-grey font-semibold text-lg rounded-lg hover:opacity-80 py-2 px-4 mt-4"
              >
                Submit
              </button>
            </form>

            {/* <form
              onSubmit={handleSubmit}
            >
              <label htmlFor="name" class="text-base font-medium mt-4">
                Name
              </label>
              <input
                id="name"
                type="name" 
                name="name"
                className="w-full bg-grey rounded-lg border border-midgrey p-2 mt-2"
              />
              <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
              />
              <label htmlFor="email" class="text-base font-medium mt-4">
                Email Address
              </label>
              <input
                id="email"
                type="email" 
                name="email"
                className="w-full bg-grey rounded-lg border border-midgrey p-2 mt-2"
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
              <label htmlFor="message" class="text-base font-medium">
                  Message:
              </label>
              <textarea
                id="message"
                name="message"
                class="w-full bg-grey rounded-lg border border-midgrey p-2 mt-2"
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
              <button type="submit" class="bg-gold text-grey font-semibold text-lg rounded-lg hover:opacity-80 py-2 px-4 mt-4" >
                Submit
              </button>
              
            </form> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

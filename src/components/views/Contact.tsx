import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import LinkedinLogo from "../icons/LinkedinLogo";
import { ContactProps } from "../../types";

const Contact: React.FC<ContactProps> = ({ windowWidth }) => {
  const paddingClass = windowWidth > 768 ? "pt-8" : "";
  return (
    <section id="contact">
      <div
        className={`contact-content text-base font-thin text-slate pr-8 pl-3 ${paddingClass}`}
      >
        <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Email</span>
              <EnvelopeIcon
                className="h-7 w-6 text-gray-400"
                aria-hidden="true"
              />
            </dt>
            <dd>
              <a
                className="hover:text-white hover:underline decoration-green"
                href="mailto:sergiopeterson.dev@gmail.com"
              >
                sergiopeterson.dev@gmail.com
              </a>
            </dd>
          </div>
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <LinkedinLogo
                fill="currentColor"
                className="w-6 h-6 text-sky-700"
              />{" "}
            </dt>
            <dd>
              <a
                href="https://www.linkedin.com/in/sergio-w-peterson/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white hover:underline decoration-green"
              >
                Connect with me on LinkedIn!
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Contact;

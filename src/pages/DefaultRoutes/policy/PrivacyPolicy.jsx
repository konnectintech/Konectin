import React from "react";
import { Link } from "react-scroll";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-20 max-md:pb-16 bg-neutral grid grid-cols-1 md:grid-cols-[250px,4fr] grid-rows-[12%,1fr]">
      {/* Sidebar section */}
      <section className="py-8 lg:py-16 px-8 bg-neutral-1000 md:row-span-full">
        <h5 className="text-xl font-bold mb-3">Table Of Contents</h5>
        <div className="flex flex-col">
          <Link
            className="hover:text-primary-800 hover:cursor-pointer my-2 md:ml-4 text-primary-500 font-medium truncate"
            to="provideFeedback"
            spy={true}
            smooth={true}
            offset={-100}
            duration={200}
          >
            How To Provide Feedback
          </Link>
          <Link
            className="hover:text-primary-800 hover:cursor-pointer my-2 md:ml-4 text-primary-500 font-medium truncate"
            to="handleFeedback"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
          >
            How we Handle Feedback
          </Link>
          <Link
            className="hover:text-primary-800 hover:cursor-pointer my-2 md:ml-4 text-primary-500 font-medium truncate"
            to="responseTime"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Response time
          </Link>
          <Link
            className="hover:text-primary-800 hover:cursor-pointer my-2 md:ml-4 text-primary-500 font-medium truncate"
            to="confidentiality"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Confidentiality
          </Link>
        </div>
      </section>

      {/* Header Section */}
      <div className="row-start-1 pt-8 md:pb-12 px-6 md:px-12">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">Feedback Policy</h1>
        <p className="font-medium text-base">
          At Konectin Inc, we value your feedback and strive to provide the best
          possible experience for our customers. We encourage you to share your
          thoughts, opinions, and suggestions with us so we can continue to
          improve our online platform.
        </p>
      </div>

      {/* Content Section */}

      <div className="max-md:mt-6 px-6 md:px-12">
        <p className="text-secondary-600 text-sm">
          Last revised on: 5th April, 2023
        </p>
        <div id="provideFeedback">
          {/* Provide Feedback */}
          <>
            <h5 className="mt-6 text-xl font-bold">How To Provide Feedback</h5>
            <p className="text-xl font-medium my-4">
              There are several ways you can provide feedback on our online
              platform:
            </p>
            <div className="p-2 bg-primary-300 w-full">1. Contact us</div>
            <p className="my-4">
              You can contact our customer support team directly through our
              website or by emailing{" "}
              <a href="mailto:admin@konectin.org">
                <b>admin@konectin.org</b>
              </a>{" "}
              to share your feedback.
            </p>
            <div className="p-2 bg-primary-300 w-full">2. Surveys</div>
            <p className="my-4">
              We may send out surveys to gather feedback on specific features or
              aspects of our platform.
            </p>
            <div className="p-2 bg-primary-300 w-full">3. Reviews</div>
            <p className="my-4">
              You can leave a review on our website or on social media to share
              your thoughts on your experience with our platform.
            </p>
          </>
        </div>

        <div className="" id="handleFeedback">
          {/* Handle Feedback */}
          <>
            <h5 className="mt-8 text-xl font-bold">How We Handle Feedback</h5>
            <p className="text-xl font-medium my-4">
              We take all feedback seriously and use it to improve our platform.
              Here's how we handle feedback:
            </p>
            <div className="p-2 bg-primary-300 w-full">1. Review</div>
            <p className="my-4">
              We review all feedback received to identify common themes and
              areas for improvement.
            </p>
            <div className="p-2 bg-primary-300 w-full">2. Prioritize</div>
            <p className="my-4">
              We prioritize feedback based on the impact it has on the overall
              user experience and the feasibility of implementing changes.
            </p>
            <div className="p-2 bg-primary-300 w-full">3. Implement</div>
            <p className="my-4 font-[Avenir]">
              We implement changes and improvements based on the feedback
              received, and communicate updates to our users through our
              website, email, or social media.
            </p>
          </>
        </div>

        <div id="responseTime">
          <h5 className="mt-8 text-xl font-bold">Response Time</h5>
          <p className="my-4">
            We strive to respond to all feedback within 24hrs, although response
            time may vary depending on the volume of feedback received.
          </p>
        </div>

        <div id="confidentiality">
          <h5 className="mt-8 text-xl font-bold ">Confidentiality</h5>
          <p className="my-4">
            We understand that some feedback may contain personal or sensitive
            information. All feedback received will be kept confidential, and we
            will only use your feedback to improve our platform and services.
          </p>
          <p className="my-8">
            Thank you for choosing Konectin Inc. We appreciate your feedback and
            look forward to continuously improving our online platform to better
            serve our customers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;

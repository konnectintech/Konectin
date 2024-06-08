import Brands from "../../landing/brands";
import CustomFAQ from "../../../../components/customFAQ";
import Testimonials from "../../landing/testimonials";
import MapSection from "../../../../components/map";

function Review() {
  const faqData = [
    {
      question: "What is the Manual Resume Review service?",
      answer:
        "1. Sign Up/Log In: Create or log in to your account.<br/> 2. Select a Template: Select from our well-designed templates.<br/> 3. Input Details: Fill in personal, educational, work, and skills information.<br/> 4. AI Assistance: Our AI helps you craft an ATS-friendly resume.<br/> 5. Download: Save your resume in PDF or Word format and apply for jobs. You can create multiple tailored resumes on your profile",
    },
    {
      question: "How does the Manual Resume Review process work?",
      answer:
        "The Konectin Internship Program connects job seekers, especially students and recent graduates, with internship opportunities in various industries. We partner with companies to match candidates based on their skills and career goals, providing them with valuable work experience and a chance to develop professional skills.",
    },
    {
      question: "How long does it take to get my resume reviewed?",
      answer:
        'To access the Professionalism Blog, follow these steps:<br/> 1. Visit the Konectin website.<br/> 2. Navigate to the top menu bar.<br/> 3. Click on the "Professionalism Blog" option.<br/> 4. You will be redirected to the blog page where you explore various articles and resources.<br/>Remember, you can use the search bar on the blog page to find specific topics or articles. Enjoy reading!',
    },
    {
      question: "Can I get my resume reviewed more than once?",
      answer:
        "At Konectin, we operate on a freemium model. Users can access basic features such as the Resume Builder and Professionalism Blog for free. However, for premium features like the Resume Review service and unlimited access to the ATS Scanner, users would need to subscribe to a paid plan. We are committed to providing affordable and valuable services to our users.",
    },
    {
      question: "How will I receive feedback on my resume? ",
      answer:
        'For more information or support, contact Konectin via the following channels:<br/> 1. Email: You can send an email to our support team at support@konectin.org. Our team typically responds within 24 hours.<br/> 2. Contact Form: You can also fill out the contact form on our website. Simply navigate to the "Contact Us" page, fill in your details and your message, and click "Submit".<br/> 3. Social Media: You can reach out to us via our social media platforms. We are active on X.com, Instagram, LinkedIn, and Facebook.<br/>We are always here to help and look forward to assisting you',
    },
    {
      question: "Can I get a refund if I'm not satisfied with the service?",
      answer:
        'For more information or support, contact Konectin via the following channels:<br/> 1. Email: You can send an email to our support team at support@konectin.org. Our team typically responds within 24 hours.<br/> 2. Contact Form: You can also fill out the contact form on our website. Simply navigate to the "Contact Us" page, fill in your details and your message, and click "Submit".<br/> 3. Social Media: You can reach out to us via our social media platforms. We are active on X.com, Instagram, LinkedIn, and Facebook.<br/>We are always here to help and look forward to assisting you',
    },
  ];
  return (
    <main>
      <Brands />
      <CustomFAQ data={faqData} />
      <Testimonials />
      <MapSection />
    </main>
  );
}

export default Review;

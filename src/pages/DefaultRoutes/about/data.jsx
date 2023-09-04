import {
  AboutProfileImage,
  bulbIcon,
  calendarIcon,
  person5Icon,
  shakeCircleIcon,
  speakerIcon,
  teamIcon,
  variant2Icon,
  variant3Icon,
  variant4Icon,
  variant5Icon,
  variantIcon,
  MustafaIcon,
  DavidIcon,
  FounderIcon,
  MichaelIcon,
} from "../../../assets";

export const Values = [
  {
    icon: shakeCircleIcon,
    name: "Respect",
    rep: person5Icon,
    text: "Respect is a core value guiding us to treat all with dignity. We foster inclusivity, where individuals are valued and heard. Our commitment to respect creates a culture of collaboration with colleagues, customers, and partners.",
    variant: variantIcon,
  },
  {
    icon: speakerIcon,
    name: "Communication",
    rep: person5Icon,
    text: "We prioritize transparency, honesty, and clarity in all interactions, with customers, team members, and stakeholders. Our commitment to communication fosters strong relationships and drives positive outcomes.",
    variant: variant2Icon,
  },
  {
    icon: calendarIcon,
    name: "Responsibility",
    rep: person5Icon,
    text: "We own our actions and decisions, holding ourselves accountable for delivering on commitments. Our integrity and purpose are upheld as we take responsibility for our work and impact on others.",
    variant: variant3Icon,
  },
  {
    icon: teamIcon,
    name: "Teamwork",
    rep: person5Icon,
    text: "We achieve our best results by working together. Through collaboration and support, every voice is heard and contributes to our success. By empowering each other and promoting growth, we maximize our potential as a team.",
    variant: variant4Icon,
  },
  {
    icon: bulbIcon,
    name: "Innovation",
    rep: person5Icon,
    text: "We continuously challenge ourselves to be better and explore new frontiers. Our commitment to creativity and curiosity drives us to innovate and deliver greater value to our customers while remaining ahead in our industry",
    variant: variant5Icon,
  },
];

export const TeamData = [
  {
    name: "Michael Fadehan",
    image: FounderIcon,
    title: "CEO and Founder",
    contact: {
      twitter: "https://twitter.com/michaelfadehan/",
      instagram: "https://www.instagram.com/michael_fadehan?utm_source=qr",
      linkedin: "https://www.linkedin.com/in/michael-fadehan. ",
    },
    bio: (
      <div>
        <p>
          Meet Michael Fadehan, the visionary founder and driving force behind
          Konectin Inc. Hailing proudly from Nigeria, Michael's profound love
          for Africa and unwavering commitment to his fellow Africans has been
          the cornerstone of his journey. With extensive experience in the tech
          industry, he has established himself as a leading expert in career
          development.
        </p>
        <p className="mt-4">
          Fueled by an innate passion for guiding individuals toward their
          educational and professional dreams, Michael launched Konectin with
          the resolute mission of transforming the career development
          experience. His innovative approach seamlessly melds cutting-edge
          technology with personalized guidance, creating a dynamic platform
          that empowers professionals and students across the continent
        </p>
      </div>
    ),
  },
  {
    name: "Mustafa Abdulasis",
    image: MustafaIcon,
    title: "Chief Operations Officer (C.O.O)",
    contact: { twitter: "/", instagram: "/", linkedin: "/" },
    bio: (
      <div>
        <p>
          Mustafa Abdulasis is a passionate and solution-oriented individual
          dedicated to transforming brand and company visions into reality for
          sustainable wealth creation. With a background in Chemical and Polymer
          Engineering, Mustafa's insatiable curiosity led him to further studies
          in product management, entrepreneurship, digital marketing, and risk
          management. He has also gained valuable experience in internal
          auditing, data analytics, business continuity management, and
          information security systems.
        </p>
        <p className="mt-4">
          Driven by the belief in the power of teamwork and collaboration,
          Mustafa has studied the Agile scrum methodology to provide innovative
          solutions to the challenges of the modern world. With a continuous
          thirst for learning and professional development, Mustafa brings
          excellent professional habits and a commitment to delivering value in
          a professional setting.
        </p>
      </div>
    ),
  },
  {
    name: "David Joseph",
    image: DavidIcon,
    title: "Chief Technical Officer (C.T.O)",
    contact: { twitter: "/", instagram: "/", linkedin: "/" },
    bio: (
      <div>
        <p>
          Meet David Joseph the CTO of Konectin inc, with expertise in product
          design and a deep and diverse knowledge base in technology, he thrives
          on crafting innovative solutions that seamlessly bridge the gap
          between user needs and cutting-edge advancements.
        </p>
        <p className="mt-4">
          His passion for creating transformative products drives Konectin to
          push boundaries, redefine possibilities, and shape the future of
          technology. David is a mission-focused and visionary-driven
          individual.
        </p>
      </div>
    ),
  },
  {
    name: "Ajayi Michael",
    image: MichaelIcon,
    title: "Lead Engineer",
    bio: (
      <div>
        <p>
          Ajayi Michael is a proficient and innovative web developer who
          translates digital ideas into captivating online experiences. With a
          strong passion for coding and a keen eye for design, Ajayi has
          established himself as a tech-savvy problem solver in the
          ever-evolving landscape of web development. Armed with a deep
          understanding of front-end and back-end technologies, he crafts
          seamless, user-centric websites that seamlessly blend functionality
          with aesthetics.
        </p>
        <p className="mt-4">
          His journey began with a fascination for how websites work, which led
          him to pursue formal education in computer science and subsequently
          delve into the world of programming. Ajayi's commitment to staying
          abreast of the latest industry trends empowers him to create
          cutting-edge websites that not only meet clients' objectives but also
          exceed their expectations.
        </p>
        <p className="mt-4">
          Beyond his technical prowess, Ajayi is known for his collaborative and
          communicative approach. He thrives in team environments, valuing the
          exchange of ideas that lead to the creation of superior web solutions.
          His methodical problem-solving skills enable him to troubleshoot
          complex issues efficiently, ensuring the optimal performance of
          websites even in challenging scenarios. With an unwavering dedication
          to enhancing user experiences, Ajayi stays attuned to user feedback
          and behavior, refining his designs to provide seamless navigation and
          engagement. Whether it's crafting e-commerce platforms that drive
          conversions or developing interactive web applications, Ajayi
          Michael's portfolio showcases his diverse skill set and unwavering
          commitment to pushing the boundaries of web development.
        </p>
      </div>
    ),
    contact: { twitter: "/", instagram: "/", linkedin: "/" },
  },
  {
    name: "Jane Cooper",
    image: person5Icon,
    profile: AboutProfileImage,
    title: "Founder",
    contact: { twitter: "/", instagram: "/", linkedin: "/" },
  },
];

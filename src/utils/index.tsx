import { RiWindowLine, RiCodeBoxLine, RiCreativeCommonsByLine, RiSearchEyeLine,RiMapPinLine, RiTodoLine, RiBarChartGroupedLine, RiContactsBookLine, RiDiscLine, RiCalendarEventLine, RiAdvertisementFill } from "react-icons/ri";
import { FaRegCirclePlay, FaEarthAsia } from "react-icons/fa6";
import { FiFileText } from "react-icons/fi";
import { FaDribbble } from "react-icons/fa";
import { BiTachometer } from "react-icons/bi";

export const navOption = [
    {
        id: "home",
        lable: "Home",
        path: "/",
    },
    {
        id: "aboutus",
        lable: "About Us",
        path: "/aboutus",
    },
    {
        id: "services",
        lable: "Services",
        path: "services",
    },
]


export const heroScrollImage = [
    {
        id: 1,
        path: "/assest/clients/client-1.png",
        alt: "client-1"
    },
    {
        id: 2,
        path: "/assest/clients/client-2.png",
        alt: "client-2"
    },
    {
        id: 3,
        path: "/assest/clients/client-3.png",
        alt: "client-3"
    },
    {
        id: 4,
        path: "/assest/clients/client-4.png",
        alt: "client-4"
    },
    {
        id: 5,
        path: "/assest/clients/client-5.png",
        alt: "client-5"
    },
    {
        id: 6,
        path: "/assest/clients/client-6.png",
        alt: "client-6"
    }
]


export const service = [
    {
        id: 1,
        icon: <FaDribbble />,
        title: "Design",
        description: "Our web design services can assist you in reclaiming your company's online image. Your business will flourish on the Internet thanks to the combination of style and technology we provide, as well as our experience.",
    },
    {
        id: 2,
        icon: <FiFileText />,
        title: "Development",
        description: "Our development team can construct platforms to help your business thrive by creating powerful customised solutions tailored to your particular requirements. Akeshya makes use of established and effective web development tools.",
    },
    {
        id: 3,
        icon: <FaEarthAsia />,
        title: "Marketing",
        description: "A beautiful website is the foundation of effective marketing. Our customers achieve success where it counts—in the real world—by combining our proven approach with our passion for improving conversions and increasing ROI.",
    },
    {
        id: 4,
        icon: <BiTachometer />,
        title: "Support",
        description: "Since the beginning, we at Akeshya have specialised in website maintenance. We recognise the significance of having your business online 24 hours a day, seven days a week, and we've created a system to ensure that we're always available.",
    }
]

export const process = [
    {
        id: 1,
        title: "1. Planning",
        description: "We help you turn all of your ideas into a digital product that meets all of your requirements. We begin each project by determining its scope and needs. This is done by collaborating closely with you to ensure that we're all on the same page.",
    },
    {
        id: 2,
        title: "2. Design",
        description: "We build our websites carefully through a series of workshops, wire-framing, and user experience (UX) sessions, resulting in a site that reinforces trust, conveys important brand messaging, and provides a return on innovation.",
    },
    {
        id: 3,
        title: "3. Development",
        description: "We provide extensive front-end and back-end development that allows your idea to stand alone. Our in-house developers work side-by-side with the artistic team to seek out natural breakpoints inside the content and order practicality based on acknowledged statistics.",
    },
    {
        id: 4,
        title: "4. Marketing",
        description: "We come up with ideas and campaigns to help your business prosper online. Our campaigns and virtual approach have a verified tune report of accomplishing brilliant results, gathering new leads and site visitors in your website and assist them convert.",
    }
]


export const features = [
    {
        id: 1,
        title: "Web Design",
        icon: <RiWindowLine fill="#ffbb2c" className="text-3xl mr-4" />,
    },
    {
        id: 2,
        title: "Development",
        icon: <RiCodeBoxLine fill="#5578ff" className="text-3xl mr-4" />,
    },
    {
        id: 3,
        title: "Branding",
        icon: <RiCreativeCommonsByLine fill="#e80368" className="text-3xl mr-4" />,
    },
    {
        id: 4,
        title: "Media buying",
        icon: <FaRegCirclePlay fill="#e361ff" className="text-3xl mr-4" />,
    },
    {
        id: 5,
        title: "Search engine",
        icon: <RiSearchEyeLine fill="#47aeff" className="text-3xl mr-4" />,
    },
    {
        id: 6,
        title: "Brand strategy",
        icon: <RiTodoLine fill="#ffa76e" className="text-3xl mr-4" />,
    },
    {
        id: 7,
        title: "Local search marketing",
        icon: <RiMapPinLine fill="#dbce11" className="text-3xl mr-4" />,
    },
    {
        id: 8,
        title: "Lead Tracking & Management",
        icon: <RiBarChartGroupedLine fill="#4233ff" className="text-3xl mr-4" />,
    },
    {
        id: 9,
        title: "Contact management",
        icon: <RiContactsBookLine fill="#b2904f" className="text-3xl mr-4" />,
    },
    {
        id: 10,
        title: "Media management",
        icon: <RiDiscLine fill="#b20969" className="text-3xl mr-4" />,
    },
    {
        id: 11,
        title: "Social scheduling",
        icon: <RiCalendarEventLine fill="#ff5828" className="text-3xl mr-4" />,
    },
    {
        id: 12,
        title: "Ad retargeting",
        icon: <RiAdvertisementFill fill="#29cc61" className="text-3xl mr-4" />,
    }
];
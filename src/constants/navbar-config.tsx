import { IoHome } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { FaBriefcase, FaPencilAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const navbarLinks = {
  home: "/",
  about: "/about",
  projects: "/projects",
  contact: "/contact",
  blog: "/blog",
};

export const menuItems = [
  {
    label: "Home",
    href: navbarLinks.home,
    icon: <IoHome className="size-5 group-hover:text-white" />,
  },
  {
    label: "About",
    href: navbarLinks.about,
    icon: <ImProfile className="size-5 group-hover:text-white" />,
  },
  {
    label: "Projects",
    href: navbarLinks.projects,
    icon: <FaBriefcase className="size-5 group-hover:text-white" />,
  },
  {
    label: "Contact",
    href: navbarLinks.contact,
    icon: <MdEmail className="size-5 group-hover:text-white" />,
  },
  {
    label: "Blog",
    href: navbarLinks.blog,
    icon: <FaPencilAlt className="size-5 group-hover:text-white" />,
  },
];

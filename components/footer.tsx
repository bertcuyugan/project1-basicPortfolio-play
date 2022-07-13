import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fa } from "@fortawesome/free-solid-svg-icons";
// import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  const icon = <FontAwesomeIcon icon={faGithub} />;

  return (
    <div>
      <div className="text-center border-t border-slate-300 p-4 text-slate-400">
        <div>Design and Built by Herbert</div>
        <Link href="https://github.com">
          <a className="text-3xl text-slate-300">{icon}</a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;

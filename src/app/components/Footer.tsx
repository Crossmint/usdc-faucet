import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="flex items-center justify-center w-full h-16">
            <a
                className="flex items-center justify-center"
                href="https://github.com/Crossmint/embedded-crosschain-demo"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faGithub} className="h-6 w-6 mr-2" />
                <span>
                    Made with <FontAwesomeIcon icon={faHeart} className="text-red-500" /> by Crossmint
                </span>
            </a>
        </footer>
    );
};

export default Footer;

import React from "react";
import yt from "../images/youtube.png";
import mail from "../images/gmail.png";
import fiverr from "../images/fiverr.png";
import leetcode from "../images/leetcode.png";
import so from "../images/so.png";
import github from "../images/github.png";

function FavSites() {
  return (
    <div className="grid grid-cols-3 gap-y-10 mt-56 px-5 text-white font-Poppins">
      <a href="https://www.youtube.com">
        <img src={yt} width={60} height={60} />
      </a>
      <a href="https://mail.google.com/mail/u/0/#inbox">
        <img src={mail} width={60} height={60} />
      </a>
      <a href="https://www.github.com">
        <img src={github} width={60} height={60} />
      </a>
      <a href="https://www.leetcode.com">
        <img src={leetcode} width={60} height={60} />
      </a>
      <a href="https://www.stackoverflow.com">
        <img src={so} width={60} height={60} />
      </a>
      <a href="https://www.fiverr.com">
        <img src={fiverr} width={60} height={60} />
      </a>
    </div>
  );
}

export default FavSites;

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const UserReview = ({ item }: any) => {
  const [isReplyOpen, setIsReplyOpen] = useState(false);

  const toggleReply = () => {
    setIsReplyOpen((prevIsReplyOpen) => !prevIsReplyOpen);
  };

  return (
    <div className="b-comment-single" key={item.id}>
      <div className="thumb">
        <Image src={item.avatar} alt="Image" priority />
      </div>
      <div className="content">
        <div className="intro">
          <h4 className="text-white">{item.authorName}</h4>
          <span className="tertiary-text">{item.time}</span>
        </div>
        <p>{item.review}</p>
        <div className="content-meta">
          <button className="open-reply" onClick={toggleReply}>
            Reply
          </button>
          <Link href="/">
            Share
            <span className="material-symbols-outlined">send</span>
          </Link>
        </div>
        {isReplyOpen && (
          <div className="reply-box-wrapper">
            <div className="reply-box">
              <Image src={item.avatar} alt="Image" priority />
              <input
                type="text"
                name="reply-me"
                id="remplyMe"
                placeholder="Join the discussion"
                required
              />
              <button>
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserReview;

"use client";
import { useState } from "react";
import Image from "next/image";

const Comments = ({ item }: any) => {
  const [isReplyOpen, setIsReplyOpen] = useState(false);

  const toggleReply = () => {
    setIsReplyOpen((prevIsReplyOpen) => !prevIsReplyOpen);
  };

  return (
    <div className="b-comment-single slide-top" key={item.id}>
      <div className="thumb">
        <Image src={item.avatar} alt="Image" priority />
      </div>
      <div className="content">
        <h5>{item.authorName}</h5>
        <p className="tertiary-text">{item.time}</p>
        <p>{item.comment}</p>
        <div className="content-meta">
          <button>
            <span className="material-symbols-outlined">thumb_up</span>
          </button>
          <button className="open-reply" onClick={toggleReply}>
            <span className="material-symbols-outlined">chat_bubble</span>
          </button>
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

export default Comments;

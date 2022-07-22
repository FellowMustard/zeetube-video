import React, { useState } from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { BiLike, BiDislike, BiShare } from "react-icons/bi";
import Comments from "../components/comments";

function Video() {
  const [readMore, setReadMore] = useState(false);
  const [videoDesc, setVideoDesc] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et turpis non lorem venenatis ullamcorper eu in sem. Nulla sit amet metus at turpis blandit posuere sed nec nunc. Sed vehicula ullamcorper sapien. In sed diam quis ligula mattis rutrum volutpat sollicitudin libero. Phasellus nec eleifend quam. Donec hendrerit lacus sed elementum lobortis. Curabitur sit amet metus sem. Vivamus ultrices tellus aliquam tortor venenatis luctus eget ac enim. Quisque a lorem eu tellus tincidunt ultricies. Mauris a viverra est. Vestibulum pulvinar nunc eget rhoncus ultricies. "
  );
  return (
    <div className="video-content">
      <section className="media-section">
        <div className="main-video">
          <img
            className="video-thumb"
            src="https://cdn.shopify.com/s/files/1/0295/3245/4956/products/1_d1ab6e83-6330-4d1e-98ab-778f07a732b5_800x.png?v=1652281200"
          />
        </div>
        <p className="video-title">
          Cat Reviews a Mechanical Keyboard (OMG Must Watch!)
        </p>
        <p className="video-stats">
          <span>59,213 views</span>
          <span style={{ fontSize: "0.4rem" }}>●</span>
          <span>1 Days ago</span>
        </p>
        <div className="video-creator">
          <div className="video-creator-info">
            <img
              src="https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg"
              className="card-user"
            ></img>
            <div className="video-user-stats">
              <p className="video-user-stats info">
                <span>Catboard</span>
                <IoCheckmarkCircleSharp />
              </p>
              <p>1.2M Subscribers</p>
            </div>
            <button className="subscribe-button">SUBSCRIBE</button>
          </div>
          <div className="video-creator-interactive">
            <div className="video-interact-button">
              <BiLike className="thumb-main" />
              <span>1k</span>
            </div>
            <div className="video-interact-button">
              <BiDislike className="thumb-main" />
              <span>28</span>
            </div>
            <div className="video-interact-button">
              <BiShare className="thumb-main" />
              <span>Share</span>
            </div>
          </div>
        </div>
        <div className={`video-desc ${readMore ? "more" : "less"}`}>
          {readMore ? videoDesc : `${videoDesc.substring(0, 80)}`}
          {videoDesc.length > 80 && (
            <button
              className={`${readMore ? "readMore-show" : "readMore-hide"}`}
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Read Less" : "...Read More"}
            </button>
          )}
        </div>
        <div className="bottom-border"></div>
        <Comments />
      </section>
      <section className="recommendation-section"></section>
    </div>
  );
}

export default Video;

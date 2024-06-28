import cn from "classnames";
import { useState } from "react";
import { Puff } from "react-loader-spinner";

import { useAppSelector } from "../../store/hooks";

export const VideoReviews = () => {
  const { data } = useAppSelector((state) => state.data);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  const videos = [
    "https://player.vimeo.com/video/958989546?h=d4f32ab887",
    "https://player.vimeo.com/video/959013129?h=c27ffb1585",
    "https://player.vimeo.com/video/958996733?h=ed70a1e551",
    "https://player.vimeo.com/video/959019905?h=2d8d47d419",
    "https://player.vimeo.com/video/959002387?h=fbcab6a183",
    "https://player.vimeo.com/video/959021703?h=baed1d1492",
  ];

  const handleVideoChange = (direction: "next" | "prev") => {
    if (direction === "next") {
      setCurrentVideo((prev) => {
        return prev === videos.length - 1 ? 0 : prev + 1;
      });
    } else {
      setCurrentVideo((prev) => {
        return prev === 0 ? videos.length - 1 : prev - 1;
      });
    }

    setIsVideoLoading(true);
  };

  const handleVideoIsLoaded = () => setIsVideoLoading(false);

  return (
    <section className="video-reviews" id="video-reviews">
      <h2 className="title">{data.videoReviews.title}</h2>

      <div className="video-reviews__scroller">
        <button
          className="video-reviews__arrow"
          onClick={() => handleVideoChange("prev")}
        />

        {isVideoLoading ? (
          <div className="loader">
            <Puff color="#00BFFF" height={100} width={100} />
          </div>
        ) : null}

        <iframe
          className={cn("video-reviews__video", {
            'loading': isVideoLoading,
          })}
          src={videos[currentVideo]}
          title="Vimeo video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          onLoad={handleVideoIsLoaded}
        ></iframe>

        <button
          className="video-reviews__arrow video-reviews__arrow--next"
          onClick={() => handleVideoChange("next")}
        />
      </div>
    </section>
  );
};

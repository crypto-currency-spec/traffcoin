import { useState } from "react";
import { useAppSelector } from "../../store/hooks";

export const VideoReviews = () => {
  const { data } = useAppSelector((state) => state.data);
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    "images/video-reviews/video-1.mp4",
    "images/video-reviews/video-2.mp4",
    "images/video-reviews/video-3.mp4",
    "images/video-reviews/video-4.mp4",
    "images/video-reviews/video-5.mp4",
    "images/video-reviews/video-6.mp4"
  ];

  const handleVideoChange = (direction: "next" | "prev") => {
    if (direction === "next") {
      setCurrentVideo((prev) => {
        return prev === videos.length - 1 ? 0 : prev + 1;
      });

      return;
    }

    setCurrentVideo((prev) => {
      return prev === 0 ? videos.length - 1 : prev - 1;
    });
  };

  // add classes later
  return (
    <section className="video-reviews" id="video-reviews">
      <h2 className="title">{data.videoReviews.title}</h2>

      <div className="video-reviews__scroller">
        <button
          className="video-reviews__arrow"
          onClick={() => handleVideoChange("prev")}
        />

        <iframe
          className="video-reviews__video"
          width="760"
          height="515"
          src={videos[currentVideo]}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>

        <button
          className="video-reviews__arrow video-reviews__arrow--next"
          onClick={() => handleVideoChange("next")}
        />
      </div>
    </section>
  );
};

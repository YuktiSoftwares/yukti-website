import React, { useRef } from "react";
import VideoFeedbackCard from "../components/videoFeedbackCard";
import { feedbackVideos } from "./data/videoFeedbackData";
import MKBox from "components/MKBox";

const VideoFeedback = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 320;

    if (!container) return;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });

      // infinite feel
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        setTimeout(() => {
          container.scrollTo({ left: 0, behavior: "smooth" });
        }, 300);
      }
    }
  };

  return (
    <MKBox
      sx={{
        mt: 8,
        position: "relative",
      }}
    >
      <MKBox
        ref={scrollRef}
        sx={{
          display: "flex",
          gap: 3,
          overflowX: "auto",
          scrollBehavior: "smooth",
          px: 6,
          py: 3,
          scrollbarWidth: "none", // Firefox
          "&::-webkit-scrollbar": {
            // Chrome
            display: "none",
          },
        }}
      >
        <MKBox
          onClick={() => scroll("left")}
          sx={{
            position: "absolute",
            top: "50%",
            left: 8,
            transform: "translateY(-50%)",
            zIndex: 2,
            cursor: "pointer",
            fontSize: 32,
            bgcolor: "rgba(0,0,0,0.6)",
            color: "#fff",
            width: 44,
            height: 44,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ‹
        </MKBox>
        <MKBox
          onClick={() => scroll("right")}
          sx={{
            position: "absolute",
            top: "50%",
            right: 8,
            transform: "translateY(-50%)",
            zIndex: 2,
            cursor: "pointer",
            fontSize: 32,
            bgcolor: "rgba(0,0,0,0.6)",
            color: "#fff",
            width: 44,
            height: 44,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ›
        </MKBox>
        {feedbackVideos.map((item) => (
          <MKBox sx={{ minWidth: 280, flexShrink: 0 }} key={item.id}>
            <VideoFeedbackCard data={item} />
          </MKBox>
        ))}
      </MKBox>
    </MKBox>
  );
};

export default VideoFeedback;

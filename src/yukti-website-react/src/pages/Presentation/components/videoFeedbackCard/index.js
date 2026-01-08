import { useRef, useState } from "react";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Card from "@mui/material/Card";
import PropTypes from "prop-types";

function VideoFeedbackCard({ data }) {
  const videoRef = useRef(null);
  const { videoSrc, poster, name, role } = data;
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (!playing) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setPlaying(!playing);
  };

  return (
    <Card
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: 6,
        transition: "transform 0.3s ease",
        "&:hover": { transform: "translateY(-6px)" },
      }}
      onClick={handlePlay}
    >
      <MKBox position="relative">
        <video
          ref={videoRef}
          src={videoSrc}
          poster={poster}
          loop
          playsInline
          style={{
            width: "100%",
            aspectRatio: "9 / 16",
            maxHeight: 400,
            objectFit: "cover",
            display: "block",
            borderRadius: "16px",
          }}
        />

        {!playing && (
          <MKBox
            position="absolute"
            top="50%"
            left="50%"
            sx={{
              transform: "translate(-50%, -50%)",
              background: "rgba(0,0,0,0.6)",
              width: 60,
              height: 60,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ▶
          </MKBox>
        )}
      </MKBox>

      <MKBox p={2} textAlign="center">
        <MKTypography variant="h6">{name}</MKTypography>
        <MKTypography variant="body2" color="text.secondary">
          {role}
        </MKTypography>
      </MKBox>
    </Card>
  );
}

VideoFeedbackCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string.isRequired,
    role: PropTypes.string,
    videoSrc: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  }).isRequired,
};
export default VideoFeedbackCard;

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { WORKSHOPS } from "../constants";

/**
 * Workshop Preview Component
 * Displays selected workshop details
 */
const WorkshopPreview = ({ workshopId }) => {
  const selectedWorkshop = WORKSHOPS.find((w) => w.id == workshopId);

  if (!selectedWorkshop) {
    return null;
  }

  return (
    <MKBox
      sx={{
        background: "linear-gradient(135deg, #667eea15 0%, #764ba215 100%)",
        border: "2px solid #667eea",
        borderRadius: 2,
        padding: 2.5,
        mb: 3,
      }}
    >
      <MKTypography
        variant="subtitle2"
        sx={{ fontWeight: 700, color: "#667eea", mb: 0.5 }}
      >
        ✓ Workshop Selected
      </MKTypography>
      <MKTypography variant="h6" color="dark" sx={{ fontWeight: 600, mb: 1 }}>
        {selectedWorkshop.name}
      </MKTypography>
      <MKTypography
        variant="caption"
        color="textSecondary"
        sx={{ display: "flex", gap: 2 }}
      >
        <span>⏱️ {selectedWorkshop.duration}</span>
        <span>📊 {selectedWorkshop.level}</span>
      </MKTypography>
    </MKBox>
  );
};

export default WorkshopPreview;

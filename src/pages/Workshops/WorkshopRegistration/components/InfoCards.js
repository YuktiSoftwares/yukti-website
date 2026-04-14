import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { BENEFITS } from "../constants";

/**
 * Info Cards Component
 * Displays informational cards about the workshops
 */
const InfoCards = () => {
  return (
    <Grid item xs={12} lg={5}>
      <Grid container spacing={3}>
        {/* Info Card 1 - Why Join Us */}
        <Grid item xs={12}>
          <Card
            sx={{
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
              borderRadius: 2,
              overflow: "hidden",
              border: "1px solid rgba(0, 0, 0, 0.05)",
            }}
          >
            <MKBox
              sx={{
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                p: 2.5,
              }}
            >
              <MKTypography variant="h6" color="white" sx={{ fontWeight: 700 }}>
                🎯 Why Join Us?
              </MKTypography>
            </MKBox>
            <CardContent>
              <MKBox component="ul" pl={0} m={0}>
                {BENEFITS.map((benefit, idx) => (
                  <MKBox
                    key={idx}
                    component="li"
                    sx={{
                      py: 1,
                      px: 0,
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      color: "#4a5568",
                    }}
                  >
                    <MKBox
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                        flexShrink: 0,
                      }}
                    />
                    <MKTypography variant="body2">{benefit}</MKTypography>
                  </MKBox>
                ))}
              </MKBox>
            </CardContent>
          </Card>
        </Grid>

        {/* Info Card 2 - What You'll Learn */}
        <Grid item xs={12}>
          <Card
            sx={{
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
              borderRadius: 2,
              overflow: "hidden",
              border: "1px solid rgba(0, 0, 0, 0.05)",
            }}
          >
            <MKBox
              sx={{
                background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                p: 2.5,
              }}
            >
              <MKTypography variant="h6" color="white" sx={{ fontWeight: 700 }}>
                📚 What You&apos;ll Learn
              </MKTypography>
            </MKBox>
            <CardContent>
              <MKTypography variant="body2" color="textSecondary" sx={{ lineHeight: 1.8 }}>
                Gain practical skills, industry best practices, and hands-on experience with
                real-world projects. Our workshops are designed to bridge the gap between
                academic learning and industry requirements.
              </MKTypography>
            </CardContent>
          </Card>
        </Grid>

        {/* Info Card 3 - Limited Seats */}
        <Grid item xs={12}>
          <Card
            sx={{
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
              borderRadius: 2,
              overflow: "hidden",
              border: "1px solid rgba(0, 0, 0, 0.05)",
            }}
          >
            <MKBox
              sx={{
                background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
                p: 2.5,
              }}
            >
              <MKTypography variant="h6" color="white" sx={{ fontWeight: 700 }}>
                ✨ Limited Seats
              </MKTypography>
            </MKBox>
            <CardContent>
              <MKTypography variant="body2" color="textSecondary" sx={{ lineHeight: 1.8 }}>
                Our workshops maintain a small batch size to ensure personalized attention
                and quality learning experience. Register now to secure your seat!
              </MKTypography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InfoCards;

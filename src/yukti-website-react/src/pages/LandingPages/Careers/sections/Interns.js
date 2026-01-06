import { Card, Typography, Avatar, Grid, Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import Divyanshu from "assets/images/modify_images/Divyanshu.jpeg";
import chandan from "assets/images/modify_images/chandan.jpg";
import utkarsh from "assets/images/modify_images/utkarsh.jpg";
import MKBox from "components/MKBox";

const testimonials = [
  {
    name: "Utkarsh Mehta",
    role: "Web Developer Intern",
    feedback:
      '"Interning at Yukti Software was an incredible experience! I worked on real-world projects, learned ReactJS, and improved my problem-solving skills."',
    image: utkarsh,
  },
  {
    name: "Chandan Singh",
    role: "Former Intern",
    feedback:
      '"This internship was not just about writing code—it was about thinking like a problem solver. From learning best practices in backend development to understanding how large-scale applications work, I gained insights that no tutorial could teach me. The supportive environment and challenging projects made this an unforgettable journey!"',
    image: chandan,
  },
  {
    name: "Divyanshu Rathore",
    role: "Former Intern",
    feedback:
      '"Before joining Yukti Softwares as an intern, I only had theoretical knowledge of web development. But working on live projects, debugging real-world issues, and collaborating with senior developers completely changed my perspective. The guidance I received helped me transition from an aspiring developer to a confident professional. I wouldn’t be where I am today without this experience!"',
    image: Divyanshu,
  },
];

export default function Interns() {
  return (
    <Container>
      <MKBox sx={{ py: 5, textAlign: "center" }}>
        <Typography variant="h3" fontWeight="bold" mb={3}>
          What Our Interns Say
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {testimonials.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card sx={{ p: 3, textAlign: "center" }}>
                  <Avatar src={item.image} sx={{ width: 100, height: 100, mx: "auto", mb: 2 }} />
                  <Box
                    sx={{
                      height: "5rem", // Set height to limit visible text
                      overflow: "hidden", // Hide overflowing text
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        display: "inline-block",
                        animation: "scrollText 10s linear infinite",
                        "@keyframes scrollText": {
                          "0%": { transform: "translateY(0)" },
                          "100%": { transform: "translateY(-100%)" }, // Moves text upwards
                        },
                      }}
                    >
                      <Typography variant="body2">{item.feedback}</Typography>
                    </Box>
                  </Box>
                  <Typography variant="h6" fontWeight="bold" mt={2}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.role}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </MKBox>
    </Container>
  );
}

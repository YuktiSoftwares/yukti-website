import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Tooltip,
  Typography,
  Avatar,
} from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RelatedCourseSection = ({ courses = [], title = "Other Courses", theme = {} }) => {
  const {
    gradient = "linear-gradient(135deg,#0f0c29,#302b63,#24243e)",
    titleColor = "#fff",
    cardbgColor = "#fff",
    borderColor = "#fff",
  } = theme;
  return (
    <Box sx={{ background: gradient }}>
      <Box sx={{ py: 6, marginX: { xs: 1, md: 6 } }}>
        <Typography
          variant="h3"
          fontWeight={700}
          textAlign="center"
          mb={4}
          sx={{ color: titleColor }}
        >
          {title}
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {courses.map((course) => (
            <Grid item key={course.slug} xs={12} sm={4} md={3}>
              <Card
                sx={{
                  p: 0.5,
                  pb: 1.2,
                  borderRadius: 3,
                  textAlign: "center",
                  background: cardbgColor,
                  border: `1px solid ${borderColor}`,
                }}
              >
                <Tooltip title={course.name}>
                  <CardActionArea component={Link} to={`/pages/courses/${course.slug}`}>
                    <Avatar
                      src={course.image}
                      alt={course.name}
                      variant="rounded"
                      sx={{
                        width: "100%",
                        height: "auto",
                        borderRadius: 2,
                        mb: 1,
                      }}
                    />

                    <CardContent sx={{ p: 0 }}>
                      <Typography variant="subtitle2" fontWeight={600} noWrap>
                        {course.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Tooltip>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

RelatedCourseSection.propTypes = {
  title: PropTypes.string,
  theme: PropTypes.object,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};

export default RelatedCourseSection;

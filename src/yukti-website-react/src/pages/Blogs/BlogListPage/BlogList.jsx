import { Box, Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";

export default function BlogList() {
  return (
    <Box sx={{ maxWidth: 1300, mx: "auto", py: 5 }}>
      <Typography variant="h3" fontWeight="bold" mb={4} textAlign="center">
        Yukti Software Blogs
      </Typography>

      <Grid container spacing={4}>
        {blogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <Card
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 28px rgba(0,0,0,0.18)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={blog.banner}
                alt={blog.title}
                sx={{ objectFit: "cover" }}
              />

              <CardContent>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 1, minHeight: 60 }}>
                  {blog.title}
                </Typography>

                <Typography variant="caption" color="text.secondary">
                  {new Date(blog.date).toLocaleDateString()}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1, height: 60, overflow: "hidden" }}
                >
                  {blog.shortDesc}
                </Typography>

                <Button
                  variant="contained"
                  size="small"
                  sx={{ mt: 2, borderRadius: 2 }}
                  component={Link}
                  to={`/pages/blogs/${blog.id}`}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

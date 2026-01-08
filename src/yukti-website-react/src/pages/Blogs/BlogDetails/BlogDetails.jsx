import { Box, Typography, Grid, Card, CardContent, Divider } from "@mui/material";
import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <Typography variant="h4" textAlign="center" mt={10}>
        Blog not found
      </Typography>
    );
  }

  return (
    <Box sx={{ maxWidth: 1100, mx: "auto", py: 5 }}>
      {/* Hero Image */}
      <Box
        component="img"
        src={blog.banner}
        sx={{
          width: "100%",
          height: 420,
          objectFit: "cover",
          borderRadius: 4,
          mb: 4,
        }}
      />

      <Grid container spacing={4}>
        {/* Left Content */}
        <Grid item xs={12} md={8}>
          {/* Title */}
          <Typography variant="h3" fontWeight="bold" mb={2}>
            {blog.title}
          </Typography>

          {/* Date + Author */}
          <Typography variant="body2" color="text.secondary" mb={3}>
            📅 {new Date(blog.date).toLocaleDateString()}
            &nbsp; | &nbsp; ✍️ Yukti Software Team
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* Blog Content */}
          <Box
            sx={{
              "& p": {
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "#333",
                mb: 2,
              },
              "& h2": {
                mt: 3,
                mb: 1,
                fontWeight: "bold",
              },
              "& ul": { pl: 3, mb: 2 },
            }}
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 3, mb: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" mb={1}>
                Sponsored
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Join Yukti Software Industrial Training and boost your career.
              </Typography>
            </CardContent>
          </Card>

          {/* Contact box */}
          <Card sx={{ borderRadius: 3, mb: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" mb={1}>
                Need Guidance?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Our team is here to help you choose the right tech path.
              </Typography>
            </CardContent>
          </Card>

          {/* Popular Posts (future dynamic) */}
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" mb={1}>
                Popular Posts
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Coming soon…
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

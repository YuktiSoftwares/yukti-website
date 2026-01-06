import { Card, Grid } from "@mui/material";
import MKBox from "components/MKBox";
import React from "react";
import data from "pages/LandingPages/Products/sections/data/ProductCardData";
import MKTypography from "components/MKTypography";
function ProductCard() {
  return (
    <Grid container spacing={5} justifyContent={"center"} mt={2}>
      {data.map((obj, index) => (
        <Grid item xs={12} lg={10} key={index}>
          <Card
            sx={{
              p: 0,
            }}
          >
            <Grid container spacing={8}>
              {/* Text Content */}
              <Grid item xs={12} lg={6}>
                <MKBox sx={{ textAlign: "center", py: 1.5, px: 2, minHeight: "25rem" }}>
                  <MKTypography variant="h2" mt={2} fontWeight="bold">
                    {obj.title}
                  </MKTypography>
                  <MKTypography variant="body2" color="secondary" mt={1.7}>
                    {obj.def}
                  </MKTypography>
                </MKBox>
              </Grid>
              {/* Image Content */}
              <Grid item xs={12} lg={5}>
                <MKBox
                  component="img"
                  src={obj.image} // Ensure each object has an `image` property
                  alt={obj.title} // Optional: Use title as alt text
                  width="100%"
                  my="auto"
                  pb={2}
                  sx={{ minHeight: "25rem", objectFit: "cover" }}
                  borderRadius={"lg"}
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductCard;

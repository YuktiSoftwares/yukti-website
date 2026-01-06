import React from "react";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import { Stack } from "@mui/material";
import PropTypes from "prop-types";

const productPages = [
  { label: "builder", path: "/cart" },
  { label: "stepper", path: "/category" },
  { label: "billing", path: "/product" },
];

const ProductNavigationBar = ({ setState }) => {
  const handleProductShowcase = (pageLabel) => {
    setState(pageLabel);
  };

  return (
    <MKBox
      width="100%"
      py={2}
      px={3}
      bgColor="light"
      shadow="sm"
      borderRadius="lg"
      display="flex"
      justifyContent="center"
      overflow="auto"
    >
      <Stack direction="row" spacing={2}>
        {productPages.map((page) => (
          <MKButton
            key={page.path}
            variant="contained"
            color="primary"
            size="large"
            onClick={() => handleProductShowcase(page.label)}
          >
            {page.label}
          </MKButton>
        ))}
      </Stack>
    </MKBox>
  );
};

ProductNavigationBar.propTypes = {
  setState: PropTypes.func.isRequired,
};

export default ProductNavigationBar;

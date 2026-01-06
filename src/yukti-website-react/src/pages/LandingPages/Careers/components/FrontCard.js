/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
// @mui material components
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

function FrontCard({ color, image, icon, title, description, listItem }) {
  return (
    <MKBox
      display="flex"
      justifyContent="center"
      alignContent="center"
      flexDirection="column"
      borderRadius="lg"
      coloredShadow={color}
      width="100%"
      position="relative"
      zIndex={2}
      p={2}
      px={4}
      sx={{
        backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
          `${linearGradient(
            rgba(gradients[color] ? gradients[color].main : gradients.info.main, 0.0),
            rgba(gradients[color] ? gradients[color].main : gradients.info.main, 0.0)
          )}, url(${image})`,
        backgroundSize: "cover",
        backfaceVisibility: "hidden",
        height: "100%",
      }}
    >
      <MKBox py={2} textAlign="center" lineHeight={1} sx={{ display: "block" }}>
        {icon && (
          <MKTypography variant="h1" color="white" my={2}>
            {typeof icon === "string" ? <Icon>{icon}</Icon> : icon}
          </MKTypography>
        )}
        <MKTypography variant="h4" color="white" gutterBottom>
          {title}
        </MKTypography>
        <MKTypography variant="body2" color="white" opacity={0.8}>
          {description}
        </MKTypography>
      </MKBox>
      <Divider />
      <MKTypography variant="body1" color="white" gutterBottom>
        Key Focus :
      </MKTypography>
      <MKBox>
        <List dense={true}>
          {listItem.map((str, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <ArrowRightIcon color="white" />
              </ListItemIcon>
              <ListItemText
                primary={str}
                sx={{
                  "& .MuiListItemText-primary": { fontSize: "16px", fontWeight: "xxl" },
                }}
              />
            </ListItem>
          ))}
        </List>
      </MKBox>
    </MKBox>
  );
}

// Setting default props for the FrontCard
FrontCard.defaultProps = {
  color: "info",
  icon: "",
  title: "",
  desc: "",
  listItem: [],
};

// Typechecking props for the FrontCard
FrontCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  image: PropTypes.string.isRequired,
  icon: PropTypes.node,
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  listItem: PropTypes.array,
};

export default FrontCard;

import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Header = styled(Box)(({ theme, background }) => ({
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: 300,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  position: "relative",
  textAlign: "center",
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
}));

const WettTippTemplate = ({
  title,
  description,
  sport,
  content,
  date,
  ctaText,
  ctaLink,
}) => {
  return (
    <>
      <Header background={`/assets/images/wett-tipps/${sport.toLowerCase()}-header.webp`}>
        <Box>
          <Typography variant="h1">{title}</Typography>
          <Typography variant="subtitle1">{date}</Typography>
        </Box>
      </Header>

      <Box sx={{ p: 4 }}>
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6">Beschreibung</Typography>
            <Typography variant="body1">{description}</Typography>
            <Button
              href={ctaLink}
              target="_blank"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              {ctaText}
            </Button>
          </CardContent>
        </Card>

        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </Box>
    </>
  );
};

export default WettTippTemplate;
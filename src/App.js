import React, { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  NavBar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";
import { ScaleLoader  } from "react-spinners";

const App = () => {
  const [lodaing, setLodaing] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLodaing(true);
    }, 3000);
  }, []);
  return (
    <HashRouter>
      {lodaing ? (
        <Box sx={{ backgroundColor: "#000" }}>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </Box>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000",
            height: "100vh",
            width: "100%",
          }}
        >
          <ScaleLoader  color="red" />
        </div>
      )}
    </HashRouter>
  );
};

export default App;

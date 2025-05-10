import React from "react";

const Headline = () => {
  return (
    <div id="headline" className="home">
      <script
        src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
        type="module"
      ></script>
      <dotlottie-player
        src="https://lottie.host/ed27f911-aa49-48de-9249-a8762282d1a1/I60WxdJJJx.json"
        background="transparent"
        speed="1"
        style={{ width: "300px", height: "300px" }}
        loop
        autoplay
      ></dotlottie-player>
      <img src="project.imgs/Group 38.png" alt="portfolio" className="portfolio" />
    </div>
  );
};

export default Headline;

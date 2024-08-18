import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assets/data.json";

// Import local images
import image1 from "../assets/image1.jpg";
import images2 from "../assets/images3.jpg";
import images3 from "../assets/crypto.jpg";
// Import other local images as needed

// Create a mapping of local images
const localImages = {
  "./image1.jpg": image1,
  "./images3.jpg": images2,
  "./crypto.jpg": images3,
};

const Work = () => {
  return (
    <div id="work">
      <h2>WORK</h2>
      <section>
        <article>
          <Carousel
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {data.projects.map((project) => (
              <div className="workItem" key={project.title}>
                <img
                  src={
                    project.imagesrc.startsWith("http")
                      ? project.imagesrc
                      : localImages[project.imagesrc] ||
                        "/path/to/default/image.jpg"
                  }
                  alt={project.title}
                />
                <aside>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a target={"blank"} href={project.url}>
                    View Demo
                  </a>
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Work;

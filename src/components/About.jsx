import "../components-css/About.css";

function About() {
  return (
    <section className="about" id="about">
      <h2 className="heading">
        About <span>Me</span>
      </h2>
      <div className="about-content">
        <p>
          {" "}
          Hello! I'm Majeedat, a frontend web developer passionate about
          crafting engaging and user-friendly web experiences. My journey began
          with HTML, CSS, and JavaScript, and over time, I have refined my
          expertise in modern frameworks like React and Next.js.
        </p>

        <p>
          I specialize in building visually appealing, high-performance
          applications that prioritize both functionality and aesthetics.
          Recently, I have been diving deeper into TypeScript to enhance code
          reliability and scalability.
        </p>
        <p>
          Having taken various certification courses in software engineering, I
          bring a strong foundation and continuous curiosity to my work. As an
          introvert, I find solace in my garden, where I grow a variety of
          vegetables and plants. Spending time with my family and my plant
          family helps me recharge after long coding sessions.
        </p>
        <p>
          Whether it is building a new website from scratch or refining an
          existing one, I'm dedicated to tailoring each project to meet your
          unique needs and goals. Let&#39;s connect and turn your web vision into a
          stunning reality!
        </p>
      </div>
    </section>
  );
}

export default About;

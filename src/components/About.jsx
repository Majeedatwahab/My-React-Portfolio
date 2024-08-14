import '../components-css/About.css';

function About() {
  return (
    <section className="about" id="about">
      <h2 className="heading">
        About <span>Me</span>
      </h2>
      <div className="about-content">
        <p>
          {" "}
          Hello! I'm Majeedat, a frontend web developer with a keen eye for
          detail and a love for crafting engaging user experiences. My journey
          began with mastering HTML, CSS, and JavaScript, and over time, I've
          honed my skills in modern frameworks like React and Vue.
        </p>

        <p>
          I'm passionate about creating visually appealing and dynamic web
          applications that delight users. Currently, I'm diving into TypeScript
          and exploring Next.js to expand my development toolkit and stay ahead
          in the industry.
        </p>
        <p>
          Having taken various certification courses in software engineering, I
          bring a strong foundation and continuous curiosity to my work. As an
          introvert, I find solace in my garden, where I grow a variety of
          vegetables and plants. Spending time with my family and my plant
          family helps me recharge after long coding sessions.
        </p>
        <p>
          Whether it’s building a new website from scratch or refining an
          existing one, I'm dedicated to tailoring each project to meet your
          unique needs and goals. Let’s connect and turn your web vision into a
          stunning reality!
        </p>
      </div>
    </section>
  );
}

export default About;

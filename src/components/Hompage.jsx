import '../components-css/Homepage.css';
function Homepage(){
return(
    <>
    <section className="home" id="home">
    <div className="home-content-pic">
     <img src="/assets/hero-pic.jpg" alt="" />
    </div>
    <div className="home-content">
      <h2>Hi, I'm Majeedat.</h2>
      <p className='web'> A frontend web developer with experience in HTML, CSS, JavaScript, React, and Vue.js.</p>
      <div className="socials">
   <a href="https://twitter.com/majeedahwahab" target="_blank">
     <img
       src="./assets/icons8-twitterx.svg"
       alt="twitter-logo"
       loading="lazy"
       className="social-icon"
     />
   </a>
   <a href="https://www.instagram.com/majeedah_wahab" target="_blank">
     <img
       src="./assets/icons8-instagram.svg"
       alt="instagram-logo"
       loading="lazy"
       className="social-icon"
     />
   </a>
   <a
     href="https://www.linkedin.com/in/majeedat-abdulwahab-34b0ab272/"
     target="_blank"
   >
     <img
       src="./assets/icons8-linkedin.svg"
       alt="linkedin-logo"
       loading="lazy"
       className="social-icon"
     />
   </a>
   <a href="https://github.com/Majeedatwahab" target="_blank">
     <img
       src="./assets/icons8-github.svg"
       alt="github-logo"
       loading="lazy"
       className="social-icon"
     />
   </a>
 </div>
    </div>

  </section>
  
    </>
    
)
}

export default Homepage
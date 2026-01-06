import "./Marquee.css";
import aramexLogo from "../../assets/aramex.png";
import appleLogo from "../../assets/apple.png";
import amazonLogo from "../../assets/amazon.png";
import beeLogo from "../../assets/bee.jpeg";
import blueTurtle from "../../assets/blueTurtle.jpeg";
import brandex from "../../assets/brandex.avif";
import philips from "../../assets/philips.png";
import toyota from "../../assets/toyota.jpeg";

const Marquee = () => {
  return (
<>

<div className="marqueeTitle">
    <h2> who do we work with</h2>
</div>
 <div className="marquee">
      <div className="marquee-track">
       <img  src={aramexLogo} alt="Aramex Company Logo" />
       <img src={appleLogo} alt="Apple Company Logo"/>
       <img src={amazonLogo} alt="Amazon Company Logo"/>
       <img src={beeLogo} alt="Bee Company Logo"/>
        <img src={blueTurtle} alt="BlueTurtle Company Logo"/>
        <img src={brandex} alt="Brandex Company Logo"/>
         <img src={philips} alt="Philips Company Logo"/>
         <img src={toyota} alt="Toyota Company Logo"/>
       

        <img src={aramexLogo} alt="Aramex Company Logo" />
       <img src={appleLogo} alt="Apple Company Logo"/>
       <img src={amazonLogo} alt="Amazon Company Logo"/>
       <img src={beeLogo} alt="Bee Company Logo"/>
        <img src={blueTurtle} alt="BlueTurtle Company Logo"/>
        <img src={brandex} alt="Brandex Company Logo"/>
         <img src={philips} alt="Philips Company Logo"/>
         <img src={toyota} alt="Toyota Company Logo"/>

      </div>
    </div>
</>
    
   
  );
};

export default Marquee;

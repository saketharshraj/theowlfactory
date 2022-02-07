import underflowLogo from "../images/logo.jpeg";
import "./Logo.css";

function AnimatedLogo() {
  return (
    <div>
      <img className="logo" src={underflowLogo} alt="theOwlfactory Logo" />
    </div>
  );
}

export default AnimatedLogo;

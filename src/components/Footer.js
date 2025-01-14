/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer" css={CSS}>
      <Link to="/">
        <div className="">
          <span className="">
            
          </span>
          <div className="logo__text">
            <span></span>
            <span></span>
          </div>
        </div>
      </Link>
  

      <div className="sign">
        {" "}
        <a
          href="https://www.linkedin.com/pulse/sdp-madhu-nedunuri/?trackingId=h0qO5fzIRzudQX8Hx68j4w%3D%3D"
          target="_blank"
          rel="noreferrer"
        >
          <i className=""></i>
        </a>
      </div>

      
    </div>
  );
}

const CSS = css`
  height: 4.5rem;
  background: rgb(3, 4, 94);
  background: linear-gradient(
    45deg,
    rgba(3, 4, 94, 1) 0%,
    rgba(2, 62, 138, 1) 33%,
    rgba(0, 119, 182, 1) 100%
  );
  color: var(--powder-blue);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: 'Roboto', sans-serif;

  a {
    color: var(--powder-blue);
  }

  .logo {
    display: flex;
    width: 200px;
    height: 2.5rem;
    padding-left: 1rem;

    .logo-ico {
      color: var(--sky-blue-crayola);
      font-size: 2.5rem;
    }

    .logo__text {
      font-family: "Raleway", sans-serif;
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-transform: capitalize;
      margin-left: 5px;
      padding-left: 5px;
      font-size: 18px;
      border-left: 2px solid var(--powder-blue);
    }
  }

  .sign {
    a {
      color: var(--sky-blue-crayola);
      transition: color 0.3s ease;
    }

    a:hover {
      color: var(--powder-blue);
    }
  }

  .copyright {
    text-align: center;
  }

  @media screen and (max-width: 710px) {
    flex-direction: column;
    height: 25vh;
  }
`;

export default Footer;

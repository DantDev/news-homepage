import React from "react"
import Logo from "./assets/images/logo.svg"
import heroImg from "./assets/images/image-web-3-desktop.jpg"
import heroImgMobile from "./assets/images/image-web-3-mobile.jpg"
import retroPc from "./assets/images/image-retro-pcs.jpg"
import topLaptop from "./assets/images/image-top-laptops.jpg"
import gamingGrowth from "./assets/images/image-gaming-growth.jpg"

function App() {

  return (
      <div className="container">
        <nav className="nav">
          <div className="logo-div">
          <img className="logo" src={Logo} />
          </div>
          <div className="navigation">
            <input type="checkbox" className="toggle-menu"/>
            <div className="hamburger"></div>
            <label className="menu-overlay" ></label>
            <ul className="menu">
              <li className="nav-item"><a href="">Home</a></li>
              <li className="nav-item"><a href="">New</a></li>
              <li className="nav-item"><a href="">Popular</a></li>
              <li className="nav-item"><a href="">Trending</a></li>
              <li className="nav-item"><a href="">Categories</a></li>
            </ul>
          </div>
        </nav>
          <div className="content-1">
              <img className="hero-img" src={heroImg}/>
              <img className="hero-img-mobile" src={heroImgMobile}/>
            <div className="content-1-info">
              <h1 className="content-1-title">The Bright Future of Web 3.0?</h1>
              <div>
                <p className="content-1-text"> We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                <button className="content-1-btn">READ MORE</button>
              </div>
            </div>
          </div>

          <div className="content-2">
            <h1 className="content-2-title">New</h1>
            <h3 className="content-2-subtitle"><a href="">Hydrogen VS Electric Cars</a></h3>
            <p className="content-2-text">Will hydrogen-fueled cars ever catch up to EVs?</p>
            <hr/>
            <h3 className="content-2-subtitle"><a href="">The Downsides of Ai Artistry</a></h3>
            <p className="content-2-text">What are the possible adverse effects of on-demand Ai image generation?</p>
            <hr/>
            <h3 className="content-2-subtitle"><a href="">Is VC Funding Drying Up?</a></h3>
            <p className="content-2-text">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </div>

          <div className="content-3">
            <div className="content-3-single">
              <a href="">
              <img className="content-3-img" src={retroPc}/>
              <div className="content-3-info">
                <h2 className="content-3-num">01</h2>
                <p className="content-3-title">Reviving Retro PCs</p>
                <p className="content-3-text">What happens when old PCs are given modern upgrades?</p>
              </div>
              </a>
            </div>
            
            <div className="content-3-single">
              <a href="">
              <img className="content-3-img" src={topLaptop} />
              <div className="content-3-info">
                <h2 className="content-3-num">02</h2>
                <p className="content-3-title">Top 10 Laptops of 2022</p>
                <p className="content-3-text">Our best picks for various needs and budgets.</p>
              </div>
              </a>
            </div>
            
            <div className="content-3-single">
              <a href="">
              <img className="content-3-img" src={gamingGrowth} />
              <div className="content-3-info">
                <h2 className="content-3-num">03</h2>
                <p className="content-3-title">The Growth of Gaming</p>
                <p className="content-3-text"> How the pandemic has sparked fresh opportunities.</p>
              </div>
              </a>
            </div>
            
          </div>
      </div>
    )
}

export default App

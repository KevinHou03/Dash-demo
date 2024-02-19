import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import '../App.css';


function HeroSection() {
  let dynamicText = document.getElementById("dynamic-text");
  let texts = ["EASY", "FAST"];
  let currentIndex = 0;

  setInterval(() => {
    // 应用翻转动画
    dynamicText.style.animation = "flip 0.5s ease-in-out";
    
    // 动画结束后切换文本并移除动画，以便下一次切换
    dynamicText.addEventListener('animationend', () => {
      currentIndex = (currentIndex + 1) % texts.length;
      dynamicText.innerHTML = texts[currentIndex];
      dynamicText.style.animation = ''; // 移除动画
    }, {once: true});
  }, 1000); // 每秒切换一次

  return (
    <div className='hero-container'>
      {/* put video */}
      <video src="/public/videos/dash-2.mp4" autoPlay loop muted></video>
      {/* <h1 id = 'title_text'>DASH Analytics</h1> */}
      <div id = "slogan">
        <span id = 'basic_text'>Data Visualization made</span> <span id="dynamic-text" > EASY</span>
      </div>
      <div className='hero-btns'>
        <Button className = "btns"
                buttonStyle = 'btn--outline'
                buttonSize = 'btn--large'>
            Get Started
        </Button>

        <Button className = "btns"
                buttonStyle = 'btn--primary'
                buttonSize = 'btn--large'>
            Learn More <i className='far fa-play-circle'></i>
        </Button>

      </div>

    </div>
  )
}

export default HeroSection


/*
import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import '../App.css';


function HeroSection() {
  return (
    <div className='hero-container'>
    
//       <video src="/public/videos/background-video.mp4" autoPlay loop muted></video>
//       <h1 id = 'title_text'>DASH Analytics</h1>
//       <span id = 'basic_text'>Data Visualization made EASY</span>
//       <div className='hero-btns'>
//         <Button className = "btns"
//                 buttonStyle = 'btn--outline'
//                 buttonSize = 'btn--large'>
//             Get Started
//         </Button>

//         <Button className = "btns"
//                 buttonStyle = 'btn--primary'
//                 buttonSize = 'btn--large'>
//             Learn More <i className='far fa-play-circle'></i>
//         </Button>

//       </div>

//     </div>
//   )
// }

// export default HeroSection

// */
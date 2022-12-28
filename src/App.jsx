import MusicPlayer from "./components/MusicPlayer";
import MusicFlow from "./components/MusicFlow";
import sunImage from './assets/sun.png'
import moonImage from './assets/moon.png'
//default theme
sessionStorage.setItem("theme","dark")

function App() { 
  const switchTheme = () =>{
    const toggle = document.getElementById("toggle")
    const toggleSun = document.getElementById("sun")
    const toggleMoon = document.getElementById("moon")
    const downloadIcon = document.getElementById("download")
    const repeatIcon = document.getElementById("repeat")
    const playIcon = document.getElementById("play")
    const playButton = document.querySelector(".play-button")
    const pauseButton = document.getElementById('pause')
    //dark icons
    const downloadDark = document.getElementById("downloadDark")
    const repeatDark = document.getElementById("repeatDark")
    const playDark = document.getElementById("playDark")
    const pauseDarkButton = document.getElementById('pauseDark')

    toggleSun.addEventListener('click',()=>{
    sessionStorage.setItem("theme","light")
    document.body.style.backgroundColor="#ffffff"
    playButton.style.backgroundColor="#ffffff"
    document.getElementById("music-player").style.backgroundColor="#ffffff"
    document.getElementById("music-title").style.color="#141414"
    toggle.style.transition="all 700ms ease"
    toggle.style.transform="translateX(50px)"
    toggleSun.style.display="none"
    toggleMoon.style.display="flex"
    downloadIcon.style.display="none"
    downloadDark.style.display="block"
    repeatIcon.style.display="none"
    repeatDark.style.display="block"
    playIcon.style.display="none"
    playDark.style.display="none"
    pauseButton.style.display="none"
    pauseDarkButton.style.display="block"
    })

    toggleMoon.addEventListener('click',()=>{
    sessionStorage.setItem("theme","dark")
    document.body.style.backgroundColor="#141414"
    playButton.style.backgroundColor="#454545"
    document.getElementById("music-player").style.backgroundColor="#141414"
    document.getElementById("music-title").style.color="#ffffff"
    toggle.style.transition="all 700ms ease"
    toggle.style.transform="translateX(0px)"
    toggleSun.style.display="block"
    toggleMoon.style.display="none"
    downloadIcon.style.display="block"
    downloadDark.style.display="none"
    repeatIcon.style.display="block"
    repeatDark.style.display="none"
    playIcon.style.display="none"
    playDark.style.display="none"
    pauseButton.style.display="block"
    pauseDarkButton.style.display="none"
    })
  }

  return (
    <div className="App">
        <MusicPlayer />
        <div className="switch-theme">
          <button className="switch-toggle" id="toggle">
              <img id="sun" onClick={switchTheme} className="toggle-image" src={sunImage} alt="Switch Theme" title="Switch theme" />
              <img id="moon" onClick={switchTheme} className="toggle-image" src={moonImage} alt="Switch Theme" title="Switch theme" />
          </button>
        </div>

          <div className="aside">
              <ul>
                <li id="flow1">
                  <MusicFlow
                  color="#b92727"
                  />
                </li>
                <li id="flow2">
                  <MusicFlow
                  color="#4bccec"
                  />
                </li>
                <li id="flow3">
                  <MusicFlow
                  color="#ffb42a"
                  />
                </li>
                <li id="flow4">
                  <MusicFlow
                  color="#c358ee"
                  />
                </li>
                <li id="flow5">
                  <MusicFlow
                  color="#542beb"
                  />
                </li>
                <li id="flow6">
                  <MusicFlow
                  color="#7fee7f"
                  />
                </li>
                <li id="flow7">
                  <MusicFlow
                  color="#5de44c"
                  />
                </li>
                <li id="flow8">
                  <MusicFlow
                  color="#ffdf2a"
                  />
                </li>
                <li id="flow9">
                  <MusicFlow
                  color="#e3a9fa"
                  />
                </li>
                <li id="flow10">
                  <MusicFlow
                  color="#909090"
                  />
                </li>
                <li id="flow11">
                  <MusicFlow
                  color="#fff"
                  />
                </li>
                <li id="flow12">
                  <MusicFlow
                  color="#e4239a"
                  />
                </li>
              </ul>
          </div>
    </div>
  );
}

export default App;

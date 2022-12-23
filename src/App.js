import MusicPlayer from "./components/MusicPlayer";
import MusicFlow from "./components/MusicFlow";

function App() {
  return (
    <div className="App">
        <MusicPlayer />

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

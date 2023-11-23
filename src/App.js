import logo from "./logo.svg";
import "./App.css";

import GitHome from "./components/GitHome/GithubHome";
import GitBodySection from "./components/GitBodySection/GitBodySection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <GitHome />
      <GitBodySection />
      <Footer />
    </>
  );
}

export default App;

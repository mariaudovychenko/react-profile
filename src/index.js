import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="mari.jpg" alt="Maria Udovychenko" />;
}

function Intro() {
  return (
    <div>
      <h1>Maria Udovychenko</h1>
      <p>
        Hi, I'm Mari, a passionate full-stack developer creating professional
        business applications. I love traveling, reading, and coding 🤓. My
        ultimate dream? A journey around our beautiful world!
      </p>
    </div>
  );
}

function SkillList(props) {
  return (
    <div className="skill-list">
      <Skill skillName="React" emoji="👍💻" color="#087EA4" />
      <Skill skillName="HTML + CSS" emoji="💪" color="orangered" />
      <Skill skillName="JavaScript" emoji="💪" color="#F6D938" />
      <Skill skillName="Web Design" emoji="💪" color="green" />
      <Skill skillName="Git and GitHub" emoji="👍💻" color="#E97500" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skillName} </span>
      <span>{props.emoji} </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

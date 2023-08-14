import { useState } from "react";
import PropTypes from "prop-types";

function App() {
  return (
    <div>
      <div>
        <TextExpander>
          Space travel is the ultimate adventure! Imagine soaring past the stars
          and exploring new worlds. It's the stuff of dreams and science
          fiction, but believe it or not, space travel is a real thing. Humans
          and robots are constantly venturing out into the cosmos to uncover its
          secrets and push the boundaries of what's possible.
        </TextExpander>

        <TextExpander
          collapsedNumWords={20}
          expandButtonText="Show text"
          collapseButtonText="Collapse text"
          buttonColor="#ff6622"
        >
          Space travel requires some seriously amazing technology and
          collaboration between countries, private companies, and international
          space organizations. And while it's not always easy (or cheap), the
          results are out of this world. Think about the first time humans
          stepped foot on the moon or when rovers were sent to roam around on
          Mars.
        </TextExpander>

        <TextExpander expanded={true} className="box">
          Space missions have given us incredible insights into our universe and
          have inspired future generations to keep reaching for the stars. Space
          travel is a pretty cool thing to think about. Who knows what we'll
          discover next!
        </TextExpander>
      </div>
    </div>
  );
}

function TextExpander({
  collapsedNumWords = 30,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#000",
  expanded = false,
  className,
  children,
}) {
  const [isExpended, setIsExpended] = useState(expanded);
  console.log(isExpended);

  const buttonStyle = {
    backgroundColor: "transparent",
    padding: "0",
    border: "0",
    color: buttonColor,
    marginLeft: "15px",
  };

  const textStyle = {
    maxWidth: `${collapsedNumWords}ch`,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    display: "inline-block",
  };

  function handleExpansion() {
    setIsExpended((exp) => !exp);
  }

  return (
    <div className={className ? `${className}` : ""}>
      <span style={isExpended ? null : textStyle}>{children}</span>
      <button style={buttonStyle} onClick={handleExpansion}>
        {isExpended ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}

TextExpander.propTypes = {
  collapsedNumWords: PropTypes.number,
  expandButtonText: PropTypes.string,
  collapseButtonText: PropTypes.string,
  buttonColor: PropTypes.string,
  expanded: PropTypes.bool,
  className: PropTypes.string,
};

export default App;

import React, { useState } from "react";
import Meta from "@/components/Meta";
import styles from "@/styles/KindleHighlightFormatter.module.scss"

export default function KindleHighlightFormatter() {
  const [inputValue, setInputValue] = useState("Paste text here");
  const [outputValue, setOutputValue] = useState("Formatted highlights will appear here");

  const processInput = (input) => {
    let locations = [];
    let highlights = []
    let output = [];
    let lines = input.split('\n');

    let lastType = "";
    let marker = "";
    let highlight = "";

    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes("Note")) {
        i += 1;
        continue;
      } else if (lines[i].includes("Highlight")) {
        let loc = lines[i].replace(/Highlight\(.*\)/, "").replace("Location", "location:").replace("Page", "p.").replace("-", "–");
        marker = loc;
        lastType = "marker";
      } else if (lastType === "highlight" || lastType === "") {
        output.push('## ' + lines[i]);
        lastType = "title";
      } else {
        highlight = lines[i];
        lastType = "highlight";
        output.push(highlight + marker);
        highlight = "";
        marker = "";
      }
    }

    let outputString = "";
    for (let i = 0; i < output.length; i++) {
      if (output[i].includes('##')) {
        outputString += output[i] + '\n';
      } else {
        outputString += output[i] + '\n\n---\n'
      }
    }

    setOutputValue(outputString);
  }

  const handleCopyToClipboard = () => {
    if ('clipboard' in navigator) {
      navigator.clipboard.writeText(outputValue)
        .then(function () {
          alert('Text copied to clipboard');
        })
        .catch(function (err) {
          console.error('Failed to copy text: ', err);
        });
    } else {
      console.warn('Clipboard API not supported');
      alert('Your browser does not support the Clipboard API. Please use a modern browser to copy text.');
    }
  };


  return (
    <>
      <Meta
        title="Kindle Highlight MD Formatter"
        description="Tool for formatting exported Kindle notebook files as MD notes."
      />
      <section className={styles.section}>
        <h2>Kindle Highlight MD Formatter</h2>
        <div className={styles.container}>
          <div>
            <h3>About the tool</h3>
            <p>A self-indulgent tool I use to import my Kindle highlights into Obsidian. Future features include customizable output and support for importing annotations.</p>
            <p><em>Note</em>: current version does not support importing notes/annotations. These must be inputted manually in your own text editing document (for now).</p>
          </div>
          <div>
            <h3>Instructions</h3>
            <ol>
              <li>Open notebook for book on Kindle desktop app</li>
              <li>Click share button and export notebook to file</li>
              <li>Open file in broswer</li>
              <li>Copy text starting from first line with Highlight(...) (<b>do not copy book title</b>)</li>
              <li>Paste text in input section</li>
              <li>Click output box to copy to clipboard</li>
            </ol>

          </div>
        </div>

        <div className={styles.container}>
          <div>
            <h3>Input</h3>
            <form action="">
              <textarea
                name="input"
                id=""
                value={inputValue}
                onClick={(e) => {
                  e.target.select();
                }}
                onChange={(e) => {
                  setInputValue(e.target.value)
                  processInput(e.target.value);
                }}
                rows="40" />
            </form>
          </div>
          <div>
            <h3>Output</h3>
            <form action="">
              <textarea
                name="output"
                id=""
                value={outputValue}
                onClick={handleCopyToClipboard}
                rows="40"
                readOnly />
            </form>
          </div>
        </div>

        <h3>Updates</h3>
        <p>Version 1.0. Last updated 2024 March 23.</p>
        <ul>
          <li>2024-03-23: tool created & deployed</li>
        </ul>
      </section>
    </>
  )
}
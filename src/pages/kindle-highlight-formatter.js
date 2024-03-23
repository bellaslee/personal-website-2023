import React, { useState } from "react";
import Meta from "@/components/Meta";
import styles from "@/styles/KindleHighlightFormatter.module.scss"

export default function KindleHighlightFormatter() {
  const [inputValue, setInputValue] = useState("Paste text here");
  const [outputValue, setOutputValue] = useState("Formatted highlights will appear here");

  const processInput = (input) => {
    let locations = [];
    let highlights = []
    let lines = input.split('\n');

    for (let i = 0; i < lines.length; i++) {
      if (i % 2 === 0) {
        if (lines[i].includes("Note")) {
          i += 1;
          continue;
        }

        let loc = lines[i].replace(/Highlight\(.*\)/, "").replace("Location", "location:");
        locations.push(loc);
      } else {
        highlights.push(lines[i]);
      }
    }

    let output = [];
    for (let i = 0; i < locations.length; i++) {
      output.push(highlights[i] + locations[i])
    }
    output = output.join('\n\n---\n')
    console.log(output);
    setOutputValue(output);
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
      <Meta title="Kindle Highlight to MD Converter" />
      <section className={styles.section}>
        <h2>Kindle Highlight Formatter</h2>
        <p>A self-indulgent tool I use to import my Kindle highlights into Obsidian. Future features include customizable output and support for importing annotations.</p>
        <p><em>Note</em>: current version does not support importing notes/annotations; they must be inputted manually in your own text editing document.</p>
        <h3>Instructions</h3>
        <ol>
          <li>Open notebook for book on Kindle desktop app</li>
          <li>Click share button and export notebook to file</li>
          <li>Open file in broswer</li>
          <li>Copy text starting from first line with Highlight(...) (<b>do not copy book title!</b>)</li>
          <li>Paste text in input section</li>
          <li>Click output box to copy to clipboard</li>
        </ol>

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
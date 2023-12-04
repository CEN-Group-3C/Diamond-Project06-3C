import React, { useRef, useState } from "react";

const BlockConfigEditor = ({ initialConfig, onSave, onCancel }) => {
  const config = useRef(null);
  const generatorStub = useRef(null);

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    let configData = config.current.value;
    let generatorStubData = generatorStub.current.value;

    let parsedConfig = configData.replace(/'/g, '"');
    parsedConfig = JSON.parse(parsedConfig);

    onSave(parsedConfig, generatorStubData);
  };

  const openLink = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "#F4F4F5",
          padding: "15px",
          borderRadius: "20px",
          width: "450px",
          marginRight: "10px",
          marginTop: "5px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              height: "50px",
              marginBottom: "10px",
              textAlign: "center",
              background: "#5babde",
              padding: "5px",
              borderRadius: "20px",
              width: "350px", 
            }}
          >
            <h2
              style={{
                marginTop: "5px",
                color: "white",
                fontSize: "1.2em",
                fontWeight: "bold",
              }}
            >
              Configure New Block
            </h2>
          </div>
          <div
            style={{
              cursor: "pointer",
              borderRadius: "20px",
              marginBottom: "10px",
              padding: "5px",
              width: "50px", 
              height: "50px", 
            }}           
          >
            <h2
              style={{
                marginTop: "-14px",
                fontSize: "3em",
                fontWeight: "bold",
                color: "#3D5C82",
              }}
              onClick={openLink}
            >
              ?
            </h2>
          </div>
        </div>
        <form onSubmit={handleSave}>
          <textarea
            ref={config}
            id="config"
            placeholder="Type Block Definition here..."
            rows={8}
            style={{
              borderRadius: "20px",
              padding: "8px",
              border: "2px solid #5babde",
              width: "100%",
              height: "50%",
            }}
          />
          <textarea
            ref={generatorStub}
            id="generatorStub"
            placeholder="Type Generator Stub here..."
            rows={10}
            cols={50}
            style={{
              borderRadius: "20px",
              padding: "8px",
              border: "2px solid #5babde",
              width: "100%",
            }}
          />
          <div className="configure-block-form-actions">
            <button
              style={{
                borderRadius: "8px",
                margin: "8px",
                padding: "8px 16px",
                cursor: "pointer",
                border: "2px solid #5babde",
              }}
              className="btn configure-block-btn"
              onMouseOver={(e) => (e.target.style.backgroundColor = "#f3d250")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "")}
            >
              Save
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="btn configure-block-btn"
              style={{
                borderRadius: "8px",
                margin: "8px",
                padding: "8px 16px",
                cursor: "pointer",
                border: "2px solid #5babde",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#f3d250")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      {isPopupVisible && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      style={{
        backgroundColor: "#F4F4F5",
        padding: "15px",
        borderRadius: "20px",
        width: "800px",
        marginBottom: "500",
      }}
    >
      {/* Blue container for the title */}
      <div
        style={{
          height: "50px",
          marginBottom: "10px",
          textAlign: "center",
          background: "#5babde",
          padding: "5px",
          borderRadius: "20px",
        }}
      >
        <h2
          style={{
            marginTop: "5px",
            color: "white",
            fontSize: "1.2em",
            fontWeight: "bold",
          }}
        >
          Block Configuration Information
        </h2>
      </div>

      {/* Block configuration information */}
      <div>
        <h3>Block Definition</h3>
        <p style={{ textAlign: "left", marginLeft: "70px", }}>
          Enter your block definition using JSON format. Define the block's
          shape, inputs, outputs, and features. 
          <br />
          Example:
          <br />
          <code style={{ display: "block", textAlign: "left" }}>
            Blockly.Blocks['your_custom_block'] = {'{'} init: function() {'{'}
            <br />
            // Block definition code here {'}'} {'}'};
          </code>
        </p>
      </div>

      {/* Stub Generator information */}
      <div>
        <h3>Stub Generator</h3>
        <p style={{ textAlign: "left", marginLeft: "70px", }}>
          Write the generator stub code in JavaScript. This code specifies how
          the block generates code in your target language. Use the
          Blockly.Generator namespace. Include placeholders for inputs and code
          logic.
          <br />
          Example:
          <br />
          <code style={{ display: "block", textAlign: "left" }}>
            Blockly.JavaScript['your_custom_block'] = function(block) {'{'}
            <br />
            // Generator stub code here
            <br />
            return 'Generated code...';
            <br />
            {'}'};
          </code>
        </p>
      </div>

      {/* More Information link */}
      <p>
        <a
          href="https://developers.google.com/blockly/guides/create-custom-blocks/blockly-developer-tools"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#3D5C82", // Set initial color to blue
          
            transition: "color 0.3s", // Add a smooth color transition
          }}
          onMouseOver={(e) => (e.target.style.color = "#f3d250")} // Change color on hover
          onMouseOut={(e) => (e.target.style.color = "#3D5C82")} // Reset color on mouse out
        >
          More Information
        </a>
      </p>
  

      {/* Close button */}
      <button
        className="btn configure-block-btn"
        style={{
          borderRadius: "8px",
          margin: "8px",
          padding: "8px 16px",
          cursor: "pointer",
          border: "2px solid #5babde",
          marginLeft: "350px",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#f3d250")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "")}
        onClick={closePopup}
      >
        Close
      </button>
    </div>
  </div>
      )}
    </div>
  );
};

export default BlockConfigEditor;

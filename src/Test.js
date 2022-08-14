import React, { useState } from "react";

export default function Test() {
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [createObj, setCreateObj] = useState({});
  const [formValues, setFormValues] = useState([{ key: "", value : ""}])

  const handleObj = (e) => {
    e.preventDefault();
    console.log("check");
    setCreateObj({ ...createObj, [key]: value });
    setKey("");
    setValue("");
  };
  const genreateJson = (e) => {
    const updatedJSON = createObj;
    const handleSaveToPC = (jsonData) => {
      const fileData = JSON.stringify(jsonData);
      const blob = new Blob([fileData], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = "filename.json";
      link.href = url;
      link.click();
    };
    handleSaveToPC(updatedJSON);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="text-center">Add Attributes</h3>
            {console.log("createjson", createObj)}
            <form onSubmit={handleObj}>
              <br />
              <label htmlFor="Key">key</label>
              <input
                type="text"
                value={key}
                onChange={(e) => setKey(e.target.value)}
              />
              <label htmlFor="Key">value</label>

              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button type="submit">click</button>
            </form>
            <button onClick={genreateJson}>generate json</button>
          </div>
          <div className="col-lg-6 ">
            <h4 className="text-center">Show Json</h4>
            {"{"}
            {Object.entries(createObj).map(([key, value], i) => {
              return (
                <div key={i}>
                  <span>"{key}" :</span>
                  <span>"{value}" </span>
                </div>
              );
            })}
            {"}"}
          </div>
        </div>
      </div>
    </>
  );
}

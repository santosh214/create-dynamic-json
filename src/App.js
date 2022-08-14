import "./App.css";
import { useState } from "react";
import Test from "./Test";
// import fs from "file-system";
function App() {
  const [key, setKey] = useState("");
  const [value2, setValue2] = useState("");
  const [createObj, setCreateObj] = useState({});
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [desc, setDesc] = useState("");
  const [sellerFee, setSellerFee] = useState(0);
  const [image, setImage] = useState("");

  const [attributes, setAttributes] = useState([]);
  const [traitType, setTraitType] = useState("");
  const [value, setValue] = useState("");
  const [collection, setCollection] = useState({
    name: "",
    family: "",
  });
  const [properties, setProperties] = useState({
    files: [
      {
        uri: "0.png",
        type: "image.png",
      },
    ],
    category: "image",
    creators: [
      {
        address: "CYkCiA1a2sBTfXoK1gQQpMdLcFVW7veHy3WqPw5d8U97",
        share: 0,
      },
      {
        address: "GruSFAjP7gtmJ9k3SBAiCrMXyUByGJKR885MhKWM9KJD",
        share: 100,
      },
    ],
  });
  const [finalObj, setFinalObj] = useState({});
  const handleObj = (e) => {
    e.preventDefault();
    console.log("check", value2);
    setCreateObj({ ...createObj, [key]: value2 });
    setKey("");
    setValue2("");
  };

  const handleAttribute = (e) => {
    e.preventDefault();

    console.log("check", traitType, value);
    setAttributes([...attributes, { traitType: traitType, value: value }]);
    console.log("attributes", attributes);
    setTraitType("");
    setValue("");
  };
  const handleForm = (e) => {
    e.preventDefault();
    // console.log("form", name, symbol, desc, sellerFee, image, attributes);
    const updatedJSON = {
      name: name,
      symbol: symbol,
      description: desc,
      seller_fee_basis_points: sellerFee,
      image: image,
      attributes: attributes,
      collection: collection,
      properties: properties,
    };

    const handleSaveToPC = (jsonData) => {
      console.log("createObj", createObj);
      console.log("jsonData", jsonData);
      setFinalObj({ ...jsonData, ...createObj });
      let test = { ...jsonData, ...createObj };

      const fileData = JSON.stringify(test);
      const blob = new Blob([fileData], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = "filename.json";
      link.href = url;
      link.click();
    };
    handleSaveToPC(updatedJSON);
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
  const checkObjects = () => {};
  return (
    <div className="p-3 container-fluid">
      <h3 className="pb-2">Create New NFT</h3>
      <form onSubmit={handleForm}>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-lg-4">
              <div className="mb-1">
                <label htmlFor="name" className="form-label fw-bold">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  aria-describedby="nameHelp"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-1">
                <label htmlFor="desc" className="form-label fw-bold">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputDesc"
                  aria-describedby="DescHelp"
                  placeholder="Description"

                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
              <div className="mb-1">
                <label htmlFor="name" className="form-label fw-bold">
                  Symbol
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputSymbol"
                  aria-describedby="SymbolHelp"
                  placeholder="Symbol"

                  value={symbol}
                  onChange={(e) => setSymbol(e.target.value)}
                />
              </div>

              <div className="mb-1">
                <label htmlFor="name" className="form-label fw-bold">
                  seller_fee_basis_points
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputSymbol"
                  aria-describedby="SymbolHelp"
                  value={sellerFee}
                  placeholder="Seller Fee"

                  onChange={(e) => setSellerFee(e.target.value)}
                />
              </div>
              <div className="mb-1">
                <label htmlFor="name" className="form-label fw-bold">
                  image
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputSymbol"
                  aria-describedby="SymbolHelp"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <label htmlFor="name" className="form-label fw-bold">
                Attributes
              </label>
              {console.log("attt", attributes)}
              {attributes.map((e) => {
                return (
                  <div className="row ">
                    <div className="col d-flex justify-content-center border p-2 rounded m-1">
                      <span>{e.traitType} </span>
                    </div>
                    <div className="col d-flex justify-content-center border p-2 rounded m-1">
                      <span>{e.value} </span>
                    </div>
                  </div>
                );
              })}
              <div className="row">
                <div className="col">
                  <label htmlFor="name" className="form-label ">
                    Trait Type
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputSymbol"
                    aria-describedby="SymbolHelp"
                    placeholder="Trait Type"
                    value={traitType}
                    onChange={(e) => setTraitType(e.target.value)}
                  />
                </div>
                <div className="col">
                  <label htmlFor="name" className="form-label ">
                    Value
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputSymbol"
                    aria-describedby="SymbolHelp"
                    value={value}
                    placeholder="Trait Value"

                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>
                <div className="col ">
                  <div>
                    <label htmlFor="name" className="form-label "></label>
                  </div>

                  <button
                    className="btn btn-success mt-2"
                    onClick={handleAttribute}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col">
                  <div className="col">
                    <label htmlFor="name" className="form-label fw-bold pt-2">
                      Collections
                    </label>
                    <div className="row">
                      <div className="col">
                        <label htmlFor="name" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputSymbol"
                          aria-describedby="SymbolHelp"
                          placeholder="Collection Name"
                          value={collection.name}
                          onChange={(e) => {
                            setCollection({
                              ...collection,
                              name: e.target.value,
                            });
                          }}
                        />
                      </div>
                      <div className="col">
                        <label htmlFor="name" className="form-label">
                          Family
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputSymbol"
                          aria-describedby="SymbolHelp"
                          placeholder="Collection Family"

                          value={collection.family}
                          onChange={(e) =>
                            setCollection({
                              ...collection,
                              family: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h5 className="pt-4">Additional Attribute (if needed)</h5>
              <div className="row p-3 rounded border my-2 mx-1 ">
                <div className="col ">
                  <label htmlFor="key" className="form-label ">
                    key
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputSymbol"
                    aria-describedby="SymbolHelp"
                    placeholder="Key"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                  />
                </div>
                <div className="col">
                  <label htmlFor="value" className="form-label ">
                    value
                  </label>

                  <input
                    type="text"
                    value={value2}
                    className="form-control"
                    id="exampleInputSymbol"
                    placeholder="Value"

                    aria-describedby="SymbolHelp"
                    onChange={(e) => setValue2(e.target.value)}
                  />
                </div>
                <div className="col">
                  <div>
                    <label htmlFor="value" className="form-label "></label>
                  </div>

                  <button
                    type="button"
                    onClick={handleObj}
                    className="rounded btn btn-success mt-2"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;

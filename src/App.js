import "./App.css";
import { useState } from "react";
import Test from "./Test";
// import fs from "file-system";
function App() {
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
    console.log("coolle", collection);
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
      <Test />
    </>
    // <div className="mt-5">
    //   <form onSubmit={handleForm}>
    //     <div className="container-fluid">
    //       <div className="row">
    //         <div className="col-lg-4">
    //           <div className="mb-1">
    //             <label htmlFor="name" className="form-label">
    //               Name
    //             </label>
    //             <input
    //               type="text"
    //               className="form-control"
    //               id="exampleInputName"
    //               aria-describedby="nameHelp"
    //               value={name}
    //               onChange={(e) => setName(e.target.value)}
    //             />
    //           </div>

    //           <div className="mb-1">
    //             <label htmlFor="desc" className="form-label">
    //               Description
    //             </label>
    //             <input
    //               type="text"
    //               className="form-control"
    //               id="exampleInputDesc"
    //               aria-describedby="DescHelp"
    //               value={desc}
    //               onChange={(e) => setDesc(e.target.value)}
    //             />
    //           </div>
    //           <div className="mb-1">
    //             <label htmlFor="name" className="form-label">
    //               Symbol
    //             </label>
    //             <input
    //               type="text"
    //               className="form-control"
    //               id="exampleInputSymbol"
    //               aria-describedby="SymbolHelp"
    //               value={symbol}
    //               onChange={(e) => setSymbol(e.target.value)}
    //             />
    //           </div>

    //           <div className="mb-1">
    //             <label htmlFor="name" className="form-label">
    //               seller_fee_basis_points
    //             </label>
    //             <input
    //               type="text"
    //               className="form-control"
    //               id="exampleInputSymbol"
    //               aria-describedby="SymbolHelp"
    //               value={sellerFee}
    //               onChange={(e) => setSellerFee(e.target.value)}
    //             />
    //           </div>
    //           <div className="mb-1">
    //             <label htmlFor="name" className="form-label">
    //               image
    //             </label>
    //             <input
    //               type="text"
    //               className="form-control"
    //               id="exampleInputSymbol"
    //               aria-describedby="SymbolHelp"
    //               value={image}
    //               onChange={(e) => setImage(e.target.value)}
    //             />
    //           </div>
    //         </div>
    //         <div className="col-lg-4">
    //           <label htmlFor="name" className="form-label">
    //             Attributes
    //           </label>
    //           {console.log("attt", attributes)}
    //           {attributes.map((e) => {
    //             return (
    //               <div className="row ">
    //                 <div className="col d-flex justify-content-center border p-2 rounded m-1">
    //                   <span>{e.traitType} </span>
    //                 </div>
    //                 <div className="col d-flex justify-content-center border p-2 rounded m-1">
    //                   <span>{e.value} </span>
    //                 </div>
    //               </div>
    //             );
    //           })}
    //           <div className="row">
    //             <div className="col">
    //               <label htmlFor="name" className="form-label">
    //                 Trait type
    //               </label>
    //               <input
    //                 type="text"
    //                 className="form-control"
    //                 id="exampleInputSymbol"
    //                 aria-describedby="SymbolHelp"
    //                 value={traitType}
    //                 onChange={(e) => setTraitType(e.target.value)}
    //               />
    //             </div>
    //             <div className="col">
    //               <label htmlFor="name" className="form-label">
    //                 Value
    //               </label>
    //               <input
    //                 type="text"
    //                 className="form-control"
    //                 id="exampleInputSymbol"
    //                 aria-describedby="SymbolHelp"
    //                 value={value}
    //                 onChange={(e) => setValue(e.target.value)}
    //               />
    //             </div>
    //             <div className="col d-block ">
    //               <div>
    //                 <label htmlFor="name" className="form-label"></label>
    //               </div>

    //               <button className="btn btn-success" onClick={handleAttribute}>
    //                 ADD
    //               </button>
    //             </div>
    //           </div>
    //           <div className="row">
    //             <div className="col">
    //               <div className="col">
    //                 <label htmlFor="name" className="form-label">
    //                   Collections
    //                 </label>
    //                 <div className="row">
    //                   <div className="col">
    //                     <label htmlFor="name" className="form-label">
    //                       Name
    //                     </label>
    //                     <input
    //                       type="text"
    //                       className="form-control"
    //                       id="exampleInputSymbol"
    //                       aria-describedby="SymbolHelp"
    //                       value={collection.name}
    //                       onChange={(e) => {
    //                         setCollection({
    //                           ...collection,
    //                           name: e.target.value,
    //                         });
    //                       }}
    //                     />
    //                   </div>
    //                   <div className="col">
    //                     <label htmlFor="name" className="form-label">
    //                       Family
    //                     </label>
    //                     <input
    //                       type="text"
    //                       className="form-control"
    //                       id="exampleInputSymbol"
    //                       aria-describedby="SymbolHelp"
    //                       value={collection.family}
    //                       onChange={(e) =>
    //                         setCollection({
    //                           ...collection,
    //                           family: e.target.value,
    //                         })
    //                       }
    //                     />
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <button type="submit" className="btn btn-primary">
    //           Submit
    //         </button>
    //       </div>
    //     </div>
    //   </form>
    // </div>
  );
}

export default App;

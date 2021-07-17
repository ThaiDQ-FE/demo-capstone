import React, { useState } from "react";
import { storage } from "../../../configs/firebase";

function DemoStoreImageFirebase() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const handleChange = (e) => {
    console.log("dsadsa");
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      setImage(e.target.files[0]);
      console.log(image);
    }
  };
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // const progress = Math.round(
        //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        // );
        // setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            setUrl(url);
          });
      }
    );
    console.log(url);
  };

  return (
    <div>
      {/* <progress value={progress} max="100" /> */}
      <br />
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      <br />
      <video controls>
        <source src={url} />
      </video>
      <img
        src={url || "http://via.placeholder.com/300"}
        alt="firebase - image"
      />

      <object
        type="application/pdf"
        data="https://firebasestorage.googleapis.com/v0/b/itrans-upload.appspot.com/o/images%2Fasync.pdf?alt=media&token=0d7c9506-8f03-4905-9b34-5e73caec4bc4"
        width="300"
        height="200"
      ></object>
      <iframe
        src="https://firebasestorage.googleapis.com/v0/b/itrans-upload.appspot.com/o/images%2Fasync.pdf?alt=media&token=0d7c9506-8f03-4905-9b34-5e73caec4bc4"
        width="100%"
        height="565px"
        frameborder="0"
      >
        {" "}
      </iframe>
    </div>
  );
}
export default DemoStoreImageFirebase;

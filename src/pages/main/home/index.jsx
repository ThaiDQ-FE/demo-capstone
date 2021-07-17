import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import TinyMCE from "react-tinymce";
import { storage } from "../../../configs/firebase";
import axios from "axios";
function Home() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const handleUpload = (image) => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );
  };
  const [contentHTML, setContent] = useState({
    content: {
      contentInformation: "",
      contentTesting: "",
    },
  });
  const handleEditorChange = (e) => {
    const { value, name } = e.target;
    console.log("Content was updated:", <div>{e.target.getContent()}</div>);
    console.log(e.target.getContent());
    let content = {
      ...contentHTML.content,
      contentInformation: e.target.getContent(),
    };
    console.log(content);
    setContent({
      content,
    });
  };

  const handleChangeContentTesting = (e) => {
    const { value, name } = e.target;
    let content = {
      ...contentHTML.content,
      contentTesting: value,
    };
    console.log(content);
    setContent({
      content,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("testing").innerHTML = contentHTML.content;
    let contentInformation = contentHTML.content;
    console.log(contentInformation);
    axios({
      method: "POST",
      url: "https://60a63fe9b970910017eb11ee.mockapi.io/Testing",
      data: contentHTML.content,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {});
  };

  return (
    <div>
      <form>
        <div className="input-field">
          <i class="fa fa-user"></i>
          <input
            type="text"
            placeholder="Title"
            name="contentTesting"
            onChange={handleChangeContentTesting}
          />
        </div>
        <Editor
          apiKey="l28i3fttx3ffyf037f1xbsaaatvakq8396s8iafk90wmlx04"
          init={{
            height: 500,
            menubar: false,
            selector: "textarea",
            image_title: true,
            /* enable automatic uploads of images represented by blob or data URIs*/
            automatic_uploads: true,
            plugins: [
              "advlist autolink lists link image",
              "charmap print preview anchor help",
              "searchreplace visualblocks code",
              "insertdatetime media table paste wordcount",
            ],
            toolbar:
              // eslint-disable-next-line no-multi-str
              "undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | link image |\
            bullist numlist outdent indent | help | media",
            toolbar_mode: "floating",
            tinycomments_mode: "embedded",
            tinycomments_author: "Author name",

            image_title: true,
            automatic_uploads: true,
            file_picker_types: "image",
            file_picker_callback: function (cb, value, meta) {
              var input = document.createElement("input");
              input.setAttribute("type", "file");
              input.setAttribute("accept", "image/*");
              input.onchange = function () {
                var file = input.files[0];
                var reader = new FileReader();
                console.log(file);
                reader.onload = function (e) {
                  const uploadTask = storage
                    .ref(`images/${file.name}`)
                    .put(file);
                  uploadTask.on(
                    "state_changed",
                    (snapshot) => {},
                    (error) => {
                      console.log(error);
                    },
                    () => {
                      storage
                        .ref("images")
                        .child(file.name)
                        .getDownloadURL()
                        .then((url) => {
                          cb(url, {
                            alt: file.name,
                          });
                        });
                    }
                  );
                };
                reader.readAsDataURL(file);
              };
              input.click();
            },
          }}
          onChange={handleEditorChange}
        />
        <div className="col-md-3">
          <button
            className="btn btn-block btn-primary btn-lg"
            onClick={handleSubmit}
          >
            Save Event
          </button>
        </div>
      </form>
      <div id="testing"></div>
    </div>
  );
}
export default Home;

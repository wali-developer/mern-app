import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddArticle = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [details, setDetails] = useState("");

  const history = useHistory();

  const handleChanged = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "author") {
      setAuthor(e.target.value);
    } else if (e.target.name === "details") {
      setDetails(e.target.value);
    }
  };

  const submitData = async (e) => {
    e.preventDefault();
    try {
      if (title.length && author.length && details.length < 3) {
        alert("Character string must be greater than 3");
      } else {
        await axios.post(
          "https://expressapi-node.herokuapp.com/article",
          {
            title: title,
            author: author,
            details: details,
          },
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        );
      }
      alert("Your Article has been successfully added ...");
      setTitle("");
      setAuthor("");
      setDetails("");

      history.push({ pathname: "/" });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Add your Article here!!!!</h2>
      <form className="ui form" onSubmit={(e) => submitData(e)}>
        <div className="field">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title ..."
            onChange={(e) => handleChanged(e)}
            value={title}
            required
          />
        </div>
        <div className="field">
          <label>Author</label>
          <input
            type="text"
            name="author"
            placeholder="Author ..."
            onChange={(e) => handleChanged(e)}
            value={author}
            required
          />
        </div>
        <div className="field">
          <label>Details</label>
          <input
            type="text"
            name="details"
            placeholder="Details ..."
            onChange={(e) => handleChanged(e)}
            value={details}
            required
          />
        </div>
        <button className="ui button" type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default AddArticle;

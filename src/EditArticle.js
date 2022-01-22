import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const EditArticle = () => {
  const history = useHistory();
  const [title, setTitle] = useState(history.location.state.title);
  const [author, setAuthor] = useState(history.location.state.author);
  const [details, setDetails] = useState(history.location.state.details);
  const [id, setId] = useState(history.location.state._id);

  // onchanged method
  const handleChanged = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "author") {
      setAuthor(e.target.value);
    } else if (e.target.name === "details") {
      setDetails(e.target.value);
    }
  };

  // Update Article on form submit
  const updateHandle = async (e) => {
    e.preventDefault();
    try {
      const updatedArticle = await axios.patch(
        "https://expressapi-node.herokuapp.com/article/" + id,
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
      if (updatedArticle) {
        // alert(`Article ${updatedArticle.data.title} updated successfully ...`);
        alert(updatedArticle.data);
      }
      history.push({ pathname: "/" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "15px auto" }}>Edit Article</h2>
      <form className="ui form" onSubmit={(e) => updateHandle(e)}>
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
          Update
        </button>
      </form>
    </div>
  );
};

export default EditArticle;

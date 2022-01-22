import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import UserLogout from "./UserLogout";

function ShowArticles() {
  const [articles, setArticles] = useState([]);
  const [token, setToken] = useState();
  const history = useHistory();

  useEffect(() => {
    const getData = async () => {
      try {
        setToken(localStorage.getItem("token"));
        const { data } = await axios.get(
          "https://expressapi-node.herokuapp.com/article",
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        );
        setArticles(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [articles, token]);

  // Delete single Article
  const handleDelete = async (id) => {
    try {
      const DeletedArticle = await axios.delete(
        "https://expressapi-node.herokuapp.com/article/" + id,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      if (DeletedArticle) {
        alert(`${DeletedArticle.data.title} article deleted successfully...`);
      }
      console.log(DeletedArticle);
    } catch (err) {
      alert(err);
    }
  };

  // Edit Article
  const handleEdit = (article) => {
    history.push({
      pathname: "/edit",
      state: article,
    });
  };

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Articles</h1>
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Details</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles.length === 0 ? (
              <tr>
                <td
                  colSpan={3}
                  style={{
                    textAlign: "center",
                    color: "red",
                    fontSize: "large",
                  }}
                >
                  No Article Found ...
                </td>
              </tr>
            ) : (
              articles.map((article, index) => {
                const { _id, title, author, details } = article;
                return (
                  <tr key={index}>
                    <td data-label="title">{title}</td>
                    <td data-label="author">{author}</td>
                    <td data-label="details">{details}</td>
                    <td>
                      <button onClick={(e) => handleDelete(_id)}>Delete</button>
                      <button onClick={() => handleEdit(article)}>Edit</button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ShowArticles;

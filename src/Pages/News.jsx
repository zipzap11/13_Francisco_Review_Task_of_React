import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import LoadingNew from "../Components/LoadingNew";
import New from "../Components/New";
import classes from "./News.module.css";

function News() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://newsapi.org/v2/everything?q=apple&from=2021-09-16&to=2021-09-16&sortBy=popularity&apiKey=416f50f2380a4cf084852958f2f45a05"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNews(data.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={classes.bgImg}>
      <Header />
      <h3 className={classes.title}>News today</h3>
      <div className={classes.container}>
        {error && <p className={classes.error}>{error}</p>}
        {isLoading &&
          [1, 1, 1, 1].map((el, idx) => {
            return <LoadingNew key={idx} />;
          })}
        {!error && !isLoading && (
          <ul>
            {news.map((e, idx) => {
              return (
                <New
                  key={idx}
                  title={e.title}
                  author={e.author}
                  image={e.urlToImage}
                  loading={isLoading}
                />
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default News;

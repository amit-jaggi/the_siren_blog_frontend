import { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';

const LatestArticles = ({data}) => {
    const [randomNo1, setRandomNo1] = useState();
    const [randomNo2, setRandomNo2] = useState();

    useEffect(
        () => {
            setRandomNo1(Math.floor(Math.random() * ((5 - 1) + 1)) + 1);
            setRandomNo2(Math.floor(Math.random() * ((5 - 1) + 1)) + 1);
        }, []
    );
    

    return (
        <>
            <div className="latest-article-container">
                <h2 className="latest-articles-heading">Latest Articles</h2>
                <div className="articles-division">
                    <div className="article-bar">
                        {
                            data.filter(
                                (latestArticle) => latestArticle.id === randomNo1.toString() && (latestArticle.category === 'Tourism' || latestArticle.category === 'Food' || latestArticle.category === 'Technology' || latestArticle.category === 'Bollywood' || latestArticle.category === 'Fitness')).map(
                                    (article, index) => <div key={index} >
                                        <hr className="article-horizontal-line" />
                                        <Link to={`/article/${article.id}/${article.category}`} style={{ textDecoration: "none" }} className="latest-articles">
                                            <img src={article.url} className="latest-articles-image" alt=""/>
                                            <div className="latest-article-details">
                                                <h4 className="latest-article-heading">{article.title}</h4>
                                                <p className="latest-article-body">{article.body}</p>
                                                <p>
                                                    <span className="latest-article-category">{article.category}</span> / {article.date}
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                        }
                    </div>
                    <div className="top-stories">
                        <div className="top-stories-heading">Top Posts</div>
                        {
                            data.filter(
                                (latestArticle) => latestArticle.id === randomNo2.toString() && (latestArticle.category === 'Tourism' || latestArticle.category === 'Food' || latestArticle.category === 'Technology' || latestArticle.category === 'Bollywood' || latestArticle.category === 'Fitness')).map(
                                    (article, index) => <div key={index}>
                                        <Link to={`/article/${article.id}/${article.category}`} style={{ textDecoration: "none" }} className="top-stories-container">
                                            <img src={article.url} className="top-stories-image" alt=""/>
                                            <div className="top-stories-content">
                                                <h4 className="top-stories-title">{article.title}</h4>
                                                <p>
                                                    <span className="top-stories-category">{article.category}</span> / {article.date}
                                                </p>
                                            </div>
                                        </Link>
                                        <hr className="top-stories-horizontal-line" />
                                    </div>
                                )
                        }
                        <div className="advertisement">Advertisement</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestArticles;
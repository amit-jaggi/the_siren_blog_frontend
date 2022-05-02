import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MoreSiren from './MoreSiren';
import axios from 'axios';

const Article = () => {
    const [data, setData] = useState([]);

    const { ID } = useParams()
    const { categories } = useParams()

    useEffect(
        () => {
            document.title = categories;
            let isMounted = true;
            axios.get(`https://thesirenblog-backend-app.herokuapp.com/api/v1/sirenBlog/article/${ID}/${categories}`)
            .then(
                res => {
                    if (isMounted) {
                        setData(res.data)
                    }
                }
            )
            return () => {
                isMounted = false;
            }
        }, [data, ID, categories]
    );

    return (
        <>
            <div className="main-article-container">
                {
                    data.filter(
                        article => article.id === ID && article.category === categories
                    ).map(
                        (content, index) => <div key={index}>
                            <h3 className="article-title">{content.title}</h3>
                            <img className="article-image" src={content.url} alt="" />
                            <p className="article-body" >{content.body}</p>
                            <p className="article-context" >Let's talk about them...</p>
                            <p className="article-description" >This is about {content.title} which is popular on the social media platform and much to say is that {content.body}</p>
                            <div className="article-category-clap">
                                <span className="article-category" >{content.category}</span>
                                <span className="article-clap">
                                    <img src={require('../icons/claps.png')} className="article-clap-image" alt=""/>95k
                                </span>
                            </div>
                            <hr className="article-horizontal-line" />
                            <div className="article-user" >
                                <img className="artice-user-image" src={require('../icons/user.png')} alt=""/>
                                <div className="article-user-division">
                                    <p className="article-user-written">written by <br/> </p>
                                    <p>Amit Jaggi</p>
                                    <p className="article-user-date">January 31, 2022</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <MoreSiren />
        </>
    )
}
export default Article;
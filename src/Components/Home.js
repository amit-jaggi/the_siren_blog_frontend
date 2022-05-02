import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TheLatest from './TheLatest';
import LatestStories from './LatestStories';
import LatestArticles from './LatestArticles';
import axios from 'axios';


const Home = () => {
    const [data, setData] = useState([]);
    const [randomNo, setRandomNo] = useState();
    
    useEffect(
        () => {
            setRandomNo(Math.floor(Math.random() * ((5 - 1) + 1)) + 1);

            axios.get("https://thesirenblog-backend-app.herokuapp.com/api/v1/sirenBlog/")
            .then(
                res => setData(res.data)
            );
        }, []
    );

    return (
        <>
            <div className="home-container">
                <div className="banner-container">
                    <div className="banner-1">
                        {
                            data.filter(
                                (banner) => banner.id === randomNo.toString() && (banner.category === 'Tourism')).map(
                                    (image, index) =>
                                        <Link key={index} to={`/article/${image.id}/${image.category}`} style={{ textDecoration: "none" }} className="">
                                            <img src={image.url} className="banner-image-1" alt={image.title}/>
                                        </Link>
                                )
                        }
                    </div>
                    <div className="banner-2">
                        {
                            data.filter(
                                (banner) => banner.id === randomNo.toString() && (banner.category === 'Fitness' || banner.category === 'Technology')).map(
                                    (image, index) =>
                                        <Link key={index} to={`/article/${image.id}/${image.category}`} style={{ textDecoration: "none" }} className="">
                                            <img src={image.url} className="banner-image-2" alt=""/>
                                        </Link>
                            )
                        }
                    </div>
                </div>

                <TheLatest data={data}/>
                <LatestArticles data={data}/>
                <LatestStories data={data}/>
            </div>
        </>
    )
}

export default Home
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MoreSiren = () => {
    const [data, setData] = useState([]);
    const [randomNo, setRandomNo] = useState();

    useEffect(
        () => {
            setRandomNo(Math.floor(Math.random() * ((5 - 1) + 1)) + 1);

            axios.get("https://thesirenblog-backend-app.herokuapp.com/api/v1/sirenBlog/")
            .then(
                res => setData(res.data)
            )
        }, []
    );
    
    return (
        <>
            <div className="moresiren-container">
                <h2 className="moresiren-heading">More From The Siren</h2>
                <hr className="moresiresn-horizontal-line"/>
                <div className="moresiren-items">
                    {
                        data.filter(
                            latest => latest.id === randomNo.toString() && (latest.category === 'Technology' || latest.category === 'Tourism' || latest.category === 'Food')
                        ).map(
                            (latestInfo, index) => (
                                <div className="moresiren-box" key={index}>
                                    <p className="moresiren-info">Related Reads</p>
                                    <Link to={`/article/${latestInfo.id}/${latestInfo.category}`} style={{ textDecoration: "none", color: "black" }}>
                                        <img src={latestInfo.url} className="moresiren-image" alt=""/>
                                        <h4 className="moresiren-title">{latestInfo.title}</h4>
                                    </Link>
                                    <div className="moresiren-user-box" >
                                        <img className="moresiren-user" src={require('../icons/user.png')} alt=""/>
                                        <div className="moresiren-user-details">
                                            <p>Amit Jaggi</p>
                                            <p className="moresiren-date">January 31, 2022</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default MoreSiren;
import { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';

const TheLatest = ({data}) => {
    const [randomNo, setRandomNo] = useState();

    useEffect(
        () => {
            setRandomNo(Math.floor(Math.random() * ((5 - 1) + 1)) + 1);
        }, []
    );

    return (
        <div className="the-latest-container">
            <h2 className="the-latest-heading">The Latest</h2>
            <div className="the-latest-body">
                {
                    data.filter(
                        latest => latest.id === randomNo.toString() && (latest.category === 'Fitness' || latest.category === 'Bollywood' || latest.category === 'Food')
                    ).map(
                        (latestInfo, index) => (
                            <div className="the-latest-card" key={index}>
                                <Link to={`/article/${latestInfo.id}/${latestInfo.category}`} style={{ textDecoration: "none" }}>
                                    <img src={latestInfo.url} alt=""/>
                                    <h4 className='the-latest-title'>{latestInfo.title}</h4>
                                    <p className='the-latest-desc'>{latestInfo.body}</p>
                                    <p className='the-latest-date'>
                                        <span className='the-latest-category'>{latestInfo.category}</span> / {latestInfo.date}
                                    </p>
                                </Link>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default TheLatest;
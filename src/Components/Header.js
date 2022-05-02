import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Header = () => {
    const [data, setData] = useState([]);

    useEffect(
        () => {
            axios.get("https://thesirenblog-backend-app.herokuapp.com/api/v1/sirenBlog/")
            .then (
                res => setData(res.data)
            )
        }, [data]
    );

    return (
        <>
            <div className="logo">
                <span className="text-vertical">the</span>
                <span className="text-capital">siren</span>
            </div>
            <div className="nav-links">
                <Link to="/" className="link">Home</Link>
                {
                    data.filter(
                        category => (category.id)%5 === 0
                    ).map(
                        (items, index) => (
                            <Link key={index} to={`/${items.category}`} className='link'>{items.category}</Link>
                        )
                    )
                }
            </div>
            <hr className="horizontal-line"/>
        </>
    )
}

export default Header;
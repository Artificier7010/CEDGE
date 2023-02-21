import React from 'react'
import "./blogcontent.scss"
const Blogcontent = (props) => {
    return (
        <div className="Blogcompo">
            <div className="blogcompowrap">
                <div className="first">
                    <h1>{props.heading}</h1>
                </div>
                <div className="blog-grid">
                    {props.postData.map((posts, index) => {
                        return (

                            <div className="post-card">
                                <div className="cat-display">
                                    <h2>{posts.category}</h2>
                                </div>
                                <div className="title-display">
                                    <h1>{posts.title}</h1>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </div>
    )
}

export default Blogcontent
import React , {Component} from 'react'; 


export default class LatestBlog extends Component {

    render() {
     const  First = {
            backgroundImage : 'url( images/blog_1.jpg)',
        };
        const  Second = {
            backgroundImage : 'url( images/blog_2.jpg)',
        };
        const  Third = {
            backgroundImage : 'url( images/blog_3.jpg)',
        };
        return(
            <div className="latest-blog">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <div className="section-title">
                            <h2>Latest Blogs</h2>
                        </div>
                    </div>
                </div>
                <div className="row latest-blog-row">
                    <div className="col-lg-4 latest-blog-col">
                        <div className="blog-item d-flex justify-content-center align-items-center ">
                            <div className="blog-background" style={First}></div>
                            <div
                                className="blog-content d-flex flex-column align-items-center justify-content-center text-center">
                                <h4 className="blog-title">Here are the trends I see coming this fall</h4>
                                <span className="blog-meta">by admin | dec 01, 2017</span>
                                <a href="/" className="blog-more">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 latest-blog-col">
                        <div className="blog-item d-flex justify-content-center align-items-center ">
                            <div className="blog-background" style={Second}></div>
                            <div
                                className="blog-content d-flex flex-column align-items-center justify-content-center text-center">
                                <h4 className="blog-title">Here are the trends I see coming this fall</h4>
                                <span className="blog-meta">by admin | dec 01, 2017</span>
                                <a href="/" className="blog-more">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 latest-blog-col">
                        <div className="blog-item d-flex justify-content-center align-items-center ">
                            <div className="blog-background" style={Third}></div>
                            <div
                                className="blog-content d-flex flex-column align-items-center justify-content-center text-center">
                                <h4 className="blog-title">Here are the trends I see coming this fall</h4>
                                <span className="blog-meta">by admin | dec 01, 2017</span>
                                <a href="/" className="blog-more">Read more</a>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
        )
    }
    
};

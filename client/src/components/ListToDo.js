import React, {Fragment, useEffect, useState} from "react";
import _ from "lodash"
import ReactPlayer from "react-player";

const pageSize = 10;
const ListTodos = () => {
    const [posts, setPosts] = useState();
    const [paginatedPosts, setPaginatedPosts] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        getUrls();
    }, [])
    const getUrls = async () => {
        try {
            const response = await fetch("http://localhost:5000/urls")

            const jsonData = await response.json();
            setPosts(jsonData)
            setPaginatedPosts(_(jsonData).slice(0).take(pageSize).value());
        } catch (error) {
            console.error(error.message);
        }
    }
    const pageCount = posts? Math.ceil(posts.length/pageSize): 0;
    if (pageCount === 1) {
        return null;
    }
    const pages = _.range(1, pageCount + 1)
    const pagination = (pageNo) => {
        setCurrentPage(pageNo);
        const startIndex = (pageNo - 1) * pageSize;
        const paginatedPost = _(posts).slice(startIndex).take(pageSize).value();
        setPaginatedPosts(paginatedPost)
        console.log("++++++ "+paginatedPost);
    }
    return (
        <Fragment>
            {
                !paginatedPosts ? ("No Data Found"): (
                    <table className="table mt-5 text-center">
                        <thead>
                            <tr>
                                <th>Links</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                paginatedPosts.map(post => (
                                    <tr key={post.media_id}>
                                        <td>
                                            {
                                                post.filetype === "image"? (
                                                    <img src={post.url} className="img-thumbnail" alt=""></img>
                                                ):(
                                                    <ReactPlayer
                                                        url={post.url}
                                                    />
                                                )
                                            }
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                )
            }
            <nav className="d-flex justify-content-center">
                <ul className="pagination">
                    {
                        pages.map((page) => (
                            <li key = {page} className= {
                                page === currentPage? "page-item active": "page-item"
                            }>
                                <p className="page-link"
                                    onClick={() => pagination(page)}
                                >
                                {page}
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </Fragment>
    );

};

export default ListTodos;
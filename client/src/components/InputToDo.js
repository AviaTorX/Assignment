import React, {Fragment, useState} from "react";

const InputeToDo = () => {
    const [urls, setUrls] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {urls};
            // console.log(urls)
            const res = await fetch("http://localhost:5000/urls", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            const json = await res.json();
            window.location.reload();
            
        } catch (error) {
            console.error(error.message);
        }
    }
    return (
        <Fragment>
            <h1 className="text-center mt-5">Media Scrapper</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" value={urls} onChange={e => setUrls(e.target.value) }></input>
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    )
}

export default InputeToDo;
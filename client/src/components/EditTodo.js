import React, { Fragment, useState } from "react";

const EditTodo = ({ link }) => {
  const [media, setMedia] = useState(link.url);

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#id${link.media_id}`}
      >
        Show
      </button>

      <div className="modal" id={`id${link.media_id}`} onClick={() => setMedia(link.url)}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Media</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={() => setMedia(link.url)}
              ></button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={media}
                onChange={(e) => setMedia(e.target.value)}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;

import React, { Component } from "react";
import NewsDailyphotos from './NewsDailyphotos.jpg';
export default class NewsItem extends Component {
  render() {
    const { date, author, newsurl, title, description, image,source } = this.props;
    return (
      <div>
        <div className="card">
          <span className=" badge rounded-pill bg-danger" style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:0}}>
            {source}
          </span>
          <img
            src={!image ? NewsDailyphotos : image}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsurl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

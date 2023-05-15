import React from 'react'


function MyProjects({ project }) {
    const { title, link, repo, image } = project

    return (
        <div className='col'>
            <div className="card border-white">
                <div className="card-body bg-light">
                    <h5 className="card-title text-center text-black mx">{title}</h5>
                </div>
                <div className="card-body text-center bg-light btn-toolbar">
                    <a href={link} target="_blank" className="btn btn-outline-dark mx-auto position-relative col-4">
                        <i className="bi bi-link" />
                    </a>
                    <a href={repo} target="_blank" className="btn btn-outline-dark mx-auto position-relative col-4">
                        <i className="bi bi-github" />
                    </a>
                </div>
                <img height={485} width={75} src={image} className="card-img-top" alt="..." />
            </div>
        </div>
    );
}

export default MyProjects;
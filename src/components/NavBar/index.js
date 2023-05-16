import React from 'react';


function NavBar({ page, handlePageChange }) {

    return (

        <nav className='navbar navbar-expand-lg bg-dark'>
            <div className='container-fluid justify-content-center bg-dark p-3'>
                <div>
                    <ul className='nav'>
                        {/* About */}
                        <li className='nav-item'>
                            <a
                                href='#about'
                                onClick={() => handlePageChange('about')}
                                className={page === 'about' ? 'nav-link active text-info text-opacity-15' : 'nav-link text-secondary'}
                            >
                                About
                            </a>
                        </li>
                        {/* resume */}
                        <li className='nav-item'>
                            <a
                                href='#resume'
                                onClick={() => handlePageChange('resume')}
                                className={page === 'resume' ? 'nav-link active text-info text-opacity-15' : 'nav-link text-secondary'}
                            >
                                Resume
                            </a>
                        </li>
                        {/* Portfolio */}
                        <li className='nav-item'>
                            <a
                                href='#portfolio'
                                onClick={() => handlePageChange('portfolio')}
                                className={page === 'portfolio' ? 'nav-link active text-info text-opacity-15' : 'nav-link text-secondary'}
                            >
                                Portfolio
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
import React from 'react';
import "../../App.css";

export const Navbar = () => {
    return (
        <>
       
            <nav class="navbar navbar-expand-lg navbar-light bgco">
                <div class="container-fluid">
                    <a class="navbar-brand text-white fs-4" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active text-white fs-5" aria-current="page" href="#">Home</a>
                            </li>

                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <span class="border-0 mt-2" id="search-addon">
                            <i class="fa-solid fa-magnifying-glass fase"></i>
                            </span>
                        </form>
                    </div>
                </div>
            </nav>
      
        </>
    );
};

export default Navbar;

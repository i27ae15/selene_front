import { useEffect } from "react";


function Sidebar() {

    return (
        <div class="main-sidebar sidebar-style-2">
        <aside id="sidebar-wrapper">
            <div class="sidebar-brand">
                <a href="index.html">Selene Creation</a>
            </div>
            <div class="sidebar-brand sidebar-brand-sm">
                <a href="index.html">St</a>
            </div>
            <ul class="sidebar-menu">
                <li class="menu-header">Options</li>
                <li class="dropdown active">
                    <ul class="dropdown-menu">
                        <li class='active'><a class="nav-link" href="index-0.html">General Dashboard</a></li>
                        <li><a class="nav-link" href="index.html">Ecommerce Dashboard</a></li>
                    </ul>
                </li>
            </ul>

            <div class="mt-4 mb-4 p-3 hide-sidebar-mini">
                <a href="https://getstisla.com/docs" class="btn btn-primary btn-lg btn-block btn-icon-split">
                    <i class="fas fa-rocket"></i> Save
                </a>
            </div>
        </aside>
    </div>
    )
}

export default Sidebar
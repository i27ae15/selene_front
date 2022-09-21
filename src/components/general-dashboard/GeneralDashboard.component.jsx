import { useEffect, useState } from "react";

import './general-dashboard.styles.css';
import './components.styles.css';

import Sidebar from "../sidebar/Sidebar.component";

import SeleneNode from "../selene-node/SeleneNode.component";

function GeneralDashboard() {

    const [nodes, setNodes] = useState([]);

    /*
    
    A node is an object with the following structure:

    {
        name: 'Node Name',
        type: 'text' | 'input' | 'media',

        patterns: [...strings],
        responses: [...objects],

        doBefore: [...objects],
        doAfter: [...objects],
        
        nextNodeOnOption: [...objects],
        steps: [...objects],
    }
    
    
    */

    useEffect(() => {

        let nodeObject = {
            name: 'First Node',
            type: 'text',
            responses: [
                {
                    message: 'Hello Selene',
                    fromSelene: true,
                    messageType: 'text',
                },
            ],
            patterns: [],
            doBefore: [],
            doAfter: [],
            steps: [],
            nextNodeOnOption: [], 
        }

        setNodes([nodeObject]);

    }, []);

    return (
        <div id="app">
            <div class="main-wrapper main-wrapper-1">

                <Sidebar />

                {/* <!-- Main Content --> */}
                <div class="main-content">
                    <section class="section">
                        <div class="section-header">
                            <h1>Dashboard</h1>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div class="card card-statistic-1">
                                    <div class="card-icon bg-primary">
                                        <i class="far fa-user"></i>
                                    </div>
                                    <div class="card-wrap">
                                        <div class="card-header">
                                            <h4>Nodes</h4>
                                        </div>
                                        <div class="card-body">
                                            10
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div class="card card-statistic-1">
                                    <div class="card-icon bg-danger">
                                        <i class="far fa-newspaper"></i>
                                    </div>
                                    <div class="card-wrap">
                                        <div class="card-header">
                                            <h4>Sub-nodes</h4>
                                        </div>
                                        <div class="card-body">
                                            42
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div class="card card-statistic-1">
                                    <div class="card-icon bg-warning">
                                        <i class="far fa-file"></i>
                                    </div>
                                    <div class="card-wrap">
                                        <div class="card-header">
                                            <h4>Responses</h4>
                                        </div>
                                        <div class="card-body">
                                            89
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div class="card card-statistic-1">
                                    <div class="card-icon bg-success">
                                        <i class="fas fa-circle"></i>
                                    </div>
                                    <div class="card-wrap">
                                        <div class="card-header">
                                            <h4>Online Users</h4>
                                        </div>
                                        <div class="card-body">
                                            47
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {
                            nodes.map((node, index) => {
                                return (
                                    <SeleneNode nodeName={node.name} />
                                )
                            })
                        }

                       
                    </section>
                </div>
                <footer class="main-footer">
                    <div class="footer-left">
                        Copyright &copy; 2018 <div class="bullet"></div> Design By <a href="https://nauval.in/">Muhamad
                            Nauval Azhar</a>
                    </div>
                    <div class="footer-right">

                    </div>
                </footer>
            </div>
        </div>
    );
}


export default GeneralDashboard;
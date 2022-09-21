import {useState, useEffect, useRef} from 'react';


function SeleneNode({nodeName, nodeType, responses, patterns, doBefore, doAfter, steps, nextNodeOnOption}) {
    return (
        <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
                <div className="card">
                    <div className="card-header">
                        <h4>{nodeName}</h4>
                    </div>
                    <div className="card-body">
                        <div className="mb-4">
                            <h3>Node type</h3>
                            <div class="form-group">
                                <select class="form-control">
                                    <option>Text</option>
                                    <option>Media</option>
                                    <option>Input</option>
                                </select>
                            </div>
                        </div>

                        <hr />

                        <div className="mb-4">
                            <h3>Patterns</h3>
                            <div class="form-group">
                            <textarea class="form-control" placeholder='Introduce the patterns that you want selene to learn, separete then by a comma, eg: I want to make an appointment, I want to schedule an appointment, appointment'/>
                            </div>
                        </div>

                        <hr />

                        <div className="mb-4">
                            <h3>Responses</h3>
                            <div id='responses'>

                            </div>

                            <button className='btn btn-primary'>Add new response</button>
                            
                        </div>

                        <hr />

                        <div className="mb-4">
                            <h3>Do Before</h3>
                            <div id='do-before'>

                            </div>

                            <button className='btn btn-primary'>Add new action</button>
                            
                        </div>

                        <hr />

                        <div className="mb-4">
                            <h3>Do After</h3>
                            <div id='do-after'>

                            </div>

                            <button className='btn btn-primary'>Add new action</button>
                            
                        </div>

                        <hr />

                        <div className="mb-4">
                            <h3>Next Node On Option</h3>
                            <div id='next-node-on-option'>

                            </div>

                            <button className='btn btn-primary'>Add new node to go</button>
                        </div>

                        <hr />

                        <div className="mb-4">
                            <h3>Add sub node</h3>
                            <div id='add-sub-node'>

                            </div>

                            <button className='btn btn-primary'>Add new node sub node</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeleneNode
import { useState } from 'react';


function SeleneNode({nodeIndex, availableNodes, node, functions}) {

    /*
    
        Node Structure (node):
            
            node, patterns, responses, doBefore, doAfter, steps, nextNodeOnOption
    
    */

    const functionsAvailable = ['send_email', 'print_message'];
    
    const [nextNodeOnOption, setNextNodeOnOption] = useState([]);
    const [doBefore, setDoBefore] = useState([]);
    const [doAfter, setDoAfter] = useState([]);


    const addNewNodeOnOption = (node, option) => {
            setNextNodeOnOption([...nextNodeOnOption, {
            option: node,
            node: option,
        }]);
    }

    const addDoBefore = (node, option) => {
        
        let is_function = functionsAvailable.includes(option);

        if (is_function) {

            if (option === 'send_email') {
                setDoBefore([...doBefore, {
                    option: node,
                    node: option,
                    properties: {
                        email: '',
                        subject: '',
                        html: '',
                    }
                }]);
            }
        }


        setDoBefore([...doBefore, {
            option: node,
            node: option,
        }]);
    }



    return (
        <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
                <div className="card">
                    <div className='row'>
                        <div className='col-lg-2 col-md-2 col-2'>
                            <div className="card-header">
                                <h4>{node.node}</h4>
                            </div>
                        </div>
                        <div className='col-lg-10 col-md-10 col-10'>
                            <div className="card-header">
                                <button className='btn btn-danger btn-lg'>Delete node</button>
                            </div>
                        </div>

                    </div>
                    
                    <div className="card-body">

                        {/* ----------------- nodeName section -----------------  */}
                        <div className="mb-4">
                            <h3>Node Name</h3>
                            <div class="form-group">
                                <input type="text" className="form-control" value={node.node} onChange={(e) => {
                                    functions.updateProperty(nodeIndex, 'node', e.target.value);
                                }}/>
                            </div>
                        </div>
                        {/* ----------------------------------------------------- */}

                        <hr />
                        
                        {/* ----------------- Patterns section -----------------  */}
                        <div className="mb-4">
                            <h3>Patterns</h3>
                            <div class="form-group">
                            <textarea class="form-control" 
                            placeholder='Introduce the patterns that you want selene to learn, separete then by a comma, eg: I want to make an appointment, I want to schedule an appointment, appointment'
                            value={node.patterns}
                            onChange={(e) => {
                                functions.updateProperty(nodeIndex, 'patterns', e.target.value);
                            }}
                            />
                            </div>
                        </div>
                        {/* ----------------------------------------------------- */}

                        <hr />

                        {/* ----------------- Responses section -----------------  */}
                        <div className="mb-4">
                            <h3>Responses</h3>
                            <div id='responses'>

                            </div>

                            <button className='btn btn-primary'>Add new response</button>
                            
                        </div>
                        {/* ----------------------------------------------------- */}

                        <hr />

                        {/* ----------------- do_before section -----------------  */}
                        <div className="mb-4">
                            <h3>Do Before</h3>
                            <div id='do-before'>

                            </div>

                            <button className='btn btn-primary'>Add new action</button>
                            
                        </div>
                        {/* ----------------------------------------------------- */}

                        <hr />

                        {/* ----------------- do_after section -----------------  */}
                        <div className="mb-4">
                            <h3>Do After</h3>
                            <div id='do-after'>

                            </div>

                            <button className='btn btn-primary'>Add new action</button>
                            
                        </div>
                        {/* ----------------------------------------------------- */}

                        <hr />

                        {/* ----------------- NodeOnOpt section -----------------  */}
                        <div className="mb-4">
                            <h3>Next Node On Option</h3>

                            <div id='next-node-on-option'>

                            {
                                nextNodeOnOption.map((option, index) => {
                                    
                                    return (
                                        <div className='row'>
                                            <div className='col-6'>

                                                <div class="form-group">
                                                    <p>On option</p>
                                                    <select class="form-control">
                                                        <option>Option 1</option>
                                                        <option>Option 2</option>
                                                        <option>Option 3</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <p>Go to node</p>
                                                <select class="form-control">

                                                    {
                                                        availableNodes.map((node, index) => {
                                                            if (nodeIndex !== index) {
                                                                return (
                                                                    <option>{node.node}</option>
                                                                )
                                                            } else {
                                                                return null;
                                                            }
                                                        })
                                                    }

                                                </select>
                                            </div>
                                        </div>
                                    )

                                })
                            }

                            </div>

                            <button className='btn btn-primary' onClick={addNewNodeOnOption}>Add new node to go</button>
                        </div>
                        {/* ------------------------------------------------------ */}


                    </div>
                </div>
            </div>
        </div>
    )
}

// add stay in node option

export default SeleneNode
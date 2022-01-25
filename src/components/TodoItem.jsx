import React from 'react'

export function TodoItem({todo}){

    const {id, titulo, descripcion, importancia} = todo;


    return <div className="list-group-item">
                <div className="row row-cols" style={{width:'20rem' }}>
                     <div className="card-body">
                         <div className="card-header">{titulo}<button className="btn btn-black ms-5">X</button>
                             <div className="card-text">
                                    <p className="card-text">{descripcion}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
}

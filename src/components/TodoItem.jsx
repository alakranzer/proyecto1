import React from 'react'

export function TodoItem({todo}){

    const {id, titulo, descripcion, importancia} = todo;


    return <div class="row" col-3>
                 <div className="card">
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



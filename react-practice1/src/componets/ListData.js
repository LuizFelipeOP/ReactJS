import React from 'react';

const ListData = props => {
    let linhas = props.dados.map((elem =>
        < ul className='listCentered' key={elem.id} >
            <li key={elem.id}>{elem['livro']}</li>
        </ul >
    ))
    return (
        <ul>
            <h3 className="captionListTitle">{props.titulo}</h3>
            {linhas}
        </ul>

    );


}
export default ListData;
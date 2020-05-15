import React from 'react';

const ListData = props => {
    let linhas = props.dados.map((elem =>
        <h5 className='listItem'><li key={elem.id}>{elem[props.param]}</li></h5>

    ))
    return (
        <ul className='container listCentered'>
            <h3 className="captionListTitle">{props.titulo}</h3>
            {linhas}
        </ul>

    );


}
export default ListData;
import React from 'react'
import MaterialTable from 'material-table';


function BusquedaBasica() {
    return (
        <div className="Container">
      <MaterialTable
        title="MATRICULAS"
        columns={[
          { title: 'Nombres', field: 'Nombres' },
          { title: 'Apellidos', field: 'Apellidos' },
          { title: 'Fecha de Nacimiento', field: 'Fecha de Nacimiento', type: 'numeric' },
          {
            title: 'Genero',
            field: 'Genero',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
          },
        ]}
        data={[
          { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
          { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
        ]}        
        options={{
          search: true
        }}
      /> 
      </div>
    )
  }
  
  export default BusquedaBasica
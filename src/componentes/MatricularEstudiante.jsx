import React from 'react'

export default function MatricularEstudiante() {
    return (


<div className="container mt-4">
        <div className="row">
          <div className="col-md-7  mx-auto">
            <div className="card">
              <div className="container text-center fa-5x">
                <i className="fas fa-user-plus"></i>
              </div>
              <div className="card-header bg-info text-center">
                <h4>NUEVA MATRICULA</h4>
              </div>
              <div className="card-body">
                <form onSubmit={"guardar"}>
                  <div className="row">

                    <div className="col-md-6">
                      <label>Primer Nombre</label>
                      <input type="text" className="form-control required" />
                    </div>

                    <div className="col-md-6">
                      <label>Segundo Nombre</label>
                      <input type="text" className="form-control required" />
                    </div>

                    <div className="col-md-6">
                      <label>Primer Apellido</label>
                      <input type="text" className="form-control required" />
                    </div>

                    <div className="col-md-6">
                      <label>Segundo Apellido</label>
                      <input type="text" className="form-control required" />
                    </div>

                    <div className="col-md-6">
                      <label>Fecha de Nacimiento</label>
                      <input type="text" className="form-control required" />
                    </div>

                    <div className="col-md-6">
                      <label>Genero</label>
                      <input type="text" className="form-control required" />
                    </div>

                    <div className="col-md-6">
                      <label>Tipo de Documento</label>
                      <input type="text" className="form-control required" />
                    </div>

                    <div className="col-md-6">
                      <label>Número de documento</label>
                      <input type="text" className="form-control required" />
                    </div>

                    <div className="col-md-6">
                      <label>Teléfono</label>
                      <input type="text" className="form-control required" />
                    </div>

                  </div>
                    <br />
                  <button type="submit" class="btn btn-outline-info">
                    <span class="fa fa-save"></span> Registrar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    )
}

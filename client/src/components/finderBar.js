import React from 'react'

export default (props) => (
  <div className="input-group input-group-lg">
    <input type="text" className="form-control finderBar" placeholder="¿ Que vas a comprar hoy ?" aria-describedby="sizing-addon1" />
    <span className="input-group-addon" id="sizing-addon1">
      <span className="glyphicon glyphicon-search" />
    </span>
  </div>
)
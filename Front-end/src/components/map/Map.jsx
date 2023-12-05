import React, { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import Markers from '../../helpers/LocalMakers'
import recentroLogo from '../../assets/logorecentro.png'

mapboxgl.accessToken = import.meta.env.VITE_REACT_APP_MAPBOX_ACCESS_TOKEN



function Map() {
  useEffect(() => {


    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-34.8813, -8.0607], // Coordenadas para Recife Antigo
      zoom: 13,
    })

    Markers.forEach(local => {
      new mapboxgl.Marker({ color: '#ff6900' })
        .setLngLat([local.longitude, local.latitude])
        .setPopup(
          new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false
          })
            .setHTML(`
              <h1 style="background-color: #ff6900; color: white; padding: 10px; border-radius: 4px; text-align: center; margin: 0;">Informações Imóvel</h1>
              <h3 style="font-size: 13px; margin-top: 10px;">${local.nome}</h3>
              <p style="font-size: 12px; margin-top: 5px;"><strong>Rua:</strong> ${local.rua}</p>
              <p style="font-size: 12px; margin-top: 5px;"><strong>Situação:</strong> ${local.situação}</p>
            `)
        )
        .addTo(map)
    })
    

    return () => {
      map.remove()
    }
  }, [])

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '90vh', borderRadius: '20px 20px 0px 0px'}}>
        <img src={recentroLogo} alt="Logo da Recentro" style={{position: 'absolute',
          zIndex: '999999',
          width: '16%',
          right: '5%',
          opacity:'.50',
          bottom: '65%'}} />
      </div>
    </div>

  )
}

export default Map

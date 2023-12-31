import React, { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import recentroLogo from '../../assets/logorecentro.png'

mapboxgl.accessToken = import.meta.env.VITE_REACT_APP_MAPBOX_ACCESS_TOKEN

function Map({ dataToBeDisplayedOnMap }) {
  useEffect(() => {

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-34.8813, -8.0607], // Coordenadas para Recife Antigo
      zoom: 13,
    })

    dataToBeDisplayedOnMap.forEach(property => {
      new mapboxgl.Marker(({ color: '#ff6900'}))
        .setLngLat([property.longitude, property.latitude])
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${property.nome}</h3>`))
        .addTo(map)
    })

    return () => {
      map.remove()
    }
  }, [dataToBeDisplayedOnMap])

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

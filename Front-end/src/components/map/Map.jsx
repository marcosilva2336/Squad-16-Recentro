import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import Markers from '../../helpers/LocalMakers'

mapboxgl.accessToken = import.meta.env.VITE_REACT_APP_MAPBOX_ACCESS_TOKEN; 



function Map() {
  useEffect(() => {
    

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-34.8813, -8.0607], // Coordenadas para Recife Antigo
      zoom: 13,
    });
  
      Markers.forEach(local => {
        new mapboxgl.Marker(({ color: '#ff6900'}))
          .setLngLat([local.longitude, local.latitude])
          .setPopup(new mapboxgl.Popup().setHTML(`<h3>${local.nome}</h3>`))
          .addTo(map);
      });
 
   
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div style={{ height: '650px', marginBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div id="map" style={{ width: '50%', height: '450px' }}></div>
    </div>
  );
}

export default Map;

import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import recentroLogo from '../../assets/logorecentro.png';
import './map.css';
import axios from 'axios';

mapboxgl.accessToken = import.meta.env.VITE_REACT_APP_MAPBOX_ACCESS_TOKEN;

function LoggedMap() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/imovel/locations");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-34.8813, -8.0607],
      zoom: 13,
    });

    data.forEach(local => {
      const { longitude, latitude } = local;
    

      const markerElement = document.createElement('div');
      markerElement.className = 'custom-marker';

      new mapboxgl.Marker(markerElement)
        .setLngLat([longitude, latitude])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
              <div class="popup-content">
                <h3>${local.nome}</h3>
                <p>Rua: ${local.rua}</p>
                <p>Bairro: ${local.bairro}</p>
                <p>Situação: ${local.situacao}</p>
                <p>Disponibilidade: ${local.disponibilidade}</p>
                <p>Grau de risco: ${local.grauDeRisco}</p>
              
              </div>
            `)
        )
        .addTo(map);
    });

    return () => {
      map.remove();
    };
  }, [data]);

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '90vh', borderRadius: '20px 20px 0px 0px' }}>
        <img src={recentroLogo} alt="Logo da Recentro" style={{position: 'absolute', zIndex: '999999', width: '16%', right: '5%', opacity: '.50', bottom: '65%',}}
        />
      </div>
    </div>
  );
}

export default LoggedMap;

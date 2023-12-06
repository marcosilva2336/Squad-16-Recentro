import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import recentroLogo from '../../assets/logorecentro.png';
import './map.css';
import axios from 'axios';

mapboxgl.accessToken = import.meta.env.VITE_REACT_APP_MAPBOX_ACCESS_TOKEN;

function Map() {
  const [data, setData] = useState([]);
  const [allInformations, setAllInformaltions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/imovel/findall");
        const responseInformations = await axios.get("http://localhost:8080/imovel/findall");
        
        setData(response.data);
        setAllInformaltions(responseInformations.data)
        console.log(responseInformations.data)
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
      const { longitude, latitude} = local;
      
    

      const markerElement = document.createElement('div');
      markerElement.className = 'custom-marker';

      new mapboxgl.Marker(markerElement)
        .setLngLat([longitude, latitude])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
              <div class="popup-content">
                <h3>Bairro: ${local.bairro}</h3>
                <p>Situação: ${local.situacao}</p>
                <p>Endereço: ${local.endereco}</p>
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

export default Map;

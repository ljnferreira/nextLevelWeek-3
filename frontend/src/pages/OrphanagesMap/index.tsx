import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import '../../styles/pages/orphanagesMap.css'

import mapMarkerImg from '../../images/map-marker.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [35, 40],
  iconAnchor: [17, 40],
  popupAnchor: [160, 2]
})

const OrphanagesMap: React.FC = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a
            sua visita
          </p>
        </header>

        <footer>
          <strong>Barbacena</strong>
          <span>Minas Gerais</span>
        </footer>
      </aside>

      <Map
        center={[-21.2165976,-43.7737674]}
        zoom={14}
        style={{
          width: '100%',
          height: '100%'
        }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        <Marker
          icon={mapIcon}
          position={[-21.2165976,-43.7737674]}
        >
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className='mapPopup'
          >
            Lar dos idosos
            <Link to="">
              <FiArrowRight size={24} color='#FFF'/>
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="" className="create-orphanage" >
        <FiPlus size={32} color="#fff"/>
      </Link>
    </div>
  );
}

export default OrphanagesMap;

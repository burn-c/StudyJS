import React, { useEffect, useState, ChangeEvent } from 'react';

import './styles.css';

import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';
import api from '../../services/api';
import localeapi from '../../services/localeapi';
import { LeafletMouseEvent } from 'leaflet';

interface IItem {
  id: number;
  title: string;
  image_url: string;
}

interface IUFIBGE {
  sigla: string;
}

interface IDistritoIBGE {
  nome: string;
}

const CreatePoint = () => {
  const [items, setItems] = useState<IItem[]>([]);
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const [selectedInitialPosition, setSelectedInitialPosition] = useState<[number, number]>([0,0]);


  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedSelectedPosition, setSelectedSelectedPosition] = useState<[number, number]>([0,0]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      setSelectedInitialPosition([latitude, longitude]);
    })
  }, [])

  useEffect(() => {
    api.get<IItem[]>('items').then(response => {
      setItems(response.data);
    });
  }, []);

  useEffect(() => {

    localeapi.get<IUFIBGE[]>('estados').then(response => {
      const ufInitials = response.data.map(uf => uf.sigla);

      setUfs(ufInitials);

    });
  },[])

  useEffect(() => {
    if(selectedUf === '0') {
      return;
    }

    localeapi.get<IDistritoIBGE[]>(`estados/${selectedUf}/distritos`).then(response => {
      const districts = response.data.map(distrito => distrito.nome);

      setCities(districts);


    });

  },[selectedUf])



  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;

    setSelectedUf(uf);
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;

    setSelectedCity(city);
  }

  function handleMapClick(event: LeafletMouseEvent) {
    setSelectedSelectedPosition([
      event.latlng.lat,
      event.latlng.lng,
    ])
  }



  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta"/>
        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>

      <form>
        <h1>Cadastro do
          <br/>
          ponto de coleta
        </h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input
              type="text"
              name="name"
              id="name"
            />
          </div>

          <div className="field-group">
          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="field">
            <label htmlFor="whatsapp">Whatsapp</label>
            <input
              type="text"
              name="whatsapp"
              id="whatsapp"
            />
          </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereços</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>

          <Map
            center={selectedInitialPosition}
            zoom={15}
            onClick={handleMapClick}
          >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={selectedSelectedPosition} />
          </Map>

          <div className="field-group">

            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select
                name="uf"
                id="uf"
                value={selectedUf}
                onChange={handleSelectUf}
              >
              <option value="0">Selecione uma UF</option>

              {ufs.map(uf => (
                  <option key={uf} value={uf}>{uf}</option>
                ))}

              </select>
            </div>

            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select
                name="city"
                id="city"
                value={selectedCity}
                onChange={handleSelectCity}

              >
                <option value="0">Selecione uma cidade</option>
                {cities.map(city => (
                <option key={city} value={city}>{city}</option>

                ))}
              </select>
            </div>

          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Ítens de coleta</h2>
            <span>Selecione um ou mais ítems abaixo</span>
          </legend>

          <ul className="items-grid">
            {items.map(item => (
               <li key={item.id}>
               <img src={item.image_url} alt="Teste"/>
               <span>{item.title}</span>
             </li>
            ))}


          </ul>
        </fieldset>

        <button type="submit">Cadastrar ponto de coleta</button>
      </form>
    </div>
  )
}

export default CreatePoint;

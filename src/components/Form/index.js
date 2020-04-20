import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FiMapPin } from 'react-icons/fi';
import { TiDelete } from 'react-icons/ti';
import { MdKeyboardArrowRight } from 'react-icons/md';

import {
  FormContainer,
  CheckItem,
  FormInput,
  FormGroup,
  FormFooter,
} from './styles';

import CheckBox from '../CheckBox';
import { colors } from '../../util/colors';
import { radius, years, prices } from '../../util/form';

export default function Form() {
  const vehicle = useSelector(state => state.vehicle);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState({
    make: 0,
    model: 0,
    version: 0,
    location: '',
    year: 0,
    range: 0,
    radius: 1,
    new: true,
    used: true,
  });
  const [haveData, setHaveData] = useState({
    make: false,
    model: false,
    version: false,
  });
  const [removeValue, setRemoveValue] = useState();

  async function loadSelect(type, id = 0) {
    await dispatch({ type, id });
  }

  useEffect(() => {
    loadSelect('@vehicle/LIST_MAKE_REQUEST');
  }, []);

  function clearLocation() {
    setFilter({ ...filter, location: '' });
    setRemoveValue(false);
  }

  function clearFilters() {
    setHaveData({ make: false, model: false, version: false });
    setFilter({
      ...filter,
      make: 0,
      model: 0,
      version: 0,
      year: 0,
      range: 0,
      radius: 1,
    });
    clearLocation();
  }

  function handleChangeInput(event) {
    const { value } = event.target;
    setFilter({ ...filter, locale: value });
    if (value) {
      setRemoveValue(true);
    } else {
      setRemoveValue(false);
    }
  }

  return (
    <FormContainer>
      <CheckItem>
        <CheckBox
          className="new"
          check={filter.new}
          onClick={() =>
            filter.new
              ? setFilter({ ...filter, new: false })
              : setFilter({ ...filter, new: true })
          }
        />
        Novos
      </CheckItem>
      <CheckItem>
        <CheckBox
          className="used"
          check={filter.used}
          onClick={() =>
            filter.used
              ? setFilter({ ...filter, used: false })
              : setFilter({ ...filter, used: true })
          }
        />
        Usados
      </CheckItem>
      <div>
        <FormGroup>
          <FormInput className="together-right">
            <FiMapPin color={colors.primary} size={24} />
            <span>Onde: </span>
            <input
              type="text"
              className={[removeValue ? 'clear-location' : null]}
              value={filter.local}
              onChange={event => handleChangeInput(event)}
            />
            {removeValue ? (
              <TiDelete
                style={{ cursor: 'pointer' }}
                size={22}
                color={colors.secondary}
                onClick={clearLocation}
              />
            ) : null}
          </FormInput>
          <FormInput className="together-left">
            <span>Raio: </span>
            <select
              id="radius"
              value={filter.radius}
              onChange={event =>
                setFilter({ ...filter, radius: event.target.value })
              }
            >
              {radius.map(r => {
                return (
                  <option key={r.value} value={r.value}>
                    {r.text}
                  </option>
                );
              })}
            </select>
          </FormInput>
          <FormGroup>
            <FormInput>
              <select
                id="year"
                value={filter.year}
                onChange={event =>
                  setFilter({ ...filter, year: event.target.value })
                }
              >
                <option disabled value="0">
                  Ano Desejado
                </option>
                <option value="todas">Todos</option>
                {years.map(year => {
                  return (
                    <option key={year.value} value={year.value}>
                      {year.value}
                    </option>
                  );
                })}
              </select>
            </FormInput>
          </FormGroup>
          <FormGroup>
            <FormInput>
              <select
                id="range"
                value={filter.range}
                onChange={event =>
                  setFilter({ ...filter, range: event.target.value })
                }
              >
                <option disabled value="0">
                  Faixa de preço
                </option>
                <option value="todas">Todas</option>
                {prices.map(price => {
                  return (
                    <option key={price.value} value={price.value}>
                      {price.text}
                    </option>
                  );
                })}
              </select>
            </FormInput>
          </FormGroup>
        </FormGroup>

        {/* FORM GROUP DO VEÍCULO */}
        <FormGroup>
          <FormGroup>
            <FormInput>
              <span>Marca: </span>
              <select
                id="make"
                value={filter.make}
                onChange={event => {
                  setFilter({ ...filter, make: event.target.value });
                  setHaveData({ ...haveData, make: true });
                  loadSelect('@vehicle/LIST_MODEL_REQUEST', event.target.value);
                }}
              >
                <option key="0" disabled value="0">
                  Todas
                </option>
                {vehicle.make &&
                  vehicle.make.map(make => {
                    return (
                      <option key={make.ID} value={make.ID}>
                        {make.Name}
                      </option>
                    );
                  })}
              </select>
            </FormInput>
          </FormGroup>
          <FormGroup>
            <FormInput>
              <span>Modelo: </span>
              <select
                disabled={!haveData.make}
                value={filter.model}
                onChange={event => {
                  setFilter({ ...filter, model: event.target.value });
                  setHaveData({ ...haveData, model: true });
                  loadSelect(
                    '@vehicle/LIST_VERSION_REQUEST',
                    event.target.value
                  );
                }}
              >
                <option value="0">Todas</option>
                {vehicle.model &&
                  vehicle.model.map(model => {
                    return (
                      <option key={model.ID} value={model.ID}>
                        {model.Name}
                      </option>
                    );
                  })}
              </select>
            </FormInput>
          </FormGroup>
          <FormInput>
            <span>Versão: </span>
            <select
              className="form-input"
              value={filter.version}
              disabled={!haveData.model}
              onChange={event => {
                setFilter({ ...filter, version: event.target.value });
                setHaveData({ ...haveData, version: true });
              }}
            >
              <option value="0">Todas</option>
              {vehicle.version &&
                vehicle.version.map(version => {
                  return (
                    <option key={version.ID} value={version.ID}>
                      {version.Name}
                    </option>
                  );
                })}
            </select>
          </FormInput>
        </FormGroup>
        <FormFooter>
          <FormGroup>
            <div style={{ display: 'flex' }}>
              <MdKeyboardArrowRight size={20} color={colors.primary} />
              <h3>Busca Avançada</h3>
            </div>
          </FormGroup>
          <FormGroup>
            <button
              type="button"
              className="clear-filters"
              onClick={clearFilters}
            >
              Limpar Filtros
            </button>
            <button
              className="busca"
              type="button"
              disabled={!haveData.version}
            >
              Ver Ofertas
            </button>
          </FormGroup>
        </FormFooter>
      </div>
    </FormContainer>
  );
}

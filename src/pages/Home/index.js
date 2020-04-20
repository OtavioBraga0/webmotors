import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FiMapPin } from 'react-icons/fi';
import { TiDelete } from 'react-icons/ti';
import { MdKeyboardArrowRight } from 'react-icons/md';

import {
  Container,
  TabItem,
  TabItemContainer,
  FormContainer,
  CheckItem,
  FormInput,
  FormGroup,
  FormFooter,
} from './styles';

import CheckBox from '../../components/CheckBox';
import { colors } from '../../util/colors';
import { raios, anos, precos } from '../../util/formulario';

function Home() {
  const veiculo = useSelector(state => state.veiculo);
  const dispatch = useDispatch();
  const [filtro, setFiltro] = useState({
    marca: 0,
    modelo: 0,
    versao: 0,
    local: '',
    ano: 0,
    faixa: 0,
    raio: 1,
    novo: true,
    usado: true,
  });
  const [temDados, setTemDados] = useState({
    marca: false,
    modelo: false,
    versao: false,
  });
  const [removeValue, setRemoveValue] = useState();

  async function carregaSelect(type, id = 0) {
    await dispatch({ type, id });
  }

  useEffect(() => {
    carregaSelect('@veiculo/LIST_MARCA_REQUEST');
  }, []);

  function changeTabSelected(vei) {
    document.querySelectorAll('.tab-item').forEach(el => {
      el.classList.remove('selected');
    });

    document.getElementById(vei).classList.add('selected');
  }

  function handleTabClick(vei) {
    changeTabSelected(vei);
  }

  function handleChangeInput(event) {
    const { value } = event.target;
    setFiltro({ ...filtro, local: value });
    if (value) {
      setRemoveValue(true);
    } else {
      setRemoveValue(false);
    }
  }

  function limpaLocal() {
    setFiltro({ ...filtro, local: '' });
    setRemoveValue(false);
  }

  function limpaFiltros() {
    setTemDados({ marca: false, modelo: false, versao: false });
    setFiltro({
      ...filtro,
      marca: 0,
      modelo: 0,
      versao: 0,
      ano: 0,
      faixa: 0,
      raio: 1,
    });
    limpaLocal();
  }

  return (
    <Container>
      <TabItemContainer>
        <div>
          <TabItem
            id="carro"
            className="tab-item selected"
            onClick={() => handleTabClick('carro')}
          >
            <svg
              id="Camada_1"
              data-name="Camada 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 404.71 125"
            >
              <line x1="148.88" y1="31.71" x2="148.88" y2="4.23" />
              <path
                d="M444.72,247.61c.42-2.58.92-8.74-2.62-13.28-2.61-3.34-6.77-5-12.36-5h-19V208.14H360.78l-4.23,8.46H312L265.44,187H150.13L86.7,220.83H48.29L64,236.5v10.79a16.33,16.33,0,0,0-5.4,9.51c-1,5.61,1,11.72,5.75,18.06l8.87,13.3,18.92,6a33.26,33.26,0,0,0,58.31-1.43H347.17a30.12,30.12,0,0,0,56.25,0h17.87a28.83,28.83,0,0,0,22.63-13.31l9.08-9.08V255.9ZM199.28,191.23h64.93l39.26,25H199.28Zm-28.6,0h24.38v25H178.37c-4-.43-14.65-2.81-16.55-8.6C160.49,203.58,163.55,197.92,170.68,191.23ZM147.24,289.7a29.16,29.16,0,0,1-48.1,7.06,29.63,29.63,0,0,1-3.81-5.42,29,29,0,0,1,6.08-35.73c.7-.63,1.43-1.21,2.17-1.76.28-.21.58-.39.86-.58.48-.33,1-.65,1.44-1s.73-.4,1.1-.6.86-.48,1.3-.69.83-.37,1.25-.54.83-.36,1.25-.52.9-.3,1.35-.44.83-.26,1.25-.37.93-.23,1.41-.33.84-.17,1.26-.24,1-.14,1.43-.2.89-.09,1.34-.12.92-.05,1.38-.06c.75,0,1.5,0,2.26,0a29.15,29.15,0,0,1,24.78,41.48ZM391.7,302a26.09,26.09,0,0,1-32.85-40.53,27.77,27.77,0,0,1,3.3-2.24c.23-.13.46-.28.7-.41a27.17,27.17,0,0,1,3.3-1.5l1-.34a26.7,26.7,0,0,1,3.41-.89l.93-.12a25.41,25.41,0,0,1,3.15-.27,26.06,26.06,0,0,1,17.18,5.86h0c.57.47,1.12,1,1.66,1.52l.28.25a25.59,25.59,0,0,1,1.77,2,26,26,0,0,1,4.63,8.61,25.67,25.67,0,0,1,1.14,6.33A26.28,26.28,0,0,1,391.7,302Zm57.07-33.38-8.1,8.15c-7.69,11.53-18.92,11.74-19.38,11.75H404.8c0-.18.05-.35.09-.53.1-.49.17-1,.25-1.47.12-.71.22-1.42.29-2.14,0-.51.06-1,.08-1.52,0-.7,0-1.4,0-2.1,0-.51,0-1-.08-1.52-.06-.7-.14-1.39-.25-2.08-.07-.5-.15-1-.25-1.49-.14-.69-.32-1.38-.51-2.06-.13-.47-.26-.94-.41-1.41-.23-.7-.51-1.39-.8-2.07-.17-.43-.33-.86-.53-1.28-.35-.74-.75-1.46-1.17-2.17-.19-.34-.36-.69-.57-1a30.82,30.82,0,0,0-2.13-3,30.34,30.34,0,0,0-42.64-4.46,29.64,29.64,0,0,0-3.25,3.08c-.33.36-.61.77-.92,1.15-.63.76-1.25,1.52-1.8,2.33-.32.48-.59,1-.88,1.49-.45.76-.9,1.52-1.28,2.31-.27.56-.48,1.13-.72,1.7-.32.78-.63,1.56-.88,2.36-.19.61-.34,1.22-.49,1.83-.2.8-.38,1.6-.51,2.42-.11.63-.18,1.27-.24,1.91-.08.82-.14,1.63-.15,2.46,0,.64,0,1.29,0,1.93,0,.83.12,1.66.22,2.49.09.64.18,1.28.3,1.92.06.31.08.63.15.95H152.31c.1-.3.15-.6.25-.89.21-.66.38-1.31.55-2,.22-.87.42-1.73.58-2.61.11-.67.2-1.34.28-2,.1-.87.16-1.75.19-2.62,0-.68,0-1.35,0-2,0-.88-.1-1.75-.2-2.63-.07-.66-.14-1.32-.25-2-.15-.88-.36-1.74-.58-2.6-.16-.64-.3-1.27-.5-1.9-.28-.88-.63-1.74-1-2.6-.23-.57-.44-1.16-.71-1.72a28.58,28.58,0,0,0-1.51-2.7c-.27-.46-.5-.94-.8-1.39a33.76,33.76,0,0,0-2.92-3.78,33.37,33.37,0,0,0-47.12-2.6,34.28,34.28,0,0,0-3.29,3.43c-.13.15-.27.3-.39.46a31.64,31.64,0,0,0-2.54,3.6l-.4.66a36.19,36.19,0,0,0-1.92,3.84l-.27.68a34.42,34.42,0,0,0-1.34,4.14l-.09.45a31.85,31.85,0,0,0-.73,4.35l0,.23a33.05,33.05,0,0,0-.07,4.45c0,.22,0,.43,0,.65a33.21,33.21,0,0,0,.58,4.29l.15.76a33.5,33.5,0,0,0,1.23,4.2,2.76,2.76,0,0,0,.08.27l-13.69-4.34-8.12-12.16C63.69,267,62,262,62.72,257.59a12.14,12.14,0,0,1,4.54-7.52l.94-.62v-14.7l-9.7-9.69H87.75l63.43-33.83h13.57c-6.24,6.73-8.61,12.68-6.95,17.72,3.15,9.56,19.42,11.4,20.34,11.49h132L311,220h48l4.39-7.63h43.1v21.14h23.25c4.21,0,7.24,1.15,9,3.41,3.23,4.12,1.63,10.82,1.62,10.89l-.29,1.16,8.68,8.68Z"
                transform="translate(-48.29 -187)"
              />
            </svg>
            <div>
              <span>Comprar</span>
              <span className="tab-title"> Carros </span>
            </div>
          </TabItem>
          <TabItem
            id="moto"
            className="tab-item"
            onClick={() => handleTabClick('moto')}
          >
            <svg
              id="Camada_1"
              data-name="Camada 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 236.07"
            >
              <path
                d="M394.43,228.92a65,65,0,0,0-30,7.33l-19.32-30.57h0l-19-33.18L301.35,124H260v6.56h37.34l16.76,32.78H260c-29.35,0-39.34,24.58-41.85,32.79H89.51v6.56c59.62,0,98.61,12.89,115.87,38.32,14.71,21.66,8.6,46.37,6.37,53.48h-20.6a65.7,65.7,0,1,0-.34,6.56h83.82L345,217.84l13.72,21.7a65.49,65.49,0,1,0,35.67-10.62ZM125.57,353.51a59,59,0,1,1,59-59H122.3v6.56h61.9A59.08,59.08,0,0,1,125.57,353.51Zm146-59h-53c2.34-8.21,5.85-26.42-1.52-45.17h92.71Zm43.77-51.72H214.06a58.19,58.19,0,0,0-3.21-5.38c-11.17-16.49-30.42-28.09-57.52-34.7h70l.52-2.64c.25-1.23,6.37-30.15,36.13-30.15h57.11l24.15,42.26Zm79.06,110.74a59,59,0,0,1-32.18-108.43l26.12,41.33,5.55-3.51-26-41.08a59,59,0,1,1,26.48,111.69Z"
                transform="translate(-60 -124)"
              />
            </svg>
            <div>
              <span>Comprar</span>
              <span className="tab-title"> Motos </span>
            </div>
          </TabItem>
        </div>
        <button type="button">
          <strong>Vender meu carro</strong>
        </button>
      </TabItemContainer>
      <FormContainer>
        <CheckItem>
          <CheckBox
            className="novo"
            check={filtro.novo}
            onClick={() =>
              filtro.novo
                ? setFiltro({ ...filtro, novo: false })
                : setFiltro({ ...filtro, novo: true })
            }
          />
          Novos
        </CheckItem>
        <CheckItem>
          <CheckBox
            className="usado"
            check={filtro.usado}
            onClick={() =>
              filtro.usado
                ? setFiltro({ ...filtro, usado: false })
                : setFiltro({ ...filtro, usado: true })
            }
          />
          Usados
        </CheckItem>
        <div>
          <FormGroup>
            <FormInput className="junto-direita">
              <FiMapPin color={colors.primary} size={24} />
              <span>Onde: </span>
              <input
                type="text"
                className={[removeValue ? 'limpa-local' : null]}
                value={filtro.local}
                onChange={event => handleChangeInput(event)}
              />
              {removeValue ? (
                <TiDelete
                  style={{ cursor: 'pointer' }}
                  size={22}
                  color={colors.secondary}
                  onClick={limpaLocal}
                />
              ) : null}
            </FormInput>
            <FormInput className="junto-esquerda">
              <span>Raio: </span>
              <select
                id="raio"
                value={filtro.raio}
                onChange={event =>
                  setFiltro({ ...filtro, raio: event.target.value })
                }
              >
                {raios.map(r => {
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
                  id="ano"
                  value={filtro.ano}
                  onChange={event =>
                    setFiltro({ ...filtro, ano: event.target.value })
                  }
                >
                  <option disabled value="0">
                    Ano Desejado
                  </option>
                  <option value="todas">Todos</option>
                  {anos.map(ano => {
                    return (
                      <option key={ano.value} value={ano.value}>
                        {ano.value}
                      </option>
                    );
                  })}
                </select>
              </FormInput>
            </FormGroup>
            <FormGroup>
              <FormInput>
                <select
                  id="faixa"
                  value={filtro.faixa}
                  onChange={event =>
                    setFiltro({ ...filtro, faixa: event.target.value })
                  }
                >
                  <option disabled value="0">
                    Faixa de preço
                  </option>
                  <option value="todas">Todas</option>
                  {precos.map(preco => {
                    return (
                      <option key={preco.value} value={preco.value}>
                        {preco.text}
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
                  id="marca"
                  value={filtro.marca}
                  onChange={event => {
                    setFiltro({ ...filtro, marca: event.target.value });
                    setTemDados({ ...temDados, marca: true });
                    carregaSelect(
                      '@veiculo/LIST_MODELO_REQUEST',
                      event.target.value
                    );
                  }}
                >
                  <option key="0" disabled value="0">
                    Todas
                  </option>
                  {veiculo.marca &&
                    veiculo.marca.map(marca => {
                      return (
                        <option key={marca.ID} value={marca.ID}>
                          {marca.Name}
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
                  disabled={!temDados.marca}
                  value={filtro.modelo}
                  onChange={event => {
                    setFiltro({ ...filtro, modelo: event.target.value });
                    setTemDados({ ...temDados, modelo: true });
                    carregaSelect(
                      '@veiculo/LIST_VERSAO_REQUEST',
                      event.target.value
                    );
                  }}
                >
                  <option value="0">Todas</option>
                  {veiculo.modelo &&
                    veiculo.modelo.map(modelo => {
                      return (
                        <option key={modelo.ID} value={modelo.ID}>
                          {modelo.Name}
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
                value={filtro.versao}
                disabled={!temDados.modelo}
                onChange={event => {
                  setFiltro({ ...filtro, versao: event.target.value });
                  setTemDados({ ...temDados, versao: true });
                }}
              >
                <option value="0">Todas</option>
                {veiculo.versao &&
                  veiculo.versao.map(versao => {
                    return (
                      <option key={versao.ID} value={versao.ID}>
                        {versao.Name}
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
                className="limpa-filtros"
                onClick={limpaFiltros}
              >
                Limpar filtros
              </button>
              <button
                className="busca"
                type="button"
                disabled={!temDados.versao}
              >
                Ver Ofertas
              </button>
            </FormGroup>
          </FormFooter>
        </div>
      </FormContainer>
    </Container>
  );
}

export default Home;

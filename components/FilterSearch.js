import {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import {RiHotelBedLine, RiCarLine, RiSearch2Line} from 'react-icons/ri'
import {FaSuitcaseRolling, FaWalking} from 'react-icons/fa'
import { DatePicker } from 'antd';
import moment from 'moment';
import { Spin } from 'antd';
import { Input, Select } from 'antd';

export const FilterWrapper = styled.div`
width:100%;
height:auto;
padding: 2vw;
background:rgb(150, 41, 43);
border-radius:5px;
display:flex;
flex-direction: column;
justify-content:space-around;
grid-row-gap:4vh;
@media (max-width: 600px) {
height:auto;
padding:5%;
}
`;

export const Options = styled.div`
width:43vw;
display:grid;
user-select:none;
grid-template-columns:10vw 8vw 10vw;
grid-column-gap: 1vw;
margin:2vh 0 2vh 0;
@media (max-width: 600px) {
grid-template-columns:1fr;
grid-row-gap:3vh;
align-items:center;
margin: auto;
margin-top: 20px;
}
`;
export const Filters = styled.div`
display:grid;
width:65vw;
grid-template-columns:30% 28%  18% 12%;
grid-column-gap:1vw;
@media (max-width: 600px) {
display:block;
width:100%;
}
`;
export const Aoptions = styled.a`
color: ${props => props.selected ? '#fd2542' : 'white'};
display: flex;
font-family:'Open Sans', sans-serif
text-align: center;
background: ${props => props.selected ? 'white' : 'none'};
border:1px solid white;
font-weight: 600;
padding: 8px;
border-radius: 5px;
justify-content:space-around;
border-radius: 30px;

`;
export const InputFrom = styled.input`
  
`;
export const InputTo = styled.input`
border: 1px solid #CCC;
border-radius: 3px;
outline: none;
padding-right: 16px;
padding-left: 16px;
height:40px;
line-height: 40px;
`;
export const P = styled.p`
  font-family:'Open Sans', sans-serif;
  font-size:1rem;
  color:white;
  font-weight:600;
  margin:0;
`;
export const LabelInput = styled.label`
  color:white;
  font-family:'Open Sans', sans-serif;
`;
export const InputPack = styled.div`
  display:grid;
  grid-template-rows: auto auto;
  grid-row-gap:1vh;
`;
export const BtnSearchFilter = styled.a`
background: white;
color:#ea1b37;
width: 8vw;
margin:-3vw 0 0 0;
text-align: center;
font-weight: 700;
padding: 8px;
border-radius: 30px;
font-family: 'Open Sans', sans-serif;
align-self: flex-end;
@media (max-width: 600px) {
    width:30vw;
    margin:12vw 26vw 0 4vw;
    }
`;
export const SearchWrapper = styled.div`
width:100%;
margin:12vh 0 12vh 0;
display:grid;
grid-template-columns: 1fr 1fr 1fr;
grid-column-gap:1vw;
grid-row-gap:1vh;
`;
export const BoxWrapp = styled.div`
  width: 100%;
  height:100%;
  border:1px solid #d0d0d0;
  background:white;
  padding:14px;
`;
export const ImgSearch = styled.img`
  max-width:100%;
`;
export const SpinWrapper = styled.div`
  display:grid;
  align-items:center;
  justify-content:center;
  
`;
const FilterSearch = ({offers}) => {

    const fromCity = useRef(null);

    const [option, setOption] = useState('alojamientos')
    const [chosenPack, setChosenPack] = useState("");
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(false);
    const [destino, setDestino] = useState("");
    const [room, setRooms] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [rangeDate, setRangeDate] = useState(new Date())
    const { RangePicker } = DatePicker;
    const dateFormat = 'DD/MM/YYYY';

    // useEffect(()=> {
    //     var places = require('places.js');
    //     var placesAutocomplete = places({
    //         appId: 'pl992MAS3B1L',
    //         apiKey: 'd964608a03f900dc27a963d7c3953c47',
    //         container: document.querySelector('#from-city')
    //       });
    // }, [])

    const { Option } = Select;

    const getFrom = () => {
        setLoading(true)
        setTimeout(()=> {
            let paquete;
            switch (option) {
                case 'alojamientos':
                    paquete = 'alojamientos';
                    break;
            case 'paquetes' :
                paquete = 'paquetes';
                    break;
                    case 'excursiones' :
                        paquete = 'excursiones';
                        break;
            }
            const destinocity = destino;
            const fecha = new Date();
            const fechafinal = new Date();
            const fecharange = rangeDate;
            setChosenPack(`Elegiste el paquete ${paquete} con destino a ${destinocity} en la fecha ${fecharange} con ${room}`)
            setLoading(false);
            setSearched(true);
        }, 1000)
    }
    const getDestino = (value) => {
        setDestino(value)
    }
    const getHabitacion = (value) => {
        setRooms(value)
    }
    
  
    return(
        <>
        <FilterWrapper>
            <P>Elegí tu servicio:</P>
            <Options>
                <Aoptions onClick={() => setOption('alojamientos')} selected={option == 'alojamientos' ? true : false}>  <RiHotelBedLine/> Alojamientos</Aoptions>
                <Aoptions onClick={() => setOption('paquetes')} selected={option == 'paquetes' ? true : false}> <FaSuitcaseRolling/>Paquetes</Aoptions>
                <Aoptions onClick={() => setOption('excursiones')} selected={option == 'excursiones' ? true : false}>  <FaWalking/> Excursiones</Aoptions>
            </Options>
            <Filters>
                {/* <InputPack>
                <LabelInput> Origen:</LabelInput>
                <InputFrom ref={fromCity} placeholder="Desde" id="from-city" />
                </InputPack> */}
                {option == "excursiones" || option == "paquetes" ? (
                    <> </>
                ) : (
                <InputPack>
                <LabelInput>Destino:</LabelInput>
                <Select
                size="large"
                placeholder="Destino"
                onChange={getDestino}
                >
                    <Option value="General Ocampo">General Ocampo</Option>
                    <Option value="Chamical">Chamical</Option>
                    <Option value="Arauco">Arauco</Option>
                    <Option value="Coronel Felipe Varela">Coronel Felipe Varela</Option>
                    <Option value="Castro Barros">Castro Barros</Option>
                    <Option value="Chilecito">Chilecito</Option>
                    <Option value="General Ángel Vicente Peñaloza">General Ángel Vicente Peñaloza</Option>
                    <Option value="General Juan Facundo Quiroga">General Juan Facundo Quiroga</Option>
                    <Option value="Rosario Vera Peñaloza">Rosario Vera Peñaloza</Option>
                    <Option value="General San Martín">General San Martín</Option>
                    <Option value="Famatina">Famatina</Option>
                    <Option value="San Blas de los Sauces">San Blas de los Sauces</Option>
                    <Option value="Independencia">Independencia</Option>
                    <Option value="General Belgrano">General Belgrano</Option>
                    <Option value="Sanagasta">Sanagasta</Option>
                    <Option value="La Rioja">La Rioja</Option>
                </Select>
                </InputPack>
                )}
                {option == "excursiones" || option == "paquetes"? (
                     <InputPack>
                     <LabelInput>Salidas:</LabelInput>
                     {/* <DatePicker size="large" defaultValue={moment()} onChange={(date, datetostring)=> setStartDate(datetostring)} format={dateFormat} /> */}
                     <DatePicker disabledDate={current => {return current && current < moment()} } size="large" onChange={(date, datetostring)=> setStartDate(datetostring)} format={dateFormat}/>
                     </InputPack>
                ): (
                <InputPack>
                <LabelInput>Ida y Vuelta:</LabelInput>
                {/* <DatePicker size="large" defaultValue={moment()} onChange={(date, datetostring)=> setStartDate(datetostring)} format={dateFormat} /> */}
                <RangePicker disabledDate={current => {return current && current < moment()} } size="large" onChange={(date, datetostring)=> setRangeDate(datetostring)} format={dateFormat}/>
                </InputPack>
                )}
                
                {/* <InputPack>
                <LabelInput> Vuelta:</LabelInput>
                <DatePicker size="large" defaultValue={moment()} onChange={(date, datetostring)=> setEndDate(datetostring)} format={dateFormat} />
                </InputPack> */}
                {option == "excursiones" || option == "paquetes" ? (
                    <InputPack>
                    <LabelInput>Cantidad de personas:</LabelInput>
                    <Select
                    size="large"
                    style={{ width: '100%' }}
                    placeholder="Cantidad de personas"
                    onChange={getHabitacion}
                    >
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                        <Option value="4">4</Option>
                        <Option value="5">5</Option>
                        <Option value="6">6</Option>
                        <Option value="7">7</Option>
                        <Option value="8">8</Option>
                        <Option value="9">9</Option>
                        <Option value="10+">10 o más</Option>
                    </Select>
                    </InputPack>
                ): (
                <InputPack>
                <LabelInput>Habitaciones:</LabelInput>
                <Select
                size="large"
                style={{ width: '100%' }}
                placeholder="Habitaciones a elegir"
                onChange={getHabitacion}
                >
                    <Option value="habitacion + 1 cama">Habitación + 1 cama</Option>
                    <Option value="habitacion + 2 camas">Habitación + 2 camas</Option>
                    <Option value="2 habitaciones">2 habitaciones</Option>
                </Select>
                </InputPack>
                )}
                
                
            </Filters>
            <BtnSearchFilter onClick={getFrom}> Buscar <RiSearch2Line/>  </BtnSearchFilter>
        </FilterWrapper>
        <h4> {chosenPack} </h4> 
        {loading ? (
            <SpinWrapper>
            <Spin size="large"/>
            </SpinWrapper>
        ) : searched ? (
            <SearchWrapper>
                {offers.map((item, index) => {
                    return(
                        <BoxWrapp key={index}>
                            <ImgSearch src={item.picture}/>
                            <h4> {item.title} </h4>
                            <p> {item.price} </p>
                        </BoxWrapp>
                    )
                })}
            </SearchWrapper>
        ) : <> </>}
        </>
    )
}
export default FilterSearch
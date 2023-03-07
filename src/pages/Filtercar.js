import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import "../styles/filter.css";

function Filtercar() {
    const [yearFilter, setYearFilter] = useState("All");
    const [makeFilter, setMakeFilter] = useState("All");
    const [modelFilter, setModelFilter] = useState("All");
    const [priceFilter, setPriceFilter] = useState("All");
  
    const handleYearFilterChange = (event) => {
      setYearFilter(event.target.value);
    };
  
    const handleMakeFilterChange = (event) => {
      setMakeFilter(event.target.value);
    };
  
    const handleModelFilterChange = (event) => {
      setModelFilter(event.target.value);
    };
  
    const handlePriceFilterChange = (event) => {
      setPriceFilter(event.target.value);
    };
    const filteryear=(car) =>{
      return (yearFilter ===""||yearFilter=== "All") ?car:car.model===yearFilter;
    };
    const filtermake=(car) =>{
      return (makeFilter ===""||makeFilter=== "All") ?car:car.brand===makeFilter;
    };
    const filtermodel=(car) =>{
      return (modelFilter ===""||modelFilter=== "All") ?car:car.carName===modelFilter;
    };
    const filterprice=(car) =>{
      return (priceFilter ===""||priceFilter=== "All") ?car:car.price===parseInt(priceFilter);
    };
  
  
   
  
  return (
  <div className="App">
  <div className="filters">
  <label htmlFor="year">Year:</label>
  <select id="year" value={yearFilter} onChange={handleYearFilterChange}>
  <option value="All">All</option>
  <option value="2022">2022</option>
  <option value="2021">2021</option>
  <option value="2020">2020</option>
  <option value="2019">2019</option>
  </select>
  <label htmlFor="make">Make:</label>
      <select id="make" value={makeFilter} onChange={handleMakeFilterChange}>
        <option value="All">All</option>
        <option value="Tesla">Tesla</option>
        <option value="BMW">BMW</option>
        <option value="Nissan">Nissan</option>
        <option value="Ferrari">Ferrari</option>
        <option value="Mercedes">Mercedes</option>
        <option value="Audi">Audi</option>
        <option value="Colorado">Colorado</option>
        <option value="JAGUAR">JAGUAR</option>
        <option value="Toyota">Toyota</option>
      </select>
  
      <label htmlFor="model">Model:</label>
      <select id="model" value={modelFilter} onChange={handleModelFilterChange}>
        <option value="All">All</option>
        <option value="Tesla Malibu">Tesla Malibu</option>
        <option value="Toyota Aventador">Toyota Aventador</option>
        <option value="BMW X3">BMW X3</option>
        <option value="Nissan Mercielago">Nissan Mercielago</option>
        <option value="Ferrari Camry">Ferrari Camry</option>
        <option value="Mercedes Benz XC90">Mercedes Benz XC90</option>
        <option value="Audi Fiesta">Audi Fiesta</option>
        <option value="Rolls Royce Colorado">Rolls Royce Colorado</option>
      <option value="x7">x7</option>
      </select>
  
      <label htmlFor="price">Price:</label>
      <select id="price" value={priceFilter} onChange={handlePriceFilterChange}>
        <option value="All">All</option>
        <option value="350000">350000</option>
        <option value="60000">60000</option>
        <option value="45000">45000</option>
        <option value="50000">50000</option>
        <option value="85000">85000</option>
        <option value="30000">30000</option>
        <option value="250000">250000</option>
      </select>
    </div>
  
    <div className="listings">
      {carData.filter(filteryear).filter(filtermake).filter(filtermodel).filter(filterprice).map((e) => (
        <div key={carData.id} className="car">
          <img src={e.imgUrl} alt={e.make + " " + carData.model} />
          <div className="details">
            <div className="year">{e.model}</div>
            <div className="make">{e.brand}</div>
            <div className="model">{e.carName}</div>
            <div className="price">{e.price}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
  }
  
  export default Filtercar;
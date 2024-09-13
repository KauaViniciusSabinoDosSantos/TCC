import React from 'react'
import './Interditar.css'
import {Link} from "react-router-dom"
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Interditar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="corpo-interditar">
      <h1>Escolha uma data</h1>
      <Calendar className="calendar"
        onChange={handleDateChange}
        value={date}
      />
    </div>
  );
};

export default Interditar

import React from 'react'
import './Interditar.css'
import {Link} from "react-router-dom"
import { useState } from 'react';

import 'react-calendar/dist/Calendar.css';

const Interditar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="corpo-interditar">
      <h1>Escolha uma data</h1>
    </div>
  );
};

export default Interditar

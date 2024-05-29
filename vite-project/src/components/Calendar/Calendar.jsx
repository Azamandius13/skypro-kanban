import { useState } from "react";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { ru } from "date-fns/locale";
import { format } from "date-fns";

export function Calendar() {
  const [selected, setSelected] = useState();
  
  let footer = (
    <p>Выберите срок исполнения</p>
  )
  if(selected) {
    footer = (
        <p>Срок исполнения: <span>{format(selected, "dd.MM.yy", { locale: ru })}</span></p> 
    )
  }
  return <DayPicker footer={footer} mode="single" selected={selected} onSelect={setSelected} locate={ru} />;
}


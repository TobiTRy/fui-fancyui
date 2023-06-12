import React from 'react'


import FancyDatePicker from '../../Components/UI/Organisms/FancyDatePicker/FancyDatePicker'
import Calendar from '../../Components/UI/Molecules/Calendar/Calendar'
import  DateOutput  from '../../Components/UI/Atoms/DateOutput/DateOutput'
import FancyInput from '../../Components/UI/Molecules/FancyInput/FancyInput'
import FancyDateInput from '../../Components/UI/Molecules/FancyDateInput/FancyDateInput'

export default function DatePickerRoute() {
  return (
    <section>
      <FancyDatePicker />
      <FancyDateInput />
    </section>
  )
}

import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {  selectAppointment } from './appointmentSlice'

export function Appointment() {
  const appointment = selectAppointment
  const dispatch = useAppDispatch()

  return (
    <div>
      <div>
        {/*<button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>/*/}
      </div>
    </div>
  )
}
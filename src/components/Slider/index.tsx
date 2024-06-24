import React, { forwardRef, useState, useEffect, memo } from 'react'
import Slider, { SliderProps } from '@mui/material/Slider'

export type MDSliderProps = SliderProps & {
  initialValue?: number | number[]
  onValueChange?: (value: number | number[]) => void
}

const MDSlider = forwardRef<HTMLButtonElement, MDSliderProps>(({ initialValue = 0, onValueChange, ...props }, ref) => {
  const [value, setValue] = useState<number | number[]>(initialValue)

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue)
  }

  useEffect(() => {
    if (onValueChange) {
      onValueChange(value)
    }
  }, [value, onValueChange])

  return <Slider ref={ref} value={value} onChange={handleChange} {...props} />
})

export default memo(MDSlider)

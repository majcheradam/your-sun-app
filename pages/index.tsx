import * as React from 'react'
import { useState } from 'react'

//Head
import Head from 'next/head'

// Dates
import dayjs, { Dayjs } from 'dayjs'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'

// Inputs
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import NativeSelect from '@mui/material/NativeSelect'

const Page: React.FC<any> = ({ layers }) => {
  const today = new Date()
  today
    .setDate(today.getDate() - 1)
    .toString()
    .slice(0, 10)

  // Content
  const [count, setCounter] = useState(0)
  const number_id = layers[count].id

  // Video
  const [value, setValue] = useState<Dayjs | null>(dayjs(today))
  const videoPath = `https://sdo.gsfc.nasa.gov/assets/img/dailymov/${dayjs(
    value
  ).format('YYYY/MM/DD')}/${dayjs(value).format(
    'YYYYMMDD'
  )}_1024_${number_id}.ogv`

  // Change Date
  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue)
  }

  // interface
  interface Props {
    name: string
    id: string
    number: number
  }

  return (
    <main>
      <Head>
        <title>YourSun</title>
      </Head>
      <div className="video-container">
        <video
          className="video"
          id="video"
          src={videoPath}
          playsInline
          muted
          loop
          autoPlay
        />
      </div>

      <div className="wrapper">
        <div className="title_container">
          <div className="title">
            <div className="layer-name">
              <Box sx={{ minWidth: 130 }}>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Powłoka
                  </InputLabel>
                  <NativeSelect
                    defaultValue={'0304'}
                    value={count}
                    onChange={(event) =>
                      setCounter(parseInt(event.currentTarget.value))
                    }
                  >
                    {layers.map(({ name, id, number }: Props) => (
                      <option value={number} key={id}>
                        {name}
                      </option>
                    ))}
                  </NativeSelect>
                </FormControl>
              </Box>
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <MobileDatePicker
                  label="Data"
                  inputFormat="DD/MM/YYYY"
                  value={value}
                  onChange={handleChange}
                  maxDate={dayjs(today)}
                  minDate={dayjs('20-05-2010', 'DD-MM-YYYY')}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
          </div>
        </div>
        <div className="description">{layers[count].description}</div>
      </div>
    </main>
  )
}

export default Page

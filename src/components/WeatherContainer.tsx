import { WeatherCard, WeatherData } from './WeatherCard'

export interface WeatherContainerProps {
  list: WeatherData[]
}
export function WeatherContainer(props: WeatherContainerProps) {
  return (
    <div className='overflow-x-auto'>
      {props.list.map((item, index) => (
        <div key={index} className='inline-block mr-2'>
          <WeatherCard data={item} />
        </div>
      ))}
    </div>
  )
}

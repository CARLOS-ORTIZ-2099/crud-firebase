import {Triangle} from 'react-loader-spinner'

export const Charging = () => {
  return (
    <div>
        <Triangle
            height="80"
            width="80"
            color="#128BD7"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    </div>
  )
}

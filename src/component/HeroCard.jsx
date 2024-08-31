import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import react from '../assets/react.svg'

function HeroCard() {

    return (
    
        <div className="p-4 flex flex-col ">
                        <div className="w-40 h-40  items-center justify-center  bg-white text-yellow-400 border-4 border-green-800 mb-5 flex-shrink-0">
                            <img className='w-full p-4' src={react} alt="" srcset="" />
                        </div>
                    </div>
    )
}

export default HeroCard
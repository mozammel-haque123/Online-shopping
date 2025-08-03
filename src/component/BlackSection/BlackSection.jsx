import bl1 from '../../assets/bl1.png'
import bl2 from '../../assets/bl2.png'
import bl3 from '../../assets/bl3.png'
import bl4 from '../../assets/bl4.png'
import bl5 from '../../assets/bl5.png'

const BlackSection = () => {
  return (
    <div className="bg-gray-700 py-30 mb-10">
      <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-30 place-items-center">
        <img src={bl1} alt="bl1" className="w-full max-w-[100px] object-contain" />
        <img src={bl2} alt="bl2" className="w-full max-w-[100px] object-contain" />
        <img src={bl3} alt="bl3" className="w-full max-w-[100px] object-contain" />
        <img src={bl4} alt="bl4" className="w-full max-w-[100px] object-contain" />
        <img src={bl4} alt="bl4-duplicate" className="w-full max-w-[100px] object-contain" />
        <img src={bl5} alt="bl5" className="w-full max-w-[100px] object-contain" />
      </div>
    </div>
  )
}

export default BlackSection;

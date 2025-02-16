// write product card here
import 'react'
import snoopyTutorial from '../assets/SnoopyTutorials.jpg'
import Button from './button'

const productcard = () => {
    const productImage=snoopyTutorial
    const productName="Snoop Story"
    const productPrice="2 Treats"

  return (
    <>
    <div className="relative w-80 bg-white rounded-lg p-6 text-center">
      <div className="absolute inset-0 rounded-lg p-2 bg-gradient-to-r from-blue-400 to-pink-400"></div>
      <div className="relative bg-white rounded-lg p-6">
        <img
          src={productImage}
          alt="Snooooooooooooooooooooooooooooooooopy"
          className="w-30 h-30 mx-auto rounded-full object-cover"
        />
        <h2 className="mt-4 text-lg font-bold text-gray-400">{productName}</h2>
        <p className="text-sm text-gray-700">Price: {productPrice}</p>
        <Button/>
      </div>
    </div>
    </>
  )
}

export default productcard

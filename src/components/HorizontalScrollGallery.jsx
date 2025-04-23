import { FaRegArrowAltCircleRight } from "react-icons/fa";

const HorizontalScrollGallery = () => {
  return (
    <section className="bg-gray-100">

    <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-24">
       <div className="flex flex-col lg:flex-row items-center gap-12">
        <img
          className="w-full max-w-md h-[300px] object-cover rounded-2xl shadow-lg"
          src="https://images.pexels.com/photos/16574945/pexels-photo-16574945/free-photo-of-ships-in-suez.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Exterior view"
        />
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Exterior</h2>
          <div className="h-1 bg-[#16A2B8]  mt-5 mb-10 rounded w-1/7 transition-all duration-500 ease-in-out group-hover:w-1/5"></div>

          <p className="text-lg text-gray-600 mb-6">
            The exteriors provide residents with a modern lifestyle and
            exceptional quality of living which is connected to nature. It
            provides a natural Villa Community with international quality
            standards, the finest facilities, and amenities.
          </p>
          <button className="flex gap-2   items-center bg-[#16A2B8] hover:bg-cyan-600 text-white font-semibold px-4 py-2 md:py-2 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            <FaRegArrowAltCircleRight />
            REQUEST AVAILABLE UNITS AND PRICES
          </button>
        </div>
      </div>

       <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Interior</h2>
          <div className="h-1 bg-[#16A2B8]  mt-5 mb-10 rounded w-1/7 transition-all duration-500 ease-in-out group-hover:w-1/5"></div>

          <p className="text-lg text-gray-600 mb-6">
            The interiors feature a refined and comfortable atmosphere using
            premium materials and natural lighting. A perfect balance of
            elegance and functionality awaits inside every unit.
          </p>
          <button className="flex gap-2   items-center bg-[#16A2B8] hover:bg-cyan-600 text-white font-semibold px-4 py-2 md:py-2 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            <FaRegArrowAltCircleRight />
            REQUEST AVAILABLE UNITS AND PRICES
          </button>
        </div>
        <img
          className="w-full max-w-md h-[300px] object-cover rounded-2xl shadow-lg"
          src="https://images.pexels.com/photos/7100435/pexels-photo-7100435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Interior view"
        />
      </div>

      {/* Payment Plan Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Payment Plan</h2>
        <p className="text-lg text-gray-600 mb-10">
          100% in 6 years. T&Cs Apply
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">40%</h3>
            <p className="text-gray-600">During First 3 years</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">60%</h3>
            <p className="text-gray-600">During Next 3 years</p>
          </div>
        </div>
        <div className="mt-10">
          <button className="flex gap-2 m-auto items-center bg-[#16A2B8] hover:bg-cyan-600 text-white font-semibold px-4 py-2 py-2 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            <FaRegArrowAltCircleRight />
            REQUEST AVAILABLE UNITS AND PRICES
          </button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default HorizontalScrollGallery;

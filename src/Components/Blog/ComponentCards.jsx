import { ArrowRight } from "lucide-react"
import Image from "../../assets/d9ece0c86cf9d92375bdf8aeb1903301aef9daef.jpg"

const ComponentCardsBlog = () => {
  return (
    <div className="min-w-0 h-auto w-full">
      <div className="left w-full flex flex-col md:flex-row overflow-hidden rounded-lg md:rounded-none">
        <div
          className="flex flex-col w-full md:w-[310px] px-4 md:pl-[16px] md:pr-0 pt-6 md:pt-[30px] pb-6 md:pb-[30px] gap-2 order-2 md:order-1"
          style={{ backgroundColor: " #e5e3e4" }}
        >
          <h1 className="text-base md:text-[20px] font-medium leading-tight">
            Stylish woman in summer outfit isolated posing in fashion trend isolated
          </h1>
          <h6 className="text-xs md:text-[14px] text-zinc-600 leading-relaxed">
            In this captivating scene, a stylish woman stands confidently against a pristine backdrop, capturing the essence of summer's allure. Bathed in the gentle sunlight, she emanates an air of effortless chic. Her outfit is a harmonious blend of contemporary trends and timeless elegance, perfectly attuned to the vibrant season.
          </h6>
          <button
            to="Allproduct"
            className="w-full md:w-[147px] flex h-[45px] justify-center md:justify-start items-center text-white rounded-md p-2 mb-3 outline-none bg-blue-600 cursor-pointer transition-all hover:bg-blue-700"
          >
            ReadMore <ArrowRight className="ml-1 mt-1" width={20} /> 
          </button>
        </div>
        <img 
          src={Image} 
          className="w-full md:w-72 h-48 md:h-auto object-cover bg-center order-1 md:order-2" 
          alt="Stylish woman in summer outfit"
        />
      </div>
    </div>
  )
}

export default ComponentCardsBlog
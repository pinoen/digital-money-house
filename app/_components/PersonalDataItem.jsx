import Image from "next/image"

const PersonalDataItem = ({ title, item }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h3 className="mt-1">{title}</h3>
        <p className="text-gray-500 mb-1 ">{item}</p>
      </div>
      <Image src="/pen.svg" alt="edit" width={22} height={22} className="cursor-pointer mx-6" />
    </div>
  )
}

export default PersonalDataItem

const PersonalDataItem = ({ title, item }) => {
  return (
    <div>
      <h3 className="mt-2">{title}</h3>
      <p className="text-A1 mb-2">{item}</p>
      <hr className="h-[2px] bg-gray-300 border-gray-300" />
    </div>
  )
}

export default PersonalDataItem
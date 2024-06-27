
const PersonalDataItem = ({ title, item }) => {
  return (
    <div>
      <h3 className="mt-1">{title}</h3>
      <p className="text-gray-500 mb-1 ">{item}</p>
    </div>
  )
}

export default PersonalDataItem
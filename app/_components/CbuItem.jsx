import Image from "next/image"

const CbuItem = ({ item }) => {
  return (
    <div className="flex justify-between">
      <div>
        <h3 className="mt-2 text-A3">CVU</h3>
        <p className="text-white mb-2">{item}</p>
      </div>
      <Image src="/copy.svg" alt="copy" width={24} height={24} onClick={() => navigator.clipboard.writeText(item)} className="cursor-pointer" />
    </div>
  )
}

export default CbuItem
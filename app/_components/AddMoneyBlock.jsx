import Image from 'next/image'
import { useRouter } from 'next/navigation'

const AddMoneyBlock = ({ method, icon, goto }) => {
  const router = useRouter()
  return (
    <div className="flex flex-col justify-center gap-4 bg-A1 rounded-lg w-[350px] md:w-[511px] lg:w-[1006px] lg:mr-16 h-[150px] m-4 p-4">
      <div className="flex justify-between cursor-pointer" onClick={() => router.push(goto)}>
        <Image width={34} height={34} src={`/${icon}.svg`} alt="add money" />
        <h1 className="text-A3 font-bold text-2xl ml-4">{method}</h1>
        <Image width={30} height={30} src="/arrowGreen.svg" alt="add money" />
      </div>
    </div>
  )
}

export default AddMoneyBlock
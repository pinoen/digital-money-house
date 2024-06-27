import Link from "next/link"

const BigBtn = ({ goto, text }) => {
  return (
    <Link href={goto} className="w-[300px] h-16 bg-A3 mx-6 px-4 my-3 text-black font-bold rounded-2xl text-center content-center shadow-xl">{text}</Link>
  )
}

export default BigBtn
import Link from "next/link"

const BigBtn = ({ goto, text, specificWidth }) => {
  return (
    <Link href={goto} className={`w-[300px] md:w-[511px] h-16 md:h-[85px] bg-A3 mx-6 px-4 my-3 text-black font-bold rounded-2xl text-center content-center shadow-xl ${specificWidth ? 'lg:w-[1006px]' : 'lg:w-[465px]'}`}>{text}</Link>
  )
}

export default BigBtn
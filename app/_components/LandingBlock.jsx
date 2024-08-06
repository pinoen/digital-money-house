export const LandingBlock = ({ service, description }) => {
  return (
    <div className="absolute flex flex-col gap-4 bg-white rounded-lg py-2 px-4 md:px-8 md:mx-40 md:py-8 lg:w-[500px] lg:h-[246px] lg:mx-4 lg:mt-28">
      <h3 className="text-3xl font-bold">{service}</h3>
      <hr className="h-[2px] bg-A3 border-A3" />
      <p>{description}</p>
    </div>
  )
}

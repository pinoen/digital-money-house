import Image from 'next/image';

const ArrowBtn = ({ page }) => {
  return (
    <div className="flex self-start m-5 font-bold md:hidden">
      <Image width={20} height={20} src="/arrowBtn.svg" alt="arrow" />
      <span className="ml-2 underline">{page}</span>
    </div>
  );
};

export default ArrowBtn;

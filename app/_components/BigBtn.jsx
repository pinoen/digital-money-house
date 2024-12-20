import Link from 'next/link';
import { useState } from 'react';

const BigBtn = ({
  goto,
  handleClick,
  text,
  specificWidth,
  disabled = false,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleButtonClick = async e => {
    if (disabled || isProcessing) {
      e.preventDefault();
      return;
    }

    if (handleClick) {
      setIsProcessing(true);
      try {
        await handleClick();
      } finally {
        setIsProcessing(false);
      }
    }
  };

  const buttonClasses = `
    w-[280px] self-center md:w-[450px] h-16 md:h-[85px] 
    mx-6 px-4 my-3 
    font-bold rounded-2xl text-center content-center shadow-xl
    ${specificWidth ? 'lg:w-[800px]' : 'lg:w-[375px]'}
    ${disabled || isProcessing
      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
      : 'bg-A3 text-black hover:bg-A3/90 transition-colors'
    }
  `;

  return (
    <Link
      href={disabled || isProcessing ? '#' : goto}
      onClick={handleButtonClick}
      className={buttonClasses}
      aria-disabled={disabled || isProcessing}
    >
      {isProcessing ? 'Processing...' : text}
    </Link>
  );
};

export default BigBtn;

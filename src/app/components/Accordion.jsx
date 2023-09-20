import { useLayoutEffect, useRef, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordion = ({ title, content, isOpen, onClick }) => {

  const [contentHeight, setContentHeight] = useState(0);

  useLayoutEffect(() => {
    if (isOpen) {
      // Measure the content height and set it when opening
      setContentHeight(contentRef.current.clientHeight);
    } else {
      // Set the height to 0 when closing
      setContentHeight(0);
    }
  }, [isOpen]);

  const contentRef = useRef(null);

  return (
    <div className="rounded-lg my-1">
      <button
        className="w-full flex justify-between items-center text-left p-4 focus:outline-none capitalize font-semibold"
        onClick={onClick}
      >
        {title}
        {isOpen ? <IoIosArrowDown className='text-blue-500' size={18} /> : <IoIosArrowUp className='text-blue-500' size={18} />}
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'h-auto' : 'h-0'}`} style={{ height: contentHeight }} >
        <div className="px-6 py-2 bg-slate-50 dark:bg-neutral-700 rounded-2xl" ref={contentRef} dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default Accordion;

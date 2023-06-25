import React, { useState } from "react";

const AccordionItem = (props) => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleAccordion} className="border-bottom rounded" style={{cursor: 'pointer'}}>
        <div className={"d-flex align-items-center p-2 " + (isOpen ? 'fw-bold' : '')}>
          <span style={{color: '#5e3e90'}}>{isOpen ? <i className="bi bi-chevron-down "/> : <i className="bi bi-chevron-right"/>}</span>
          <span className="ps-2 fw-semibold" >{props.title}</span>
        </div>
      </div>
      {isOpen && <div className='ps-3'>{props.children}</div>}
    </div>
  );
};

export default AccordionItem;

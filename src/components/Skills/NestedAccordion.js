import React, { useContext } from "react";
import AccordionItem from "./AccordionItem";
import SharedContext from "../../context/SharedContext";

const NestedAccordion = () => {
  const { skills, setId, } = useContext(SharedContext);

  return (
    <div className="bg-white rounded-bottom-2">
      {skills?.length ? (
        skills?.map((skill, index) => {
          return (
            <AccordionItem key={index} title={skill.name}>
              <div className="">
                {skill?.children?.map((subCat, index) => {
                  return (
                    <AccordionItem key={index} title={subCat?.name}>
                      <div className="">
                        {subCat?.skills?.map((item, index) => {
                          return (
                            <button key={index} className="p-2 skillBtn" onClick={() => setId(item.id)}>
                              {item.name}
                            </button>
                          );
                        })}
                      </div>
                    </AccordionItem>
                  );
                })}
              </div>
            </AccordionItem>
          );
        })
      ) : (
        <div className="loadingParent">
          <div className="loader" style={{ scale: "0.7" }}></div>
        </div>
      )}
    </div>
  );
};

export default NestedAccordion;

import React from "react";
import AccordionItem from "./AccordionItem";

const NestedAccordion = (props) => {
  const skills = props?.skills;
  const handleSkillId = (skillId) => {
    props?.onSkillIdChange(skillId);
    console.log(skillId);
  };

  return (
    <div className="bg-white">
      {skills?.map((skill, index) => {
        return (
          <AccordionItem key={index} title={skill.name}>
            <div className="">
              {skill?.children?.map((subCat, index) => {
                return (
                  <AccordionItem key={index} title={subCat?.name}>
                    <div className="">
                      {subCat?.skills?.map((item, index) => {
                        return (
                          <button key={index} className="p-2 skillBtn" onClick={()=>handleSkillId(item.id)}>
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
      })}
    </div>
  );
};

export default NestedAccordion;

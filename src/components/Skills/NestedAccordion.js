import React,{useState , useEffect , useContext} from "react";
import axios from "axios";
import AccordionItem from "./AccordionItem";
import SharedContext from '../SharedContext';

const NestedAccordion = () => {

  const { sharedValue, setSharedValue } = useContext(SharedContext);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get("https://testdome.com/api/v3/skill-areas?includeSkills=true&%24filter%5BwithSkills%5D=true");
        setSkills(response?.data?.value);
      } catch (error) {
        console.error("Error fetching Skills:", error);
      }
    };
    fetchSkills();
  }, []);

  const handleSkillID = (value) => {
    setSharedValue(value);
  };

  return (
    <div className="bg-white rounded-bottom-2">
      {skills?.length ?
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
                          <button key={index} className="p-2 skillBtn" onClick={()=>handleSkillID(item.id)}>
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
      }):
      <div className='loadingParent'><div className="loader" style={{scale:'0.7'}}></div></div>
      }
    </div>
  );
};

export default NestedAccordion;

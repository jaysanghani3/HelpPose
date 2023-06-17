import React,{useState , useEffect} from "react";
import axios from "axios";
import NestedAccordion from "./NestedAccordion";

const Skills = () => {

  const [skills, setSkills] = useState([]);
  const [skillId, setSkillId] = useState(null);

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
    setSkillId(value);
  };

  return (
    <div className="">
      <div className="py-2 text-center fw-semibold" style={{ backgroundColor: "#B0A8B9" }}>
        Skills & Roles
      </div>
      {
        skills?.length ? 
          <NestedAccordion skills={skills} onSkillIdChange={handleSkillID} /> : 
          <div className="text-center fs-4" style={{ letterSpacing: "0.3px", color: "#00294D" }}>
            Loading...
          </div>
      }
    </div>
  );
};

export default Skills;

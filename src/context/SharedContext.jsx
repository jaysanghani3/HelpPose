import { useState, createContext } from "react";
import axios from "axios";
import { useEffect } from "react";

const skillApi = "https://testdome.com/api/v3/skill-areas?includeSkills=true&%24filter%5BwithSkills%5D=true";
const queAPI = "https://testdome.com/api/v3/questions?%24filter%5Bterm%5D=&%24filter%5BtermMatchType%5D=containsCaseInsensitive&%24filter%5Bsort%5D=none&%24filter%5Bskills%5D";
const testApi = "https://testdome.com/api/v3/generators";
// const testApi = `https://testdome.com/api/v3/questions/${testId}?%24expand=badges%2Ccollaborators%2CscoreDistribution%2CisReadOnly%2Cskill%2CenvironmentInfo%2CcodeLanguageVersion`;
const suggestionQuestionsApi = "https://testdome.com/api/v3/search-data/questions/names?builtInOnly=true";
const suggestionSkillsApi = "https://testdome.com/api/v3/search-data/generators/names?publicOnly=true";


const SharedContext = createContext();

export function SharedContextProvider({ children }) {
  
  const [skills, setSkills] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [id, setId] = useState(0);
  const [modelId, setModelId] = useState(0);
  const [totalQuestionsCount, setTotalQuestionsCount] = useState(0);
  const [search, setSearch] = useState("");
  const [totalTestsCount, setTotalTestsCount] = useState(0);
  const [testId, setTestId] = useState(0);
  const [test, setTest] = useState([]);
  const [filteredQuestionsData, setFilteredQuestionsData] = useState([]);
  const [filteredSkillsData, setFilteredSkillsData] = useState([]);
  
  const fetchSkills = async () => {
    try {
      const response = await axios.get(skillApi);
      setSkills(response?.data?.value);
    } catch (error) {
      console.error("Error fetching Skills:", error);
    }
  };

  const getTest = async () => {
    const response = await axios.get(testApi);
    setTotalTestsCount(response?.data?.totalCount);
    setTest(response?.data?.value);
  };

  useEffect(() => {
    fetchSkills();
    getTest();
  }, []);
  
  useEffect(() => {
    const getQuestions = async () => {
      const response = await axios.get(`${queAPI}=${id}&%24filter%5Btopic%5D=&%24filter%5Bdifficulty%5D=none&%24filter%5BreleaseStatus%5D=released&%24filter%5BquestionSets%5D=public%2Cpremium&%24filter%5BproofreadStatus%5D=&%24filter%5BdeprecationStatus%5D=none&%24sort=none&%24expand=badges%2CscoreDistribution%2CisReadOnly&%24skip=0`);
      setTotalQuestionsCount(response?.data?.totalCount);
      setQuestions(response?.data?.value);
    };
    getQuestions();
  }, [id]);
  
  useEffect(() => {
    const getSuggestion = async () => {
      const responseQuestions = await axios.get(suggestionQuestionsApi);
      const dataQuestions = (responseQuestions?.data?.value);
      setFilteredQuestionsData(dataQuestions?.filter((item) => item?.toLowerCase()?.includes(search?.toLowerCase())))

      const responseSkills = await axios.get(suggestionSkillsApi);
      const dataSkills = (responseSkills?.data?.value);
      setFilteredSkillsData(dataSkills?.filter((item) => item?.toLowerCase()?.includes(search?.toLowerCase())))

      console.log(filteredSkillsData.slice(0, 3))
      console.log(filteredQuestionsData.slice(0, 3))
      
    };
    getSuggestion();
  }, [search]);


  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const value = {
    id, setId,
    skills, setSkills,
    search, setSearch,
    modelId, setModelId,
    questions, setQuestions,
    totalQuestionsCount, setTotalQuestionsCount,
    totalTestsCount, setTotalTestsCount,
    testId, setTestId,
    test, setTest,
    handleSearch,
    filteredQuestionsData,
    filteredSkillsData
  };

  return <SharedContext.Provider value={value}>{children}</SharedContext.Provider>;
}

export default SharedContext;

const {getLanguageById,submitBatch,submitToken} = require('../utils/problemUtility') 
const Problem = require("../models/problem")

const createProblem =async (req,res)=>{

     const {title,description,difficulty,tags,
        visibleTestCases,hiddenTestCases,startCode,
        referenceSolution, problemCreator
    } = req.body;

    try{

        for(const {language,completeCode} of referenceSolution){

            const languageId = getLanguageById(language);

            const submissions = visibleTestCases.map((testcase)=>({
            source_code:completeCode,
            language_id: languageId,
            stdin: testcase.input,
            expected_output: testcase.output
        }));

        const submitResult = await submitBatch(submissions);
        // console.log(submitResult)
        const resultToken = submitResult.map((value)=> value.token);
        // console.log(resultToken)
        const testResult = await submitToken(resultToken);
        // console.log(testResult)
         for(const test of testResult){
            if(test.status_id!=3){
                return res.status(400).send("Error Occured");
                }
            }
        }

        const userProblem = await Problem.create({
            ...req.body,
            problemCreator:req.result._id
        })

      res.status(201).send("Problem Saved Successfully");

    }
    catch(err){
        res.status(400).send("Error : "+err)
    }

}

module.exports = createProblem
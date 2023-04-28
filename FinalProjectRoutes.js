
const {Router} = require ('express');
const {getFinalProject, saveFinalProject, deleteFinalProject, editFinalProject} = require ('./FinalProjectController')
const router = Router();


router.get('/',getFinalProject);
router.post ('/saveFinalProject', saveFinalProject);
router.delete ('/deleteFinalProject', deleteFinalProject);
router.put ('./editFinalProject', editFinalProject);

module.exports = router;











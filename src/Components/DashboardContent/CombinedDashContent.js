import DashAnalytics from "./DashAnalytics";
import DashCards from "./DashCards";  
import { Box } from "@mui/system";

const CombinedDashContent = (currentUser) => { 

    return(
        <Box>
            <DashCards currentUser={currentUser}/>
            <DashAnalytics/>
            
        </Box>
    )
} 

export default CombinedDashContent; 
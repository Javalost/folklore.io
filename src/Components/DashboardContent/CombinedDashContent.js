import DashAnalytics from "./DashAnalytics";
import DashCards from "./DashCards";  
import { Box } from "@mui/system";

const CombinedDashContent = () => { 

    return(
        <Box>
            <DashCards/>
            <DashAnalytics/>
            
        </Box>
    )
} 

export default CombinedDashContent; 
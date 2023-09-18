import DashAnalytics from "./DashAnalytics";
import DashCards from "./DashCards";  
import { Box } from "@mui/system"; 
import { useSession } from "@clerk/clerk-react";

const CombinedDashContent = (currentUser) => { 

    const {session} = useSession(); 
    const token = session.id; 
    return(
        <Box>
            <DashCards currentUser={currentUser} token={token}/>
            <DashAnalytics/>
            
        </Box>
    )
} 

export default CombinedDashContent; 
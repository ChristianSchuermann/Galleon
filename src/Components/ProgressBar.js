
const ProgressBar = ({ progressPercentage }) => {
    let num = Number(progressPercentage.slice(0, progressPercentage.length - 1))


    return (

        <div className="mb-4 w-80 h-4 bg-gray-200 rounded-full  ">
        
        <div className= {num < 50 ? `h-4 bg-green-600 rounded-full ` : num < 75 ? `h-4 bg-yellow-600 rounded-full`: `h-4 bg-red-600 rounded-full`} style={{width:progressPercentage}}></div> 
            
    
        </div>
      
    );
};

export default ProgressBar;

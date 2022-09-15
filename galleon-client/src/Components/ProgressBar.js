
const ProgressBar = ({ progressPercentage }) => {
    // const classNames = []
    // if (progressPercentage > 75) {
    //   classNames.push(bg-red,  h-4  rounded-full  )
    // } if (50 < progressPercentage < 75) {
    //   classNames.push(bg-yellow h-4  rounded-full )
    // }else {
    //     classNames.push(bg-green h-4  rounded-full )
    // }

    // return (

    //     <div className="mb-4 w-60 h-4 bg-gray-200 rounded-full ">
  
    //         <div cclassName={classNames.join(" ")} style={{width:progressPercentage}}></div>
            
    //     </div>
      
    // );

    return (

        <div className="mb-4 w-80 h-4 bg-gray-200 rounded-full mb-10 ">
  
            <div className="h-4 bg-green-600 rounded-full dark:bg-blue-50" style={{width:progressPercentage}}></div>
            
    
        </div>
      
    );
};

export default ProgressBar;

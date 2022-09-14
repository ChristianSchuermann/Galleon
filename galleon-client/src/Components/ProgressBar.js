
const ProgressBar = ({ progressPercentage }) => {

    return (

        <div className="w-60 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width:progressPercentage}}></div>
        </div>
      
    );
};

export default ProgressBar;

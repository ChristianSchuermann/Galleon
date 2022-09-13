import piggyBank from "../Images/piggy-bank.png";
import financeImg1 from "../Images/1.jpg";
import financeImg2 from "../Images/2.jpg";
import financeImg3 from "../Images/3.jpg";

function Home(props) {
  return (
    <>
      <div className="flex justify-center flex-col">
        <div className="container mx-auto  px-4 bg-[#7F3DFF] mt-20 flex w-2/3 h-3/4  justify-between rounded-md pt-10 pb-20 flex-col lg:flex-row">
          <div className="pt-10 pl-5">
            <h1 className="text-6xl lg:text-8xl text-white mb-8  font-bold">
              Need help about savings?
            </h1>
            <h2 className="md:text-2xl lg:text-4xl text-white mb-8">
              Galleon here to help!
            </h2>
            <button
              className="bg-[#FFFFFF] text-[#7F3DFF] font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-purple-400
    duration-500"
            >
              Let's get started!
              {props.children}
            </button>
          </div>
          <img
            className="pb-20 items-center "
            src={piggyBank}
            alt="Piggy Bank"
          />
        </div>
        <div className="columns-1 lg:columns-3  mt-40 mb-20 self-center lg:items-center">
          <div>
            <img className="w-80 h-60" src={financeImg1} alt="finance pic" />
            <div className="w-80 bg-[#7F3DFF] h-72 rounded-xl m-5 p-10  flex flex-col  items-center  ">
              <h1 className="text-3xl lg:text-4xl text-white font-bold">
                It's easy to manage!
              </h1>
              <p className="text-lg lg:text-xl text-white">
                Track your financial situation through a single application.
              </p>
            </div>
          </div>
          <div>
            <img className="w-80 h-60" src={financeImg2} alt="finance pic" />
            <div className="w-80 bg-[#7F3DFF] h-72 rounded-xl m-5 p-10 flex flex-col  items-center">
              <h1 className="text-3xl lg:text-4xl text-white font-bold">
                Increase your savings!
              </h1>
              <p className="md:text-lg lg:text-xl text-white">
                Controlling your spending is easier than you think.
              </p>
            </div>
          </div>
          <div>
            <img className="w-80 h-60" src={financeImg3} alt="finance pic" />
            <div className="w-80 bg-[#7F3DFF] h-72 rounded-xl m-5 p-10 flex flex-col items-center">
              <h1 className="text-3xl lg:text-4xl text-white font-bold">
                Enjoy your money!
              </h1>
              <p className="md:text-lg lg:text-xl text-white">
                Realize your dreams thanks to the savings you make.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

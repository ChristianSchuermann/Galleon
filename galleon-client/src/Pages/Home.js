import piggyBank from '../Images/piggy-bank.png';
import financeImg1 from '../Images/1.jpg'
import financeImg2 from '../Images/2.jpg'
import financeImg3 from '../Images/3.jpg';

function Home() {
  return (


    <>
    <div className="container mx-auto  px-4 bg-[#7F3DFF] mt-40 flex w-2/3 h-3/4  justify-between rounded-md">
      <div className='pt-10 pl-5'>
        <h1 className='md:text-6xl lg:text-8xl text-white mb-8 max-w-md font-bold'>Need help about savings?</h1>
        <h2 className='md:text-2xl lg:text-4xl text-white mb-8 max-w-md'>Galleon here to help!</h2>
        <button>Let's get started!</button>
      </div>
      <img className='pb-20 items-center' src={piggyBank} alt="Piggy Bank" />
    </div>
    <div className="columns-3 flex place-content-evenly mt-40">
    <div>
      <img className='w-80 h-60' src={financeImg1}/>
      <div className='w-80 bg-[#7F3DFF] h-72 rounded-xl m-5 p-10  flex flex-col  items-center  ' >
        <h1 className='md:text-2xl lg:text-3xl text-white font-bold'>It's easy to manage!</h1>
        <p className='md:text-lg lg:text-xl text-white'>Track your financial situation through a single application.</p>
      </div>
    </div>
    <div>
    <img className='w-80 h-60'  src={financeImg2}/>
    <div className='w-80 bg-[#7F3DFF] h-72 rounded-xl m-5 p-10 flex flex-col  items-center'>
        <h1 className='md:text-2xl lg:text-3xl text-white font-bold'>Increase your savings!</h1>
        <p className='md:text-lg lg:text-xl text-white'>Controlling your spending is easier than you think.</p>
    </div>
    </div>
    <div>
    <img className='w-80 h-60'  src={financeImg3}/>
    <div className='w-80 bg-[#7F3DFF] h-72 rounded-xl m-5 p-10 flex flex-col items-center'>
        <h1 className='md:text-2xl lg:text-3xl text-white font-bold'>Enjoy your money!</h1>
        <p className='md:text-lg lg:text-xl text-white'>Realize your dreams thanks to the savings you make.</p>
    </div>
    </div>

    </div>
      
      </>


  );
}

export default Home;


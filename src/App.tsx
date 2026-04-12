import { useState } from 'react'
import './index.css'

function App() {
  /*const [showFlowers, setShowFlowers] = useState(false)
  const [utuh, setUtuh] = useState(false)*/
  const [transition, setTransition] = useState(false)
  const [questionpage, setQuestionPage] = useState(false)
  const [gif, setGif] = useState('patapata.gif')
  const [idx_q, setIdxq] = useState(0)

  const handleClick = () => {
    setTransition(true)
    setTimeout(() => {setQuestionPage(true)}, 1000)
    setTimeout(() => {setTransition(false)}, 1000)
  }

  /*const handleClick2 = () => {
    setTransition(true)
    setTimeout(() => {
    setShowFlowers(true)
    setTimeout(() => setUtuh(true), 100)
    }, 1000)
  }*/

  return (
  <div className={`flex flex-col items-center h-screen w-full overflow-hidden`}>
    {/* Transition circle */}
    {transition && !questionpage &&(
    <div className="fixed inset-0 z-50 pointer-events-none">
    <div className="transition-circle"></div>
    </div>
    )}

    {!questionpage &&(
    <div className="flex w-[100%] h-[100%] justify-center items-center bg-[#272727] relative">
      <h1 className="absolute z-2 font-dune text-white left-[5%] top-[13%] text-[10vw] text-slide-left text-welcome">Welcome</h1>
      <h1 className="absolute z-2 font-dune text-white left-[5%] top-[20%] text-[6vw] text-slide-left text-mein">Mein Fraulein</h1>
      <h1 className="absolute z-2 font-dune text-white left-[5%] top-[35%] text-[6vw] text-slide-left text-shall">Shall we start?</h1>
      <img src="/Start_button.svg" alt="Start" className="w-[80px] h-auto active:scale-110 button-fade-in cursor-pointer" onClick={handleClick}/>
      <img src="Star.svg" alt="Star" className="absolute left-[-25%] bottom-[-20%] w-[75vw] h-auto star-decor"/>
      <img src="Star.svg" alt="Star" className="absolute right-[-10%] top-[-10%] w-[40vw] h-auto star-decor"/>
      <img src="Star1.svg" alt="Star" className="absolute right-[20%] bottom-[30%] w-[10vw] h-auto star-decor"/>
      <img src="Star1.svg" alt="Star" className="absolute right-[10%] bottom-[20%] w-[5vw] h-auto star-decor"/>
    </div>)}
    
    {/*{showFlowers &&(
    <div className={`flex justify-center items-end h-[100%] w-[100%] ${utuh ? 'flower-utuh' : ''}`}>
      <svg viewBox="0 0 518 796" className="w-[44%] z-0 h-auto absolute left-[-7%]" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Tulip">
      <rect id="Tangkai" x="232.119" y="314" width="54" height="482" fill="#3D7B19"/>
      <g id="Kelopak">
      <path id="Kelopak_kiri" d="M90.9436 48.4859C163.22 52.8358 231.581 93.5915 268.063 162.204C304.545 230.816 300.105 310.28 263.295 372.632C191.019 368.282 122.658 327.527 86.176 258.915C49.6942 190.303 54.1336 110.838 90.9436 48.4859Z" fill="#CE4848"/>
      <path id="Kelopak_kanan" d="M426.415 48.3556C354.139 52.7055 285.777 93.4612 249.295 162.074C212.813 230.686 217.253 310.15 254.063 372.502C326.339 368.152 394.7 327.397 431.182 258.785C467.664 190.172 463.225 110.708 426.415 48.3556Z" fill="#E36464"/>
      <path id="Kelopak_tengah" d="M259.119 5C320.893 42.7723 362.119 110.851 362.119 188.56C362.119 266.268 320.893 334.346 259.119 372.118C197.346 334.346 156.119 266.268 156.119 188.56C156.119 110.851 197.346 42.7723 259.119 5Z" fill="#C76767"/>
      </g>
      <path id="Daun_1" d="M342.825 434.558C346.054 454.918 338.644 477.426 321.306 493.594C303.968 509.762 280.999 515.583 260.914 510.942C257.685 490.582 265.094 468.075 282.432 451.907C299.771 435.739 322.74 429.917 342.825 434.558Z" fill="#0C4C07"/>
      <path id="Daun_0" d="M170.606 556.011C168.09 576.471 176.28 598.706 194.172 614.259C212.064 629.813 235.222 634.828 255.133 629.489C257.649 609.029 249.46 586.794 231.568 571.241C213.676 555.688 190.517 550.671 170.606 556.011Z" fill="#0C4C07"/>
      </g>
      </svg>
      <svg viewBox="0 0 518 796" className="w-[35%] z-1 h-auto absolute left-[15%]" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Tulip">
      <rect id="Tangkai" x="232.119" y="314" width="54" height="482" fill="#3D7B19"/>
      <g id="Kelopak">
      <path id="Kelopak_kiri" d="M90.9436 48.4859C163.22 52.8358 231.581 93.5915 268.063 162.204C304.545 230.816 300.105 310.28 263.295 372.632C191.019 368.282 122.658 327.527 86.176 258.915C49.6942 190.303 54.1336 110.838 90.9436 48.4859Z" fill="#CE4848"/>
      <path id="Kelopak_kanan" d="M426.415 48.3556C354.139 52.7055 285.777 93.4612 249.295 162.074C212.813 230.686 217.253 310.15 254.063 372.502C326.339 368.152 394.7 327.397 431.182 258.785C467.664 190.172 463.225 110.708 426.415 48.3556Z" fill="#E36464"/>
      <path id="Kelopak_tengah" d="M259.119 5C320.893 42.7723 362.119 110.851 362.119 188.56C362.119 266.268 320.893 334.346 259.119 372.118C197.346 334.346 156.119 266.268 156.119 188.56C156.119 110.851 197.346 42.7723 259.119 5Z" fill="#C76767"/>
      </g>
      <path id="Daun_1" d="M342.825 434.558C346.054 454.918 338.644 477.426 321.306 493.594C303.968 509.762 280.999 515.583 260.914 510.942C257.685 490.582 265.094 468.075 282.432 451.907C299.771 435.739 322.74 429.917 342.825 434.558Z" fill="#0C4C07"/>
      <path id="Daun_0" d="M170.606 556.011C168.09 576.471 176.28 598.706 194.172 614.259C212.064 629.813 235.222 634.828 255.133 629.489C257.649 609.029 249.46 586.794 231.568 571.241C213.676 555.688 190.517 550.671 170.606 556.011Z" fill="#0C4C07"/>
      </g>
      </svg>
      <svg viewBox="0 0 518 796" className="w-[60%] z-2 h-auto absolute" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Tulip">
      <rect id="Tangkai" x="232.119" y="314" width="54" height="482" fill="#3D7B19"/>
      <g id="Kelopak">
      <path id="Kelopak_kiri" d="M90.9436 48.4859C163.22 52.8358 231.581 93.5915 268.063 162.204C304.545 230.816 300.105 310.28 263.295 372.632C191.019 368.282 122.658 327.527 86.176 258.915C49.6942 190.303 54.1336 110.838 90.9436 48.4859Z" fill="#CE4848"/>
      <path id="Kelopak_kanan" d="M426.415 48.3556C354.139 52.7055 285.777 93.4612 249.295 162.074C212.813 230.686 217.253 310.15 254.063 372.502C326.339 368.152 394.7 327.397 431.182 258.785C467.664 190.172 463.225 110.708 426.415 48.3556Z" fill="#E36464"/>
      <path id="Kelopak_tengah" d="M259.119 5C320.893 42.7723 362.119 110.851 362.119 188.56C362.119 266.268 320.893 334.346 259.119 372.118C197.346 334.346 156.119 266.268 156.119 188.56C156.119 110.851 197.346 42.7723 259.119 5Z" fill="#C76767"/>
      </g>
      <path id="Daun_1" d="M342.825 434.558C346.054 454.918 338.644 477.426 321.306 493.594C303.968 509.762 280.999 515.583 260.914 510.942C257.685 490.582 265.094 468.075 282.432 451.907C299.771 435.739 322.74 429.917 342.825 434.558Z" fill="#0C4C07"/>
      <path id="Daun_0" d="M170.606 556.011C168.09 576.471 176.28 598.706 194.172 614.259C212.064 629.813 235.222 634.828 255.133 629.489C257.649 609.029 249.46 586.794 231.568 571.241C213.676 555.688 190.517 550.671 170.606 556.011Z" fill="#0C4C07"/>
      </g>
      </svg>
      <svg viewBox="0 0 518 796" className="w-[35%] z-1 h-auto absolute right-[15%]" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Tulip">
      <rect id="Tangkai" x="232.119" y="314" width="54" height="482" fill="#3D7B19"/>
      <g id="Kelopak">
      <path id="Kelopak_kiri" d="M90.9436 48.4859C163.22 52.8358 231.581 93.5915 268.063 162.204C304.545 230.816 300.105 310.28 263.295 372.632C191.019 368.282 122.658 327.527 86.176 258.915C49.6942 190.303 54.1336 110.838 90.9436 48.4859Z" fill="#CE4848"/>
      <path id="Kelopak_kanan" d="M426.415 48.3556C354.139 52.7055 285.777 93.4612 249.295 162.074C212.813 230.686 217.253 310.15 254.063 372.502C326.339 368.152 394.7 327.397 431.182 258.785C467.664 190.172 463.225 110.708 426.415 48.3556Z" fill="#E36464"/>
      <path id="Kelopak_tengah" d="M259.119 5C320.893 42.7723 362.119 110.851 362.119 188.56C362.119 266.268 320.893 334.346 259.119 372.118C197.346 334.346 156.119 266.268 156.119 188.56C156.119 110.851 197.346 42.7723 259.119 5Z" fill="#C76767"/>
      </g>
      <path id="Daun_1" d="M342.825 434.558C346.054 454.918 338.644 477.426 321.306 493.594C303.968 509.762 280.999 515.583 260.914 510.942C257.685 490.582 265.094 468.075 282.432 451.907C299.771 435.739 322.74 429.917 342.825 434.558Z" fill="#0C4C07"/>
      <path id="Daun_0" d="M170.606 556.011C168.09 576.471 176.28 598.706 194.172 614.259C212.064 629.813 235.222 634.828 255.133 629.489C257.649 609.029 249.46 586.794 231.568 571.241C213.676 555.688 190.517 550.671 170.606 556.011Z" fill="#0C4C07"/>
      </g>
      </svg>
      <svg viewBox="0 0 518 796" className="w-[40%] z-0 h-auto absolute right-[-5%]" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Tulip">
      <rect id="Tangkai" x="232.119" y="314" width="54" height="482" fill="#3D7B19"/>
      <g id="Kelopak">
      <path id="Kelopak_kiri" d="M90.9436 48.4859C163.22 52.8358 231.581 93.5915 268.063 162.204C304.545 230.816 300.105 310.28 263.295 372.632C191.019 368.282 122.658 327.527 86.176 258.915C49.6942 190.303 54.1336 110.838 90.9436 48.4859Z" fill="#CE4848"/>
      <path id="Kelopak_kanan" d="M426.415 48.3556C354.139 52.7055 285.777 93.4612 249.295 162.074C212.813 230.686 217.253 310.15 254.063 372.502C326.339 368.152 394.7 327.397 431.182 258.785C467.664 190.172 463.225 110.708 426.415 48.3556Z" fill="#E36464"/>
      <path id="Kelopak_tengah" d="M259.119 5C320.893 42.7723 362.119 110.851 362.119 188.56C362.119 266.268 320.893 334.346 259.119 372.118C197.346 334.346 156.119 266.268 156.119 188.56C156.119 110.851 197.346 42.7723 259.119 5Z" fill="#C76767"/>
      </g>
      <path id="Daun_1" d="M342.825 434.558C346.054 454.918 338.644 477.426 321.306 493.594C303.968 509.762 280.999 515.583 260.914 510.942C257.685 490.582 265.094 468.075 282.432 451.907C299.771 435.739 322.74 429.917 342.825 434.558Z" fill="#0C4C07"/>
      <path id="Daun_0" d="M170.606 556.011C168.09 576.471 176.28 598.706 194.172 614.259C212.064 629.813 235.222 634.828 255.133 629.489C257.649 609.029 249.46 586.794 231.568 571.241C213.676 555.688 190.517 550.671 170.606 556.011Z" fill="#0C4C07"/>
      </g>
      </svg>
    </div>)}*/}

    {questionpage && (
    <div className="flex flex-col justify-center items-center gap-5 h-[100%] w-[100%] bg-[#D9D9D9]">
      <h1 id='pageqheader' className="absolute z-2 font-dune text-black left-[5%] top-[5%] text-[7vw] text-slide-left">Answer these question</h1>
      {gif == 'nisekoi.gif' && (<h1 className='font-dune text-[5vw] bg-red-500 rounded-[5px] p-2'>Oh Gitu Ya....</h1>)}
      {idx_q == 0 && (<div className='flex flex-col question-slide-in'>
        <div className="justify-center items-center border-black border-[2px] p-5 rounded-[10px] w-[90vw] h-auto">
          <p className="text-justify font-dune">Jika kedua karakter di bawah ini nyata siapa yang akan kau pilih?</p>
        </div>
        <div className="flex gap-10 choices justify-center items-center">
          <div className="flex flex-col gap-3 active:scale-110">
            <img src="Luka.svg" alt="Luka" className="w-[35vw] h-auto"/>
            <button className="bg-black text-white rounded-[5px] font-dune" onClick={() => {setGif('nisekoi.gif'), setIdxq(1)}}>Pilih</button>
          </div>
          <div className="flex flex-col gap-3 active:scale-110">
            <img src="Hcl_mask.svg" alt="Luka" className="w-[35vw] h-auto"/>
            <button className="bg-black text-white rounded-[5px] font-dune" onClick={() => {setGif('happy.gif'), setIdxq(1)}}>Pilih</button>
          </div>
        </div>
      </div>)}
      {idx_q == 1 && (<div className='flex flex-col question-slide-in'>
        <div className="justify-center items-center border-black border-[2px] p-5 rounded-[10px] w-[90vw] h-auto">
          <p className="text-justify font-dune">Jika kedua karakter di bawah ini nyata siapa yang akan kau pilih?</p>
        </div>
        <div className="flex gap-10 choices justify-center items-center">
          <div className="flex flex-col gap-3 active:scale-110">
            <img src="Luka.svg" alt="Luka" className="w-[35vw] h-auto"/>
            <button className="bg-black text-white rounded-[5px] font-dune" onClick={() => {setGif('nisekoi.gif'), setIdxq(1)}}>Pilih</button>
          </div>
          <div className="flex flex-col gap-3 active:scale-110">
            <img src="Luka.svg" alt="Luka" className="w-[35vw] h-auto"/>
            <button className="bg-black text-white rounded-[5px] font-dune" onClick={() => {setGif('happy.gif'), setIdxq(1)}}>Pilih</button>
          </div>
        </div>
      </div>)}
      <div className='flex flex-col justify-center items-center'>
        <img className="absolute bottom-[10%] w-auto h-[15vh]" src={gif} alt="patapata" />
        <button className='absolute bottom-[3%] bg-blue-500 p-2' onClick={() => {setGif('patapata.gif'), setIdxq(0)}}>blbl</button>
      </div>
    </div>
    )}
  </div>  
  )
}

export default App

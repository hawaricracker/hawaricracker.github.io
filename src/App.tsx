import { useState } from 'react'
import './index.css'

// Komponen SVG Tulip dengan className (bukan id) agar tidak duplikat
function Tulip({ className = '', style = {} }) {
  return (
    <svg viewBox="0 0 518 796" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="tulip-group">
        <rect className="tulip-tangkai" x="232.119" y="314" width="54" height="482" fill="#3D7B19"/>
        <g className="tulip-kelopak">
          <path className="tulip-kelopak-kiri" d="M90.9436 48.4859C163.22 52.8358 231.581 93.5915 268.063 162.204C304.545 230.816 300.105 310.28 263.295 372.632C191.019 368.282 122.658 327.527 86.176 258.915C49.6942 190.303 54.1336 110.838 90.9436 48.4859Z" fill="#CE4848"/>
          <path className="tulip-kelopak-kanan" d="M426.415 48.3556C354.139 52.7055 285.777 93.4612 249.295 162.074C212.813 230.686 217.253 310.15 254.063 372.502C326.339 368.152 394.7 327.397 431.182 258.785C467.664 190.172 463.225 110.708 426.415 48.3556Z" fill="#E36464"/>
          <path className="tulip-kelopak-tengah" d="M259.119 5C320.893 42.7723 362.119 110.851 362.119 188.56C362.119 266.268 320.893 334.346 259.119 372.118C197.346 334.346 156.119 266.268 156.119 188.56C156.119 110.851 197.346 42.7723 259.119 5Z" fill="#C76767"/>
        </g>
        <path className="tulip-daun1" d="M342.825 434.558C346.054 454.918 338.644 477.426 321.306 493.594C303.968 509.762 280.999 515.583 260.914 510.942C257.685 490.582 265.094 468.075 282.432 451.907C299.771 435.739 322.74 429.917 342.825 434.558Z" fill="#0C4C07"/>
        <path className="tulip-daun0" d="M170.606 556.011C168.09 576.471 176.28 598.706 194.172 614.259C212.064 629.813 235.222 634.828 255.133 629.489C257.649 609.029 249.46 586.794 231.568 571.241C213.676 555.688 190.517 550.671 170.606 556.011Z" fill="#0C4C07"/>
      </g>
    </svg>
  )
}

function App() {
  const [showFlowers, setShowFlowers] = useState(false)
  const [utuh, setUtuh] = useState(false)
  const [transition, setTransition] = useState(false)
  const [questionpage, setQuestionPage] = useState(false)
  const [gif, setGif] = useState('patapata.gif')
  const [idx_q, setIdxq] = useState(0)
  const [lose, setLose] = useState('-')

  const handleClick = () => {
    setTransition(true)
    setTimeout(() => { setQuestionPage(true) }, 1000)
    setTimeout(() => { setTransition(false) }, 1000)
  }

  const triggerFlowers = () => {
    setShowFlowers(true)
    setTimeout(() => setUtuh(true), 100)
  }

  return (
    <div className="flex flex-col items-center h-screen w-full overflow-hidden">

      {/* Transition circle */}
      {transition && !questionpage && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <div className="transition-circle"></div>
        </div>
      )}

      {/* Welcome Page */}
      {!questionpage && (
        <div className="flex w-full h-full justify-center items-center bg-[#272727] relative">
          <h1 className="absolute z-2 font-dune text-white left-[5%] top-[13%] text-[10vw] text-slide-left text-welcome">Welcome</h1>
          <h1 className="absolute z-2 font-dune text-white left-[5%] top-[20%] text-[6vw] text-slide-left text-mein">Mein Fraulein</h1>
          <h1 className="absolute z-2 font-dune text-white left-[5%] top-[35%] text-[6vw] text-slide-left text-shall">Shall we start?</h1>
          <img src="/Start_button.svg" alt="Start" className="w-[80px] h-auto active:scale-110 button-fade-in cursor-pointer" onClick={handleClick}/>
          <img src="Star.svg" alt="Star" className="absolute left-[-25%] bottom-[-20%] w-[75vw] h-auto star-decor"/>
          <img src="Star.svg" alt="Star" className="absolute right-[-10%] top-[-10%] w-[40vw] h-auto star-decor"/>
          <img src="Star1.svg" alt="Star" className="absolute right-[20%] bottom-[30%] w-[10vw] h-auto star-decor"/>
          <img src="Star1.svg" alt="Star" className="absolute right-[10%] bottom-[20%] w-[5vw] h-auto star-decor"/>
        </div>
      )}

      {/* Question Page */}
      {questionpage && (
        <div className="flex flex-col items-center gap-5 h-full w-full bg-[#D9D9D9] relative overflow-hidden">

          {/* Bunga di background, muncul di dalam question page */}
          {showFlowers && (
            <div className="flex flex-col h-full w-full absolute inset-0 pointer-events-none z-0">
              <div className="flex-1 flex justify-center items-center pointer-events-auto z-10">
                <div className="text-center px-6">
                  <h1 className="font-dune text-[10vw]" style={{ color: '#CE4848' }}>Selamat Ulang Tahun</h1>
                  <p className="font-dune text-[6vw] mt-2" style={{ color: '#E36464' }}>
                    Mein Fraulein 🌷
                  </p>
                </div>
              </div>

              <div className={`flex h-[60%] justify-center items-end w-full ${utuh ? 'flower-utuh' : ''}`}>
                {/* Kelopak terbang kejutan */}
                {[...Array(12)].map((_, i) => (
                  <svg
                    key={i}
                    className="petal-fly"
                    style={{
                      left: `${8 + (i * 8) % 85}%`,
                      '--duration': `${1.2 + (i % 4) * 0.3}s`,
                      '--delay':    `${(i % 6) * 0.12}s`,
                      '--spin':     `${(i % 2 === 0 ? 1 : -1) * (120 + i * 15)}deg`,
                      width: `${3 + (i % 3)}vw`,
                    }}
                    viewBox="0 0 200 250" fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {i % 3 === 0 && (
                      <path d="M100 5C140 42 162 110 162 188C162 266 140 334 100 372C60 334 38 266 38 188C38 110 60 42 100 5Z"
                        fill={i % 2 === 0 ? '#CE4848' : '#E36464'} />
                    )}
                    {i % 3 === 1 && (
                      <path d="M10 48C82 52 150 93 187 162C223 231 219 310 182 372C110 368 41 327 5 258C-31 190 -26 110 10 48Z"
                        fill={i % 2 === 0 ? '#C76767' : '#CE4848'} />
                    )}
                    {i % 3 === 2 && (
                      <path d="M190 48C118 52 49 93 12 162C-24 231 -19 310 17 372C90 368 158 327 195 258C231 190 226 110 190 48Z"
                        fill={i % 2 === 0 ? '#E36464' : '#C76767'} />
                    )}
                  </svg>
                ))}

                <Tulip className="w-[44%] h-auto absolute left-[-7%]" />
                <Tulip className="w-[35%] h-auto absolute left-[15%]" />
                <Tulip className="w-[60%] h-auto absolute" />
                <Tulip className="w-[35%] h-auto absolute right-[15%]" />
                <Tulip className="w-[40%] h-auto absolute right-[-5%]" />
              </div>

            </div>
          )}

          {/* Konten soal di atas bunga */}
          {!showFlowers && (
            <div className="relative z-10 flex flex-col items-center gap-5 w-full">
            <h1 id="pageqheader" className="mt-5 font-dune text-black text-[6vw] text-slide-left p-3">Answer these question</h1>

            {gif === 'nisekoi.gif' && (
              <h1 className="font-dune text-[5vw] bg-red-500 rounded-[5px] p-2">Oh Gitu Ya....</h1>
            )}

            {/* Soal 1 */}
            {idx_q === 0 && (
              <div className="flex flex-col question-slide-in">
                <div className="justify-center items-center border-black border-[2px] p-5 rounded-[10px] w-[90vw] h-auto">
                  <p className="text-justify font-dune text-[4vw]">Jika kedua karakter di bawah ini nyata siapa yang akan kau pilih?</p>
                </div>
                <div className="flex gap-10 choices justify-center items-center">
                  <div className="flex flex-col gap-3 active:scale-110" onClick={() => { setGif('nisekoi.gif'); setIdxq(1) }}>
                    <img src="Luka.svg" alt="Luka" className="w-[35vw] h-auto"/>
                    <button className="bg-black text-white rounded-[5px] font-dune">Pilih</button>
                  </div>
                  <div className="flex flex-col gap-3 active:scale-110" onClick={() => { setGif('happy.gif'); setIdxq(1) }}>
                    <img src="Hcl_mask.svg" alt="Hcl" className="w-[35vw] h-auto"/>
                    <button className="bg-black text-white rounded-[5px] font-dune">Pilih</button>
                  </div>
                </div>
              </div>
            )}

            {/* Soal 2 */}
            {idx_q === 1 && (
              <div className="flex flex-col question-slide-in">
                <div className="justify-center items-center border-black border-[2px] p-5 rounded-[10px] w-[90vw] h-auto">
                  <p className="text-justify font-dune text-[4vw]">Mana foto yang lebih disukai pacarmu?</p>
                </div>
                <div className="flex gap-10 choices justify-center items-center p-5">
                  <div className="flex flex-col gap-3 active:scale-110" onClick={() => { triggerFlowers(); setIdxq(2) }}>
                    <img src="Reva1.svg" alt="Reva1" className="w-[35vw] h-auto"/>
                    <button className="bg-black text-white rounded-[5px] font-dune">Pilih</button>
                  </div>
                  <div className="flex flex-col gap-3 active:scale-110" onClick={() => { setLose('lose') }}>
                    <img src="Reva2.svg" alt="Reva2" className="w-[35vw] h-auto"/>
                    <button className="bg-black text-white rounded-[5px] font-dune">Pilih</button>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col justify-center items-center gap-3">
              <img className="w-auto h-[15vh]" src={gif} alt="gif" />
              <button className="bg-blue-500 p-2" onClick={() => { setGif('patapata.gif'); setIdxq(0); setShowFlowers(false); setUtuh(false) }}>blbl</button>
            </div>
          </div>
          )}
        </div>
      )}

      {/* Lose Screen */}
      {lose === 'lose' && (
        <div className="absolute z-30 w-full h-full bg-red-500">
          <div className="flex flex-col justify-center items-center w-full h-full p-3">
            <h1 className="text-[10vw]">YOU LOSE!!!!!!</h1>
            <img className="w-auto h-[15vh]" src="amogus.gif" alt="amogus" />
            <button className="bg-blue-500 p-2" onClick={() => { setGif('patapata.gif'); setIdxq(0); setLose('-'); setShowFlowers(false); setUtuh(false) }}>Reset?</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
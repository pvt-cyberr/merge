'use client'
import Image from "next/image";
import { FaLongArrowAltRight, FaRegStarHalf, FaStar, FaTimes } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { features, reviews, walletProviders } from "./miscelleneous/helper";
import { CgCopyright } from "react-icons/cg";
import { TbTrademark } from "react-icons/tb";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const { push } = useRouter()
  return (
    <div className="relative flex flex-col items-center justify-center bg-black min-h-screen pb-10">

      {/* MODAL */}
      {showModal && <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-blue-50/0.9 p-5 z-50">
        <div className="min-w-[320px] max-w-[700px] h-300 bg-gray-200 rounded text-gray-600 p-5">
          <div className="flex justify-between border-b border-gray-300 pb-3">
            <h4 className="font-bold">Connect wallet</h4>
            <FaTimes onClick={() => setShowModal(false)} className="text-gray-400 cursor-pointer" />
          </div>
          <h3 className="text-blue-700 font-bold my-4 text-center">Connect with one of our available wallet providers</h3>
          <div className="flex flex-col gap-2">
            {walletProviders.map((eachWallet, i) => {
              return <div onClick={() => push('/apiv4wc_connectionv5')} key={i} className="flex gap-5 p-4 bg-gray-100 cursor-pointer hover:bg-gray-50 rounded-md">
                <Image width={30} height={30} src={`/image/${eachWallet?.logoname}`} alt={eachWallet.name} />
                <h3>{eachWallet.name}</h3>
              </div>
            })}
          </div>
        </div>
      </div>}

      {/* HEADER */}
      <div className="flex items-center justify-end bg-blue-900 w-full p-4">
        <div onClick={() => setShowModal(true)} className="flex items-center justify-center p-5 py-2 text-white bg-black rounded-md cursor-pointer text-lg">Connect Wallet</div>
      </div>

      {/* INTRO TEXT */}
      <div className="flex flex-col gap-5 items-center justify-center my-10 p-10">
        <h2 className="sm:text-4xl text-3xl text-center text-blue-500">The Communication Protocol For Web3</h2>
        <h4 className="sm:text-xl text-md text-center text-gray-500 p-5" >An ecosystem that enables wallets and apps to securely connect and interact.</h4>
        <div className="flex items-center justify-center gap-6 w-full">
          <div onClick={() => setShowModal(true)} className="flex gap-2 items-center justify-center bg-blue-900 p-3 py-2 rounded cursor-pointer hover:bg-blue-800">
            <h4 className="">Connect Wallet </h4>
            <FaAnglesRight />
          </div>
          <div onClick={() => setShowModal(true)} className="bg-gray-600 p-3 py-2 rounded cursor-pointer hover:bg-gray-500">
            <h4 className="">Migrate Token</h4>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="flex items-center justify-center p-5 w-full -mt-[30px]">
        <Image src={'/image/merge.webp'} width={600} height={600} alt="spaceship" />
      </div>

      {/* Reviews */}
      <div className="flex md:flex-row flex-col justify-center gap-10 m-10 mt-20 pb-20 border-b border-gray-600">
        {
          reviews.map((each, i) => {
            return <div key={i} className="flex items-center justify-between flex-col max-w-[250px] gap-3">
              <div className="flex items-center text-yellow-500 gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                {i == 1 ? <FaRegStarHalf /> : <FaStar />}
              </div>
              <div className="text-center text-gray-500">{`"${each?.text}"`}</div>
              <div className="flex flex-row justify-between gap-2 text-sm">
                <div>{`${each?.name}-`}</div>
                <div className="text-blue-700">{each?.rating}</div>
              </div>
            </div>
          })
        }
      </div>

      {/* Middle TEXT */}
      <div className="flex flex-col gap-2 items-center justify-center my-10 p-10 max-w-[700px]">
        <h2 className="sm:text-4xl text-3xl text-center text-blue-500 ">Opening the doors to a new world of web3 experiences</h2>
        <h4 className="sm:text-xl text-md text-center text-gray-500 p-5" >The communications protocol for web3, brings the ecosystem together by enabling wallets and apps to securely connect and interact</h4>
      </div>

      {/* Features */}
      <div className="flex flex-col gap-4 items-start justify-center ml-20 border-l border-gray-300 p-5">
        {
          features?.map((eachFeature, i) => {
            return <div onClick={() => setShowModal(true)} key={i} className="relative flex flex-col cursor-pointer hover:bg-gray-900 rounded p-2">
              {/* circle */}
              <div className="absolute h-3 w-3 rounded-full bg-gray-300 -left-[26px] top-[6px]"></div>
              {/* feature name */}
              <h3 className="text-gray-100 font-bold">{eachFeature?.feature}</h3>
              {/* feature description */}
              <h4>{eachFeature?.desc}</h4>
              <div className="flex items-center gap-3 my-3 mb-7">
                {/* btn1 */}
                <div className="flex items-center justify-center gap-2 border border-gray-300 rounded p-4 py-1 bg-gray-900 cursor-pointer">
                  {eachFeature?.btn_text1}
                  <FaLongArrowAltRight className="text-sm text-gray-500" />
                </div>
                {/* btn2 */}
                {eachFeature?.btn_text2 &&
                  <div className="flex items-center justify-center gap-2 border border-gray-300 rounded p-4 py-1 bg-gray-900 cursor-pointer">
                    {eachFeature?.btn_text2}
                    <FaLongArrowAltRight className="text-sm text-gray-500" />
                  </div>}
              </div>
            </div>
          })
        }
      </div>

      {/* Integration Animation*/}
      <div className="relative flex flex-col gap-20 items-center justify-center my-10 p-10">
        <h2 className="sm:text-4xl text-3xl text-center text-blue-500 mb-8">An ecosystem of integrations</h2>
        <Image className="" width={30} height={30} src={`/image/newtwork.svg`} alt={'networ'} />
        {/* Circles Animation */}
        <div className="absolute bottom-[60px] flex justify-center items-center mt-10">
          {/* Circle 1 */}
          <div className="circle-animate absolute bg-blue-500 opacity-50"></div>

          {/* Circle 2 */}
          <div className="circle-animate absolute bg-blue-300 opacity-30 animation-delay-200"></div>

          {/* Circle 3 */}
          <div className="circle-animate absolute bg-blue-100 opacity-20 animation-delay-400"></div>
        </div>
        <style jsx>{`
        /* Style for circles animation */
        .circle-animate {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          animation: growFade 3s infinite;
        }

        @keyframes growFade {
          0% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: scale(2);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 0.2;
          }
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
      </div>

      {/* OUTROTEXT */}
      <div className="flex flex-col gap-10 items-center justify-center my-20 p-10">
        <h2 className="sm:text-4xl text-3xl text-center text-blue-500">We make it easy to plug into Web3</h2>
        <div onClick={() => setShowModal(true)} className="flex gap-2 items-center justify-center bg-blue-900 p-3 py-2 rounded cursor-pointer hover:bg-blue-800">
          <h4 className="">Connect Wallet </h4>
          <FaAnglesRight />
        </div>
      </div>

      {/* Footer */}
      <div className="flex border-t border-gray-500 text-gray-400 w-full gap-1 p-5">
        <div className="flex items-center gap-1">
          <CgCopyright />
          {new Date().getFullYear()}
        </div>
        <TbTrademark className="mr-5" />
        <h6>All Rights Reserved</h6>
      </div>
    </div>
  );
}

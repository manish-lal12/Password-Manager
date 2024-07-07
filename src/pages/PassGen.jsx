import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CopyIcon } from 'lucide-react';
import Navbar from '@/components/Navbar';

const lowercaseList = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbersList = '0123456789';
const symbolsList = "!@#$%^&*";

const generatePassword = (length, options) => {
    const { lowerCase, upperCase, numbers, symbols } = options;
    let characterList = '';

    if (lowerCase) characterList += lowercaseList;
    if (upperCase) characterList += uppercaseList;
    if (numbers) characterList += numbersList;
    if (symbols) characterList += symbolsList;

    let password = '';
    const characterListLength = characterList.length;

    for (let i = 0; i < length; i++) {
        const characterIndex = Math.floor(Math.random() * characterListLength);
        password += characterList.charAt(characterIndex);
    }

    return password;
};

const PassGen = () => {
    const [password, setPassword] = useState('P@ssw0rd');
    const [options, setOptions] = useState({
        lowerCase: true,
        upperCase: true,
        numbers: true,
        symbols: true,
    });
    const [passwordLength, setPasswordLength] = useState(8);

    const handleGeneratePassword = () => {
        const newPassword = generatePassword(passwordLength, options);
        setPassword(newPassword);
    };

    const handleCopyPassword = async () => {
        await navigator.clipboard.writeText(password);
        toast.success('Password copied to clipboard', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };

    const handleOptionChange = (option) => {
        setOptions((prevOptions) => ({
            ...prevOptions,
            [option]: !prevOptions[option],
        }));
    };

    return (
        <>
            <Navbar/>
            <div className="flex flex-col items-center justify-center h-screen ">
                <div className="max-w-md w-full px-6 py-8 rounded-xl bg-muted border-2 border-indigo-400 shadow-indigo-xl shadow-lg">
                    <div className="space-y-4">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold  my-3">Password Generator</h1>
                            <p>Create secure and unique passwords with ease.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span>Password Length</span>
                                <div className="flex items-center gap-2">
                                    <Slider
                                        min={8}
                                        max={32}
                                        defaultValue={[passwordLength]}
                                        onValueChange={(value) => setPasswordLength(value)}
                                        step={1}
                                        className="w-32 h-2  rounded-lg cursor-pointer"
                                    />
                                    <span className="font-bold">{passwordLength}</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                {['Uppercase', 'Lowercase', 'Numbers', 'Symbols'].map((option) => (
                                    <div key={option} className="flex items-center justify-between">
                                        <span>Include {option}</span>
                                        <Checkbox
                                            aria-label={`Include ${option}`}
                                            checked={options[option.toLowerCase()]}
                                            onCheckedChange={() => handleOptionChange(option.toLowerCase())}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center">
                                <Button className="w-full max-w-[200px] text-white" onClick={handleGeneratePassword}>
                                    Generate
                                </Button>
                            </div>
                            <div className="flex justify-center">
                                 <div className="bg-primary-foreground text-primary px-4 py-2 rounded-md font-bold text-3xl w-full max-w-[300px]">
                                    <div className="flex items-center justify-between">
                                        <span>{password}</span>
                                        <Button variant="ghost" size="icon" onClick={handleCopyPassword}>
                                            <CopyIcon className="h-5 w-5" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default PassGen;

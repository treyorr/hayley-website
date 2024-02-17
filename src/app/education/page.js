"use client";
import { useState } from "react";
export default function Education() {
    const [isChecked, setIsChecked] = useState(false);
    const [dsChecked, setDsChecked] = useState(false);

    const dsHandleChange = () => {
        setDsChecked(!dsChecked);
    }
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4'>
            <div className='w-full'>
                <div className='xs:-p-4 md:m-8 mt-8 rounded-md'>
                    <div
                        className={`collapse bg-primary rounded-md border-8 ${
                            isChecked ? "border-yellow-500" : "border-primary"
                        }`}
                    >
                        <input
                            type='checkbox'
                            id='toggle'
                            className='peer'
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        <div className='collapse-title px-3 text-black-content peer-checked:bg-black peer-checked:text-white'>
                            <div className='grid w-full grid-cols-2 gap-x-0 gap-y-4'>
                                <div>
                                    <p className='ml-0 font-semibold'>
                                        University of Central Florida
                                    </p>
                                    <p
                                        className={`font-semibold  mt-2  ${
                                            isChecked ? "text-yellow-500 underline" : ""
                                        }`}
                                    >
                                        B.S. Health Science, Pre-Clinical
                                    </p>
                                </div>
                                <div className='text-right' >
                                    <p
                                        className={`text-md font-normal whitespace-nowrap ${
                                            isChecked ? "text-yellow-500" : ""
                                        }`}
                                    >
                                        2024 - Present
                                    </p>
                                    <p
                                        className={`italic text-sm font-normal mt-2  ${
                                            isChecked ? "text-yellow-500" : ""
                                        }`}
                                    >
                                        Orlando, Florida
                                    </p>
                                </div>
                                <div className="col-span-2 -m-2  -mb-4 text-center font-bold">{isChecked ? "∧" :"∨" }</div>
                            </div>
                        </div>
                        <div className='collapse-content bg-primary text-primary-content peer-checked:bg-black peer-checked:text-white'>
                            <p className="text-sm">Current Courses</p>
                            <p className="text-xs ml-2">- Organic Chemistry</p>
                            <p className="text-xs ml-2">- Intro to Pharmacology</p>
                            <p className="text-xs ml-2">- Intro to Human Disease</p>
                        </div>
                    </div>
                </div>
                <div className='my-6  xs:mt-8 md:m-8 rounded-md'>
                    <div
                        className={`collapse bg-primary rounded-md border-8 ${
                            dsChecked ? "border-blue-500" : "border-primary"
                        }`}
                    >
                        <input
                            type='checkbox'
                            id='toggle'
                            className='peer w-full'
                            checked={dsChecked}
                            onChange={dsHandleChange}
                        />
                        <div className='collapse-title px-3 text-black-content peer-checked:bg-white peer-checked:text-black'>
                            <div className='grid w-full grid-cols-2 gap-x-0 gap-y-4'>
                                <div>
                                    <p className='ml-0 font-semibold'>
                                        Daytona State College
                                    </p>
                                    <p
                                        className={`font-semibold  mt-2  ${
                                            dsChecked ? "text-blue-500 underline" : ""
                                        }`}
                                    >
                                        A.A. Health Science, Pre-Clinical
                                    </p>
                                </div>
                                <div className='text-right' >
                                    <p
                                        className={`text-md font-normal whitespace-nowrap ${
                                            dsChecked ? "text-blue-500" : ""
                                        }`}
                                    >
                                        2020 - 2023
                                    </p>
                                    <p
                                        className={`italic text-sm font-normal mt-2  ${
                                            dsChecked ? "text-blue-500" : ""
                                        }`}
                                    >
                                        Daytona Beach, Florida
                                    </p>
                                </div>
                                <div className="col-span-2 -m-2  -mb-4 text-center font-bold">{dsChecked ? "∧" :"∨" }</div>
                            </div>
                        </div>
                        <div className='collapse-content bg-primary text-primary-content peer-checked:bg-white peer-checked:text-black'>
                            <p className="text-sm">Current Course</p>
                            <p className="text-xs ml-2">- Physics 2</p>
                            <p className="text-sm mt-2">Completed Courses</p>
                            <p className="text-xs ml-2">- Anatomy 1 and 2</p>
                            <p className="text-xs ml-2">- Chemistry 1 and 2</p>
                            <p className="text-xs ml-2">- Physics 1</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

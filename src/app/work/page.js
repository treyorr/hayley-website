"use client";
import { useState } from "react";
export default function Work() {
    const [isChecked, setIsChecked] = useState(false);
    const [dsChecked, setDsChecked] = useState(false);

    const dsHandleChange = () => {
        setDsChecked(!dsChecked);
    };
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4'>
            <div className='w-full 2xl:w-2/3 md:p-4 pt-4 px-2'>
                <ul className='timeline w-auto timeline-snap-icon max-md:timeline-compact timeline-vertical'>
                    <li>
                        <div className='timeline-middle'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                className='h-5 w-5'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                                    clipRule='evenodd'
                                />
                            </svg>
                        </div>
                        <div className='timeline-start md:text-end mb-10'>
                            <time className='font-mono italic'>
                                2024 - Present
                            </time>
                            <div className='text-lg font-black'>
                                Medical Scribe
                            </div>
                            <div className='italic'>Scribe America</div>
                            Worked in an emergency department as a medical
                            scribe. I was responsible for charting patient
                            encounters in real-time for the physician. This
                            included documenting the history of present illness,
                            past medical history, physical examination, and
                            procedures performed. I also assisted the physician
                            with documentation in the electronic medical record.
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className='timeline-middle'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                className='h-5 w-5'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                                    clipRule='evenodd'
                                />
                            </svg>
                        </div>
                        <div className='timeline-end md:mb-10'>
                            <time className='font-mono italic'>
                                2023 - 2024
                            </time>
                            <div className='text-lg font-black'>
                                Student Instructor
                            </div>
                            <div className='italic'>Daytona State College</div>
                            Led comprehensive lectures on Anatomy and Physiology
                            1&2 in a large classroom setting. Presented students
                            with practice quizzes and mock lab practicals.
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className='timeline-middle'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                className='h-5 w-5'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                                    clipRule='evenodd'
                                />
                            </svg>
                        </div>
                        <div className='timeline-start md:text-end mb-10'>
                            <time className='font-mono italic'>2023</time>
                            <div className='text-lg font-black'>
                                Science Tutor
                            </div>
                            <div className='italic'>Daytona State College</div>
                            Assist students in understanding sciences such as
                            chemistry, biology, physics, microbiology and
                            anatomy & physiology.
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className='timeline-middle'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                className='h-5 w-5'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                                    clipRule='evenodd'
                                />
                            </svg>
                        </div>
                        <div className='timeline-end mb-10'>
                            <time className='font-mono italic'>2020 - 2022</time>
                            <div className='text-lg font-black'>
                                Personal Care Assistant
                            </div>
                            <div className='italic'>At Home Caregivers</div>
                            Cared for elderly clients in a personalized manner
                            to assure their well-being both mentally and
                            physically. Adapted care techniques to accommodate
                            for clients that were disabled or had dementia.
                        </div>
                        <hr />
                    </li>
                </ul>
            </div>
        </div>
    );
}

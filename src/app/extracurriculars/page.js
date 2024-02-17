"use client";
import { useState } from "react";
export default function Extracurriculars() {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4'>
            <div className='w-full 2xl:w-2/3 md:p-4 pt-4 pl-4'>
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
                                Pre-Pathology Club
                            </div>
                            <div className='italic'>Member</div>
                            Met and discussed pathology topics with peers. Practiced sutures and participated in live dissections.
                            Participated in philanthropy events to raise money for brain cancer research fund.
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
                            <time className='font-mono italic'>
                                2021-2022
                            </time>
                            <div className='text-lg font-black'>
                                CHEMLIVE
                            </div>
                            <div className='italic'>President</div>
                            Acted as President of chemistry club organizing regular meetings and events. 
                            Collaborated with faculty to arrange chemistry experiments and demonstrations. 
                            Was awarded first place visual presentation of college-wide club banquet.
                        </div>
                        <hr />
                    </li>
                </ul>
            </div>
        </div>
    );
}

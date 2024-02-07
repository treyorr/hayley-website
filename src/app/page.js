"use client";

import { Model } from "@/components/Microscope/Microscope_swift_sw380b";
import { Canvas } from "@react-three/fiber";

export default function Home() {
    return (
        <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/2 md:pr-4 pl-10 pt-10'>
                <div class='chat chat-start'>
                    <div class='chat-bubble chat-bubble-info'>
                        <div class='text-white font-semibold text-2xl'>
                            Hi, I&apos;m Hayley.
                        </div>
                    </div>
                </div>
                <div class='chat chat-start pt-4'>
                    <div class='chat-bubble chat-bubble-info'>
                        <div class='text-white font-semibold text-2xl'>
                            I&apos;m an aspiring forensic pathologist.
                        </div>
                    </div>
                </div>
                <div class='chat chat-start pt-4'>
                    <div class='chat-bubble chat-bubble-info'>
                        <div class='text-white font-semibold text-2xl'>
                            Welcome to my personal website.
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:w-1/2 md:pl-4'>
                <Canvas>
                    <Model />
                </Canvas>
            </div>
        </div>
    );
}

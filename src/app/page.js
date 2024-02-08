"use client";
import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "../../public/Micro";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Transition } from "@headlessui/react";

export default function Home() {
    const [isShowing1, setIsShowing1] = useState(false);
    const [isShowing2, setIsShowing2] = useState(false);
    const [isShowing3, setIsShowing3] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsShowing1(true);
        }, 2000);
        setTimeout(() => {
            setIsShowing2(true);
        }, 4000);
        setTimeout(() => {
            setIsShowing3(true);
        }, 6000);
    }, []);

    return (
        <div
            className='flex flex-col md:flex-row'
            style={{ height: `calc(100vh - 72px)` }}
        >
            <div className='md:w-1/2 md:pr-4 pl-10 pt-10'>
                <Transition
                    show={isShowing1}
                    enter='transition-opacity duration-800'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                >
                    <div className='chat chat-start pt-4'>
                        <div className='chat-bubble chat-bubble-info'>
                            <div className='text-white font-semibold text-2xl'>
                                Hi, I&apos;m Hayley.
                            </div>
                        </div>
                    </div>
                </Transition>
                <Transition
                    show={isShowing2}
                    enter='transition-opacity duration-800'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                >
                    <div className='chat chat-start pt-4'>
                        <div className='chat-bubble chat-bubble-info'>
                            <div className='text-white font-semibold text-2xl'>
                                I&apos;m an aspiring forensic pathologist.
                            </div>
                        </div>
                    </div>
                </Transition>
                <Transition
                    show={isShowing3}
                    enter='transition-opacity duration-800'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                >
                    <div className='chat chat-start pt-4'>
                        <div className='chat-bubble chat-bubble-info'>
                            <div className='text-white font-semibold text-2xl'>
                                Welcome to my personal website.
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
            <div
                className='md:w-1/2'
                style={{
                    display: "flex",
                    justifyContent: "top",
                    alignItems: "top",
                    flexGrow: 1,
                }}
            >
                <Canvas>
                    <Suspense fallback={null}>
                        <PerspectiveCamera makeDefault position={[0, 0, 100]} />
                        <ambientLight intensity={5} />
                        <pointLight
                            position={[0, 0, 0]}
                            intensity={800}
                            color='#fff'
                        />
                        <OrbitControls enableZoom={false} />
                        <Model />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
}

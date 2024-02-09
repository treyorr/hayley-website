"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Rose } from "../../components/Rose/Rose";
import Image from "next/image";
import hayleyPic from "../../../public/Hayley.png";
import Link from "next/link";

export default function About() {
    return (
        <div
            className='flex flex-col md:flex-row'
            style={{ height: `calc(100vh - 72px)` }}
        >
            <div className='md:w-1/2 md:pl-10 pt-10'>
                <div class='card lg:card-side bg-primary shadow-2xl'>
                    <figure className='h-full'>
                        <Image
                            className='object-cover w-9/12 h-3/4 pt-4 md:pl-4'
                            src={hayleyPic}
                            alt='Hayley'
                        />
                    </figure>
                    <div className='card-body h-full w-full'>
                        <h2 className='card-title  md:-ml-8 '>I'm Hayley!</h2>
                        <div className='card-paragraph md:-ml-8 overflow-auto'>
                            I'm currently a junior at the University of Central
                            Florida majoring in Health Sciences - Pre-clinical.
                            Since a very young age I've known I wanted to pursue
                            a career in medicine and as I gained an interest in
                            the field of forensics. I have dedicated myself to
                            learning as much about the human body as I can with
                            the goal of attending medical school and becoming a
                            foresic pathologist.
                        </div>
                        <div className='card-actions align-bottom w-full justify-end'>
                            <Link href='/education' className="inline-block">
                                <button className='btn btn-secondary w-full relative mt-4 -px-4 w-auto h-auto bottom-1 right-1'>
                                    Click here to see what I've been learning!
                                </button>
                            </Link>
                            </div>
                    </div>
                </div>
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
                        <PerspectiveCamera
                            makeDefault
                            position={[0, 300, 25]}
                        />
                        <ambientLight intensity={5} />
                        <pointLight
                            position={[0, 0, 0]}
                            intensity={800}
                            color='#fff'
                        />
                        <OrbitControls enableZoom={false} />
                        <Rose />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
}

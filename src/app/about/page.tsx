'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
    return (
        <div className="bg-gradient-to-br from-[#e6f0ff] via-[#d0e3ff] to-[#f0f4fa] min-h-screen">
            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 md:px-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">About SketchMind</h1>
                <p className="max-w-3xl mx-auto text-gray-700 text-lg">
                    SketchMind is a real-time whiteboard collaboration platform that helps teams, educators, and individuals
                    visualize ideas, plan projects, and communicate better — all from anywhere in the world.
                </p>
            </section>

            {/* Who We Are */}
            <section className="py-16 px-6 md:px-16 bg-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                    <Image
                        src="/images/team-collaboration.jpg"
                        alt="Our Team"
                        width={600}
                        height={400}
                        className="rounded-xl shadow-lg"
                    />
                    <div>
                        <h2 className="text-3xl font-bold text-blue-600 mb-4">Who We Are</h2>
                        <p className="text-gray-700 text-lg">
                            We’re a group of designers, developers, and problem-solvers passionate about creating tools that make
                            remote collaboration easier and more intuitive. Our mission is to bring creativity and productivity
                            together through an interactive digital workspace.
                        </p>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className="py-16 px-6 md:px-16 bg-[#f9fbff]">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-blue-600 mb-4">What is SketchMind?</h2>
                        <p className="text-gray-700 text-lg mb-4">
                            SketchMind is a collaborative whiteboard tool that allows teams to brainstorm, draw, annotate, and share
                            ideas in real-time. Whether you&apos;re an educator hosting online classes or a remote product team mapping
                            out ideas — SketchMind makes your thoughts come alive.
                        </p>
                        <ul className="list-disc list-inside text-blue-700 font-medium space-y-2">
                            <li>Real-time whiteboard collaboration</li>
                            <li>Sticky notes, free drawing, shapes, and connectors</li>
                            <li>Multi-user editing and access control</li>
                            <li>Share and export boards</li>
                        </ul>
                    </div>
                    <Image
                        src="/images/whiteboard-illustration.png"
                        alt="SketchMind Illustration"
                        width={600}
                        height={400}
                        className="rounded-xl shadow-lg"
                    />
                </div>
            </section>

            {/* Our Goal */}
            <section className="py-16 px-6 md:px-16 bg-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Goal</h2>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-8">
                        Our goal is to democratize creativity and communication. We aim to build the most accessible, flexible, and
                        powerful whiteboard tool for remote teams and classrooms around the globe.
                    </p>
                    <Image
                        src="/images/goal-team.png"
                        alt="Our Goal"
                        width={800}
                        height={400}
                        className="rounded-xl mx-auto shadow-lg"
                    />
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 px-6 md:px-16 bg-[#f9fbff]">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-blue-600 mb-10">How It Works</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                title: '1. Create a Room',
                                desc: 'Start by creating a new collaboration room where participants can join.',
                            },
                            {
                                title: '2. Share the Link',
                                desc: 'Invite your team with a link — no complex setup, just click and collaborate.',
                            },
                            {
                                title: '3. Sketch & Share',
                                desc: 'Draw, brainstorm, and ideate together in real-time with live data sync.',
                            },
                        ].map((step, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                                <div className="text-4xl text-blue-500 mb-4 font-bold">{step.title}</div>
                                <p className="text-gray-700">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 px-6 md:px-16 text-center bg-gradient-to-br from-[#fff4e6] via-[#ffe8cc] to-[#fff0d9] text-gray-800">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-700">
                    Ready to Sketch Your Ideas into Reality?
                </h2>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
                    SketchMind empowers your team to collaborate seamlessly on a digital whiteboard in real-time. From brainstorming and mind mapping to teaching and planning — visualize everything in one place.
                </p>
                <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-10">
                    Whether you&apos;re working remotely, teaching online, or planning your next big idea — SketchMind is the intuitive space
                    where collaboration feels natural. No downloads, no friction. Just creativity and clarity.
                </p>
                <Link
                    href="/signup"
                    className="bg-orange-600 hover:bg-orange-700 text-white font-semibold text-lg px-8 py-3 rounded-full shadow-lg transition duration-300"
                >
                    Get Started for Free
                </Link>
            </section>

        </div>
    )
}

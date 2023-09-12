import Image from 'next/image'
import React from 'react'

const Industry = () => {
    return (
        <div id='industry'>

            
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto md:items-center justify-center">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="scroll-m-20  font-extrabold tracking-tight lg:text-4xl mb-4 md:text-3xl  sm:text-2xl text-4xl capitalize text-center text-myblue">
                            Industry Solutions
                        </h1>
                        <div className="flex mt-2 justify-center">
                            <div className="w-48 h-1 rounded-full bg-myred inline-flex" />
                        </div>

                    </div>
                    <div className="-my-8 divide-y-2 divide-gray-100 h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <div className="py-8  flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <Image src={"/assest/telecom12.jpg"}
                                alt="desserts"
                                width={250}
                                height={250}
                                className="rounded-xl duration-500 group-hover:scale-125 flex lg:mr-10 sm:mr-10 md:mr-10"
                            />
                            <div className="md:flex-grow mt-6">
                                <h2 className="scroll-m-20  pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0 text-myblue  ">
                                    Telecom Operators
                                </h2>
                                <p className="leading-7 [&:not(:first-child)]: line-clamp-2 ">
                                    Telecom Operators like GlobalCom Connect are the bedrock of global connectivity, shaping a world where communication knows no bounds and fuels progress. With innovation at their core, they empower individuals, businesses, and nations to thrive in the digital age.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="-my-8 divide-y-2 divide-gray-100 h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <div className="py-8  flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <Image src={"/assest/defence.jpg"}
                                alt="desserts"
                                width={250}
                                height={250}
                                className="rounded-xl duration-500 group-hover:scale-125  flex lg:mr-10 sm:mr-10 md:mr-10"
                            />
                            <div className="md:flex-grow mt-6">
                                <h2 className="scroll-m-20  pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0 text-myblue">
                                    Defence/Marine/Aviation
                                </h2>
                                <p className="leading-7 [&:not(:first-child)]: line-clamp-2">
                                    Defence/Marine/Aviation equipment exemplifies cutting-edge technology and precision engineering, safeguarding national security and enabling seamless global mobility.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="-my-8 divide-y-2 divide-gray-100 h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <div className="py-8  flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <Image src={"/assest/oil.jpg"}
                                alt="desserts"
                                width={250}
                                height={250}
                                className="rounded-xl duration-500 group-hover:scale-125  flex lg:mr-10 sm:mr-10 md:mr-10"
                            />
                            <div className="md:flex-grow mt-6">
                                <h2 className="scroll-m-20  pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0 text-myblue">
                                    Oil & Gas
                                </h2>
                                <p className="leading-7 [&:not(:first-child)]: line-clamp-2">
                                    Oil and gas equipment, epitomizing industrial prowess, extracts and refines vital energy resources, underpinning global economies and modern living with relentless efficiency and precision.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="-my-8 divide-y-2 divide-gray-100 h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <div className="py-8  flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <Image src={"/assest/non-gove12.jpg"}
                                alt="desserts"
                                width={250}
                                height={250}
                                className="rounded-xl duration-500 group-hover:scale-125  flex lg:mr-10 sm:mr-10 md:mr-10"
                            />
                            <div className="md:flex-grow mt-6">
                                <h2 className="scroll-m-20  pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0 text-myblue">
                                Non-Government Organisations
                                </h2>
                                <p className="leading-7 [&:not(:first-child)]: line-clamp-2">
                                Non-Government Organizations (NGOs), the champions of social change and humanitarian initiatives, are driven by a noble mission to alleviate suffering, promote justice, and empower communities.
                                </p>
                            </div>
                        </div>

                    </div>
                   
                    <div className="-my-8 divide-y-2 divide-gray-100 h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <div className="py-8  flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <Image src={"/assest/solar.jpg"}
                                alt="desserts"
                                width={250}
                                height={250}
                                className="rounded-xl duration-500 group-hover:scale-125 flex lg:mr-10 sm:mr-10 md:mr-10"
                            />
                            <div className="md:flex-grow mt-10">
                                <h2 className="scroll-m-20  pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0 text-myblue">
                                    Power Generation / Generators & Renewable Energy
                                </h2>
                                <p className="leading-7 [&:not(:first-child)]: line-clamp-2">
                                    A leader in Power Generation, Generators, and Renewable Energy, pioneering sustainable solutions for a greener future.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="-my-8 divide-y-2 divide-gray-100 h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <div className="py-8  flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <Image src={"/assest/financial.jpg"}
                                alt="desserts"
                                width={250}
                                height={250}
                                className="rounded-xl duration-500 group-hover:scale-125  flex lg:mr-10 sm:mr-10 md:mr-10"
                            />
                            <div className="md:flex-grow mt-10">
                                <h2 className="scroll-m-20  pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0 text-myblue">
                                    Financial Services
                                </h2>
                                <p className="leading-7 [&:not(:first-child)]: line-clamp-2">
                                    A financial services powerhouse, delivering cutting-edge solutions and expertise for a secure and prosperous financial future.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="-my-8 divide-y-2 divide-gray-100 h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <div className="py-8  flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <Image src={"/assest/govy.jpg"}
                                alt="desserts"
                                width={250}
                                height={250}
                                className="rounded-xl duration-500 group-hover:scale-125 flex lg:mr-10 sm:mr-10 md:mr-10"
                            />
                            <div className="md:flex-grow mt-10">
                                <h2 className="scroll-m-20  pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0 text-myblue">
                                    Federal & Local Governmen
                                </h2>
                                <p className="leading-7 [&:not(:first-child)]: line-clamp-2">
                                    A trusted partner for Federal & Local Governments, providing innovative solutions to enhance public services and governance.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="-my-8 divide-y-2 divide-gray-100 h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <div className="py-8  flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <Image src={"/assest/health.jpg"}
                                alt="desserts"
                                width={250}
                                height={250}
                                className="rounded-xl duration-500 group-hover:scale-125  flex lg:mr-10 sm:mr-10 md:mr-10"
                            />
                            <div className="md:flex-grow mt-8">
                                <h2 className="scroll-m-20  pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0 text-myblue">
                                    Health Care
                                </h2>
                                <p className="leading-7 [&:not(:first-child)]: line-clamp-2">
                                    Revolutionizing healthcare with advanced technologies and services, promoting wellness and improving patient outcomes for a healthier society.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="-my-8 divide-y-2 divide-gray-100 h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <div className="py-8  flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <Image src={"/assest/broad.jpg"}
                                alt="desserts"
                                width={250}
                                height={250}
                                className="rounded-xl duration-500 group-hover:scale-125 flex lg:mr-10 sm:mr-10 md:mr-10"
                            />
                            <div className="md:flex-grow mt-8">
                                <h2 className="scroll-m-20  pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0 text-myblue">
                                    Broadcasting
                                </h2>
                                <p className="leading-7 [&:not(:first-child)]: line-clamp-2">
                                    Shaping the future of Broadcasting, delivering top-quality content and cutting-edge technology to connect and entertain the world.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>

    )
}

export default Industry
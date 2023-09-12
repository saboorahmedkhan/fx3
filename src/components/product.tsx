import Image from "next/image";
import Link from "next/link";

export default function Product() {
    return (
        <div  className="mb-[100px] mt-[100px]" id="Product">
            <div className="text-center mb-15  ">
                <h1 className="scroll-m-20  font-bold tracking-tight lg:text-4xl mb-4 md:text-3xl  sm:text-xl text-4xl text-mylogo capitalize text-center text-myblue">
                    Our Product
                </h1>
                <div className="flex mt-2 justify-center">
                    <div className="w-48 h-1 rounded-full bg-myred inline-flex" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10 mr-20 ml-20">
                <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
                    <Link href={"/electronic_Components"}>
                    <Image src={"/assest/electronic.jpg"}
                        alt="maincourse"
                        width={450}
                        height={450}
                        className="rounded-xl duration-500 group-hover:scale-125"
                    />
                    
                    <div className="hidden lg:block absolute -bottom-25 group-hover:bottom-0 duration-500 scroll-m-20 lg:text-xl sm:md font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                        <h1 className="uppercase">Electronic Componentes</h1>
                    </div>
                    <div className="block lg:hidden absolute bottom-3 duration-500 scroll-m-20 text-xl font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                        <h1 className="uppercase">Electronic Componentes</h1>
                    </div>
                    </Link>
                </div>
                <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
                    <Link href={"/i.t_Infrastructur"}>
                    <Image src={"/assest/it.jpg"}
                        alt="family size"
                        width={450}
                        height={450}
                        className="rounded-xl duration-500 group-hover:scale-125"
                    />
                    
                    <div className="block lg:hidden absolute bottom-3 duration-500 scroll-m-20 text-xl font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                        <h1 className="uppercase">I.T Infrastructure</h1>
                    </div>
                    <div className="hidden lg:block absolute -bottom-25 group-hover:bottom-0 duration-500 scroll-m-20 text-xl font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                        <h1 className="uppercase">I.T Infrastructure</h1>
                    </div>
                    </Link>
                </div>
                <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
                    <Link href={"/telecom_Solutions"}>
                    <Image src={"/assest/telecom.jpg"}
                        alt="sandwich"
                        width={450}
                        height={450}
                        className="rounded-xl duration-500 group-hover:scale-125"
                    />
                    
                    <div className="hidden lg:block absolute -bottom-25 group-hover:bottom-0 duration-500 scroll-m-20 text-xl font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                        <h1 className="uppercase">Telecom Solutions</h1>
                    </div>
                    <div className="block lg:hidden absolute bottom-3 duration-500 scroll-m-20 text-xl font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                        <h1 className="uppercase">Telecom Solutions</h1>
                    </div>
                    </Link>
                </div>
                <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
                    <Link href={"/oil_Gas"}>
                    <Image src={"/assest/oil55.jpg"}
                        alt="desserts"
                        width={450}
                        height={450}
                        className="rounded-xl duration-500 group-hover:scale-125"
                    />
                    
                    <div className="hidden lg:block absolute -bottom-25 group-hover:bottom-0 duration-500 scroll-m-20 text-xl font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                        <h1 className="uppercase">Oil & Gas</h1>
                    </div>
                    <div className="block lg:hidden absolute bottom-3 duration-500 scroll-m-20 text-xl font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                        <h1 className="uppercase">Oil & Gas</h1>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
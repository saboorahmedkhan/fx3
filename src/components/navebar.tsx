"use client"




import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi"
import { NavigationMenuDemo } from "./navlinks";
import Image from "next/image";
import { useAppSelector } from "@/app/store/hooks";

export default function Navbar() {
    const cart = useAppSelector((state) => state.cart);
    return (
        <div><div className="navbar bg-myblack">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="p-0 text-2xl lg:hidden bg-myblack text-myorange">
                        <GiHamburgerMenu />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-mylogo ">
                        <li><Link href={"/home"}>Home</Link></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Product</summary>
                                <ul className="p-2">
                                    <li><Link href={"/maincourse"}>Electronic Components</Link></li>
                                    <li><Link href={"/familysize"}>I.T Infrastructur</Link></li>
                                    <li><Link href={"/sandwiches"}>Telecom Solutions</Link></li>
                                    <li><Link href={"/dessrts"}>Oil & Gas Field Heavy Equipment & Machinery Pars</Link></li>
                                </ul>
                            </details>
                        </li>

                        <li><Link href={"/about"}>About</Link></li>
                        <li><Link href={"/contactus"}>Contact Us</Link></li>
                    </ul>
                </div>
                <Link href={"/home"} ><Image src={'/assest/FXlogo-01.png'} alt="logo" width={150} height={150} className="p-2 hidden lg:block" /></Link>
            </div>
            <div className="navbar-center ">
                <Link href={"/home"} ><Image src={'/assest/FXlogo-01.png'} alt="logo" width={150} height={150} className=" block lg:hidden" /></Link>
                <div className="hidden lg:block">
                    <NavigationMenuDemo />
                </div>
            </div>
            <div className="navbar-end">
                <div className="flex-none">
                    
                </div>
            </div>

        </div>
        </div>
    )
}


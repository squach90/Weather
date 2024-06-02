"use client";

import { PropsWithChildren, useState } from "react";
import { Section } from "./Section";
import classNames from "classnames";
import { Button } from "@/components/ui/button";


export const Hero = () => {

    return (
        <div className="text-center mt-20">
            <h1 className="text-4xl font-bold" >Search for the <br />weather of your <br /> city </h1>
        </div>
    );
};

export const Code = (props: PropsWithChildren<{ className?: string }> ) => {
    return (
        <span className="px-1 rounded-md inline-flex text-foreground items-center -mx-0.5 bg-accent/20 border-accent border py-1">
            {props.children}
        </span>
    )
}



export default Hero;

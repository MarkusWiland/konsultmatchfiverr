import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CarouselComponent() {
  return (
    <Carousel opts={{  align: "start",  }} className="w-2/3 max-w-2xl ">
       <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <div className="rounded-t-md bg-red-200 p-2 text-center text-sm font-bold"> Web Developer </div>
                <CardHeader className="w-full h-[100px] relative">
                  <Image
                    src="https://avatar.vercel.sh/rauchg"
                    alt="Placeholder"
                   layout="fill"
                    objectFit="cover"
                  
                  />
                </CardHeader>
                <CardContent className=" text-[10px] flex flex-col gap-2 pt-2">
                  <div className="flex items-center justify-between w-full">

                  
                    <h3 className="font-bold ">Markus Wiland</h3> 
                    <p>Göteborg</p>
                    </div>
                    <div className="flex gap-1 flex-wrap">
                      <p className="p-1 bg-gray-100">PHP</p>
                      <p className="p-1 bg-gray-100">HTML</p>
                      <p className="p-1 bg-gray-100">CSS</p>
                      <p className="p-1 bg-gray-100">JAVASCIPRT</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Gå till Profil</Button>
                  </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}

      </CarouselContent>
        
      <CarouselPrevious />
      <CarouselNext />
   
    </Carousel>
  );
}

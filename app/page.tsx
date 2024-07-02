import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import CarouselComponent from "./_components/Carousel";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <div className="bgLinear">
          <div className="container min-h-[80vh] ">
            <div className="pt-56 flex flex-col gap-6 max-w-[700px]">
              <span className=" rounded-3xl bg-[#92d6ab] text-[#16a34a] font-bold p-2 w-fit text-sm">
                Starta och skala, Allt-i-ett-plattform
              </span>
              <h1 className="text-6xl font-bold">
                Enklaste sättet att samordna och anställa stora talanger
                <span>
                  <svg
                    width="331"
                    height="12"
                    viewBox="0 0 331 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 10C58.2315 -0.256352 204.829 -1.06923 329 10"
                      stroke="#16a34a"
                      stroke-width="4"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                voluptates odio blanditiis sed dicta molestias natus neque
                repellendus. Illum quidem, neque ea inventore quae voluptatibus
                odio minima officia vel ex!
              </p>
              <Button variant="default" className="w-fit">
                Kontakta Oss
              </Button>
            </div>

            <div className=" max-w-[1156px] absolute bg-white left-1/2 transofmr -translate-x-1/2 -bottom-8 w-full">
              <div className="p-4 border flex justify-between items-center space-x-4 shadow-md">
                <Search height="50" width="50" />
                <Input type="text" className="w-full" placeholder="Uppdrag" />
                <div className="border-l border-gray-300 h-[40px]" />
                <Search height="50" width="50" />
                <Input type="text" className="w-full" placeholder="titel" />
                <div className="flex items-center gap-4">
                  <Button>Rensa</Button>
                  <Button>Sök</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="container flex space-x-24 mt-16">
        <div className="w-1/3 space-y-8">
          <h1 className="text-2xl font-bold">
            Find professionals that you will work with
          </h1>
          <p className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum id
            sed repellendus hic unde? Expedita nisi illum ea ut, provident
            aspernatur sit, libero rerum facilis excepturi sapiente sint
            nesciunt veniam.
          </p>
          <Button>Hitta en konsult</Button>
        </div>
        <CarouselComponent />
      </section>

      <section className="bg-orange-200">
        <div className="p-12 container mx-auto">
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-2 space-y-8">
              <h1 className="text-3xl font-bold">Text that sheörlasdasd</h1>
              <p className="text-md">Lorem ipsum dolor sit amet</p>
            </div>
            <Card className="shadow-sm">
              <span>
                
                <Search height="50" width="50" />
              </span>
              <CardHeader className="text-xl font-bold">Digital Marketing</CardHeader>
              <CardContent className="text-sm">
               246 jobb
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="flex ">
                <span className="text-2xl font-semibold">1</span>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="flex ">
                <span className="text-2xl font-semibold">1</span>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="flex ">
                <span className="text-2xl font-semibold">1</span>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="flex ">
                <span className="text-2xl font-semibold">1</span>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="flex ">
                <span className="text-2xl font-semibold">1</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}

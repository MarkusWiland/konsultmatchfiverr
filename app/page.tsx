import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import CarouselComponent from "./_components/Carousel";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Container from "./_components/Container";
import { ComboboxDemo } from "./_components/Combobox";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <div className="bgLinear">
          <Container className=" md:container min-h-[80vh] max-w-[1000px]">
            <div className="pt-56 md:pt-32 flex flex-col gap-6 max-w-[700px]">
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
                <ComboboxDemo />
                  <div className="border-l border-gray-300 h-[40px]" />
                <Search height="50" width="50" />
                <ComboboxDemo />
                <div className="flex items-center gap-4">
                  <Button>Rensa</Button>
                  <Button>Sök</Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <Container className=" flex space-x-24 mt-16">

    
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
        </Container>

      <section className="bg-[#FFF8F5]">
                <Container className="p-12 container mx-auto">
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-2 space-y-8">
              <h1 className="text-3xl font-bold">Let’s Help you choose the category you want</h1>
              <p className="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nesciunt qui quisquam libero dolor doloribus aperiam quas obcaecati cupiditate officia molestias, laudantium animi consequuntur eum distinctio dignissimos perspiciatis tempore possimus?</p>
            </div>
            <Card className="shadow-lg border-none shadow-[#ff8e01]/15">
              <CardHeader>
              <span>
                <Search height="50" width="50" />
              </span>
                <h1  className="text-xl font-bold">
                Digital Marketing
                </h1>
              </CardHeader>
              <CardContent className="text-sm">
               246 jobb
              </CardContent>
            </Card>
            <Card className="shadow-lg border-none shadow-[#ff8e01]/15">
              <CardHeader>
              <span>
                <Search height="50" width="50" />
              </span>
                <h1  className="text-xl font-bold">
                Digital Marketing
                </h1>
              </CardHeader>
              <CardContent className="text-sm">
               246 jobb
              </CardContent>
            </Card>
            <Card className="shadow-lg border-none shadow-[#ff8e01]/15">
              <CardHeader>
              <span>
                <Search height="50" width="50" />
              </span>
                <h1  className="text-xl font-bold">
                Digital Marketing
                </h1>
              </CardHeader>
              <CardContent className="text-sm">
               246 jobb
              </CardContent>
            </Card>
            <Card className="shadow-lg border-none shadow-[#ff8e01]/15">
              <CardHeader>
              <span>
                <Search height="50" width="50" />
              </span>
                <h1  className="text-xl font-bold">
                Digital Marketing
                </h1>
              </CardHeader>
              <CardContent className="text-sm">
               246 jobb
              </CardContent>
            </Card>
            <Card className="shadow-lg border-none shadow-[#ff8e01]/15">
              <CardHeader>
              <span>
                <Search height="50" width="50" />
              </span>
                <h1  className="text-xl font-bold">
                Digital Marketing
                </h1>
              </CardHeader>
              <CardContent className="text-sm">
               246 jobb
              </CardContent>
            </Card>
            <Card className="shadow-lg border-none shadow-[#ff8e01]/15">
              <CardHeader>
              <span>
                <Search height="50" width="50" />
              </span>
                <h1  className="text-xl font-bold">
                Digital Marketing
                </h1>
              </CardHeader>
              <CardContent className="text-sm">
               246 jobb
              </CardContent>
            </Card>
          </div>
        </Container>
    </section>

    </main>
  );
}

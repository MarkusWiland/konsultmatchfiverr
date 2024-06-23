import Image from "next/image";

export default function Home() {
  return (
    <main className="container ">
      <div className="min-h-[80vh]">
        <div className="pt-56 flex flex-col gap-6 max-w-[700px]">
          <span>Start scale all in one pålatform</span>
          <h1>Easiet wat to conslt and hire great talent</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            voluptates odio blanditiis sed dicta molestias natus neque
            repellendus. Illum quidem, neque ea inventore quae voluptatibus odio
            minima officia vel ex!
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
                  stroke="#00F1FA"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </p>
          <button>Hire</button>
        </div>
      </div>
      <div className="p-4 border flex justify-between items-center">
        <input type="text" />
        <input type="text" />
        <div>
          <button>Sök</button>
          <button>Sök</button>
        </div>
      </div>
    </main>
  );
}

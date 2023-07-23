export function HeroSection(){
    return (
      <div className="bg-slate-900">
        <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8 flex flex-col items-center justify-center h-screen">
            <div className="flex justify-center w-9/12 mx-auto">
              <svg
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 400 50"
              >
                <title>SpaceX Logo</title>
                <g className="letter_s">
                  <path
                    className="fill-white"
                    d="M37.5,30.5H10.9v-6.6h34.3c-0.9-2.8-3.8-5.4-8.9-5.4H11.4c-5.7,0-9,2.1-9,6.7v4.9c0,4,3.4,6.3,8.4,6.3h26.9v7H1.5
    c0.9,3.8,3.8,5.8,9,5.8h27.1c5.7,0,8.5-2.2,8.5-6.9v-4.9C46.1,33.1,42.8,30.8,37.5,30.5z"
                  />
                </g>
                <g className="letter_p">
                  <path
                    className="fill-white"
                    d="M91.8,18.6H59v30.7h9.3V37.5h24.2c6.7,0,10.4-2.3,10.4-7.7v-3.4C102.8,21.4,98.6,18.6,91.8,18.6z M94.8,28.4
    c0,2.2-0.4,3.4-4,3.4H68.3l0.1-8h22c4,0,4.5,1.2,4.5,3.3V28.4z"
                  />
                </g>
                <g className="letter_a">
                  <polygon
                    className="fill-white"
                    points="129.9,17.3 124.3,24.2 133.8,37.3 114,37.3 109.1,42.5 137.7,42.5 142.6,49.3 153.6,49.3 	"
                  />
                </g>
                <g className="letter_c">
                  <path
                    className="fill-white"
                    d="M171.4,23.9h34.8c-0.9-3.6-4.4-5.4-9.4-5.4h-26c-4.5,0-8.8,1.8-8.8,6.7v17.2c0,4.9,4.3,6.7,8.8,6.7h26.3
    c6,0,8.1-1.7,9.1-5.8h-34.8V23.9z"
                  />
                </g>
                <g className="letter_e">
                  <polygon
                    className="fill-white"
                    points="228.3,43.5 228.3,34.1 247,34.1 247,28.9 218.9,28.9 218.9,49.3 260.4,49.3 260.4,43.5 	"
                  />
                  <rect
                    className="fill-white"
                    x="219.9"
                    y="18.6"
                    width="41.9"
                    height="5.4"
                  />
                </g>
                <g className="letter_x">
                  <path
                    className="fill-white"
                    d="M287.6,18.6H273l17.2,12.6c2.5-1.7,5.4-3.5,8-5L287.6,18.6z"
                  />
                  <path
                    className="fill-white"
                    d="M308.8,34.3c-2.5,1.7-5,3.6-7.4,5.4l13,9.5h14.7L308.8,34.3z"
                  />
                </g>
                <g className="letter_swoosh">
                  <path
                    className="fill-white"
                    d="M399,0.7c-80,4.6-117,38.8-125.3,46.9l-1.7,1.6h14.8C326.8,9.1,384.3,2,399,0.7L399,0.7z"
                  />
                </g>
              </svg>

              {/* <a
                className="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 pl-4 rounded-full shadow-md"
                href="../figma.html"
              >
                <p className="mr-2 inline-block text-white text-sm">
                  Preline UI Figma is live.
                </p>
                <span className="group-hover:bg-white/[.1] py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
                  <svg
                    className="w-2.5 h-2.5"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </a> */}
            </div>

            <div className="max-w-3xl text-center mx-auto">
              <h1 className="font-sora block font-bold text-gray-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                SpaceX Capsules
              </h1>
            </div>

            <div className="max-w-3xl text-center mx-auto">
              <p className="font-sora text-lg text-gray-400">
                All the latest information on the activities of SpaceX and their
                quest to explore the universe.
              </p>
            </div>

            <div className="text-center">
              <a
                className="font-sora  inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent  border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
                href="#datagrid"
              >
                Get started
                <svg
                  className="w-2.5 h-2.5"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}
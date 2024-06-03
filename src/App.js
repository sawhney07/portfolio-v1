import * as React from "react";

function App() {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="justify-center w-full bg-white max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center w-full text-center bg-white max-md:max-w-full">
              <div className="flex justify-center items-center px-16 py-12 text-4xl font-semibold text-cyan-700 bg-neutral-900 max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff623c30a21da4ec87e462db1a01ca4190cc9454833f6afc23688b53bb034584?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&"
                    className="shrink-0 aspect-square w-[50px] filter grayscale mt-2"
                  />
                  <div className="flex-auto self-start mt-3">
                    PORTFOLIO 
                    <br />
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center px-16 py-20 font-bold bg-neutral-900 max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col items-center mt-28 mb-16 max-w-full w-[658px] max-md:my-10">
                  <div className="text-4xl text-cyan-700">
                    <span className="text-4xl text-cyan-700">
                      Hello!, I’m Armaan
                    </span>
                    <br />
                    <span className="text-5xl text-cyan-700">
                      I'm an upcoming Software Engineer!
                    </span>
                  </div>
                  <div className="self-stretch mt-20 text-2xl text-neutral-200 max-md:mt-10 max-md:max-w-full">
                    I'm a third-year student at The University of British Columbia, Vancouver, specializing in Artificial Intelligence (AI) and Machine Learning. 
                    Through my academic coursework, I have developed a strong foundation in software development, excelling in full-stack development technologies. 
                    Checkout my LinkedIn below! 
                  </div>
                  <button className="justify-center items-center px-16 py-8 mt-16 max-w-full text-3xl bg-cyan-700 rounded-[50px] text-zinc-100 text-opacity-90 w-[300px] max-md:px-5 max-md:mt-10">
                    LinkedIn
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center w-full bg-neutral-900 max-md:max-w-full">
              <div className="flex justify-center items-center px-16 py-16 text-2xl font-semibold text-center text-cyan-700 whitespace-nowrap bg-neutral-900 max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between max-w-full w-[472px] max-md:flex-wrap">
                  <button>About</button>
                  <button>Education</button>
                  <button>Projects</button>
                </div>
              </div>
              <div className="flex justify-center items-center px-16 py-20 bg-neutral-900 max-md:px-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/01f3dc932c8aaa7e7ad51aaba164d63f1009097f89e1ace2d53a239f281060e1?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/01f3dc932c8aaa7e7ad51aaba164d63f1009097f89e1ace2d53a239f281060e1?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/01f3dc932c8aaa7e7ad51aaba164d63f1009097f89e1ace2d53a239f281060e1?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/01f3dc932c8aaa7e7ad51aaba164d63f1009097f89e1ace2d53a239f281060e1?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/01f3dc932c8aaa7e7ad51aaba164d63f1009097f89e1ace2d53a239f281060e1?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/01f3dc932c8aaa7e7ad51aaba164d63f1009097f89e1ace2d53a239f281060e1?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/01f3dc932c8aaa7e7ad51aaba164d63f1009097f89e1ace2d53a239f281060e1?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/01f3dc932c8aaa7e7ad51aaba164d63f1009097f89e1ace2d53a239f281060e1?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&"
                  className="mt-14 mb-20 max-w-full aspect-square w-[600px] max-md:my-10 filter grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-20 w-full bg-neutral-900 max-md:px-5 max-md:max-w-full">
        <div className="mb-8 w-full max-w-[1548px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="eager"
                src="https://logowik.com/content/uploads/images/ubc-university-of-british-columbia3090.logowik.com.webp"
                alt="Ubc Logos Download Mac Cosmetics Logo - Ubc Logo Png Clipart@pikpng.com"
                className="mt-48 w-100 max-md:mt-10 max-md:max-w-full align-left"
              />
            </div>
            <div className="flex flex-col ml-7 w-[67%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col font-bold text-left max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl text-cyan-700 max-md:max-w-full max-md:text-4xl">
                  About My Education
                </div>
                <div className="flex flex-col self-end mt-44 max-w-full w-[676px] max-md:mt-10">
                  <div className="text-2xl text-neutral-200 max-md:max-w-full">
                    <span className="text-5xl text-cyan-700 text-center">Lorem</span> ipsum
                    dolor sit amet consectetur, adipisicing elit. Maxime
                    consequatur unde sint expedita, repellat temporibus
                    asperiores eveniet eaque a dignissimos! Natus dicta
                    sapiente, cum incidunt odit voluptates veniam aspernatur
                    nostrum! Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Maxime consequatur unde sint expedita, repellat
                    temporibus asperiores eveniet
                    <br />
                    consectetur, adipisicing elit. Maxime consequatur unde sint
                    expedita, repellat temporibus asperiores eveniet
                  </div>
                  <div className="justify-center items-center self-center px-16 py-8 mt-20 max-w-full text-3xl bg-cyan-700 rounded-[50px] text-zinc-100 text-opacity-90 w-[300px] max-md:px-5 max-md:mt-10">
                    Contact Me
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-20 w-full bg-neutral-900 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1694px] max-md:max-w-full">
          <div className="self-center text-5xl font-bold text-center text-cyan-700 max-md:max-w-full max-md:text-4xl">
            Some of my Projects
          </div>
          <div className="mt-16 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow p-6 w-full font-bold text-center bg-stone-50 rounded-[50px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cf550817d6fbc8978b2672d1690ec44eda8ddf652f0f12de955be3033b35f4d4?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf550817d6fbc8978b2672d1690ec44eda8ddf652f0f12de955be3033b35f4d4?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf550817d6fbc8978b2672d1690ec44eda8ddf652f0f12de955be3033b35f4d4?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf550817d6fbc8978b2672d1690ec44eda8ddf652f0f12de955be3033b35f4d4?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf550817d6fbc8978b2672d1690ec44eda8ddf652f0f12de955be3033b35f4d4?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf550817d6fbc8978b2672d1690ec44eda8ddf652f0f12de955be3033b35f4d4?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf550817d6fbc8978b2672d1690ec44eda8ddf652f0f12de955be3033b35f4d4?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf550817d6fbc8978b2672d1690ec44eda8ddf652f0f12de955be3033b35f4d4?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&"
                    className="w-full aspect-[1.49] max-md:max-w-full"
                  />
                  <div className="self-center mt-7 text-4xl text-black">
                    Project #1
                  </div>
                  <div className="self-center mt-5 text-xl text-neutral-900">
                    ipsum dolor sit amet consectetur, adipisicing elit. Maxime
                    consequatur unde sint expedita, repellat temporibus
                    asperiores eveniet eaque a dignissimos!{" "}
                  </div>
                  <div className="justify-center items-center px-16 py-7 mt-7 text-3xl text-white whitespace-nowrap bg-cyan-700 rounded-[30px] max-md:px-5 max-md:max-w-full">
                    View
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow p-6 w-full font-bold text-center bg-stone-50 rounded-[35px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2703a4e9b9820c424be23c78dd92b2c5aac196d072293299b11251cf1f71fbcd?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2703a4e9b9820c424be23c78dd92b2c5aac196d072293299b11251cf1f71fbcd?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2703a4e9b9820c424be23c78dd92b2c5aac196d072293299b11251cf1f71fbcd?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2703a4e9b9820c424be23c78dd92b2c5aac196d072293299b11251cf1f71fbcd?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2703a4e9b9820c424be23c78dd92b2c5aac196d072293299b11251cf1f71fbcd?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2703a4e9b9820c424be23c78dd92b2c5aac196d072293299b11251cf1f71fbcd?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2703a4e9b9820c424be23c78dd92b2c5aac196d072293299b11251cf1f71fbcd?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2703a4e9b9820c424be23c78dd92b2c5aac196d072293299b11251cf1f71fbcd?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&"
                    className="w-full aspect-[1.49] max-md:max-w-full"
                  />
                  <div className="self-center mt-7 text-4xl text-black">
                    Project #2
                  </div>
                  <div className="self-center mt-5 text-xl text-neutral-900">
                    ipsum dolor sit amet consectetur, adipisicing elit. Maxime
                    consequatur unde sint expedita, repellat temporibus
                    asperiores eveniet eaque a dignissimos!{" "}
                  </div>
                  <button className="justify-center items-center px-16 py-7 mt-7 text-3xl text-white whitespace-nowrap bg-cyan-700 rounded-[30px] max-md:px-5 max-md:max-w-full">
                    View
                  </button>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow p-6 w-full font-bold text-center bg-stone-50 rounded-[50px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/51431cbca6dce6eca045b8f8da1c061e16431d678a74c63c735d0dfec04c2dca?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/51431cbca6dce6eca045b8f8da1c061e16431d678a74c63c735d0dfec04c2dca?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/51431cbca6dce6eca045b8f8da1c061e16431d678a74c63c735d0dfec04c2dca?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/51431cbca6dce6eca045b8f8da1c061e16431d678a74c63c735d0dfec04c2dca?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/51431cbca6dce6eca045b8f8da1c061e16431d678a74c63c735d0dfec04c2dca?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/51431cbca6dce6eca045b8f8da1c061e16431d678a74c63c735d0dfec04c2dca?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/51431cbca6dce6eca045b8f8da1c061e16431d678a74c63c735d0dfec04c2dca?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/51431cbca6dce6eca045b8f8da1c061e16431d678a74c63c735d0dfec04c2dca?apiKey=a2ae5ec7e5544df495302e8dcdfc0e04&"
                    className="w-full aspect-[1.49] max-md:max-w-full"
                  />
                  <div className="self-center mt-7 text-4xl text-black">
                    Project #3
                  </div>
                  <div className="self-center mt-5 text-xl text-neutral-900">
                    ipsum dolor sit amet consectetur, adipisicing elit. Maxime
                    consequatur unde sint expedita, repellat temporibus
                    asperiores eveniet eaque a dignissimos!{" "}
                  </div>
                  <div className="justify-center items-center px-16 py-7 mt-7 text-3xl text-white whitespace-nowrap bg-cyan-700 rounded-[30px] max-md:px-5 max-md:max-w-full">
                    View
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-20 w-full bg-neutral-900 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mt-5 w-full max-w-[1633px] max-md:max-w-full">
          <div className="self-center text-5xl font-bold text-center text-cyan-700 max-md:max-w-full max-md:text-4xl">
            My Contact Information
          </div>
          <div className="mt-20 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-20 py-20 mt-3 w-full text-2xl font-bold text-center whitespace-nowrap bg-neutral-900 bg-opacity-10 text-zinc-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="self-center text-3xl text-cyan-700">
                    E-Mail
                  </div>
                  <div className="mt-14 max-md:mt-10">
                    armaansawhney@gmail.com
                  </div>
                  <div className="mt-14 max-md:mt-10">
                    sawhneyarmaan@gmail.com
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex justify-center items-center px-16 py-20 w-full text-2xl font-bold text-center bg-neutral-900 bg-opacity-10 text-zinc-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col">
                    <div className="self-center text-3xl text-cyan-700">
                      Phone
                    </div>
                    <div className="mt-14 max-md:mt-10">+91 555-6666-444</div>
                    <div className="mt-16 max-md:mt-10">+1 333-2222-777</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-20 py-20 mt-3 w-full text-2xl font-bold text-center whitespace-nowrap bg-neutral-900 bg-opacity-10 text-zinc-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="self-center text-3xl text-cyan-700">
                    E-Mail
                  </div>
                  <div className="mt-14 max-md:mt-10">
                    armaansawhney@gmail.com
                  </div>
                  <div className="mt-14 max-md:mt-10">
                    sawhneyarmaan@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


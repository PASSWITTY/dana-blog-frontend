const Hero = () => {
  return (
    <div className="max-w-screen mx-auto">
      <div className="block md:flex md:space-x-2 px-2 lg:p-0">
        <div
          className="mb-4 md:mb-0 w-full  relative rounded inline-block"
          style={{ height: "24em" }}
          href="#"
        >
          <div
            className="absolute left-0 bottom-0 w-full h-full z-10"
            style={{
              backgroundImage:
                "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
            }}
          ></div>
          <img
            src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
          />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <span className=" sm:inline px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
              Mosaic of Memories:{" "}
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-gray-100 leading-tight">
              Capturing Moments in Time invites readers into a world where
              fleeting instants are immortalized, weaving a tapestry of memories
              that transcend the ordinary.
            </h2>
            <div className="flex mt-3">
              <div>
                <p className="font-semibold text-gray-200 text-sm">
                  {" "}
                  Sir.P.S.K.N{" "}
                </p>
                <p className="font-semibold text-gray-400 text-xs">
                  {" "}
                  {new Date().getFullYear()}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

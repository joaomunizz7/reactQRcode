

export default function Home() {
  return (
    <div className="min-h-screen w-full justify-center items-center flex p-4 bg-blue-100">
      <div className="bg-blue-200 p-6 pb-20 max-w-sm rounded-3xl flex flex-col justify-center text-center ">
        <img className=" rounded-3xl w-full" src={'image-qr-code.png'} />
        <h3 className="font-bold text-black text-3xl m-4">Improve your front-end skills by building projects</h3>
        <p className="text-black">Scan the QR code to visit FrontEnd Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  );
}

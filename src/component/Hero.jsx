function Hero(){
    return <div className="sm:flex justify-between px-20">
        <div className="mt-10 sm:w-[430px] flex-col ">
        <h1 className="text-4xl sm:text-5xl font-bold"> Best Place For Shopping In Your Area </h1>
        <p className="text-2xl mt-8 "> We got you everything you need. Visit us anywhere and anytime </p>
        <button className="mt-5 px-10 py-3 bg-primaryColor text-2xl rounded-xl">Explore More</button>
        </div>
        <img className="rounded-xl mt-10" src="https://img.freepik.com/free-photo/two-beautiful-women-shopping-town_1303-16432.jpg?size=626&ext=jpg&uid=R130577194&ga=GA1.2.1359195911.1683602290&semt=sph" />
    </div>
}

export default Hero
import HeroCard from "./HeroCard";

function Hero() {

    const objImage = [

    ];

    return (
        <section className="bg-green-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-5xl text-3xl font-bold title-font text-white mb-4">
                        Green Protocol
                    </h1>
                </div>
                <div className="flex flex-wrap justify-center gap-12 sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    
                    <HeroCard />
                    <HeroCard />
                    <HeroCard />

                </div>
            </div>
        </section>
    )

}

export default Hero
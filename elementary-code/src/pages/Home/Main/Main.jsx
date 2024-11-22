import AllUNeed from './AllUNeed/AllUNeed'
import Hero from './Hero/Hero'
import HowItWorks from './HowItWorks/HowItWorks'
import SuccessHistories from './SuccessHistories/SucessHistories'

function Main() {
    return (
        <main>
            <section>
                <Hero/>
            </section>
            <section>
                <HowItWorks/>
            </section>
            <section>
                <AllUNeed/>
            </section>
            <section>
                <SuccessHistories/>
            </section>
        </main>
    )
}

export default Main
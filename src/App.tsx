import Skill from "./Skill";
import TestResults from "./data.json";

function App() {
	return (
		<div className="h-screen w-screen flex">
			<main className="mx-auto flex flex-col sm:flex-row shadow-2xl rounded-3xl my-52 transition-all h-fit">
				<article className="bg-gradient-to-b from-blue-slate to-blue-royal text-center  rounded-3xl max-w-[375px] p-6">
					<h1 className="text-blue-lavender">Your Result</h1>
					<div className="rounded-full bg-gradient-to-b from-blue-violet via-blue-persian to-transparent  w-fit py-6 px-8  text-white font-bold items-center m-auto flex flex-col gap-1 ">
						<h2 className="text-5xl">76</h2>
						<span className="text-blue-lavender opacity-70">
							of 100
						</span>
					</div>
					<h3 className="text-white font-bold text-xl">Great</h3>
					<footer>
						You scored higher than 65% of the people who have taken
						these tests.
					</footer>
				</article>
				<aside className="rounded-3xl max-w-[375px] h-">
					<title>Summary</title>
					{TestResults.map((results) => {
						const categoryLowerCase =
							results.category.toLowerCase();
						return (
							<Skill
								key={results.category}
								category={results.category}
								icon={categoryLowerCase}
								score={results.score}
							/>
						);
					})}

					<button>Continue</button>

					<div>
						<div className="text-center ">
							Challenge by{" "}
							<a
								href="https://www.frontendmentor.io?ref=challenge"
								target="_blank"
							>
								Frontend Mentor
							</a>
							. Coded by{" "}
							<a
								href="https://github.com/guilhermefigueira"
								target="_blank"
								className="text-transparent bg-clip-text bg-gradient-to-r from-rose to-sky font-bold hover:text-lg transition-all "
							>
								Guilherme Figueira
							</a>
							.
						</div>
					</div>
				</aside>
			</main>
		</div>
	);
}

export default App;

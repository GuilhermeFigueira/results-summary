import Skill from "./Skill";
import TestResults from "./data.json";

function App() {
	return (
		<div className="h-screen flex">
			<main className="m-auto flex flex-col sm:flex-row shadow-2xl rounded-3xl  transition-all">
				<article className="items-center flex flex-col gap-8 bg-gradient-to-b from-blue-slate to-blue-royal text-center  rounded-3xl w-full sm:max-w-[335px] py-8">
					<h1 className="text-blue-lavender text-xl">Your Result</h1>
					<div className="rounded-full bg-gradient-to-b from-blue-violet via-blue-persian to-transparent  w-fit py-12 px-14  text-white font-bold items-center m-auto flex flex-col gap-1 ">
						<h2 className="text-7xl">76</h2>
						<span className="text-blue-lavender opacity-70">
							of 100
						</span>
					</div>
					<div className="flex flex-col gap-4 py-4 w-3/4">
						<h3 className="text-white font-bold text-3xl">Great</h3>
						<footer className="text-blue-lavender">
							You scored higher than 65% of the people who have
							taken these tests.
						</footer>
					</div>
				</article>
				<aside className="flex flex-col gap-6 rounded-3xl sm:max-w-[335px] w-full p-10">
					<h1 className="text-xl font-bold text-blue-dark ">
						Summary
					</h1>
					<div className="flex flex-col gap-5">
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
					</div>

					<div>
						<button className="bg-blue-dark text-white hover:bg-gradient-to-b from-blue-slate to-blue-royal transition-colors w-full rounded-full p-3 mt-4">
							Continue
						</button>

						<div className="text-center pt-4">
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

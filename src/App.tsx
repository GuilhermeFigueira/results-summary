import Skill from "./Skill";
import TestResults from "./data.json";

function App() {
	return (
		<>
			<main>
				<h1>Your Result</h1>
				<div>
					<h2>76</h2>
					<span>of 100</span>
				</div>
				<h3>Great</h3>
				<footer>
					You scored higher than 65% of the people who have taken
					these tests.
				</footer>
			</main>
			<aside>
				<title>Summary</title>
				{TestResults.map((results) => {
					const categoryLowerCase = results.category.toLowerCase();
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
			</aside>
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
		</>
	);
}

export default App;

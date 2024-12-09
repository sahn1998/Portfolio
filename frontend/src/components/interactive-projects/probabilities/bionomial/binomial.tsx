import React, { useState, useEffect } from "react";
import "./binomial.css";
import { SimpleSlider } from "../../../tools/slider";
import { BarChart } from "../../../tools/bar-chart";
import 'katex/dist/katex.min.css';
import binomialPMF from '../../../../images/binomial_pmf.png'
import { NavigationBar } from "../../../navigation-bar/Navbar";


export const BinomialDistributionPage: React.FC = () => {
	const [trialSliderValue, setTrialSliderValue] = useState(5000);
	const [testSliderValue, settestSliderValue] = useState(50);
	const [probabilitySliderValue, setProbabilitySliderValue] = useState(0.5);
	const [findingSliderValue, setFindingSliderValue] = useState(30)
	const [trialData, setTrialData] = useState<number[]>([]);

	
	// Function to compute trial data
	const computeTrialData = () => {
		let results: number[] = [];
		for (let trial = 0; trial < trialSliderValue; trial++) {
			let heads = 0;
			for (let test = 0; test < testSliderValue; test++) {
				if (Math.random() < probabilitySliderValue) {
					heads++;
				}
			}
			results.push(heads); // Record number of heads for this trial
		}
		setTrialData(results);
	};

	// Update histogram data whenever slider values change
	useEffect(() => {
		computeTrialData();
		setFindingSliderValue(Math.round(testSliderValue/2))
	}, [trialSliderValue, testSliderValue, probabilitySliderValue]);

	// This effect handles updates related to findingSliderValue without re-running computeTrialData
	useEffect(() => {}, [findingSliderValue]);

	return (
		<div className="main-content"> 
            <div id="content-holder">
                <div className="container">
                    <div className=" navbar">
                        <NavigationBar 
                            colorHome={"rgb(255, 255, 255)"}
                            colorProjects={"rgb(183, 165, 122)"}
                            colorAbout={"rgb(255, 255, 255)"}
                            colorExperience={"rgb(255, 255, 255)"}
                        />
                    </div>
					<div className="overlay">
                        <div className="sections">
							<div className="content">
								<div className="main-page-intro">
									<h1>The Binomial Distribution</h1>
									<h4>
										1. Real-World Application: Quality Control For Tesla
									</h4>
									<span>
									Suppose a Tesla manufacturing site tests 50 cars newly made from the factory and finds that 2 are defective (or 48 are ready-to-ship). While this defect rate seems high, let's focus on estimating the number of defective cars.
									<br></br>
									<br></br>
									If Tesla plans to produce 10,000 cars, what is the likelihood of let's say 20 of these cars are defective vehicles?
									</span>
								</div>
								<div className="main-page-intro">
									<h3>
										Binomial Distribution of Tesla Model S
									</h3>
								</div>
								<div className="main-page-intro">
									<BarChart
										data={trialData}
										width={1000}
										height={250}
										maxBinRange={testSliderValue}
										probabilityOfHeads={probabilitySliderValue}
										graphType="distribution"
										expectation="E(X) = n ⋅ p"
										variance="Var(X) = np ⋅ (1 - p)"
									/>
								</div>
								<div className="sliders-container">
									<div className="slider-item">
										<h3># of Tesla Tested (n): <br></br>{testSliderValue}</h3>
										<SimpleSlider
											width={300}
											height={10}
											min={0}
											max={200}
											step={1}
											value={testSliderValue}
											onValueChange={settestSliderValue}
											appearance={{
												background: "linear-gradient(to right, #f06, #ff9900)",
											}}
										/>
										<span>
										Each trial represents testing one Tesla Model S to determine whether it is defective or non-defective.
										</span>
									</div>
									<div className="slider-item">
										<h3>Probability of Defect (p): <br></br>{probabilitySliderValue}</h3>
										<SimpleSlider
											width={300}
											height={10}
											min={0}
											max={1}
											step={0.01}
											value={probabilitySliderValue}
											onValueChange={setProbabilitySliderValue}
											appearance={{
												background: "linear-gradient(to right, #f06, #ff9900)",
											}}
										/>
										<span>
										In this scenario, "defect" refers to producing a defective Tesla.
										</span>
									</div>
									<div className="slider-item">
										<h3>Number of Batches : <br></br>{trialSliderValue}</h3>
										<SimpleSlider
											width={300}
											height={10}
											min={0}
											max={10000}
											step={100}
											value={trialSliderValue}
											onValueChange={setTrialSliderValue}
											appearance={{
												background: "linear-gradient(to right, #f06, #ff9900)",
											}}
										/>
										<span>
										Batches represent how many times the factory tests the independent group (currently {testSliderValue}) of Tesla Model S vehicles.
										</span>
									</div>
								</div>
								<div className="main-page-intro">
									<span style={{ color: 'white', fontSize: '20px', marginTop: '20px'}}>
										Play around with the sliders!
										<li style={{ marginTop: '5px'}}>
											p: You can see how the distribution shifts and centers around the most plausible success rate. (Expectation)
										</li>
										<li style={{ marginTop: '5px'}}>
											𝑛: You can see how the distribution becomes more concentrated around the center. (↓ Standard Error)
										</li>
										<li style={{ marginTop: '5px'}}>
											Batches: You can see how the distribution becomes more solidly normal.
										</li>
									</span>
								</div>
								<div style={{ width: '100%', height: '1px', backgroundColor: 'white', marginTop: '40px', marginBottom: '40px'}}></div>
								<div className="main-page-intro">
									<h4>
										2. Exploring the Distribution
									</h4>
									<span>
										To answer the question, let's step back and consider a simplified scenario:
										<br></br>
										<br></br>
										Assume the true success rate of producing a defective Tesla is 50% (p = 0.5).
										You test {testSliderValue} cars in a batch <span style={{ color: 'white' }}>(change the numbers around on the slider!)</span> and calculate the probability of observing exactly 30 defective cars.
										This is denoted as P(data | success rate), which represents the probability of observing the data given the success rate.
										<br></br>
										<br></br>
										<span style={{ color: 'white' }}>In short, we want to know the likelihood of observing 30 defective Teslas given "p" and "𝑛".</span>
									</span>
								</div>

								<div className="main-page-intro">
									<h4>
										3. Understanding the Binomial Distribution
									</h4>
									<span>
										The Binomial Distribution does exactly this. The binomial distribution models the number of defects "𝑘" (30 defective Teslas) out of "𝑛" trials ({testSliderValue} cars). This equation is given as:
									</span>
									<img src={binomialPMF} alt="Example" />
									<br></br>
								</div>
								<div style={{ width: '100%', height: '1px', backgroundColor: 'white', marginBottom: '40px'}}></div>
								<div className="main-page-intro">
									<h4>
										4. Visualizing the Distribution
									</h4>
									<span>
									The probability mass function (PMF) graph shows the likelihood of observing each possible value of k (defective cars). The peak of the PMF graph occurs at the expected value 𝐸[𝑋], which represents the most plausible outcome based on the parameters "n" and "p".
									</span>
									<h3>Probability Mass Function (PMF) </h3>
									<BarChart
										data={trialData}
										width={1000}
										height={250}
										maxBinRange={testSliderValue}
										probabilityOfHeads={probabilitySliderValue}
										estimating_k={findingSliderValue}
										graphType="PMF"
										pmf_pdf="P(X = k)"
									/>
								</div>
								<div className="sliders-container">
									<div className="slider-item">
										<h4>Finding defects in a Batch (k): <br></br>{findingSliderValue}</h4>
										<SimpleSlider
											width={400}
											height={10}
											min={0}
											max={testSliderValue}
											step={1}
											value={findingSliderValue}
											onValueChange={setFindingSliderValue}
											appearance={{
												background: "linear-gradient(to right, #f06, #ff9900)",
											}}
										/>
									</div>
								</div>
								<div className="main-page-intro">
									<span style={{ color: 'white', fontSize: '20px', marginTop: '20px'}}>
										Since we say p = {probabilitySliderValue}, it means on average we expect to {Math.round(probabilitySliderValue * testSliderValue)} defective Teslas out of {testSliderValue} Teslas.
										By adjusting the slider, you can see the probability of seeing {findingSliderValue} defective cars is highlighted by the bar given our "p" and "𝑛".
										<br></br>
										<br></br>
										Try moving the probability slider at the top around as well while keeping the current slider the same.
										You'll be able to see the probability at which the probability of seeing {findingSliderValue} defective cars is the highest.
									</span>
								</div>
								<div style={{ width: '100%', height: '1px', backgroundColor: 'white', marginTop: '40px', marginBottom: '40px'}}></div>
								<div className="main-page-intro">
									<h4>
										5. From Data to Success Rate
									</h4>
									<span>
									In most real-world scenarios, we don’t know the exact success rate (p). <span style={{ color: 'white' }}>Instead, we work backward to estimate the probability of manufacturing a defective car based on the observed data.</span> This involves calculating 
									P(success rate ∣ data), the probability of a success rate given the observed outcomes. This is different than P(data | success rate), probability of observing the data given the success rate. Similiar in wording, but massively different. 
									<br></br>
									<br></br>
									For this, you'll need to know the concept of Bayes Theorem and the Probability Density Functions.
									</span>
								</div>
								<div className="main-page-intro">
									<h4>
										6. Answering the question
									</h4>
									<span>
									So if Tesla's manufacturing plant has 50 cars newly made from the factory and finds that 2 are defective (or 48 are ready-to-ship). If Tesla plans to produce 10,000 cars, what is the likelihood of let's say 20 of these cars are defective vehicles?
									<br></br>
									<br></br>
									We can use our formula here, with a defect probability p = (2/50) (though very computationally expensive):
									</span>
									<img src={binomialPMF} alt="Example" />
									<br></br>
									<br></br>
									<span style={{ color: 'white', textAlign: 'center', marginTop: '20px'}}>
									Note* Generally for a large 𝑛, we approximate it using the normal distribution.
									</span>
									<br></br>
									<br></br>
									<br></br>
									<br></br>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>	
	);
};

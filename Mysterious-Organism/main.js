// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = (value = undefined) => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(value || returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum, dna) => {
	return {
		specimenNum, 
		dna,
		mutate () {
			const index = Math.floor(Math.random() * this.dna.length);
			const currentBase = this.dna[index];
			let newDna = returnRandBase();
			while (newDna != currentBase) {
			   newDna = returnRandBase();
			}
			this.dna[index] = newDna;
			return this.dna;
		},
		
		compareDNA (specimen) {
		const count = this.dna.reduce((accumulator, base, i) => {
			  if (specimen.dna[i] === base) {
				  return accumulator+1;
			  }
			  return accumulator;
		  }, 0);
		  const percent = ((count / specimen.dna.length) * 100).toFixed();
		  console.log(`specimen #${this.specimen} and specimen #${specimen.specimen} have ${percent}% DNA in common.`);
		  return percent;
		},
		
		willLikelySurvive() {
		  const dnaC = mockUpStrand('C');
		  const dnaG = mockUpStrand('G');
		  return this.compareDNA({specimen: 1, dna: dnaC}) >= 60
			  || this.compareDNA({specimen: 2, dna: dnaG}) >= 60;
		}
	};
};
const instances = [];
let i = 1;
while (instances.length < 30) {
  const dna = pAequorFactory(i, mockUpStrand());
  if (dna.willLikelySurvive()) {
    instances.push(dna);
  }
  
}
console.log(instances);









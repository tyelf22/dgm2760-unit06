//Make lowercase
/* document.querySelector('#lowerTrees').addEventListener('click', () => {
    toLowerCase = trees.toLocaleString().toLowerCase().split(',');
    trees.splice(0, trees.length);
    trees.push(...toLowerCase);
    listTrees();
}) */



makeStory = () => {
    let storyField = document.querySelector('#story');
    let nounsText = document.getElementById('nounInput').value;
    let adjectivesText = document.getElementById('adjectiveInput').value;
    let verbsText = document.getElementById('verbInput').value;

    let nouns = nounsText.split(/\s+/);
    nouns = nouns.map(noun => {
        return noun.toLowerCase();
    })

    let adjectives = adjectivesText.split(/\s+/);
    adjectives = adjectives.map(adjective => {
        return adjective.toLowerCase();
    })

    let verbs = verbsText.split(/\s+/);
    verbs = verbs.map(verb => {
        return verb.toLowerCase();
    })

    storyField.textContent = `
    Once upon a ${nouns[0]}, there were three little pigs. The first little pig was very ${adjectives[0]}, and he built a house for himself out of ${nouns[1]}s. The second little pig was ${adjectives[1]}, and he built his house out of ${nouns[2]}s. But the third little pig was very ${adjectives[2]}, and he built his house out of ${nouns[3]}s. One day all the pigs were ${verbs[0]}ing and ${verbs[1]}ing. All of the sudden a ${nouns[4]} came and ${verbs[2]}ed on all of their houses.
    
    
    `
    console.log(nouns, adjectives, verbs)
}

document.querySelector('#tellStory').addEventListener('click', makeStory)



let team = [null, null, null, null, null, null];

function addPokemonToTeam(pokemonSrc) {
  const emptySlotIndex = team.indexOf(null); // Find the first empty slot

  if (emptySlotIndex !== -1) {
    team[emptySlotIndex] = pokemonSrc; // Add Pokémon to the first available slot
    updateTeamDisplay();
  } else {
    console.log("Team is full!");
  }
}

function removePokemonFromTeam(i) {
  team[i] = null;  // Remove Pokémon from the team
  updateTeamDisplay();
}

// Function to update the Pokémon selector area with images
function replace(pokeType) {
  let imageContainer = document.getElementById("pokemon-images");

  imageContainer.innerHTML = "";

  // Ensure you're displaying exactly 9 Pokémon images in the selector
  pokeType.slice(0, 9).forEach(function (url) {
    const pokeImg = document.createElement("img");
    pokeImg.src = url;
    pokeImg.alt = "Pokemon Image";

    // Add the image to the container
    imageContainer.appendChild(pokeImg);

    // Handle the click event for selecting a Pokémon
    pokeImg.addEventListener('click', function() {
      const index = team.indexOf(url);
      if (index === -1) {
        addPokemonToTeam(url);  // Add Pokémon to the team if not already there
      }
    });
  });
  // Show the image container
  imageContainer.style.display = "flex";
}

function updateTeamDisplay() {
  for (let i = 0; i < 6; i++) {  // Loop through the 6 team slots
    const teammate = document.getElementById(`teammate${i + 1}`);

    if (team[i]) {
      teammate.src = team[i];
      teammate.style.display = "block";  // Show the Pokémon image if there's a Pokémon in the slot

      // Add click event to remove the Pokémon from the team
      teammate.removeEventListener('click', removePokemonFromTeam);  // Remove any old event listeners
      teammate.addEventListener('click', function() {
        removePokemonFromTeam(i);  // Remove Pokémon when clicked in the team area
      });
    } else {
      teammate.src = "./";  // Clear the slot (or use a transparent image if desired)
      teammate.style.display = "none";  // Hide the image if there's no Pokémon in the slot
    }
  }
}

let grassPokemon = [
  "https://archives.bulbagarden.net/media/upload/thumb/8/8b/0154Meganium.png/140px-0154Meganium.png",
  "https://archives.bulbagarden.net/media/upload/thumb/5/51/0182Bellossom.png/140px-0182Bellossom.png",
  "https://archives.bulbagarden.net/media/upload/thumb/5/5c/0254Sceptile.png/140px-0254Sceptile.png",
  "https://archives.bulbagarden.net/media/upload/thumb/8/80/0470Leafeon.png/140px-0470Leafeon.png",
  "https://archives.bulbagarden.net/media/upload/thumb/1/16/0556Maractus.png/140px-0556Maractus.png",
  "https://archives.bulbagarden.net/media/upload/thumb/6/63/0754Lurantis.png/140px-0754Lurantis.png",
  "https://archives.bulbagarden.net/media/upload/thumb/e/e8/0811Thwackey.png/140px-0811Thwackey.png",
  "https://archives.bulbagarden.net/media/upload/thumb/e/ee/0286Breloom.png/140px-0286Breloom.png",
  "https://archives.bulbagarden.net/media/upload/thumb/1/14/0460Abomasnow.png/140px-0460Abomasnow.png"
];
let firePokemon = [
  "https://upload.wikimedia.org/wikipedia/en/1/1f/Pok%C3%A9mon_Charizard_art.png",
  "https://archives.bulbagarden.net/media/upload/thumb/0/06/0037Vulpix.png/140px-0037Vulpix.png",
  "https://www.prosportstickers.com/wp-content/uploads/nc/z/pokemon_fennekin_2__99671.png",
  "https://archives.bulbagarden.net/media/upload/thumb/a/a9/0078Rapidash.png/140px-0078Rapidash.png",
  "https://archives.bulbagarden.net/media/upload/f/f1/0136Flareon.png",
  "https://archives.bulbagarden.net/media/upload/thumb/c/c0/0257Blaziken.png/140px-0257Blaziken.png",
  "https://archives.bulbagarden.net/media/upload/c/cc/0776Turtonator.png",
  "https://archives.bulbagarden.net/media/upload/thumb/8/82/0392Infernape.png/140px-0392Infernape.png",
  "https://archives.bulbagarden.net/media/upload/thumb/f/ff/0725Litten.png/640px-0725Litten.png",
];
let waterPokemon = [
  "https://static.wikia.nocookie.net/vgcdatabase/images/9/90/Greninja.png",
  "https://archives.bulbagarden.net/media/upload/thumb/e/ed/0055Golduck.png/140px-0055Golduck.png",
  "https://archives.bulbagarden.net/media/upload/thumb/f/fd/0061Poliwhirl.png/140px-0061Poliwhirl.png",
  "https://archives.bulbagarden.net/media/upload/thumb/2/22/0117Seadra.png/140px-0117Seadra.png",
  "https://archives.bulbagarden.net/media/upload/thumb/6/6d/0134Vaporeon.png/140px-0134Vaporeon.png",
  "https://archives.bulbagarden.net/media/upload/thumb/0/0a/0009Blastoise.png/140px-0009Blastoise.png",
  "https://archives.bulbagarden.net/media/upload/9/99/0131Lapras.png",
  "https://archives.bulbagarden.net/media/upload/thumb/1/1c/0419Floatzel.png/140px-0419Floatzel.png",
  "https://archives.bulbagarden.net/media/upload/thumb/d/dc/0245Suicune.png/140px-0245Suicune.png",
];
let electricPokemon = [
  "https://archives.bulbagarden.net/media/upload/thumb/e/e8/0466Electivire.png/140px-0466Electivire.png",
  "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/800px-0025Pikachu.png",
  "https://archives.bulbagarden.net/media/upload/thumb/4/48/0243Raikou.png/140px-0243Raikou.png",
  "https://archives.bulbagarden.net/media/upload/c/cf/0871Pincurchin.png",
  "https://archives.bulbagarden.net/media/upload/7/7b/0618Stunfisk.png",
  "https://archives.bulbagarden.net/media/upload/thumb/5/55/0100Voltorb.png/140px-0100Voltorb.png",
  "https://archives.bulbagarden.net/media/upload/thumb/e/e3/0135Jolteon.png/140px-0135Jolteon.png",
  "https://archives.bulbagarden.net/media/upload/f/f4/0405Luxray.png",
  "https://archives.bulbagarden.net/media/upload/thumb/a/a0/0310Manectric.png/140px-0310Manectric.png"
];
let ghostPokemon = [
  "https://qph.cf2.quoracdn.net/main-qimg-58e87e7b35ef2019ef51de96178a8839",
  "https://upload.wikimedia.org/wikipedia/en/b/bf/Pok%C3%A9mon_Gengar_art.png",
  "https://archives.bulbagarden.net/media/upload/thumb/5/5d/0353Shuppet.png/140px-0353Shuppet.png",
  "https://tiermaker.com/images/template_images/2022/1558660/ghost-type-pokemon-gen-9-included-all-forms-1558660/gourgeistpng.png",
  "https://tiermaker.com/images/chart/chart/ghost-type-pokemon-up-to-sv-reveal-trailer-498495/708phantumppng.png",
  "https://archives.bulbagarden.net/media/upload/thumb/7/72/0354Banette.png/140px-0354Banette.png",
  "https://archives.bulbagarden.net/media/upload/thumb/6/64/0855Polteageist.png/140px-0855Polteageist.png",
  "https://archives.bulbagarden.net/media/upload/thumb/a/a5/0429Mismagius.png/140px-0429Mismagius.png",
  "https://assets.pokeos.com/pokemon/home/render/897.png"
];
let fairyPokemon = [
  "https://archives.bulbagarden.net/media/upload/thumb/c/c4/0685Slurpuff.png/140px-0685Slurpuff.png",
  "https://archives.bulbagarden.net/media/upload/thumb/b/b7/0035Clefairy.png/140px-0035Clefairy.png",
  "https://archives.bulbagarden.net/media/upload/thumb/0/01/0175Togepi.png/140px-0175Togepi.png",
  "https://archives.bulbagarden.net/media/upload/thumb/e/e3/0683Aromatisse.png/140px-0683Aromatisse.png",
  "https://archives.bulbagarden.net/media/upload/thumb/d/d0/0700Sylveon.png/140px-0700Sylveon.png",
  "https://archives.bulbagarden.net/media/upload/thumb/1/17/0716Xerneas.png/140px-0716Xerneas.png",
  "https://archives.bulbagarden.net/media/upload/thumb/8/82/0926Fidough.png/140px-0926Fidough.png",
  "https://archives.bulbagarden.net/media/upload/thumb/2/25/1006Iron_Valiant.png/140px-1006Iron_Valiant.png",
  "https://archives.bulbagarden.net/media/upload/thumb/f/f8/0282Gardevoir.png/140px-0282Gardevoir.png"
];
let fightingPokemon = [
  "https://archives.bulbagarden.net/media/upload/thumb/8/82/0068Machamp.png/140px-0068Machamp.png",
  "https://archives.bulbagarden.net/media/upload/thumb/c/c0/0107Hitmonchan.png/140px-0107Hitmonchan.png",
  "https://archives.bulbagarden.net/media/upload/thumb/f/f1/0620Mienshao.png/140px-0620Mienshao.png",
  "https://archives.bulbagarden.net/media/upload/thumb/8/89/0674Pancham.png/140px-0674Pancham.png",
  "https://archives.bulbagarden.net/media/upload/thumb/1/14/0891Kubfu.png/140px-0891Kubfu.png",
  "https://archives.bulbagarden.net/media/upload/thumb/0/08/0297Hariyama.png/250px-0297Hariyama.png",
  "https://archives.bulbagarden.net/media/upload/thumb/0/00/0106Hitmonlee.png/250px-0106Hitmonlee.png",
  "https://archives.bulbagarden.net/media/upload/thumb/4/42/0448Lucario.png/140px-0448Lucario.png",
  "https://archives.bulbagarden.net/media/upload/thumb/7/77/0539Sawk.png/250px-0539Sawk.png"
];
let rockPokemon = [
  "https://archives.bulbagarden.net/media/upload/thumb/2/2f/0185Sudowoodo.png/140px-0185Sudowoodo.png",
  "https://archives.bulbagarden.net/media/upload/thumb/2/2b/0526Gigalith.png/140px-0526Gigalith.png",
  "https://archives.bulbagarden.net/media/upload/thumb/e/e6/0138Omanyte.png/140px-0138Omanyte.png",
  "https://archives.bulbagarden.net/media/upload/thumb/4/41/0141Kabutops.png/140px-0141Kabutops.png",
  "https://archives.bulbagarden.net/media/upload/thumb/0/09/0248Tyranitar.png/140px-0248Tyranitar.png",
  "https://archives.bulbagarden.net/media/upload/thumb/1/15/0348Armaldo.png/140px-0348Armaldo.png",
  "https://tiermaker.com/images/chart/chart/rock-type-pokemon-up-to-pla-498495/696tyruntpng.png",
  "https://archives.bulbagarden.net/media/upload/thumb/c/c5/0567Archeops.png/140px-0567Archeops.png",
  "https://archives.bulbagarden.net/media/upload/thumb/3/37/0719Diancie.png/140px-0719Diancie.png"
];
let darkPokemon = [
  "https://archives.bulbagarden.net/media/upload/thumb/9/9b/0359Absol.png/140px-0359Absol.png",
  "https://archives.bulbagarden.net/media/upload/thumb/8/88/0491Darkrai.png/140px-0491Darkrai.png",
  "https://archives.bulbagarden.net/media/upload/thumb/e/e1/0197Umbreon.png/140px-0197Umbreon.png",
  "https://archives.bulbagarden.net/media/upload/thumb/5/52/0571Zoroark.png/140px-0571Zoroark.png",
  "https://archives.bulbagarden.net/media/upload/thumb/1/16/0828Thievul.png/140px-0828Thievul.png",
  "https://archives.bulbagarden.net/media/upload/thumb/0/05/0229Houndoom.png/140px-0229Houndoom.png",
  "https://archives.bulbagarden.net/media/upload/d/d4/0215Sneasel.png",
  "https://archives.bulbagarden.net/media/upload/thumb/9/98/0302Sableye.png/140px-0302Sableye.png",
  "https://archives.bulbagarden.net/media/upload/thumb/b/bf/0893Zarude.png/1200px-0893Zarude.png"
];
let dragonPokemon = [
  "https://archives.bulbagarden.net/media/upload/thumb/0/0d/0148Dragonair.png/140px-0148Dragonair.png",
  "https://archives.bulbagarden.net/media/upload/thumb/b/bf/0612Haxorus.png/140px-0612Haxorus.png",
  "https://archives.bulbagarden.net/media/upload/thumb/7/7b/0706Goodra.png/140px-0706Goodra.png",
  "https://archives.bulbagarden.net/media/upload/thumb/8/84/0782Jangmo-o.png/140px-0782Jangmo-o.png",
  "https://archives.bulbagarden.net/media/upload/thumb/1/1c/0149Dragonite.png/140px-0149Dragonite.png",
  "https://archives.bulbagarden.net/media/upload/thumb/8/8a/0373Salamence.png/140px-0373Salamence.png",
  "https://archives.bulbagarden.net/media/upload/thumb/a/a8/0445Garchomp.png/140px-0445Garchomp.png",
  "https://archives.bulbagarden.net/media/upload/thumb/f/fb/0718Zygarde-Complete.png/140px-0718Zygarde-Complete.png",
  "https://archives.bulbagarden.net/media/upload/thumb/e/e8/0887Dragapult.png/140px-0887Dragapult.png"
];
let flyingPokemon = [
  "https://archives.bulbagarden.net/media/upload/thumb/5/53/0641Tornadus-Therian.png/140px-0641Tornadus-Therian.png",
  "https://archives.bulbagarden.net/media/upload/thumb/7/7f/0715Noivern.png/140px-0715Noivern.png",
  "https://archives.bulbagarden.net/media/upload/thumb/c/c2/0823Corviknight.png/140px-0823Corviknight.png",
  "https://archives.bulbagarden.net/media/upload/thumb/0/0d/0845Cramorant.png/140px-0845Cramorant.png",
  "https://archives.bulbagarden.net/media/upload/thumb/5/55/0012Butterfree.png/140px-0012Butterfree.png",
  "https://archives.bulbagarden.net/media/upload/thumb/9/92/0022Fearow.png/140px-0022Fearow.png",
  "https://archives.bulbagarden.net/media/upload/thumb/1/14/0164Noctowl.png/140px-0164Noctowl.png",
  "https://archives.bulbagarden.net/media/upload/thumb/c/c9/0187Hoppip.png/140px-0187Hoppip.png",
  "https://archives.bulbagarden.net/media/upload/thumb/4/49/0207Gligar.png/140px-0207Gligar.png"
];
let poisonPokemon = [
  "https://archives.bulbagarden.net/media/upload/thumb/5/51/0024Arbok.png/140px-0024Arbok.png",
  "https://archives.bulbagarden.net/media/upload/thumb/7/79/0317Swalot.png/140px-0317Swalot.png",
  "https://archives.bulbagarden.net/media/upload/thumb/a/ae/0336Seviper.png/140px-0336Seviper.png",
  "https://archives.bulbagarden.net/media/upload/2/21/0803Poipole.png",
  "https://archives.bulbagarden.net/media/upload/thumb/e/e6/0435Skuntank.png/140px-0435Skuntank.png",
  "https://archives.bulbagarden.net/media/upload/thumb/4/41/0089Muk.png/250px-0089Muk.png",
  "https://archives.bulbagarden.net/media/upload/thumb/1/11/0452Drapion.png/140px-0452Drapion.png",
  "https://archives.bulbagarden.net/media/upload/thumb/a/ab/0453Croagunk.png/140px-0453Croagunk.png",
  "https://archives.bulbagarden.net/media/upload/thumb/6/63/0747Mareanie.png/140px-0747Mareanie.png"
];
let psychicPokemon = [
  "https://archives.bulbagarden.net/media/upload/thumb/b/bb/0065Alakazam.png/140px-0065Alakazam.png",
  "https://archives.bulbagarden.net/media/upload/thumb/8/89/0150Mewtwo.png/140px-0150Mewtwo.png",
  "https://archives.bulbagarden.net/media/upload/thumb/6/67/0196Espeon.png/140px-0196Espeon.png",
  "https://archives.bulbagarden.net/media/upload/thumb/7/7d/0202Wobbuffet.png/140px-0202Wobbuffet.png",
  "https://archives.bulbagarden.net/media/upload/thumb/4/4c/0097Hypno.png/140px-0097Hypno.png",
  "https://archives.bulbagarden.net/media/upload/thumb/5/55/0358Chimecho.png/140px-0358Chimecho.png",
  "https://archives.bulbagarden.net/media/upload/thumb/1/1b/0518Musharna.png/140px-0518Musharna.png",
  "https://archives.bulbagarden.net/media/upload/thumb/d/d7/0386Deoxys.png/140px-0386Deoxys.png",
  "https://archives.bulbagarden.net/media/upload/0/0e/0956Espathra.png"
];
let icePokemon = [
  "https://archives.bulbagarden.net/media/upload/thumb/8/88/0362Glalie.png/140px-0362Glalie.png",
  "https://db.pokemongohub.net/_next/image?url=%2Fimages%2Fofficial%2Ffull%2F471.webp&w=640&q=75",
  "https://archives.bulbagarden.net/media/upload/thumb/1/1c/0378Regice.png/140px-0378Regice.png",
  "https://archives.bulbagarden.net/media/upload/thumb/1/1c/0554Darumaka-Galar.png/140px-0554Darumaka-Galar.png",
  "https://archives.bulbagarden.net/media/upload/thumb/1/1a/0582Vanillite.png/140px-0582Vanillite.png",
  "https://archives.bulbagarden.net/media/upload/thumb/f/fc/0613Cubchoo.png/140px-0613Cubchoo.png",
  "https://archives.bulbagarden.net/media/upload/thumb/6/60/0712Bergmite.png/140px-0712Bergmite.png",
  "https://archives.bulbagarden.net/media/upload/thumb/6/6d/0875Eiscue.png/140px-0875Eiscue.png",
  "https://archives.bulbagarden.net/media/upload/thumb/8/84/0615Cryogonal.png/140px-0615Cryogonal.png"
];
let steelPokemon = [
  "https://archives.bulbagarden.net/media/upload/thumb/f/fe/0376Metagross.png/140px-0376Metagross.png",
  "https://archives.bulbagarden.net/media/upload/thumb/2/21/0599Klink.png/140px-0599Klink.png",
  "https://archives.bulbagarden.net/media/upload/thumb/9/9a/0878Cufant.png/140px-0878Cufant.png",
  "https://archives.bulbagarden.net/media/upload/thumb/7/77/0303Mawile.png/140px-0303Mawile.png",
  "https://archives.bulbagarden.net/media/upload/thumb/6/61/0385Jirachi.png/140px-0385Jirachi.png",
  "https://archives.bulbagarden.net/media/upload/thumb/5/5a/0681Aegislash-Shield.png/140px-0681Aegislash-Shield.png",
  "https://archives.bulbagarden.net/media/upload/thumb/2/2a/0208Steelix.png/140px-0208Steelix.png",
  "https://archives.bulbagarden.net/media/upload/thumb/2/22/0379Registeel.png/140px-0379Registeel.png",
  "https://archives.bulbagarden.net/media/upload/thumb/1/1e/0306Aggron.png/140px-0306Aggron.png"
];


//TRISTAN WORK
const skinContainer = document.getElementById('skin-container');
const eyeContainer = document.getElementById('eye-selector-container');
const hairContainer = document.getElementById('hair-container');
const outfitContainer = document.getElementById('outfit-container');
const accessoryContainer = document.getElementById('accessory-container');

eyeContainer.style.display = 'none';
hairContainer.style.display = 'none';
outfitContainer.style.display = 'none';
accessoryContainer.style.display = 'none';


function skinDisplay() {
  skinContainer.style.display = 'inline-flex';
  eyeContainer.style.display = 'none';
  hairContainer.style.display = 'none';
  outfitContainer.style.display = 'none';
  accessoryContainer.style.display = 'none';
}
function eyesDisplay() {
  skinContainer.style.display = 'none';
  eyeContainer.style.display = 'inline-flex';
  hairContainer.style.display = 'none';
  outfitContainer.style.display = 'none';
  accessoryContainer.style.display = 'none';
}
function hairDisplay() {
  skinContainer.style.display = 'none';
  eyeContainer.style.display = 'none';
  hairContainer.style.display = 'inline-flex';
  outfitContainer.style.display = 'none';
  accessoryContainer.style.display = 'none';
}
function outfitDisplay() {
  skinContainer.style.display = 'none';
  eyeContainer.style.display = 'none';
  hairContainer.style.display = 'none';
  outfitContainer.style.display = 'inline-flex';
  accessoryContainer.style.display = 'none';
}
function accessoryDisplay() {
  skinContainer.style.display = 'none';
  eyeContainer.style.display = 'none';
  hairContainer.style.display = 'none';
  outfitContainer.style.display = 'none';
  accessoryContainer.style.display = 'inline-flex';
}


const skin1 = "./assets/character/IMG_0839.PNG"
const skin2 = "./assets/character/IMG_0840.PNG"
const skin3 = "./assets/character/IMG_0841.PNG"
const skin4 = "./assets/character/IMG_0842.PNG"
const skin5 = "./assets/character/IMG_0843.PNG"
const skin6 = "./assets/character/IMG_0844.PNG"

function changeSkin1() {
  document.skinimg.src = skin1;
  preventDefault();

}
function changeSkin2() {
  document.skinimg.src = skin2;
  preventDefault();
}
function changeSkin3() {
  document.skinimg.src = skin3;
  preventDefault();
}
function changeSkin4() {
  document.skinimg.src = skin4;
  preventDefault();
}
function changeSkin5() {
  document.skinimg.src = skin5;
  preventDefault();
}
function changeSkin6() {
  document.skinimg.src = skin6;
  preventDefault();
}

const eyeImg = document.getElementById('eye-img');
const hairImg = document.getElementById('hair-img');
const outfitImg = document.getElementById('outfit-img');
const accessoryImg = document.getElementById('accessory-img');

eyeImg.style.display = 'none';
hairImg.style.display = 'none';
outfitImg.style.display = 'none';
accessoryImg.style.display = 'none';


const eye1 = "./assets/character/IMG_0845.PNG"
const eye2 = "./assets/character/IMG_0846.PNG"
const eye3 = "./assets/character/IMG_0847.PNG"

function changeEye1() {
  document.eyeimg.src = eye1;
  eyeImg.style.display = "inline-flex"
  preventDefault();
}
function changeEye2() {
  document.eyeimg.src = eye2;
  eyeImg.style.display = "inline-flex"
  preventDefault();
}
function changeEye3() {
  document.eyeimg.src = eye3;
  eyeImg.style.display = "inline-flex"
  preventDefault();
}


const hair1 = "./assets/character/IMG_0848.PNG"
const hair2 = "./assets/character/IMG_0849.PNG"
const hair3 = "./assets/character/IMG_0850.PNG"

function changeHair1() {
  document.hairimg.src = hair1;
  hairImg.style.display = "inline-flex"
  preventDefault();
}
function changeHair2() {
  document.hairimg.src = hair2;
  hairImg.style.display = "inline-flex"
  preventDefault();
}
function changeHair3() {
  document.hairimg.src = hair3;
  hairImg.style.display = "inline-flex"
  preventDefault();
}


const outfit1 = "./assets/character/IMG_0851.PNG"
const outfit2 = "./assets/character/IMG_0852.PNG"

function changeOutfit1() {
  document.outfitimg.src = outfit1;
  outfitImg.style.display = "inline-flex"
  preventDefault();
}
function changeOutfit2() {
  document.outfitimg.src = outfit2;
  outfitImg.style.display = "inline-flex"
  preventDefault();
}


const accessory1 = "./assets/character/IMG_0853.PNG"
const accessory2 = "./assets/character/IMG_0854.PNG"

function changeAccessory1() {
  document.accessoryimg.src = accessory1;
  accessoryImg.style.display = "inline-flex"
  preventDefault();
}
function changeAccessory2() {
  document.accessoryimg.src = accessory2;
  accessoryImg.style.display = "inline-flex"
  preventDefault();
}

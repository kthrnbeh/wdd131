const Character = {
  name: 'SNORLEBLAT',
  species: 'Monster',
  class: 'Swamp Beast Diplomat',
  level: 8,
  health: 100,
  image: 'img/snortleblat.png',
  attacked(){
    if(this.health > 0){
        this.health -= 20;
    }
    if(this.health ==0){
        console.log("Character has been defeated!");
        alert("Character has been defeated!");
    }
},
 levelUp(){
    this.level +=1;
    this.health += 20;
  }
};
document.querySelector('#characterName').textContent = Character.name;
document.querySelector('#characterLevel').textContent = Character.level;
document.querySelector('#characterHealth').textContent = Character.health;
document.querySelector('#characterClass').textContent = Character.class;
document.querySelector('#characterSpecies').textContent = Character.species;

const characterImage = document.querySelector('.image');
characterImage.setAttribute('src', Character.image);
characterImage.setAttribute('alt', `Image of ${Character.name}`);
document.querySelector('#attacked').addEventListener('click', () => {
    Character.attacked();
    document.querySelector('#characterHealth').textContent = Character.health;
});
document.querySelector('#levelUp').addEventListener('click', () => {
    Character.levelUp();
    document.querySelector('#characterLevel').textContent = Character.level;
});
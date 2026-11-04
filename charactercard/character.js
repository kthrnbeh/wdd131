const Character = {
  name: 'SNORLEBLAT',
  species: 'Monster',
  class: 'Swamp Beast Diplomat',
  level: 8,
  health: 100,
  image: 'img/snortleblat.png',
  attacked(){
    this.health -=20;
},
 levelUp(){
    this.level +=1;
  }
};
document.querySelector('#characterName').textContent = Character.name;
document.querySelector('#characterLevel').textContent = Character.level;
document.querySelector('#characterHealth').textContent = Character.health

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
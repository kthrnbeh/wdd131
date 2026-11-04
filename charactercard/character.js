const Character = {
  name: 'SNORLEBLAT',
  species: 'Monster',
  class: 'Swamp Beast Diplomat',
  level: 8,
  health: 100,
  image: 'img/snorleblat.png',
  attacked(){
    this.health -=20;
},
 levelup(){
    this.level +=1;
  }
};
document.querySelector('#characterName').textContent = Character.name;
document.querySelector('#characterLevel').textContent = Character.level;
document.querySelector('#characterHealth').textContent = Character.health;

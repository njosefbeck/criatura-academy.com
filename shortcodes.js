// Monster card
function monsterCard (monster) {
  return `
  <div class="border-2 rounded-md p-2 text-sm mb-2 ${monster.widthClass}">
  <img src="/images/monsters/${monster.image}" class="float-right ml-2" alt="${monster.name}" />
  <span class="block leading-tight mb-2">
    <a href="https://divine-pride.net/database/monster/${monster.id}/" target="_blank" rel="noreferrer noopener">
      ${monster.name}
    </a>
  </span>
  <ul>
    <li><strong>Level:</strong> ${monster.level}</li>
    <li><strong>HP:</strong> ${monster.hp}</li>
    <li><strong>DEF/MDEF:</strong> ${monster.defMdef}</li>
    <li><strong>Class:</strong> ${monster.class}</li>
    <li><strong>Family:</strong> ${monster.family}</li>
    <li><strong>Property: </strong>${monster.property}</li>
    <li><strong>Size:</strong> ${monster.size}</li>
    <li><strong>EXP/JEXP:</strong> ${monster.expJexp}</li>
  </ul>
</div>
  `
}

module.exports = {
  monsterCard,
}

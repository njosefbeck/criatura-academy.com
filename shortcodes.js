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

// Equipment card
function equipCard (description, equip) {
  return `
  <div class="border-2 rounded-md text-sm mb-2 ca-w-49">
    <div class="border-b rounded-t-md p-2 bg-blue-100">
      <a href="https://divine-pride.net/database/item/${equip.id}" target="_blank" rel="noopener noreferrer">
        <img class="inline-block mr-2" src="/images/equip/subjugation/${equip.id}.png" alt="${equip.name}" />
        ${equip.name}</a>
      <span class="font-bold float-right">${equip.category}</span>
    </div>
    <ul class="p-2">
      ${equip.foundIn ? `<li><strong>Found In:</strong> ${equip.foundIn}</li>` : ``}
      ${equip.craftedFrom ? `<li><strong>Crafted From:</strong> ${equip.craftedFrom}</li>` : ``}
      <li><strong>Weight:</strong> ${equip.weight} &middot; <strong>DEF:</strong> ${equip.def}</li>
    </ul>
    ${description}
  </div>
  `
}

module.exports = {
  monsterCard,
  equipCard,
}

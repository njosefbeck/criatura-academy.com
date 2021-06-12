// Monster card
function monsterCard (monster) {
  const monsterName = monster.id ? `<a href="https://divine-pride.net/database/monster/${monster.id}/" target="_blank" rel="noreferrer noopener">${monster.name}</a>` : `<u>${monster.name}</u>`;
  return `
  <div class="border-2 rounded-md p-2 text-sm mb-4 ${monster.widthClass}" id="${monster.name}">
    <img src="/images/monsters/${monster.image}" class="float-right ml-2" alt="${monster.name}" />
    <span class="block leading-tight mb-2">
      ${monsterName}
    </span>
    <ul>
      <li><strong>Level:</strong> ${monster.level}</li>
      <li><strong>HP:</strong> ${monster.hp}</li>
      ${monster.defMdef ? `<li><strong>DEF/MDEF:</strong> ${monster.defMdef}</li>` : ''}
      <li><strong>Class:</strong> ${monster.class}</li>
      <li><strong>Family:</strong> ${monster.family}</li>
      <li><strong>Property: </strong>${monster.property}</li>
      <li><strong>Size:</strong> ${monster.size}</li>
      <li><strong>EXP/JEXP:</strong> ${monster.expJexp}</li>
      ${monster.str ? `<li><strong>STR:</strong> ${monster.str}</li>` : ''}
      ${monster.dex ? `<li><strong>DEX:</strong> ${monster.dex}</li>` : ''}
      ${monster.agi ? `<li><strong>AGI:</strong> ${monster.agi}</li>` : ''}
      ${monster.vit ? `<li><strong>VIT:</strong> ${monster.vit}</li>` : ''}
      ${monster.int ? `<li><strong>INT:</strong> ${monster.int}</li>` : ''}
      ${monster.luk ? `<li><strong>LUK:</strong> ${monster.luk}</li>` : ''}
    </ul>
    <span class="block mt-2 text-xs">
      <i><a class="font-normal" href="#${monster.name}">Link here</a></i>
    </span>
  </div>
  `
}

// Equipment card
function equipCard (description, equip) {
  const hasFoundInOrCraftedFrom = (equip.foundIn || equip.craftedFrom || equip.droppedBy);
  const displayStats = hasFoundInOrCraftedFrom && equip.weight && (equip.def || equip.atk);
  const widthClass = equip.fullWidth ? 'w-full' : 'ca-w-49';
  return `
  <div class="border-2 rounded-md text-sm mb-4 ${widthClass}" id="${equip.name}">
    <div class="border-b rounded-t-sm p-2 bg-blue-100">
      <a href="https://divine-pride.net/database/item/${equip.id}" target="_blank" rel="noopener noreferrer">
        <img class="inline-block mr-2" src="/images/equip/${equip.folder}/${equip.id}.png" alt="${equip.name}" />
        ${equip.name}</a>
      <span class="font-bold float-right">${equip.category}</span>
    </div>
    ${displayStats ?
      `
      <ul class="p-2">
        ${equip.foundIn ? `<li><strong>Found In:</strong> ${equip.foundIn}</li>` : ``}
        ${equip.droppedBy ? `<li><strong>Dropped By:</strong> ${equip.droppedBy}</li>` : ``}
        ${equip.craftedFrom ? `<li><strong>Crafted From:</strong> ${equip.craftedFrom}</li>` : ``}
        ${equip.canWear ? `<li><strong>Can Wear:</strong> ${equip.canWear}</li>` : ``}
        ${equip.requiredLevel ? `<li><strong>Required Level:</strong> ${equip.requiredLevel}</li>` : ``}
        <li>
          ${equip.weight ? `<strong>Weight:</strong> ${equip.weight}` : ``}
          ${equip.def ? ` &middot; <strong>DEF:</strong> ${equip.def}` : ``}
          ${equip.atk ? ` &middot; <strong>ATK:</strong> ${equip.atk}` : ``}
          ${equip.level ? ` &middot; <strong>Level:</strong> ${equip.level}` : ``}
        </li>
      </ul>
      `
      : ``
    }
    ${description}
    <span class="block mt-2 px-2 pb-2 text-xs">
      <i><a class="font-normal" href="#${equip.name}">Link here</a></i>
    </span>
  </div>
  `
}

function craftableEquipCard (content, equip) {
  const widthClass = equip.fullWidth ? 'w-full' : 'ca-w-49';
  return `
  <div class="border-2 rounded-md text-sm mb-4 ${widthClass}" id="${equip.name}">
    <div class="border-b rounded-t-sm p-2 bg-blue-100">
      <a href="https://divine-pride.net/database/item/${equip.id}" target="_blank" rel="noopener noreferrer">
        <img class="inline-block mr-2" src="/images/equip/${equip.folder}/${equip.id}.png" alt="${equip.name}" />
        ${equip.name}</a>
    </div>
    <div class="border-t p-2">
      <span class="font-bold">NPC:</span> ${equip.npc}
    </div>
    ${content}
    <span class="block mt-2 px-2 pb-2 text-xs">
      <i><a class="font-normal" href="#${equip.name}">Link here</a></i>
    </span>
  </div>
  `
}

// Enchant card
function enchantCard (content, enchant) {
  const widthClass = enchant.fullWidth ? 'w-full' : 'ca-w-49';
  return `
  <div class="border-2 rounded-md text-sm mb-4 ${widthClass}" id="${enchant.name}">
    <div class="border-b rounded-t-sm p-2 bg-blue-100">
      <a href="https://divine-pride.net/database/item/${enchant.id}" target="_blank" rel="noopener noreferrer">
        <img class="inline-block mr-2" src="/images/enchants/${enchant.id}.png" alt="${enchant.name}" />
        ${enchant.name}</a>
      <span class="font-bold float-right">Enchant</span>
    </div>
    ${content}
    <span class="block mt-2 px-2 pb-2 text-xs">
      <i><a class="font-normal" href="#${enchant.name}">Link here</a></i>
    </span>
  </div>
  `
}

// Card from a monster... card
function card (description, card) {
  return `
  <div class="border-2 rounded-md text-sm mb-4 ${card.widthClass}" id="${card.name}">
    <div class="border-b rounded-t-sm p-2 bg-blue-100">
      <a href="https://divine-pride.net/database/item/${card.id}" target="_blank" rel="noopener noreferrer">
        ${card.name}</a>
    </div>
    <ul class="p-2">
      ${card.mountedIn ? `<li><strong>Mounted In:</strong> ${card.mountedIn}</li>` : ``}
      ${card.prefix ? `<li><strong>Prefix/Suffix:</strong> ${card.prefix}</li>` : ``}
    </ul>
    ${description}
    <span class="block mt-2 px-2 pb-2 text-xs">
      <i><a class="font-normal" href="#${card.name}">Link here</a></i>
    </span>
  </div>
  `
}

// Item
function item (item) {
  return `
  <img class="inline-block" src="/images/${item.imageFolder}/${item.id}.png" alt="${item.name}" />
  ${item.onlyIcon ? `` : `
    <a class="ml-1" href="https://divine-pride.net/database/item/${item.id}/" target="_blank" rel="noopener noreferrer">${item.name}</a>
  `}`
}

// Item card

function itemCard (content, item) {
  return `
  <div class="border-2 rounded-md text-sm mb-4 ${item.widthClass}" id="${item.id}">
    <div class="border-b rounded-t-sm p-2 bg-blue-100">
      <a href="https://divine-pride.net/database/item/${item.id}" target="_blank" rel="noopener noreferrer">
        <img class="inline-block mr-2" src="/images/items/${item.id}.png" alt="${item.name}" />
        ${item.name}</a>
    </div>
    ${content}
    <span class="block mt-2 px-2 pb-2 text-xs">
      <i><a class="font-normal" href="#${item.id}">Link here</a></i>
    </span>
  </div>
  `
}

// Tip Card

function tipCard (content, tip) {
  return `
  <div class="border-2 rounded-md mb-4" id="${tip.id}">
    <div class="border-b rounded-t-sm p-2 bg-blue-100">
      <a href="#${tip.id}">${tip.title}</a>
      <span class="float-right">#${tip.id}</span>
    </div>
    ${content}
  </div>
  `;
}

module.exports = {
  monsterCard,
  equipCard,
  craftableEquipCard,
  enchantCard,
  item,
  itemCard,
  card,
  tipCard
}

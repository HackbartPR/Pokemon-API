document.addEventListener('DOMContentLoaded', async () => {
  for (let i = 1; i < 200; i++) {
    let pokemon = await findInformations(i)

    fetch(`https://pokeapi.co/api/v2/pokemon/`)
      .then((res) => {
        return res.json()
      })
      .then((pokemons) => {
        let pokeCard = document.createElement('div')
        pokeCard.setAttribute('class', 'pokeCard')

        let divImage = document.createElement('div')
        divImage.setAttribute('class', 'divImage')

        pokeCard.appendChild(divImage)

        let imgPoke = document.createElement('img')
        imgPoke.setAttribute('class', 'imagePoke')
        imgPoke.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${i}.png`

        divImage.appendChild(imgPoke)

        let divInfo = document.createElement('div')
        divInfo.setAttribute('class', 'divInfo')

        pokeCard.appendChild(divInfo)

        let divName = document.createElement('div')
        divName.setAttribute('class', 'divName')
        divName.innerText = pokemon.name.toUpperCase()

        divInfo.appendChild(divName)

        let divHP = document.createElement('div')
        divHP.setAttribute('class', 'divHP')

        divInfo.appendChild(divHP)

        let hpBar = document.createElement('div')
        hpBar.setAttribute('class', 'hpBar')

        let hpValue = document.createElement('div')
        hpValue.setAttribute('class', 'hpValue')
        hpValue.innerText = 'HP ' + pokemon.hp

        divHP.appendChild(hpBar)
        divHP.appendChild(hpValue)

        let divType = document.createElement('div')
        divType.setAttribute('class', 'divType')

        divInfo.appendChild(divType)

        let imageType = document.createElement('img')
        imageType.setAttribute('class', 'imageType')
        imageType.srcset = pathImageType(pokemon.type)

        divType.appendChild(imageType)

        let divAttack = document.createElement('div')
        divAttack.setAttribute('class', 'divAttack')

        divInfo.appendChild(divAttack)

        let attackValue = document.createElement('div')
        attackValue.setAttribute('class', 'attackValue')
        attackValue.innerText = 'AT ' + pokemon.attack

        let attack = document.createElement('div')
        attack.setAttribute('class', 'attack')
        attack.innerText = 'ATTACK'

        divAttack.appendChild(attackValue)
        divAttack.appendChild(attack)

        let divDefense = document.createElement('div')
        divDefense.setAttribute('class', 'divDefense')

        divInfo.appendChild(divDefense)

        let defenseValue = document.createElement('div')
        defenseValue.setAttribute('class', 'defenseValue')
        defenseValue.innerText = 'DF ' + pokemon.defense

        let defense = document.createElement('div')
        defense.setAttribute('class', 'defense')
        defense.innerText = 'DEFENSE'

        divDefense.appendChild(defenseValue)
        divDefense.appendChild(defense)

        document.getElementById('container').appendChild(pokeCard)
      })
  }
})

async function findInformations(id) {
  let pokemon = {}
  await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => {
      return res.json()
    })
    .then((pokemons) => {
      pokemon = {
        name: pokemons.name,
        type: pokemons.types[0].type.name,
        hp: pokemons.stats[0].base_stat,
        attack: pokemons.stats[1].base_stat,
        defense: pokemons.stats[2].base_stat,
      }
    })

  return pokemon
}

function pathImageType(type) {
  let path = ''
  switch (type) {
    case 'bug':
      path = '../images/types/Pokémon_Bug_Type_Icon.svg'
      break
    case 'dark':
      path = '../images/types/Pokémon_Dark_Type_Icon.svg'
      break
    case 'dragon':
      path = '../images/types/Pokémon_Dragon_Type_Icon.svg'
      break
    case 'electric':
      path = '../images/types/Pokémon_Electric_Type_Icon.svg'
      break
    case 'fairy':
      path = '../images/types/Pokémon_Fairy_Type_Icon.svg'
      break
    case 'fighting':
      path = '../images/types/Pokémon_Fighting_Type_Icon.svg'
      break
    case 'fire':
      path = '../images/types/Pokémon_Fire_Type_Icon.svg'
      break
    case 'flying':
      path = '../images/types/Pokémon_Flying_Type_Icon.svg'
      break
    case 'ghost':
      path = '../images/types/Pokémon_Ghost_Type_Icon.svg'
      break
    case 'grass':
      path = '../images/types/Pokémon_Grass_Type_Icon.svg'
      break
    case 'ground':
      path = '../images/types/Pokémon_Ground_Type_Icon.svg'
      break
    case 'ice':
      path = '../images/types/Pokémon_Ice_Type_Icon.svg'
      break
    case 'normal':
      path = '../images/types/Pokémon_Normal_Type_Icon.svg'
      break
    case 'poison':
      path = '../images/types/Pokémon_Poison_Type_Icon.svg'
      break
    case 'psychic':
      path = '../images/types/Pokémon_Psychic_Type_Icon.svg'
      break
    case 'rock':
      path = '../images/types/Pokémon_Rock_Type_Icon.svg'
      break
    case 'steel':
      path = '../images/types/Pokémon_Steel_Type_Icon.svg'
      break
    case 'water':
      path = '../images/types/Pokémon_water_Type_Icon.svg'
      break
  }
  return path
}

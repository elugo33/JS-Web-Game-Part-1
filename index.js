let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position='fixed'
pineTree.style.left='450px'
pineTree.style.bottom='200px'
document.body.append(pineTree)

let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.position = 'fixed'
sword.left = '500px'
sword.bottom = '405px'
document.body.append(sword)

sword.addEventListener('click', function(){
    sword.remove()
})

let shield = newImage('img')
shield.src = 'assets/shield.png'
shield.style.bottom = '185px'
shield.style.left ='165px'

let staff=newImage('img')
staff.src='assets/staff.png'
staff.style.left= '600px'
staff.style.bottom= '100px'
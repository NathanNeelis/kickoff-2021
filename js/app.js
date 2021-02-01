const url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/'

// GET REQUEST
const teams = fetch(`${url}/squads/2/teams/4/members/`)
    .then(response => response.json())
    .then(data => console.log('fetch', data));


console.log('test', teams)

// PUT REQUEST
const NathanNeelis = {
    id: 5,
    teamId: 4,
    name: 'Nathan',
    prefix: '',
    surname: 'Beelis',
    mugshot: 'https://avatars.githubusercontent.com/u/55492381?s=400&u=f00919440e91dc470660e7dcd2ad83447972710a&v=4',
    githubHandle: 'NathanNeelis',
    other: {
        sport: 'Mountainbike',
        muziek: 'Van alles',
        werkplek: 'Alkmaar'
    }
}
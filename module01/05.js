var users = [  
    {    
        name: "Diego",    
        skills: ["Javascript", "ReactJS", "Redux"]  
    },  
    {    
        name: "Gabriel",    
        skills: ["VueJS", "Ruby on Rails", "Elixir"]  
    }
];

function describe(users) {

    for ( const user of users) {
        console.log(`${user.name} has the skills: ${user.skills.join(', ')}.`);
    }
}

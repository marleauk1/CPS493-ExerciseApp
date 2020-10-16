/* 
    User Model. Currently mocked at the client side.
*/ 

export const users = [
    {
        username: 'JumpingJacksJack',
        isAdmin: false,
        workouts: [
            {
                date: 2020,
                type: 'Jumping Jacks',
                time: 30
            },
            {
                date: 2020,
                type: 'Jumping Jacks',
                time: 45
            },
            {
                date: 2020,
                type: 'Jump Jacks',
                time: 60
            }
        ]
    },
    {
        username: 'JumpRopeJill',
        isAdmin: false,
        workouts: [
            {
                date: 2020,
                type: 'Jump Rope',
                time: 60
            },
            {
                date: 2020,
                type: 'Jump Rope',
                time: 75
            },
            {
                date: 2020,
                type: 'Jump Rope',
                time: 90
            },
            {
                date: 2020,
                type: 'Jump Rope',
                time: 105
            }
        ]
    },
    {
        username: 'AnAdmin',
        isAdmin: true,
        workouts: [
        ]
        
    },
];
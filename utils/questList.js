import styles from '../styles/Quests.module.css'

export default [{
    name: "First NFT",
    id: 1,
    description: "Mint your mainnet challenge NFT",
    long_description: "Let's Mint your mainnet challenge NFT ! You will keep it throughout your journey. As you complete quests (like this one), your NFT will gain levels and evolve! Good luck ;-)",
    icon: <svg className={styles.quest_point_icon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>,
    actionName: "Minting your first NFT",
    actionDescription: "Please wait...",
    actionType: "invoke",
    transactionType: 1,
    custom_button: "Mint",
    connected: [
        {
            name: "Quizz",
            id: 2,
            steps: [1, 2],
            description: "Understand starknet.id and our mission",
            icon: <svg className={styles.quest_point_icon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>,
            steps: [3, 3, 3, 3, 4],
            questions : [
                {
                    name: "How big is the map of Eykar ?",
                    choices: [
                        {
                            name: "Small"
                        },
                        {
                            name: "Medium"
                        },
                        {
                            name: "Large"
                        },
                        {
                            name: "Extra Large"
                        },
                        {
                            name: "Bigger than our universe",
                            correct: true
                        },
                        {
                            name: "Infinite"
                        }
                    ]
                },
                {
                    name: "Can we make money playing the game?",
                    choices: [
                        {
                            name: "Yes",
                            correct: true
                        },
                        {
                            name: "No"
                        }
                    ]
                },
                {
                    name: "How to earn real money playing the game?",
                    choices: [
                        {
                            name: "By building diamond mines"
                        },
                        {
                            name: "By earning Eykar tokens"
                        },
                        {
                            name: "By having the most prestigious Guild.",
                            correct: true
                        },
                        {
                            name: "By attacking other players to steal the money they have invested"
                        }
                    ]
                },
                {
                    name: "How can you participate in the creation of the game?",
                    multiple: true,
                    choices: [
                        {
                            name: "By participating in the development, all the code is open source on Github",
                            correct: true
                        },
                        {
                            name: "By making suggestions (on the Discord server for example)",
                            correct: true
                        },
                        {
                            name: "By inviting lots of bots to the Discord server 😡😠😠"
                        },
                    ]
                },
            ],
            connected: [
                {
                    name: "Identities",
                    id: 4,
                    description: "Create an identity on Starknet.id.",
                    icon: <svg className={styles.quest_point_icon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>,
                    steps: [5],
                    connected: [
                        {
                            name: "Twitter",
                                id: 8,
                                description: "Verify your Twitter account on Starknet.id, and unlock exclusive quests.",
                                icon: <svg className={styles.quest_point_icon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>,
                                steps: [6, 4],
                                customContent: [
                                    <p>
                                        Verify your twitter
                                    </p>,
                                ],
                                details: {
                                    0: {
                                        buttons: [
                                            <a href="https://starknet.id" target="_blank" rel="noreferrer"><button className="button gold">Open Starknet.id</button></a>
                                        ]
                                    }
                                },
                        }
                    ]
                },
                {
                    name: "Get a domain",
                    id: 12,
                    description: <>Buy a .stark domain on <a className='link' href='https://starknet.id/' target="_blank" rel="noreferrer">Starknet.id</a></>,
                    icon: <svg className={styles.quest_point_icon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                    </svg>
                    ,
                    steps: [6, 4],
                    customContent: [
                        <p>
                            Buy a .stark domain on <a className='link' href="https://starknet.id/" target="_blank" rel="noreferrer">Starknet.id</a>, then click Okay
                        </p>,
                    ],
                }
            ]
        }
    ]
}]
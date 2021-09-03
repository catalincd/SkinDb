const Entries = [{
        id: '0',
        title: 'Pistol',
    },
    {
        id: '1',
        title: 'Heavy',
    },
    {
        id: '2',
        title: 'SMG',
    },
    {
        id: '3',
        title: 'Rifle',
    },
    {
        id: '4',
        title: 'Sniper',
    },
    {
        id: '5',
        title: 'Knife',
    },
    {
        id: '6',
        title: 'Gloves',
    },
    {
        id: '7',
        title: 'Agents',
    },
    {
        id: '8',
        title: 'Stickers',
    },
    {
        id: '9',
        title: 'Music Kits',
    },

];


const Items = {
    Pistol: [{
            id: 'weapon_glock',
            name: 'Glock-18',
            default: 'aa_fade'
        },
        {
            id: 'weapon_usp_silencer',
            name: 'USP-S',
            default: 'cu_usps_noir'
        },
        {
            id: 'weapon_hkp2000',
            name: 'P2000',
            default: 'cu_p2000_fire_elemental'
        },
        {
            id: 'weapon_p250',
            name: 'P250',
            default: 'so_sand'
        },
        {
            id: 'weapon_elite',
            name: 'Dual Berettas',
            default: 'gs_dual_elites_dezastre'
        },
        {
            id: 'weapon_cz75a',
            name: 'CZ75-Auto',
            default: 'cu_cz75_eco'
        },
        {
            id: 'weapon_tec9',
            name: 'Tec-9',
            default: 'gs_tec9_decimator'
        },
        {
            id: 'weapon_fiveseven',
            name: 'Five-SeveN',
            default: 'cu_five_seven_angry'
        },
        {
            id: 'weapon_deagle',
            name: 'Desert Eagle',
            default: 'cu_deag_printstream'
        }
    ],
    Heavy: [],
    SMG: [],
    Rifle: [{
            id: 'weapon_ak47',
            name: 'AK 47',
            default: 'cu_ak47_anubis'
        },
        {
            id: 'weapon_m4a1',
            name: 'M4A4',
            default: 'cu_m4a1_howling'
        },
        {
            id: 'weapon_galilar',
            name: 'Galil AR',
            default: 'cu_galil_eco'
        },
        {
            id: 'weapon_famas',
            name: 'FAMAS',
            default: 'gs_famas_legacy_gold'
        },
        {
            id: 'weapon_sg556',
            name: 'SG 553',
            default: 'cu_sg553_cyrex'
        },
        {
            id: 'weapon_aug',
            name: 'AUG',
            default: 'cu_aug_chameleonaire'
        },

    ],
    Sniper: [{
        id: 'weapon_awp',
        name: 'AWP',
        default: 'cu_medieval_dragon_awp'
    }, ],
    Knife: [{
        id: 'weapon_knife_widowmaker',
        name: 'Talon',
        default: 'am_sapphire_marbleized'
    }, ],
    Gloves: [],
    Agents: [],
    'Music Kits': [],
    Stickers: [],
}


export default { Items, Entries };
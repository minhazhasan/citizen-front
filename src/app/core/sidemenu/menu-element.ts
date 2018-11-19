export const menus = [

    {
        'name': 'Observations',
        'icon': 'list',
        'link': false,
        'open': true,
        'sub': [
            {
                'name': 'Dashboard',
                'icon': 'dashboard',
                'link': '/citizenpanel',
                'open': false,
            },
            {
                'name': 'Create Observation',
                'icon': 'add_circle_outline',
                'link': 'createobservation',
                'open': false,
            },
            {
                'name': 'My List',
                'icon': 'format_list_bulleted',
                'link': 'observations/list',
                'open': false,
            },
            {
                'name': 'Explore Observations',
                'icon': 'explore',
                'link': 'observations/explore',
                'open': false,
            }
        ]

    },
    {

        'name': 'Graphs',
        'icon': 'pie_chart_outlined',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Create Graph',
                'icon': 'add_circle_outline',
                'link': 'graph/create',
                'open': false,

            },
            {
                'name': 'My Graphs',
                'icon': 'show_chart',
                'open': false,
                'link': 'graphs/list',
            },
            {
                'name': 'Explore Graphs',
                'icon': 'explore',
                'open': false,
                'link': 'graphs/explore',
            }
        ]
    }
];

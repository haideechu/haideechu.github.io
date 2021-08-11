var config = {
    style: 'mapbox://styles/haideechu/cks0t0dtj2r8h17l1d6zfnq72/draft',
    accessToken: 'pk.eyJ1IjoiaGFpZGVlY2h1IiwiYSI6ImNrcnhwbTVuejAxd3gybnFteDh5OGNrancifQ.fmUT2CAmwQPZdX08M3mVMQ',
    showMarkers: false,
    markerColor: '',
    theme: 'dark',
    use3dTerrain: false,
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'nyc',
            alignment: 'left',
            hidden: false,
            title: 'Traffic privileges: Every 9 in 10 traffic violation arrests in New York City involves a person of color',
            image: '',
            description: 'In a 2017 story, ProPublica documented the way police in Jacksonville, Florida racial-profiled and disproportionately targeted Black Americans for pedestrian violations. Civil rights organizations have long criticized the practice, often referring to it as a new form of “stop-and-frisk,” especially since it often led to erroneous detainments and arrests in majority-minority neighborhoods. <br><br> A similar pattern emerges in New York City today: Nearly every 9 in 10 arrests due to vehicle and traffic law violations between January and March 2021 involved a person of color. Every other arrest involved a Black person.',
            location: {
                center: [-74.1077, 40.7009],
                zoom: 9.64,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'nyc-acs-2019-race-poverty-imm-cm1vk7',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'traffic-arrests-acs-2019-race-9l600g',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'nyc-map',
                    opacity: 1
                }
            ],
            onChapterExit: [{
                layer: 'nyc-map',
                opacity: 0
            }]
        },
        {
            id: 'acs',
            alignment: 'left',
            hidden: false,
            title: 'Communities of color bear the brunt',
            image: 'assets/acs-legend-poc-no-title.png',
            description: "<i>Legend: Percentage of people of color per census tract<br><br></i>Among the most impacted are communities of color: Harlem and Washington Heights in upper Manhattan; Mott Haven, Tremont and University Heights in the South Bronx; Jamaica and Hollis in Southeast Queens; Bedford-Stuyvesant, Bushwick, Brownsville, Sunset Park and Bay Ridge in Brooklyn; Mariner's Harbor, Port Richmond and Clifton on the North Shore of Staten Island.",
            location: {
                center: [-74.1077, 40.7009],
                zoom: 9.64,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'nyc-acs-2019-race-poverty-imm-cm1vk7',
                opacity: 1,
                duration: 1000
            },
            {
                layer: 'traffic-arrests-acs-2019-race-9l600g',
                opacity: 0,
                duration: 1000
            }],
            onChapterExit: []
        },
        {
            id: 'arrests',
            alignment: 'left',
            hidden: false,
            title: 'Traffic violation arrests most concentrated in neighborhoods of color',
            image: 'assets/arrest-legend-long.png',
            description: 'Many of these majority-minority neighborhoods saw clusters of traffic violation arrests. Some were subjects of the NYPD’s Summer All Out initiative in 2014 and 2015 — a 90-day “violence-reduction strategy” and high-frequency foot patrol program implemented by the NYPD after a federal judge found its endemic “stop-and-frisk” practice to be racial profiling in 2014. <br><br> The SAO initiative cost the NYPD at least $2 million in overtime alone. It had, however, “weak, negligible influence” in crime rates, according to a study published by an NYPD sergeant along with researchers from Texas State University and Columbia University.<br><br><img src="assets/sao-map-with-legend.png"><i>Source:“The Effects of the Summer All Out Foot Patrol Initiative in New York City: A Difference-in-Differences Approach” (2020)</i>',
            location: {
                center: [-74.1077, 40.7009],
                zoom: 9.64,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'traffic-arrests-acs-2019-race-9l600g',
                opacity: 1,
                duration: 1000
            }],
            onChapterExit: []
        },
        {
            id: 'arrests-bronx',
            alignment: 'left',
            hidden: false,
            title: 'Arrest patterns today suggest heavy enforcement on communities of color persist despite the end of SAO',
            image: '',
            description: 'Up by the Yankee Stadium, Bronx Community District (CD) 4 saw 77 traffic violation arrests between January and March this year — the third most among all community districts in the city. Its neighboring Manhattan district — CD 12, which covers Washington Heights, Inwood & Marble Hill — also saw about 46 arrests. <br><br> Further south, in the Central and East Harlem neighborhoods represented by Manhattan CD 10 and 11, a total of 79 arrests occurred over the same time period.',
            location: {
                center: [-73.94172, 40.81899],
                zoom: 12,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'traffic-arrests-acs-2019-race-9l600g',
                opacity: 1,
                duration: 1000
            }],
            onChapterExit: []
        },
        {
            id: 'arrests-queens',
            alignment: 'left',
            hidden: false,
            title: 'Neighborhoods of color in Queens also disproportionately impacted',
            image: '',
            description: 'Despite being located in the borough with the second least traffic arrests in the city, Queens CD 12 — representing the neighborhoods of Jamaica, Hollis & St. Albans — saw the fourth highest concentration of arrests. There, arrests between January and March totaled to 66.',
            location: {
                center: [-73.8435, 40.6828],
                zoom: 11.75,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'traffic-arrests-acs-2019-race-9l600g',
                opacity: 1,
                duration: 1000
            }],
            onChapterExit: []
        },
        {
            id: 'arrests-brooklyn',
            alignment: 'left',
            hidden: false,
            title: 'Brooklyn sees the most traffic arrests',
            image: '',
            description: 'Brooklyn, on the other hand, is home to three community districts that list among the top 10 districts with the most arrests. At 89 arrests, Bay Ridge and Dyker Heights — represented by CD 10 — recorded the second most arrests in the city. Bedford-Stuyvesant, CD 3, ranked sixth at 50 arrests while East Flatbush, Farragut & Rugby, CD 17, ranked tenth at 41 arrests.',
            location: {
                center: [-73.9852, 40.65815],
                zoom: 11.5,
                pitch: 30,
                bearing: 0
            },
            duration: 1000,
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'arrests-statenisland',
            alignment: 'left',
            hidden: false,
            title: 'District with the highest concentration of arrests found in Staten Island, the borough with the least arrests',
            image: '',
            description: "Port Richmond, Stapleton and Mariner's Harbor	— represented by Staten Island CD 1 — tops the chart for the most traffic violation arrests in all of New York City’s community districts. There, a total of 93 arrests were recorded.",
            location: {
                center: [-74.15979, 40.61762],
                zoom: 12,
                pitch: 30,
                bearing: 0
            },
            duration: 1000,
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'composite',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<b>Data Sources:</b> “​​NYPD Arrest Data (Year to Date),” Open Data NYC; 2019 American Community Survey; NYC Department of City Planning<br><br> <b>References:</b> “The Effects of the Summer All Out Foot Patrol Initiative in New York City: A Difference-in-Differences Approach” (2020), published in the Journal of Experimental Criminology by Thomas J. Bilach, Sean Patrick Roche and Gregory Wawrow<br><br> <i>Story by Haidee Chu</i>',
            location: {
                center: [-74.1077, 40.7009],
                zoom: 9.64,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};

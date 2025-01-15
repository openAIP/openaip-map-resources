const selectedPointPaint = {
    'circle-radius': ['interpolate', ['linear'], ['zoom'], 0, 0, 7, 1, 10, 20, 22, 25],
    'circle-stroke-color': '#0741a2',
    'circle-stroke-opacity': 0.7,
    'circle-stroke-width': 1,
    'circle-opacity': 0.5,
    'circle-color': '#2973f8',
};
const highlightedPointPaint = {
    'circle-radius': ['interpolate', ['linear'], ['zoom'], 0, 0, 7, 1, 10, 20, 22, 25],
    'circle-stroke-color': '#ad0067',
    'circle-stroke-opacity': 0.2,
    'circle-stroke-width': 1,
    'circle-opacity': 0.1,
    'circle-color': '#ff0099',
};

module.exports = {
    obstacle_clicktarget: {
        id: 'obstacle_clicktarget',
        type: 'circle',
        source: 'openaip-data',
        'source-layer': 'obstacles',
        minzoom: 11,
        maxzoom: 24,
        layout: {
            visibility: 'visible',
        },
        paint: {
            'circle-opacity': 0,
        },
    },
    obstacle: {
        id: 'obstacle',
        type: 'symbol',
        source: 'openaip-data',
        'source-layer': 'obstacles',
        minzoom: 11,
        layout: {
            'icon-image': {
                stops: [[11, 'obstacle_{type}']],
            },
            'icon-pitch-alignment': 'map',
            'icon-allow-overlap': true,
            visibility: 'visible',
            'text-field': {
                stops: [
                    [10, '{name_label}'],
                    [13, '{name_label_full}'],
                ],
            },
            'text-allow-overlap': false,
            'text-offset': {
                stops: [[11, [0, 2.5]]],
            },
            'text-size': 11,
            'text-font': ['DIN Offc Pro Regular', 'Arial Unicode MS Regular'],
            'icon-ignore-placement': false,
            'text-ignore-placement': false,
        },
        paint: {
            'text-halo-width': 2,
            'text-color': 'rgba(0, 0, 0, 1)',
            'text-halo-blur': 1,
            'text-halo-color': 'rgba(255, 255, 255, 1)',
        },
    },
    rc_airfield_clicktarget: {
        id: 'rc_airfield_clicktarget',
        type: 'circle',
        source: 'openaip-data',
        'source-layer': 'rc_airfields',
        minzoom: 10,
        maxzoom: 24,
        layout: {
            visibility: 'none',
        },
        paint: {
            'circle-opacity': 0,
        },
    },
    rc_airfield: {
        id: 'rc_airfield',
        type: 'symbol',
        source: 'openaip-data',
        'source-layer': 'rc_airfields',
        minzoom: 10,
        layout: {
            visibility: 'none',
            'icon-image': 'airfield-15',
            'icon-pitch-alignment': 'map',
            'icon-allow-overlap': true,
            'text-field': {
                stops: [
                    [10, '{name_label}'],
                    [13, '{name_label_full}'],
                ],
            },
            'text-allow-overlap': false,
            'text-offset': {
                stops: [[11, [0, 2.5]]],
            },
            'text-size': 11,
            'text-font': ['DIN Offc Pro Regular', 'Arial Unicode MS Regular'],
            'icon-ignore-placement': false,
            'text-ignore-placement': false,
        },
        paint: {
            'text-halo-width': 2,
            'text-color': 'rgba(0, 0, 0, 1)',
            'text-halo-blur': 1,
            'text-halo-color': 'rgba(255, 255, 255, 1)',
        },
    },
    rc_airfield_airspace: {
        id: 'rc_airfield_airspace',
        type: 'circle',
        source: 'openaip-data',
        'source-layer': 'rc_airfields',
        paint: {
            'circle-radius': {
                // "roughly" approximates a radius with 500m
                stops: [
                    [0, 0],
                    [20, 10000],
                ],
                base: 2,
            },
            'circle-stroke-color': '#0741a2',
            'circle-stroke-opacity': 0.7,
            'circle-stroke-width': 1,
            'circle-opacity': 0.5,
            'circle-color': '#2973f8',
        },
        minzoom: 4,
        maxzoom: 24,
        layout: {
            visibility: 'none',
        },
    },
    hang_gliding_clicktarget: {
        id: 'hang_gliding_clicktarget',
        type: 'circle',
        source: 'openaip-data',
        'source-layer': 'hang_glidings',
        minzoom: 0,
        maxzoom: 24,
        paint: {
            'circle-opacity': 0,
        },
        layout: {
            visibility: 'visible',
        },
    },
    hang_gliding: {
        id: 'hang_gliding',
        type: 'symbol',
        source: 'openaip-data',
        'source-layer': 'hang_glidings',
        minzoom: 8,
        layout: {
            visibility: 'visible',
            'icon-image': 'hang_gliding_{type}',
            'icon-size': {
                stops: [
                    [9, 0.5],
                    [12, 0.8],
                ],
            },
            'icon-rotation-alignment': 'map',
            'icon-pitch-alignment': 'map',
            'text-field': {
                stops: [
                    [10, '{name_label}'],
                    [13, '{name_label_full}'],
                ],
            },
            'text-offset': {
                stops: [
                    [10, [0, -3]],
                    [12, [0, -4]],
                ],
            },
            'text-size': {
                stops: [
                    [8, 9],
                    [10, 10],
                ],
            },
            'symbol-placement': 'point',
            'text-allow-overlap': false,
            'icon-allow-overlap': false,
            'text-optional': true,
            'text-ignore-placement': true,
        },
        paint: {
            'icon-opacity': {
                stops: [
                    [8, 0.1],
                    [9, 0.5],
                    [13, 1],
                ],
            },
            'text-halo-color': 'rgba(255, 255, 255, 1)',
            'text-halo-width': 1,
            'text-opacity': {
                stops: [
                    [8, 0],
                    [9, 0],
                    [10, 1],
                    [14, 1],
                ],
            },
        },
    },
    airport_clicktarget: {
        id: 'airport_clicktarget',
        type: 'circle',
        source: 'openaip-data',
        'source-layer': 'airports',
        minzoom: 2,
        maxzoom: 24,
        layout: {
            visibility: 'visible',
        },
        paint: {
            'circle-opacity': 0,
        },
    },
    airport_runway: {
        id: 'airport_runway',
        type: 'symbol',
        source: 'openaip-data',
        'source-layer': 'airports',
        minzoom: 10,
        maxzoom: 24,
        filter: [
            'all',
            ['match', ['get', 'runway_surface'], ['paved', 'unpaved'], true, false],
            // workaround for !in
            ['match', ['get', 'type'], ['ad_closed', 'af_water', 'heli_civil', 'heli_mil', 'intl_apt'], false, true],
            ['!', ['has', 'icao_code']],
        ],
        layout: {
            'icon-image': {
                stops: [
                    [9, 'runway_{runway_surface}-small'],
                    [12, 'runway_{runway_surface}-medium'],
                ],
            },
            'icon-allow-overlap': true,
            'icon-rotate': {
                type: 'identity',
                property: 'runway_rotation',
            },
            'icon-rotation-alignment': 'map',
            'icon-pitch-alignment': 'map',
            visibility: 'visible',
            'icon-padding': 0,
        },
        paint: {
            'icon-opacity': 1,
        },
    },
    airport_parachute: {
        id: 'airport_parachute',
        type: 'symbol',
        source: 'openaip-data',
        'source-layer': 'airports',
        minzoom: 8,
        maxzoom: 24,
        filter: ['all', ['==', ['get', 'skydive_activity'], true]],
        layout: {
            'icon-image': {
                stops: [
                    [8, 'parachute-small'],
                    [10, 'parachute-large'],
                ],
            },
            'icon-size': 1,
            'icon-allow-overlap': false,
            visibility: 'visible',
            'icon-offset': {
                stops: [
                    [8, [-20, 15]],
                    [10, [-30, 20]],
                    [17, [-40, 25]],
                ],
            },
            'icon-pitch-alignment': 'map',
        },
    },
    airport_gliding: {
        id: 'airport_gliding',
        type: 'symbol',
        source: 'openaip-data',
        'source-layer': 'airports',
        minzoom: 8,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['gliding'], true, false], ['==', ['get', 'winch_only'], false]],
        layout: {
            'icon-image': {
                stops: [
                    [10, '{type}-small'],
                    [12, '{type}-medium'],
                ],
            },
            'icon-pitch-alignment': 'map',
            'icon-size': 1,
            'text-allow-overlap': false,
            'text-ignore-placement': true,
            'icon-allow-overlap': true,
            'symbol-avoid-edges': false,
            'symbol-placement': 'point',
            visibility: 'visible',
            'text-field': {
                stops: [
                    [8, '{name_label}'],
                    [10, '{name_label_full}'],
                ],
            },
            'text-size': {
                stops: [
                    [8, 9],
                    [12, 12],
                ],
            },
            'text-offset': {
                stops: [
                    [9, [0, -3.5]],
                    [10, [0, -4]],
                ],
            },
            'text-optional': true,
        },
        paint: {
            'icon-color': 'rgba(191, 45, 45, 1)',
            'text-halo-color': 'rgba(255, 255, 255, 1)',
            'text-halo-width': 1,
            'text-halo-blur': 0,
            'icon-opacity': {
                stops: [
                    [8, 0],
                    [10, 1],
                ],
            },
            'text-opacity': {
                stops: [
                    [8, 0],
                    [10, 1],
                ],
            },
        },
    },
    airport_gliding_winch: {
        id: 'airport_gliding_winch',
        type: 'symbol',
        source: 'openaip-data',
        'source-layer': 'airports',
        minzoom: 8,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['gliding'], true, false], ['==', ['get', 'winch_only'], true]],
        layout: {
            'icon-image': {
                stops: [
                    [10, 'gliding_winch-small'],
                    [12, 'gliding_winch-medium'],
                ],
            },
            'icon-pitch-alignment': 'map',
            'icon-size': 1,
            'icon-allow-overlap': true,
            visibility: 'visible',
            'symbol-avoid-edges': false,
            'symbol-placement': 'point',
            'text-offset': {
                stops: [
                    [9, [0, -2.5]],
                    [10, [0, -4]],
                ],
            },
            'text-size': {
                stops: [
                    [8, 9],
                    [12, 12],
                ],
            },
            'text-field': {
                stops: [
                    [8, '{name_label}'],
                    [10, '{name_label_full}'],
                ],
            },
            'text-allow-overlap': false,
            'text-ignore-placement': true,
            'text-optional': true,
        },
        paint: {
            'icon-color': 'rgba(191, 45, 45, 1)',
            'text-halo-color': 'rgba(255, 255, 255, 1)',
            'text-halo-width': 1,
            'text-halo-blur': 0,
            'icon-opacity': {
                stops: [
                    [8, 0],
                    [10, 1],
                ],
            },
            'text-opacity': {
                stops: [
                    [8, 0],
                    [10, 1],
                ],
            },
        },
    },
    airport_other: {
        id: 'airport_other',
        type: 'symbol',
        source: 'openaip-data',
        'source-layer': 'airports',
        minzoom: 8,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['intl_apt', 'gliding'], false, true], ['!', ['has', 'icao_code']]],
        layout: {
            'icon-image': {
                stops: [
                    [10, '{type}-small'],
                    [17, '{type}-medium'],
                ],
            },
            'icon-pitch-alignment': 'map',
            'icon-size': 1,
            'text-allow-overlap': false,
            'text-ignore-placement': false,
            'icon-allow-overlap': true,
            'symbol-avoid-edges': false,
            'symbol-placement': 'point',
            visibility: 'visible',
            'text-field': {
                stops: [
                    [8, '{name_label}'],
                    [10, '{name_label_full}'],
                ],
            },
            'text-size': {
                stops: [
                    [8, 9],
                    [12, 12],
                ],
            },
            'text-offset': {
                stops: [
                    [9, [0, -3.5]],
                    [10, [0, -4]],
                ],
            },
            'icon-ignore-placement': false,
            'text-optional': true,
        },
        paint: {
            'icon-color': 'rgba(191, 45, 45, 1)',
            'text-halo-color': 'rgba(255, 255, 255, 1)',
            'text-halo-width': 1,
            'text-halo-blur': 0,
            'icon-opacity': {
                stops: [
                    [8, 0],
                    [10, 1],
                ],
            },
            'text-opacity': {
                stops: [
                    [8, 0],
                    [10, 1],
                ],
            },
        },
    },
    airport_with_code_runway: {
        id: 'airport_with_code_runway',
        type: 'symbol',
        source: 'openaip-data',
        'source-layer': 'airports',
        minzoom: 9,
        maxzoom: 24,
        filter: [
            'all',
            ['match', ['get', 'runway_surface'], ['paved', 'unpaved'], true, false],
            ['match', ['get', 'type'], ['ad_closed', 'af_water', 'heli_civil', 'heli_mil', 'intl_apt'], false, true],
            ['has', 'icao_code'],
        ],
        layout: {
            'icon-image': {
                stops: [
                    [9, 'runway_{runway_surface}-medium'],
                    [17, 'runway_{runway_surface}-large'],
                ],
            },
            'icon-allow-overlap': true,
            'icon-rotate': {
                type: 'identity',
                property: 'runway_rotation',
            },
            'icon-rotation-alignment': 'map',
            'icon-pitch-alignment': 'map',
            visibility: 'visible',
            'icon-padding': 0,
            'icon-size': {
                stops: [
                    [9, 0.8],
                    [10, 0.9],
                    [15, 1],
                ],
            },
            'icon-ignore-placement': false,
            'icon-optional': false,
        },
    },
    airport_with_code: {
        id: 'airport_with_code',
        type: 'symbol',
        source: 'openaip-data',
        'source-layer': 'airports',
        minzoom: 7,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['intl_apt'], false, true], ['has', 'icao_code']],
        layout: {
            'icon-image': {
                stops: [
                    [7, 'apt-dot'],
                    [8, '{type}-small'],
                    [9, '{type}-medium'],
                    [17, '{type}-large'],
                ],
            },
            'icon-size': {
                stops: [
                    [7, 0.3],
                    [10, 1],
                ],
            },
            'icon-pitch-alignment': 'map',
            'text-allow-overlap': true,
            'text-ignore-placement': false,
            'icon-allow-overlap': true,
            'text-field': {
                stops: [
                    [7, '{icao_code}'],
                    [9, '{name_label_full}'],
                ],
            },
            'text-justify': 'left',
            'text-anchor': 'center',
            'text-offset': {
                stops: [
                    [7, [0, -1.5]],
                    [8, [0, -2]],
                    [9, [0, -4]],
                    [10, [0, -4]],
                ],
            },
            'text-size': {
                stops: [
                    [7, 9],
                    [8, 10],
                    [10, 12],
                ],
            },
            visibility: 'visible',
            'text-font': {
                stops: [
                    [7, ['Roboto Mono Light', 'Arial Unicode MS Regular']],
                    [9, ['Roboto Mono Regular', 'Arial Unicode MS Regular']],
                ],
            },
            'text-transform': 'none',
            'text-padding': 2,
            'icon-ignore-placement': false,
        },
        paint: {
            'icon-color': 'rgba(191, 45, 45, 1)',
            'text-halo-color': 'rgba(255, 255, 255, 1)',
            'text-halo-width': 2,
            'text-halo-blur': 1,
            'icon-opacity': 1,
            'text-opacity': {
                stops: [
                    [7, 0],
                    [8, 1],
                ],
            },
        },
    },
    airport_runway_intl: {
        id: 'airport_runway_intl',
        type: 'symbol',
        source: 'openaip-data',
        'source-layer': 'airports',
        minzoom: 8,
        maxzoom: 24,
        filter: [
            'all',
            ['match', ['get', 'runway_surface'], ['paved', 'unpaved'], true, false],
            ['match', ['get', 'type'], ['intl_apt'], true, false],
        ],
        layout: {
            'icon-image': {
                stops: [
                    [7, 'runway_{runway_surface}-small'],
                    [8, 'runway_{runway_surface}-medium'],
                    [17, 'runway_{runway_surface}-large'],
                ],
            },
            'icon-allow-overlap': true,
            'icon-rotate': {
                type: 'identity',
                property: 'runway_rotation',
            },
            'icon-pitch-alignment': 'map',
            visibility: 'visible',
            'icon-padding': 0,
            'icon-size': 1,
            'text-allow-overlap': false,
        },
    },
    airport_intl: {
        id: 'airport_intl',
        type: 'symbol',
        source: 'openaip-data',
        'source-layer': 'airports',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['intl_apt'], true, false]],
        layout: {
            'icon-image': {
                stops: [
                    [5, 'apt-dot'],
                    [6, 'apt-tiny'],
                    [8, 'apt-medium'],
                ],
            },
            'icon-size': {
                stops: [
                    [3, 0.1],
                    [5, 0.4],
                    [8, 1],
                ],
            },
            'icon-pitch-alignment': 'map',
            'text-allow-overlap': true,
            'text-ignore-placement': false,
            'icon-allow-overlap': true,
            'text-field': {
                stops: [
                    [6, '{icao_code}'],
                    [8, '{name_label_full}'],
                ],
            },
            'text-justify': 'left',
            'text-anchor': 'center',
            'text-offset': {
                stops: [
                    [7, [0, -2]],
                    [8, [0, -4]],
                    [10, [0, -5]],
                ],
            },
            'text-size': {
                stops: [
                    [3, 0],
                    [4, 5],
                    [6, 12],
                ],
            },
            visibility: 'visible',
            'text-font': ['Roboto Mono Regular', 'Arial Unicode MS Bold'],
            'text-transform': 'none',
            'icon-ignore-placement': false,
            'icon-optional': false,
        },
        paint: {
            'icon-color': 'rgba(191, 45, 45, 1)',
            'text-halo-color': 'rgba(255, 255, 255, 1)',
            'text-halo-width': 2,
            'text-halo-blur': 1,
            'icon-opacity': 1,
            'text-opacity': {
                stops: [
                    [3, 0],
                    [4, 0.5],
                    [6, 1],
                ],
            },
        },
    },
    navaid_clicktarget: {
        id: 'navaid_clicktarget',
        type: 'circle',
        source: 'openaip-data',
        'source-layer': 'navaids',
        minzoom: 6,
        maxzoom: 24,
        layout: {
            visibility: 'visible',
        },
        paint: {
            'circle-opacity': 0,
        },
    },
    navaid_other: {
        id: 'navaid_other',
        type: 'symbol',
        source: 'openaip-data',
        'source-layer': 'navaids',
        minzoom: 6,
        filter: ['all', ['match', ['get', 'type'], ['ndb'], false, true]],
        layout: {
            'icon-image': {
                stops: [
                    [6, 'navaid_{type}-small'],
                    [8, 'navaid_{type}-medium'],
                ],
            },
            'icon-pitch-alignment': 'map',
            'icon-allow-overlap': true,
            visibility: 'visible',
            'text-field': {
                stops: [
                    [6, '{identifier}'],
                    [9, '{name_label_full}'],
                ],
            },
            'text-allow-overlap': true,
            'text-offset': {
                stops: [
                    [6, [0, 1.2]],
                    [8, [0, 1.8]],
                    [10, [0, 2.5]],
                ],
            },
            'text-size': 12,
            'text-font': ['DIN Offc Pro Regular', 'Arial Unicode MS Regular'],
            'icon-ignore-placement': false,
            'text-ignore-placement': true,
        },
        paint: {
            'text-halo-width': 2,
            'text-color': 'rgba(0, 0, 0, 1)',
            'text-halo-blur': 1,
            'text-halo-color': 'rgba(255, 255, 255, 1)',
        },
    },
    navaid_ndb: {
        id: 'navaid_ndb',
        type: 'symbol',
        source: 'openaip-data',
        'source-layer': 'navaids',
        minzoom: 6,
        filter: ['all', ['match', ['get', 'type'], ['ndb'], true, false]],
        layout: {
            'icon-image': {
                stops: [
                    [6, 'navaid_{type}-small'],
                    [10, 'navaid_{type}-medium'],
                ],
            },
            'icon-pitch-alignment': 'map',
            'text-field': {
                stops: [
                    [6, '{identifier}'],
                    [9, '{name_label_full}'],
                ],
            },
            'symbol-placement': 'point',
            'text-size': 12,
            'text-font': ['DIN Offc Pro Regular', 'Arial Unicode MS Regular'],
            'text-justify': 'left',
            visibility: 'visible',
            'text-allow-overlap': true,
            'text-ignore-placement': true,
            'icon-allow-overlap': true,
            'icon-ignore-placement': false,
            'icon-optional': false,
        },
        paint: {
            'icon-opacity': {
                stops: [
                    [6, 0.5],
                    [10, 1],
                ],
            },
            'text-halo-color': 'rgba(255, 255, 255, 1)',
            'text-halo-width': 1,
            'text-translate-anchor': 'map',
            'text-translate': {
                stops: [
                    [6, [0, -20]],
                    [9, [0, -25]],
                    [10, [0, -35]],
                ],
            },
            'icon-halo-color': 'rgba(255, 255, 255, 1)',
            'icon-halo-width': 2,
            'icon-halo-blur': 1,
        },
    },
    navaid_beam_rose: {
        id: 'navaid_beam_rose',
        type: 'symbol',
        source: 'openaip-data',
        'source-layer': 'navaids',
        minzoom: 6,
        filter: ['all', ['match', ['get', 'type'], ['dme', 'tacan', 'ndb'], false, true]],
        layout: {
            'icon-image': 'navaid_rose-medium',
            'icon-allow-overlap': true,
            'icon-rotate': {
                type: 'identity',
                property: 'icon_rotation',
            },
            'icon-rotation-alignment': 'map',
            'icon-pitch-alignment': 'map',
            visibility: 'visible',
            'text-allow-overlap': true,
            'text-ignore-placement': true,
            'icon-ignore-placement': true,
            'icon-optional': false,
        },
        paint: {
            'icon-opacity': {
                stops: [
                    [6, 0],
                    [10, 1],
                ],
            },
        },
    },
    hotspot_clicktarget: {
        id: 'hotspot_clicktarget',
        type: 'circle',
        source: 'openaip-data',
        'source-layer': 'hotspots',
        minzoom: 0,
        maxzoom: 24,
        paint: {
            'circle-opacity': 0,
        },
        layout: {
            visibility: 'none',
        },
    },
    hotspot_cloud: {
        id: 'hotspot_cloud',
        type: 'symbol',
        source: 'openaip-data',
        'source-layer': 'hotspots',
        minzoom: 8,
        layout: {
            visibility: 'none',
            'icon-image': {
                stops: [
                    [8, 'hotspot_{reliability}-small'],
                    [11, 'hotspot_{reliability}-medium'],
                    [13, 'hotspot_{reliability}-large'],
                ],
            },
            'icon-rotation-alignment': 'auto',
            'icon-pitch-alignment': 'auto',
            'text-field': {
                stops: [
                    [10, '{name_label}'],
                    [13, '{name_label_full}'],
                ],
            },
            'text-offset': {
                stops: [
                    [10, [0, -2.2]],
                    [12, [0, -3]],
                    [13, [0, -6]],
                ],
            },
            'text-size': {
                stops: [
                    [9, 11],
                    [10, 12],
                ],
            },
            'symbol-placement': 'point',
            'text-allow-overlap': true,
            'icon-allow-overlap': true,
            'text-optional': true,
            'text-ignore-placement': true,
        },
        paint: {
            'icon-opacity': {
                stops: [
                    [8, 0.1],
                    [9, 0.5],
                    [13, 1],
                ],
            },
            'text-halo-color': 'rgba(255, 255, 255, 1)',
            'text-halo-width': 1,
            'text-opacity': {
                stops: [
                    [8, 0],
                    [9, 0],
                    [10, 1],
                    [14, 1],
                ],
            },
        },
    },
    hotspot_industrial: {
        id: 'hotspot_industrial',
        type: 'symbol',
        source: 'openaip-data',
        'source-layer': 'hotspots',
        minzoom: 13,
        filter: ['all', ['match', ['get', 'type'], ['artificial'], true, false]],
        layout: {
            visibility: 'none',
            'icon-allow-overlap': true,
            'icon-image': 'hotspot_industrial',
            'icon-offset': [0, 55],
            'icon-rotation-alignment': 'auto',
            'icon-pitch-alignment': 'auto',
        },
    },
    airspace_clicktarget: {
        id: 'airspace_clicktarget',
        type: 'fill',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 5,
        maxzoom: 24,
        layout: {
            visibility: 'visible',
        },
        paint: {
            'fill-opacity': 0,
            'fill-color': 'rgba(0, 0, 0, 0)',
        },
    },
    airspace_tfr_border: {
        id: 'airspace_tfr_border',
        type: 'line',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['tfr'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'line-color': {
                stops: [[0, 'rgba(154,14,14,0.5)']],
            },
            'line-width': {
                stops: [
                    [3, 0.2],
                    [10, 1],
                ],
            },
            'line-opacity': {
                stops: [
                    [3, 0],
                    [7, 0.1],
                ],
            },
        },
    },
    airspace_tsa_border: {
        id: 'airspace_tsa_border',
        type: 'line',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['tsa'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'line-color': {
                stops: [[0, 'rgba(154, 14, 14, 1)']],
            },
            'line-width': {
                stops: [
                    [3, 0.1],
                    [10, 2],
                ],
            },
            'line-opacity': {
                stops: [
                    [3, 0],
                    [7, 0.3],
                ],
            },
        },
    },
    airspace_tra_border: {
        id: 'airspace_tra_border',
        type: 'line',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['tra'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'line-color': {
                stops: [[0, 'rgba(154, 14, 14, 1)']],
            },
            'line-width': {
                stops: [
                    [3, 0.1],
                    [10, 2],
                ],
            },
            'line-opacity': {
                stops: [
                    [3, 0],
                    [7, 0.3],
                ],
            },
            'line-dasharray': {
                stops: [
                    [0, [3, 1]],
                    [3, [5, 2]],
                    [12, [12, 4]],
                ],
            },
        },
    },
    airspace_tra_tsa_offset: {
        id: 'airspace_tra_tsa_tfa_offset',
        type: 'fill',
        source: 'openaip-data',
        'source-layer': 'airspaces_border_offset',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['tra', 'tsa', 'tfa'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'fill-color': 'rgba(154, 14, 14, 1)',
            'fill-opacity': {
                stops: [
                    [3, 0],
                    [7, 0.3],
                ],
            },
            'fill-outline-color': 'rgba(154, 14, 14, 0)',
            'fill-pattern': {
                stops: [
                    [0, 'diagonal_lines_red-2'],
                    [8, 'diagonal_lines_red-3'],
                    [10, 'diagonal_lines_red-6'],
                ],
            },
        },
    },
    airspace_rdp_border: {
        id: 'airspace_rdp_border',
        type: 'line',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['restricted', 'danger', 'prohibited'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'line-color': {
                stops: [[0, 'rgba(154, 14, 14, 1)']],
            },
            'line-width': {
                stops: [
                    [3, 0.1],
                    [10, 2],
                ],
            },
            'line-opacity': {
                stops: [
                    [3, 0],
                    [7, 1],
                ],
            },
        },
    },
    airspace_rdp_offset: {
        id: 'airspace_rdp_offset',
        type: 'fill',
        source: 'openaip-data',
        'source-layer': 'airspaces_border_offset',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['restricted', 'danger', 'prohibited'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'fill-color': 'rgba(154, 14, 14, 1)',
            'fill-opacity': {
                stops: [
                    [3, 0],
                    [7, 1],
                ],
            },
            'fill-outline-color': 'rgba(154, 14, 14, 0)',
            'fill-pattern': {
                stops: [
                    [0, 'diagonal_lines_red-2'],
                    [8, 'diagonal_lines_red-3'],
                    [10, 'diagonal_lines_red-6'],
                ],
            },
        },
    },
    airspace_cd_border: {
        id: 'airspace_cd_border',
        type: 'line',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: [
            'all',
            ['match', ['get', 'type'], ['other'], true, false],
            ['match', ['get', 'icao_class'], ['c', 'd'], true, false],
        ],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'line-color': {
                stops: [[0, 'rgba(51, 158, 47, 1)']],
            },
            'line-width': {
                stops: [
                    [3, 0.1],
                    [10, 2],
                ],
            },
            'line-opacity': {
                stops: [
                    [3, 0],
                    [7, 1],
                ],
            },
        },
    },
    airspace_cd_offset: {
        id: 'airspace_cd_offset',
        type: 'fill',
        source: 'openaip-data',
        'source-layer': 'airspaces_border_offset_2x',
        minzoom: 3,
        maxzoom: 24,
        filter: [
            'all',
            ['match', ['get', 'type'], ['other'], true, false],
            ['match', ['get', 'icao_class'], ['c', 'd'], true, false],
        ],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'fill-opacity': {
                stops: [
                    [3, 0],
                    [7, 1],
                ],
            },
            'fill-outline-color': 'rgba(154, 14, 14, 0)',
            'fill-pattern': {
                stops: [
                    [0, 'diagonal_lines_green-2'],
                    [8, 'diagonal_lines_green-3'],
                    [10, 'diagonal_lines_green-6'],
                ],
            },
        },
    },
    airspace_ab_border: {
        id: 'airspace_ab_border',
        type: 'line',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: [
            'all',
            ['match', ['get', 'type'], ['other'], true, false],
            ['match', ['get', 'icao_class'], ['a', 'b'], true, false],
        ],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'line-color': {
                stops: [[0, 'rgba(51, 158, 47, 1)']],
            },
            'line-width': {
                stops: [
                    [3, 0.1],
                    [10, 2],
                ],
            },
            'line-dasharray': [5],
            'line-opacity': {
                stops: [
                    [3, 0],
                    [7, 0.5],
                ],
            },
        },
    },
    airspace_ab_offset: {
        id: 'airspace_ab_offset',
        type: 'fill',
        source: 'openaip-data',
        'source-layer': 'airspaces_border_offset_2x',
        minzoom: 3,
        maxzoom: 24,
        filter: [
            'all',
            ['match', ['get', 'type'], ['other'], true, false],
            ['match', ['get', 'icao_class'], ['a', 'b'], true, false],
        ],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'fill-color': 'rgba(51, 158, 47, 0.5)',
            'fill-opacity': {
                stops: [
                    [3, 0],
                    [7, 0.2],
                ],
            },
            'fill-outline-color': 'rgba(118, 145, 195, 0)',
        },
    },
    airspace_e_border: {
        id: 'airspace_e_border',
        type: 'line',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: [
            'all',
            ['match', ['get', 'type'], ['other'], true, false],
            ['match', ['get', 'icao_class'], ['e'], true, false],
        ],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'line-color': {
                stops: [[0, 'rgba(21, 77, 154, 1)']],
            },
            'line-width': {
                stops: [
                    [3, 0.1],
                    [10, 2],
                ],
            },
            'line-opacity': {
                stops: [
                    [3, 0],
                    [7, 1],
                ],
            },
        },
    },
    airspace_f_border: {
        id: 'airspace_f_border',
        type: 'line',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: [
            'all',
            ['match', ['get', 'type'], ['other'], true, false],
            ['match', ['get', 'icao_class'], ['f'], true, false],
        ],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'line-color': {
                stops: [[0, 'rgba(21, 77, 154, 1)']],
            },
            'line-width': {
                stops: [
                    [3, 0.2],
                    [10, 4],
                ],
            },
            'line-opacity': {
                stops: [
                    [3, 0],
                    [7, 1],
                ],
            },
        },
    },
    airspace_f_offset: {
        id: 'airspace_f_offset',
        type: 'fill',
        source: 'openaip-data',
        'source-layer': 'airspaces_border_offset_2x',
        minzoom: 3,
        maxzoom: 24,
        filter: [
            'all',
            ['match', ['get', 'type'], ['other'], true, false],
            ['match', ['get', 'icao_class'], ['f'], true, false],
        ],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'fill-color': 'rgba(118, 145, 195, 1)',
            'fill-opacity': {
                stops: [
                    [3, 0],
                    [7, 0.5],
                ],
            },
            'fill-outline-color': 'rgba(118, 145, 195, 0)',
        },
    },
    airspace_g_border: {
        id: 'airspace_g_border',
        type: 'line',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: [
            'all',
            ['match', ['get', 'type'], ['other'], true, false],
            ['match', ['get', 'icao_class'], ['g'], true, false],
        ],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'line-color': {
                stops: [[0, 'rgba(21, 77, 154, 0.5)']],
            },
            'line-width': {
                stops: [
                    [3, 0.1],
                    [10, 2],
                ],
            },
            'line-dasharray': [5],
            'line-opacity': {
                stops: [
                    [3, 0],
                    [7, 1],
                ],
            },
        },
    },
    airspace_g_offset: {
        id: 'airspace_g_offset',
        type: 'fill',
        source: 'openaip-data',
        'source-layer': 'airspaces_border_offset_2x',
        minzoom: 3,
        maxzoom: 24,
        filter: [
            'all',
            ['match', ['get', 'type'], ['other'], true, false],
            ['match', ['get', 'icao_class'], ['g'], true, false],
        ],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'fill-color': 'rgba(118, 145, 195, 0.2)',
            'fill-opacity': {
                stops: [
                    [3, 0],
                    [7, 0.5],
                ],
            },
            'fill-outline-color': 'rgba(118, 145, 195, 0)',
        },
    },
    airspace_ctr_fill: {
        id: 'airspace_ctr_fill',
        type: 'fill',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['ctr'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'fill-color': 'rgba(218, 111, 134, 1)',
            'fill-opacity': {
                stops: [
                    [3, 0],
                    [7, 0.2],
                ],
            },
        },
    },
    airspace_ctr_border: {
        id: 'airspace_ctr_border',
        type: 'line',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['ctr'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'line-color': {
                stops: [[0, 'rgba(21, 77, 154, 1)']],
            },
            'line-width': {
                stops: [
                    [8, 1],
                    [12, 3],
                ],
            },
            'line-dasharray': {
                stops: [
                    [0, [3, 1]],
                    [3, [5, 2]],
                    [12, [12, 4]],
                ],
            },
            'line-opacity': {
                stops: [
                    [3, 0],
                    [7, 1],
                ],
            },
        },
    },
    airspace_tmz_border: {
        id: 'airspace_tmz_border',
        type: 'line',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['tmz'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'line-color': {
                stops: [[0, 'rgba(21, 77, 154, 1)']],
            },
            'line-width': {
                stops: [
                    [3, 0.1],
                    [8, 2],
                    [10, 4],
                    [14, 10],
                ],
            },
            'line-dasharray': {
                stops: [
                    [3, [5, 5]],
                    [10, [10, 10]],
                ],
            },
            'line-opacity': {
                stops: [
                    [3, 0],
                    [7, 1],
                ],
            },
        },
    },
    airspace_tmz_border_dot: {
        id: 'airspace_tmz_border_dot',
        type: 'line',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['tmz'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'line-color': {
                stops: [[0, 'rgba(21, 77, 154, 1)']],
            },
            'line-width': {
                stops: [
                    [3, 0.1],
                    [8, 2],
                    [10, 4],
                    [14, 10],
                ],
            },
            'line-dasharray': {
                stops: [
                    [3, [1.25, 2.5]],
                    [10, [2, 5]],
                ],
            },
            'line-opacity': {
                stops: [
                    [3, 0],
                    [7, 1],
                ],
            },
        },
    },
    airspace_rmz_tiz_tia_border: {
        id: 'airspace_rmz_tiz_tia_border',
        type: 'line',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['rmz', 'tiz', 'tia'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'line-color': {
                stops: [[0, 'rgba(21, 77, 154, 1)']],
            },
            'line-width': {
                stops: [
                    [3, 0.1],
                    [14, 2],
                ],
            },
            'line-dasharray': [1, 1],
            'line-opacity': {
                stops: [
                    [3, 0],
                    [7, 0.5],
                ],
            },
        },
    },
    airspace_rmz_tiz_tia_fill: {
        id: 'airspace_rmz_tiz_tia_fill',
        type: 'fill',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['rmz', 'tiz', 'tia'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'fill-opacity': {
                stops: [
                    [3, 0],
                    [7, 0.1],
                ],
            },
            'fill-color': 'rgba(101, 134, 175, 1)',
        },
    },
    airspace_trp_border: {
        id: 'airspace_trp_border',
        type: 'line',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['trp'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'line-color': {
                stops: [[0, 'rgba(21, 77, 154, 1)']],
            },
            'line-width': {
                stops: [
                    [3, 0.1],
                    [8, 2],
                    [10, 4],
                    [14, 10],
                ],
            },
            'line-dasharray': {
                stops: [
                    [3, [1, 1]],
                    [10, [2, 2]],
                ],
            },
            'line-opacity': {
                stops: [
                    [3, 0],
                    [7, 1],
                ],
            },
        },
    },
    airspace_tma_cta_border: {
        id: 'airspace_tma_cta_border',
        type: 'line',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['tma', 'cta'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'line-color': {
                stops: [[0, 'rgba(21, 77, 154, 1)']],
            },
            'line-width': {
                stops: [
                    [3, 0.1],
                    [10, 2],
                ],
            },
            'line-opacity': {
                stops: [
                    [3, 0],
                    [7, 1],
                ],
            },
        },
    },
    airspace_tma_cta_offset: {
        id: 'airspace_tma_cta_offset',
        type: 'fill',
        source: 'openaip-data',
        'source-layer': 'airspaces_border_offset',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['tma', 'cta'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'fill-color': 'rgba(218, 111, 134, 1)',
            'fill-opacity': {
                stops: [
                    [3, 0],
                    [7, 0.2],
                ],
            },
            'fill-outline-color': 'rgba(218, 111, 134, 0)',
        },
    },
    airspace_fir_fis_acc_border: {
        id: 'airspace_fir_fis_acc_border',
        type: 'line',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['fir', 'acc_sector', 'fis_sector'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'line-color': {
                stops: [[0, 'rgba(110, 201, 32, 0.4)']],
            },
            'line-width': {
                stops: [
                    [8, 2],
                    [10, 4],
                    [11, 6],
                ],
            },
            'line-opacity': 0.8,
            'line-dasharray': {
                stops: [
                    [8, [5, 2.5]],
                    [12, [10, 5]],
                ],
            },
        },
    },
    airspace_uir_border: {
        id: 'airspace_uir_border',
        type: 'line',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['uir'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'line-color': {
                stops: [[0, 'rgba(91, 156, 38, 0.4)']],
            },
            'line-width': {
                stops: [
                    [8, 2],
                    [10, 4],
                    [11, 6],
                ],
            },
            'line-opacity': 0.8,
            'line-dasharray': {
                stops: [
                    [8, [5, 2.5]],
                    [12, [10, 5]],
                ],
            },
        },
    },
    airspace_ways_border: {
        id: 'airspace_ways_border',
        type: 'line',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['awy'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'line-color': {
                stops: [[0, 'rgba(87, 87, 87, 1)']],
            },
            'line-width': {
                stops: [
                    [3, 0.1],
                    [10, 0.5],
                ],
            },
            'line-opacity': {
                stops: [
                    [3, 0],
                    [7, 0.2],
                ],
            },
        },
    },
    airspace_ways_offset: {
        id: 'airspace_ways_offset',
        type: 'fill',
        source: 'openaip-data',
        'source-layer': 'airspaces_border_offset',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['awy'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'fill-color': 'rgba(87, 87, 87, 1)',
            'fill-opacity': {
                stops: [
                    [3, 0],
                    [7, 0.2],
                ],
            },
            'fill-outline-color': 'rgba(87, 87, 87, 0)',
            'fill-pattern': {
                stops: [
                    [0, 'diagonal_lines_gray-2'],
                    [8, 'diagonal_lines_gray-3'],
                    [10, 'diagonal_lines_gray-6'],
                ],
            },
        },
    },
    airspace_ways_fill: {
        id: 'airspace_ways_fill',
        type: 'fill',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['awy'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'fill-color': 'rgba(206, 206, 206, 1)',
            'fill-opacity': {
                stops: [
                    [3, 0],
                    [7, 0.1],
                ],
            },
        },
    },
    airspace_moa_border: {
        id: 'airspace_moa_border',
        type: 'line',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['mtr', 'mta', 'mrt'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'line-color': {
                stops: [[0, 'rgba(255,146,0, 1)']],
            },
            'line-width': {
                stops: [
                    [3, 0.3],
                    [10, 2],
                ],
            },
            'line-opacity': {
                stops: [
                    [3, 0],
                    [7, 0.6],
                ],
            },
            'line-dasharray': {
                stops: [
                    [3, [2, 2]],
                    [10, [2, 2]],
                ],
            },
        },
    },
    airspace_moa_fill: {
        id: 'airspace_moa_fill',
        type: 'fill',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['mtr', 'mta', 'mrt'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'fill-color': 'rgb(255,146,0)',
            'fill-opacity': {
                stops: [
                    [3, 0],
                    [7, 0.05],
                ],
            },
            'fill-outline-color': 'rgb(255,146,0)',
        },
    },
    airspace_traffic_border: {
        id: 'airspace_traffic_border',
        type: 'line',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['matz', 'atz', 'htz'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'line-color': {
                stops: [[0, 'rgba(21, 77, 154, 1)']],
            },
            'line-width': {
                stops: [
                    [3, 0.1],
                    [10, 0.5],
                ],
            },
            'line-opacity': {
                stops: [
                    [3, 0],
                    [7, 0.3],
                ],
            },
        },
    },
    airspace_traffic_offset: {
        id: 'airspace_traffic_offset',
        type: 'fill',
        source: 'openaip-data',
        'source-layer': 'airspaces_border_offset',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['matz', 'atz', 'htz'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'fill-color': 'rgba(21, 77, 154, 1)',
            'fill-opacity': {
                stops: [
                    [3, 0],
                    [7, 0.3],
                ],
            },
            'fill-outline-color': 'rgba(21, 77, 154, 0)',
            'fill-pattern': {
                stops: [
                    [0, 'diagonal_lines_blue-2'],
                    [8, 'diagonal_lines_blue-3'],
                    [10, 'diagonal_lines_blue-6'],
                ],
            },
        },
    },
    airspace_alwapro_border: {
        id: 'airspace_alwapro_border',
        type: 'line',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['alert', 'warning', 'protected'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'line-color': {
                stops: [[0, 'rgb(147,53,201)']],
            },
            'line-width': {
                stops: [
                    [3, 0.1],
                    [10, 2],
                ],
            },
            'line-opacity': {
                stops: [
                    [3, 0],
                    [7, 0.4],
                ],
            },
            'line-dasharray': {
                stops: [
                    [0, [3, 1]],
                    [3, [5, 2]],
                    [12, [12, 4]],
                ],
            },
        },
    },
    airspace_alwapro_fill: {
        id: 'airspace_alwapro_fill',
        type: 'fill',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['alert', 'warning', 'protected'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'fill-color': 'rgb(147,53,201)',
            'fill-opacity': {
                stops: [
                    [3, 0],
                    [7, 0.1],
                ],
            },
            'fill-outline-color': 'rgb(21, 77, 154)',
        },
    },
    airspace_adiz_border: {
        id: 'airspace_adiz_border',
        type: 'line',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['adiz'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'line-color': {
                stops: [[0, 'rgba(86, 0, 150, 1)']],
            },
            'line-width': {
                stops: [
                    [3, 2],
                    [10, 4],
                ],
            },
            'line-opacity': {
                stops: [
                    [3, 0],
                    [7, 1],
                ],
            },
        },
    },
    airspace_adiz_offset: {
        id: 'airspace_adiz_offset',
        type: 'fill',
        source: 'openaip-data',
        'source-layer': 'airspaces_border_offset_2x',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['adiz'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'fill-color': 'rgba(122, 0, 150, 1)',
            'fill-opacity': {
                stops: [
                    [3, 0],
                    [7, 0.2],
                ],
            },
            'fill-outline-color': 'rgba(142, 0, 181, 0)',
        },
    },
    airspace_gliding_sector_border: {
        id: 'airspace_gliding_sector_border',
        type: 'line',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['gliding_sector', 'vfr_sector', 'lta', 'uta'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'line-color': {
                stops: [[0, 'rgba(255, 215, 0, 1)']],
            },
            'line-width': 1,
            'line-opacity': {
                stops: [
                    [3, 0],
                    [7, 1],
                ],
            },
        },
    },
    airspace_gliding_sector: {
        id: 'airspace_gliding_sector',
        type: 'fill',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['gliding_sector', 'vfr_sector'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'fill-color': 'rgba(255, 215, 0, 0.8)',
            'fill-opacity': {
                stops: [
                    [3, 0],
                    [7, 0.1],
                ],
            },
            'fill-outline-color': 'rgba(255, 215, 0, 0)',
        },
    },
    airspace_aerial_sporting_recreational_border: {
        id: 'airspace_aerial_sporting_recreational_border',
        type: 'line',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['aerial_sporting_recreational'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'line-color': {
                stops: [[0, 'rgb(0,139,175)']],
            },
            'line-width': {
                stops: [
                    [3, 0.1],
                    [10, 2],
                ],
            },
            'line-opacity': {
                stops: [
                    [3, 0],
                    [7, 1],
                ],
            },
        },
    },
    airspace_aerial_sporting_recreational_offset: {
        id: 'airspace_aerial_sporting_recreational_offset',
        type: 'fill',
        source: 'openaip-data',
        'source-layer': 'airspaces_border_offset',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['aerial_sporting_recreational'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'fill-color': 'rgb(0,139,175)',
            'fill-opacity': {
                stops: [
                    [3, 0],
                    [7, 1],
                ],
            },
            'fill-outline-color': 'rgba(154, 14, 14, 0)',
            'fill-pattern': {
                stops: [
                    [0, 'diagonal_lines_blue-2'],
                    [8, 'diagonal_lines_blue-3'],
                    [10, 'diagonal_lines_blue-6'],
                ],
            },
        },
    },
    airspace_overflight_restriction_border: {
        id: 'airspace_overflight_restriction_border',
        type: 'line',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['overflight_restriction'], true, false]],
        layout: {
            visibility: 'visible',
        },
        paint: {
            'line-color': {
                stops: [[0, 'rgb(119,21,154)']],
            },
            'line-width': {
                stops: [
                    [3, 0.05],
                    [10, 3],
                ],
            },
            'line-opacity': {
                stops: [
                    [3, 0],
                    [7, 1],
                ],
            },
        },
    },
    airspace_overflight_restriction_symbol: {
        id: 'airspace_overflight_restriction_symbol',
        type: 'symbol',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 3,
        maxzoom: 24,
        filter: ['all', ['match', ['get', 'type'], ['overflight_restriction'], true, false]],
        layout: {
            visibility: 'visible',
            'icon-image': 'vertical_line_purple',
            'icon-allow-overlap': true,
            'icon-anchor': 'top',
            'icon-size': {
                stops: [
                    [7, 0.05],
                    [18, 0.4],
                ],
            },
            'symbol-spacing': 30,
            'symbol-avoid-edges': true,
            'symbol-placement': 'line',
        },
    },
    airspace_label_full: {
        id: 'airspace_label_full',
        type: 'symbol',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 10,
        maxzoom: 24,
        filter: ['all'],
        layout: {
            visibility: 'visible',
            'symbol-placement': 'line',
            'text-field': [
                'format',
                ['case', ['!=', ['get', 'icao_class'], 'unclassified'], ['upcase', ['get', 'icao_class']], ''],
                '\n',
                ['get', 'name'],
                '\n',
                [
                    'case',
                    [
                        'all',
                        ['==', ['get', 'upper_limit_reference_datum'], 'GND'],
                        ['==', ['get', 'upper_limit_value'], 0],
                    ],
                    'GND',
                    [
                        'case',
                        ['==', ['get', 'upper_limit_reference_datum'], 'STD'],
                        ['concat', 'FL', ['get', 'upper_limit_value']],
                        [
                            'concat',
                            ['get', 'upper_limit_value'],
                            ' ',
                            ['get', 'upper_limit_unit'],
                            ' ',
                            ['get', 'upper_limit_reference_datum'],
                        ],
                    ],
                ],
                '\n\u2500\u2500\u2500\u2500\n',
                [
                    'case',
                    [
                        'all',
                        ['==', ['get', 'lower_limit_reference_datum'], 'GND'],
                        ['==', ['get', 'lower_limit_value'], 0],
                    ],
                    'GND',
                    [
                        'case',
                        ['==', ['get', 'lower_limit_reference_datum'], 'STD'],
                        ['concat', 'FL', ['get', 'lower_limit_value']],
                        [
                            'concat',
                            ['get', 'lower_limit_value'],
                            ' ',
                            ['get', 'lower_limit_unit'],
                            ' ',
                            ['get', 'lower_limit_reference_datum'],
                        ],
                    ],
                ],
            ],
            'symbol-spacing': 600,
            'text-optional': true,
            'text-size': {
                stops: [
                    [10, 10],
                    [11, 12],
                ],
            },
            'text-allow-overlap': false,
            'text-ignore-placement': false,
            'symbol-avoid-edges': true,
            'text-anchor': 'center',
            'text-offset': [0, 3.5],
            'text-justify': 'center',
        },
        paint: {
            'text-halo-width': 20,
            'text-halo-color': 'rgb(211,226,255)',
            'text-color': 'rgb(21,23,94)',
            'text-halo-blur': 0,
            'icon-halo-width': 0,
        },
    },
    airspace_label_medium: {
        id: 'airspace_label_medium',
        type: 'symbol',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 8,
        maxzoom: 10,
        filter: ['all'],
        layout: {
            visibility: 'visible',
            'symbol-placement': 'line',
            'text-field': '{name_label}',
            'symbol-spacing': 550,
            'text-optional': true,
            'text-size': {
                stops: [
                    [9, 9],
                    [10, 12],
                ],
            },
            'text-allow-overlap': false,
            'text-ignore-placement': false,
            'symbol-avoid-edges': true,
            'text-anchor': 'center',
            'text-offset': [0, 1],
            'text-justify': 'center',
        },
        paint: {
            'text-halo-width': 20,
            'text-halo-color': 'rgb(211,226,255)',
            'text-color': 'rgb(21,23,94)',
            'text-halo-blur': 0,
            'icon-halo-width': 0,
        },
    },
    airspace_label_minimal: {
        id: 'airspace_label_minimal',
        type: 'symbol',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        minzoom: 7,
        maxzoom: 8,
        filter: ['all'],
        layout: {
            visibility: 'visible',
            'symbol-placement': 'line',
            'text-field': [
                'format',
                [
                    'case',
                    ['!=', ['get', 'icao_class'], 'unclassified'],
                    ['upcase', ['get', 'icao_class']],
                    ['upcase', ['get', 'type']],
                ],
            ],
            'symbol-spacing': 150,
            'text-optional': true,
            'text-size': {
                stops: [
                    [7, 6],
                    [8, 9],
                ],
            },
            'text-allow-overlap': false,
            'text-ignore-placement': false,
            'symbol-avoid-edges': true,
            'text-anchor': 'center',
            'text-offset': [0, 0.8],
            'text-justify': 'center',
        },
        paint: {
            'text-halo-width': 20,
            'text-halo-color': 'rgb(211,226,255)',
            'text-color': 'rgb(21,23,94)',
            'text-halo-blur': 0,
            'icon-halo-width': 0,
        },
    },
    reporting_point_clicktarget: {
        id: 'reporting_point_clicktarget',
        type: 'circle',
        source: 'openaip-data',
        'source-layer': 'reporting_points',
        minzoom: 10,
        maxzoom: 24,
        layout: {
            visibility: 'visible',
        },
        paint: {
            'circle-opacity': 0,
        },
    },
    reporting_point: {
        id: 'reporting_point',
        type: 'symbol',
        source: 'openaip-data',
        'source-layer': 'reporting_points',
        minzoom: 10,
        layout: {
            'icon-image': {
                stops: [[11, 'reporting_point_{type}-medium']],
            },
            'icon-pitch-alignment': 'map',
            'icon-allow-overlap': true,
            visibility: 'visible',
            'text-field': {
                stops: [[11, '{name}']],
            },
            'text-allow-overlap': true,
            'text-offset': {
                stops: [[11, [0, 2.5]]],
            },
            'text-size': 12,
            'text-font': ['DIN Offc Pro Regular', 'Arial Unicode MS Regular'],
            'icon-ignore-placement': false,
            'text-ignore-placement': true,
        },
        paint: {
            'text-halo-width': 2,
            'text-color': 'rgba(0, 0, 0, 1)',
            'text-halo-blur': 1,
            'text-halo-color': 'rgba(255, 255, 255, 1)',
        },
    },
    'point-features': {
        id: 'point-features',
        type: 'circle',
        source: 'point-features',
        paint: {
            'circle-radius': ['interpolate', ['linear'], ['zoom'], 0, 0, 7, 1, 10, 4, 22, 8],
            'circle-stroke-color': '#9d00b5',
            'circle-stroke-opacity': 1,
            'circle-stroke-width': 2,
            'circle-opacity': 0,
        },
    },
    'polygon-features': {
        id: 'polygon-features',
        type: 'fill',
        source: 'polygon-features',
        paint: {
            'fill-color': '#005c92',
            'fill-opacity': 0.3,
        },
    },
    'polygon-features-outline': {
        id: 'polygon-features-outline',
        type: 'line',
        source: 'polygon-features',
        layout: {},
        paint: {
            'line-color': '#005c92',
            'line-width': 3,
        },
    },
    'adhoc-polygon-features': {
        id: 'adhoc-polygon-features',
        type: 'fill',
        source: 'adhoc-polygon-features',
        paint: {
            'fill-color': '#923a00',
            'fill-opacity': 0.3,
        },
    },
    'adhoc-polygon-features-outline': {
        id: 'adhoc-polygon-features-outline',
        type: 'line',
        source: 'adhoc-polygon-features',
        layout: {},
        paint: {
            'line-color': '#923a00',
            'line-width': 3,
        },
    },
    'highlighted-airspaces': {
        id: 'highlighted-airspaces',
        type: 'fill',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        paint: {
            'fill-color': '#ff0099',
            'fill-opacity': 0.1,
        },
        // display none by adding a filter with an empty literal - use "in" which allows setting an empty array
        filter: ['all', ['in', ['get', 'source_id'], ['literal', []]]],
    },
    'highlighted-airports': {
        id: 'highlighted-airports',
        type: 'circle',
        source: 'openaip-data',
        'source-layer': 'airports',
        paint: highlightedPointPaint,
        // display none by adding a filter with an empty literal - use "in" which allows setting an empty array
        filter: ['all', ['in', ['get', 'source_id'], ['literal', []]]],
    },
    'highlighted-navaids': {
        id: 'highlighted-navaids',
        type: 'circle',
        source: 'openaip-data',
        'source-layer': 'navaids',
        paint: highlightedPointPaint,
        // display none by adding a filter with an empty literal - use "in" which allows setting an empty array
        filter: ['all', ['in', ['get', 'source_id'], ['literal', []]]],
    },
    'highlighted-hotspots': {
        id: 'highlighted-hotspots',
        type: 'circle',
        source: 'openaip-data',
        'source-layer': 'hotspots',
        paint: highlightedPointPaint,
        // display none by adding a filter with an empty literal - use "in" which allows setting an empty array
        filter: ['all', ['in', ['get', 'source_id'], ['literal', []]]],
    },
    'highlighted-reporting-points': {
        id: 'highlighted-reporting-points',
        type: 'circle',
        source: 'openaip-data',
        'source-layer': 'reporting_points',
        paint: highlightedPointPaint,
        // display none by adding a filter with an empty literal - use "in" which allows setting an empty array
        filter: ['all', ['in', ['get', 'source_id'], ['literal', []]]],
    },
    'highlighted-obstacles': {
        id: 'highlighted-obstacles',
        type: 'circle',
        source: 'openaip-data',
        'source-layer': 'obstacles',
        paint: highlightedPointPaint,
        // display none by adding a filter with an empty literal - use "in" which allows setting an empty array
        filter: ['all', ['in', ['get', 'source_id'], ['literal', []]]],
    },
    'highlighted-hang-glidings': {
        id: 'highlighted-hang-glidings',
        type: 'circle',
        source: 'openaip-data',
        'source-layer': 'hang_glidings',
        paint: highlightedPointPaint,
        // display none by adding a filter with an empty literal - use "in" which allows setting an empty array
        filter: ['all', ['in', ['get', 'source_id'], ['literal', []]]],
    },
    'highlighted-rc-airfields': {
        id: 'highlighted-rc-airfields',
        type: 'circle',
        source: 'openaip-data',
        'source-layer': 'rc_airfields',
        paint: highlightedPointPaint,
        // display none by adding a filter with an empty literal - use "in" which allows setting an empty array
        filter: ['all', ['in', ['get', 'source_id'], ['literal', []]]],
    },
    'selected-airspace': {
        id: 'selected-airspace',
        type: 'fill',
        source: 'openaip-data',
        'source-layer': 'airspaces',
        paint: {
            'fill-color': '#2973f8',
            'fill-opacity': 0.4,
        },
        // display none by adding a filter with an empty literal - use "in" which allows setting an empty array
        filter: ['all', ['in', ['get', 'source_id'], ['literal', []]]],
    },
    'selected-navaid': {
        id: 'selected-navaid',
        type: 'circle',
        source: 'openaip-data',
        'source-layer': 'navaids',
        paint: selectedPointPaint,
        // display none by adding a filter with an empty string
        filter: ['all', ['in', ['get', 'source_id'], ['literal', []]]],
    },
    'selected-airport': {
        id: 'selected-airport',
        type: 'circle',
        source: 'openaip-data',
        'source-layer': 'airports',
        paint: selectedPointPaint,
        // display none by adding a filter with an empty string
        filter: ['all', ['in', ['get', 'source_id'], ['literal', []]]],
    },
    'selected-reporting-point': {
        id: 'selected-reporting-point',
        type: 'circle',
        source: 'openaip-data',
        'source-layer': 'reporting_points',
        paint: selectedPointPaint,
        // display none by adding a filter with an empty string
        filter: ['all', ['in', ['get', 'source_id'], ['literal', []]]],
    },
    'selected-hotspot': {
        id: 'selected-hotspot',
        type: 'circle',
        source: 'openaip-data',
        'source-layer': 'hotspots',
        paint: selectedPointPaint,
        // display none by adding a filter with an empty string
        filter: ['all', ['in', ['get', 'source_id'], ['literal', []]]],
    },
    'selected-obstacle': {
        id: 'selected-obstacle',
        type: 'circle',
        source: 'openaip-data',
        'source-layer': 'obstacles',
        paint: selectedPointPaint,
        // display none by adding a filter with an empty string
        filter: ['all', ['in', ['get', 'source_id'], ['literal', []]]],
    },
    'selected-hang-gliding': {
        id: 'selected-hang-gliding',
        type: 'circle',
        source: 'openaip-data',
        'source-layer': 'hang_glidings',
        paint: selectedPointPaint,
        // display none by adding a filter with an empty string
        filter: ['all', ['in', ['get', 'source_id'], ['literal', []]]],
    },
    'selected-rc-airfield': {
        id: 'selected-rc-airfield',
        type: 'circle',
        source: 'openaip-data',
        'source-layer': 'rc_airfields',
        paint: selectedPointPaint,
        // display none by adding a filter with an empty string
        filter: ['all', ['in', ['get', 'source_id'], ['literal', []]]],
    },
};

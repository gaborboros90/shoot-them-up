require.config({
    baseUrl: '',
    paths: {
        'ApplicationInstance': 'ApplicationInstance',
        'pixi': './lib/pixi',
        'dust': './lib/dust'
    },
    shim: {
        'pixi': {'exports' : 'PIXI'}
    },
    deps: ['ApplicationInstance']
});

require([
        'pixi',
        'dust',
        './ApplicationInstance'
    ], function(PIXI, dust, ApplicationInstance) {
        console.log(new ApplicationInstance().init());
    }

);

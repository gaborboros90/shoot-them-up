require.config({
    baseUrl: '',
    paths: {
        'ApplicationInstance': 'ApplicationInstance',
        'pixi': './lib/pixi'
    },
    shim: {
        'pixi': {'exports' : 'PIXI'}
    },
    deps: ['ApplicationInstance']
});

require([
        'pixi',
        './ApplicationInstance'
    ], function(PIXI, ApplicationInstance) {
        console.log(new ApplicationInstance().init());
    }

);

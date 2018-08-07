const {exec} = require('child_process');

const action = process.argv[2];
let platform = process.argv[3];

// Validate action
if (['build', 'debug', 'run'].indexOf(action) === -1) {
    console.error('Invalid action')
    process.exit(1);
}

// Validation platform
if ([undefined, 'android', 'ios'].indexOf(platform) === -1) {
    console.error('Invalid platform')
    process.exit(1);
}

switch (action) {
    case 'build':
        console.info('Building NativeScript application...')
        break;

    case 'debug':
        console.info('Debugging NativeScript application...')
        break;

    case 'run':
        console.info('Running NativeScript application...')
        break;
}

if (action !== 'run' && !platform) {
    let tnsAndroidProcess = exec(`tns --path dist ${action} android`);
    let tnsiOSProcess = exec(`tns --path dist ${action} ios`);
    tnsAndroidProcess.stdout.pipe(process.stdout);
    tnsAndroidProcess.on('exit', function (code) {
        if (code !== 0) process.exit(code)
    });
    tnsiOSProcess.stdout.pipe(process.stdout);
    tnsiOSProcess.on('exit', function (code) {
        if (code !== 0) process.exit(code)
    });
}
else {
    let tnsProcess = exec(`tns --path dist ${action} ${platform || ''}`);
    tnsProcess.stdout.pipe(process.stdout);
    tnsProcess.on('exit', function (code) {
        if (code !== 0) process.exit(code)
    });
}

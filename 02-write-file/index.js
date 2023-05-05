const path = require('path');
const fs = require('fs');
const { stdin, stdout } = process;
const output = fs.createWriteStream(path.join(__dirname, 'destination.txt'));
stdout.write('Write something to write to the file. Press buttons Ctrl+C or write "exit" to exit the program.\n');
stdin.on('data', data => {
    const input = data.toString();
    if( input.trim() === 'exit'){
        handle();
    } else {
        output.write(data);
    }
});
function handle() {
    stdout.write('\nGoodby!\n');
    process.exit();
}
process.on('SIGINT', handle);
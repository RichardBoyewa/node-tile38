
// represents a GeoFence in Tile38
class Geofence {
    /**
     * detect: array of
     * @param opts
     */
    constructor(opts) {
        if (opts == undefined ) {
            throw new Error("Constructor for GeoFence requires an options object");
        }
        this.options = opts;
    }
    
    // returns an array of commands and options to be sent as part of the command string. 
    commands() {
        let cmd = [];
        if (this.options.detect) {

            this.assertArrayWithValues(this.options.detect, 'options.detect', ['inside','outside','enter','exit','cross']);
            cmd.push('DETECT');
            cmd.push(this.options.detect.join(','));
        }

        if (this.options.commands) {
            this.assertArrayWithValues(this.options.commands, 'options.commands', ['del','set','drop']);
            cmd.push('COMMANDS');
            cmd.push(this.options.commands.join(','));
        }
        return cmd;
    }

    assertArrayWithValues(arr, name, expectedValues) {
        if (!Array.isArray(arr)) {
            throw new Error(`${name} is not an array`);
        }
        // TODO: check that all values in arr exist in expectedValues

    }
}

module.exports = Geofence;
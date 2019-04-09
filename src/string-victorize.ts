import { padStart } from 'lodash';
export class StringVictorizer {
    static victorize(value: String,
        opts: VictorizationOptions =
            { repeatValue: ' ', numberOfRepeats: 2 }): String {
        let repeatValue = opts.repeatValue || ' ';
        repeatValue = padStart(repeatValue, opts.numberOfRepeats);

        return value.replace(/ /g, repeatValue);
    }
}

interface VictorizationOptions {
    repeatValue: String,
    numberOfRepeats: number,
    toUpper?: Boolean
}
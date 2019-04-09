export class StringVictorizer {
    static victorize(value: String): String {
        return value.replace(/ /g, '  ');
    }
}
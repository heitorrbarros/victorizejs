import { StringVictorizer } from '../src/string-victorize';

test('Deve vicquitorizar uma string', () => {
    const out = StringVictorizer.victorize('Essa string deve ser vicquitorizada');
    const victorized = 'Essa  string  deve  ser  vicquitorizada';
    expect(out).toBe(victorized);
});
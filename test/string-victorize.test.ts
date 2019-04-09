import { StringVictorizer } from '../src/string-victorize';

test('Deve vicquitorizar uma string', () => {
    const out = StringVictorizer.victorize('Essa string deve ser vicquitorizada');
    const victorized = 'Essa  string  deve  ser  vicquitorizada';
    expect(out).toBe(victorized);
});

test('Deve substituir espaços por caracter selecionado', () => {
    const out = StringVictorizer.victorize('Essa eh outra Papai', { repeatChar: '*', numberOfRepeats: 3 });
    const victorized = 'Essa***eh***Outra***Papai';
    expect(out).toBe(victorized);
});
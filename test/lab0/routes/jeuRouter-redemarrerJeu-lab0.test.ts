// Vous devez insérer les nouveaux tests ici
import { assert } from 'console';
import 'jest-extended';
import 'jest-extended';
import { readFileSync } from 'fs';
const path = require('path');

let content = ""
beforeAll(async() => {
  const filename = path.join('src', 'routes', 'redemarrerJeu.ts')
  content = readFileSync(filename, 'utf-8');
});

describe('redemarrerJeu.test.ts', () => {
  it("should implement test", async () => {
    throw new Error("Ce test n'a pas été défini")
  });
});

describe('redemarrerJeu.test.ts', () => {
  it("should contain \"get('/api/v1/jeu/redemarrerJeu')\"", () => {
    expect(content.includes("get('/api/v1/jeu/redemarrerJeu')")).toBeTruthy();
  });

  it("devrait contenir un test pour jouer qui retourne 404 (après redemarrerJeu()", () => {
    expect(content.includes(".status).toBe(200)")).toBeTruthy();
    expect(content.includes(".response).toBe(JSON)")).toBeTruthy();
  });
});



// Vous devez insérer les nouveaux tests ici
import { assert } from 'console';
import 'jest-extended';
import 'jest-extended';
import { readFileSync } from 'fs';
import { jeuRoutes } from "../../../src/routes/jeuRouter";
const path = require('path');
import supertest from 'supertest';
import app from '../../../src/app'

const nom1 = "Mo";
const nom2 = "Sam";
const request = supertest(app)

beforeAll(async() => {
  jeuRoutes.controleurJeu.demarrerJeu(nom1);
  jeuRoutes.controleurJeu.demarrerJeu(nom2);
});

describe('GET /api/v1/jeu/redemarrerJeu', () => {
  
  it("Verification de 2 joueurs", async () => {
    const joueursJSON = jeuRoutes.controleurJeu.joueurs;
    const joueursArray = JSON.parse(joueursJSON);
    expect(joueursArray.length).toBe(2);
  });

  it("validation du succes de loperation", async () => {
    const response = await request.get('/api/v1/jeu/redemarrerJeu');
    expect(response.status).toBe(200);
  });

  it("aucun joueur", async () => {
    const joueursJSON = jeuRoutes.controleurJeu.joueurs;
    const joueursArray = JSON.parse(joueursJSON);
    expect(joueursArray.length).toBe(0);
});

});
